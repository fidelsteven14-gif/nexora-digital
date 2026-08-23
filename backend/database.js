const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

// ---------------------------------------------------------
// NEXORA Wi-Fi BILLING SYSTEM
// Database Layer
// ---------------------------------------------------------

const dataDir = path.join(__dirname, "data");

if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "nexora-wifi.db");

const db = new Database(dbPath);

// Better SQLite performance and integrity
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// ---------------------------------------------------------
// DATABASE TABLES
// ---------------------------------------------------------

db.exec(`
    CREATE TABLE IF NOT EXISTS operators (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        full_name TEXT,
        phone TEXT,
        role TEXT NOT NULL DEFAULT 'operator',
        active INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS routers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        host TEXT NOT NULL,
        api_port INTEGER NOT NULL DEFAULT 8728,
        username TEXT NOT NULL,
        password_encrypted TEXT NOT NULL,
        location TEXT,
        description TEXT,
        active INTEGER NOT NULL DEFAULT 1,
        last_connected_at TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS packages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL DEFAULT 0,
        duration_minutes INTEGER NOT NULL,
        download_speed INTEGER,
        upload_speed INTEGER,
        speed_unit TEXT NOT NULL DEFAULT 'Mbps',
        description TEXT,
        active INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS vouchers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT NOT NULL UNIQUE,
        package_id INTEGER NOT NULL,
        router_id INTEGER,
        status TEXT NOT NULL DEFAULT 'unused',
        expires_at TEXT,
        used_at TEXT,
        used_by TEXT,
        generated_by INTEGER,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (package_id)
            REFERENCES packages(id)
            ON DELETE CASCADE,

        FOREIGN KEY (router_id)
            REFERENCES routers(id)
            ON DELETE SET NULL,

        FOREIGN KEY (generated_by)
            REFERENCES operators(id)
            ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        transaction_id TEXT UNIQUE,
        phone TEXT NOT NULL,
        amount REAL NOT NULL,
        package_id INTEGER,
        router_id INTEGER,
        status TEXT NOT NULL DEFAULT 'pending',
        payment_method TEXT NOT NULL DEFAULT 'mpesa',
        mpesa_receipt TEXT,
        checkout_request_id TEXT,
        merchant_request_id TEXT,
        failure_reason TEXT,
        paid_at TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (package_id)
            REFERENCES packages(id)
            ON DELETE SET NULL,

        FOREIGN KEY (router_id)
            REFERENCES routers(id)
            ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        phone TEXT,
        mac_address TEXT,
        ip_address TEXT,
        router_id INTEGER,
        package_id INTEGER,
        connection_type TEXT NOT NULL DEFAULT 'voucher',
        status TEXT NOT NULL DEFAULT 'offline',
        connected_at TEXT,
        expires_at TEXT,
        disconnected_at TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (router_id)
            REFERENCES routers(id)
            ON DELETE SET NULL,

        FOREIGN KEY (package_id)
            REFERENCES packages(id)
            ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_id INTEGER,
        voucher_id INTEGER,
        router_id INTEGER,
        username TEXT,
        mac_address TEXT,
        ip_address TEXT,
        started_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        expires_at TEXT,
        ended_at TEXT,
        status TEXT NOT NULL DEFAULT 'active',

        FOREIGN KEY (customer_id)
            REFERENCES customers(id)
            ON DELETE SET NULL,

        FOREIGN KEY (voucher_id)
            REFERENCES vouchers(id)
            ON DELETE SET NULL,

        FOREIGN KEY (router_id)
            REFERENCES routers(id)
            ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS router_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        router_id INTEGER,
        action TEXT NOT NULL,
        status TEXT NOT NULL,
        message TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

        FOREIGN KEY (router_id)
            REFERENCES routers(id)
            ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS system_settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        setting_key TEXT NOT NULL UNIQUE,
        setting_value TEXT,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`);

// ---------------------------------------------------------
// DEFAULT SYSTEM SETTINGS
// ---------------------------------------------------------

const defaultSettings = [
    ["system_name", "Nexora Wi-Fi"],
    ["currency", "KES"],
    ["voucher_length", "10"],
    ["default_router_port", "8728"],
    ["timezone", "Africa/Nairobi"]
];

const insertSetting = db.prepare(`
    INSERT OR IGNORE INTO system_settings
    (setting_key, setting_value)
    VALUES (?, ?)
`);

const insertDefaults = db.transaction(() => {
    for (const [key, value] of defaultSettings) {
        insertSetting.run(key, value);
    }
});

insertDefaults();

// ---------------------------------------------------------
// PACKAGE FUNCTIONS
// ---------------------------------------------------------

function createPackage({
    name,
    price,
    duration_minutes,
    download_speed = null,
    upload_speed = null,
    speed_unit = "Mbps",
    description = ""
}) {
    const stmt = db.prepare(`
        INSERT INTO packages (
            name,
            price,
            duration_minutes,
            download_speed,
            upload_speed,
            speed_unit,
            description
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    return stmt.run(
        name,
        price,
        duration_minutes,
        download_speed,
        upload_speed,
        speed_unit,
        description
    );
}

function getPackages(includeInactive = false) {
    if (includeInactive) {
        return db.prepare(`
            SELECT *
            FROM packages
            ORDER BY price ASC
        `).all();
    }

    return db.prepare(`
        SELECT *
        FROM packages
        WHERE active = 1
        ORDER BY price ASC
    `).all();
}

function getPackageById(id) {
    return db.prepare(`
        SELECT *
        FROM packages
        WHERE id = ?
    `).get(id);
}

function updatePackage(id, data) {
    const current = getPackageById(id);

    if (!current) {
        throw new Error("Package not found");
    }

    const updated = {
        name: data.name ?? current.name,
        price: data.price ?? current.price,
        duration_minutes:
            data.duration_minutes ?? current.duration_minutes,
        download_speed:
            data.download_speed ?? current.download_speed,
        upload_speed:
            data.upload_speed ?? current.upload_speed,
        speed_unit:
            data.speed_unit ?? current.speed_unit,
        description:
            data.description ?? current.description,
        active:
            data.active ?? current.active
    };

    return db.prepare(`
        UPDATE packages
        SET
            name = ?,
            price = ?,
            duration_minutes = ?,
            download_speed = ?,
            upload_speed = ?,
            speed_unit = ?,
            description = ?,
            active = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(
        updated.name,
        updated.price,
        updated.duration_minutes,
        updated.download_speed,
        updated.upload_speed,
        updated.speed_unit,
        updated.description,
        updated.active,
        id
    );
}

function deletePackage(id) {
    return db.prepare(`
        DELETE FROM packages
        WHERE id = ?
    `).run(id);
}

// ---------------------------------------------------------
// ROUTER FUNCTIONS
// ---------------------------------------------------------

function createRouter({
    name,
    host,
    api_port = 8728,
    username,
    password_encrypted,
    location = "",
    description = ""
}) {
    return db.prepare(`
        INSERT INTO routers (
            name,
            host,
            api_port,
            username,
            password_encrypted,
            location,
            description
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        name,
        host,
        api_port,
        username,
        password_encrypted,
        location,
        description
    );
}

function getRouters() {
    return db.prepare(`
        SELECT
            id,
            name,
            host,
            api_port,
            username,
            location,
            description,
            active,
            last_connected_at,
            created_at,
            updated_at
        FROM routers
        ORDER BY id DESC
    `).all();
}

function getRouterById(id) {
    return db.prepare(`
        SELECT *
        FROM routers
        WHERE id = ?
    `).get(id);
}

function updateRouter(id, data) {
    const router = getRouterById(id);

    if (!router) {
        throw new Error("Router not found");
    }

    return db.prepare(`
        UPDATE routers
        SET
            name = ?,
            host = ?,
            api_port = ?,
            username = ?,
            password_encrypted = ?,
            location = ?,
            description = ?,
            active = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(
        data.name ?? router.name,
        data.host ?? router.host,
        data.api_port ?? router.api_port,
        data.username ?? router.username,
        data.password_encrypted ?? router.password_encrypted,
        data.location ?? router.location,
        data.description ?? router.description,
        data.active ?? router.active,
        id
    );
}

function deleteRouter(id) {
    return db.prepare(`
        DELETE FROM routers
        WHERE id = ?
    `).run(id);
}

function updateRouterConnection(id) {
    return db.prepare(`
        UPDATE routers
        SET last_connected_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(id);
}

// ---------------------------------------------------------
// VOUCHER FUNCTIONS
// ---------------------------------------------------------

function voucherExists(code) {
    return !!db.prepare(`
        SELECT id
        FROM vouchers
        WHERE code = ?
    `).get(code);
}

function createVoucher({
    code,
    package_id,
    router_id = null,
    expires_at = null,
    generated_by = null
}) {
    return db.prepare(`
        INSERT INTO vouchers (
            code,
            package_id,
            router_id,
            expires_at,
            generated_by
        )
        VALUES (?, ?, ?, ?, ?)
    `).run(
        code,
        package_id,
        router_id,
        expires_at,
        generated_by
    );
}

function getVouchers(filters = {}) {
    let sql = `
        SELECT
            v.*,
            p.name AS package_name,
            p.price AS package_price,
            p.duration_minutes,
            r.name AS router_name
        FROM vouchers v
        LEFT JOIN packages p
            ON p.id = v.package_id
        LEFT JOIN routers r
            ON r.id = v.router_id
        WHERE 1 = 1
    `;

    const params = [];

    if (filters.status) {
        sql += ` AND v.status = ?`;
        params.push(filters.status);
    }

    if (filters.router_id) {
        sql += ` AND v.router_id = ?`;
        params.push(filters.router_id);
    }

    if (filters.package_id) {
        sql += ` AND v.package_id = ?`;
        params.push(filters.package_id);
    }

    sql += ` ORDER BY v.id DESC`;

    return db.prepare(sql).all(...params);
}

function getVoucherByCode(code) {
    return db.prepare(`
        SELECT
            v.*,
            p.name AS package_name,
            p.price AS package_price,
            p.duration_minutes,
            p.download_speed,
            p.upload_speed,
            p.speed_unit,
            r.name AS router_name,
            r.host AS router_host
        FROM vouchers v
        JOIN packages p
            ON p.id = v.package_id
        LEFT JOIN routers r
            ON r.id = v.router_id
        WHERE v.code = ?
    `).get(code);
}

function useVoucher(code, usedBy = null) {
    const voucher = getVoucherByCode(code);

    if (!voucher) {
        return {
            success: false,
            message: "Voucher does not exist"
        };
    }

    if (voucher.status !== "unused") {
        return {
            success: false,
            message: "Voucher has already been used"
        };
    }

    if (
        voucher.expires_at &&
        new Date(voucher.expires_at) <= new Date()
    ) {
        db.prepare(`
            UPDATE vouchers
            SET status = 'expired'
            WHERE id = ?
        `).run(voucher.id);

        return {
            success: false,
            message: "Voucher has expired"
        };
    }

    db.prepare(`
        UPDATE vouchers
        SET
            status = 'used',
            used_at = CURRENT_TIMESTAMP,
            used_by = ?
        WHERE id = ?
    `).run(usedBy, voucher.id);

    return {
        success: true,
        voucher: getVoucherByCode(code)
    };
}

function deleteVoucher(id) {
    return db.prepare(`
        DELETE FROM vouchers
        WHERE id = ?
    `).run(id);
}

// ---------------------------------------------------------
// PAYMENT FUNCTIONS
// ---------------------------------------------------------

function createPayment({
    transaction_id = null,
    phone,
    amount,
    package_id = null,
    router_id = null,
    checkout_request_id = null,
    merchant_request_id = null
}) {
    return db.prepare(`
        INSERT INTO payments (
            transaction_id,
            phone,
            amount,
            package_id,
            router_id,
            checkout_request_id,
            merchant_request_id
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        transaction_id,
        phone,
        amount,
        package_id,
        router_id,
        checkout_request_id,
        merchant_request_id
    );
}

function getPaymentById(id) {
    return db.prepare(`
        SELECT
            p.*,
            pkg.name AS package_name,
            r.name AS router_name
        FROM payments p
        LEFT JOIN packages pkg
            ON pkg.id = p.package_id
        LEFT JOIN routers r
            ON r.id = p.router_id
        WHERE p.id = ?
    `).get(id);
}

function getPaymentByCheckoutRequestId(id) {
    return db.prepare(`
        SELECT *
        FROM payments
        WHERE checkout_request_id = ?
    `).get(id);
}

function updatePayment(id, data) {
    const payment = db.prepare(`
        SELECT *
        FROM payments
        WHERE id = ?
    `).get(id);

    if (!payment) {
        throw new Error("Payment not found");
    }

    return db.prepare(`
        UPDATE payments
        SET
            transaction_id = ?,
            status = ?,
            mpesa_receipt = ?,
            failure_reason = ?,
            paid_at = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(
        data.transaction_id ?? payment.transaction_id,
        data.status ?? payment.status,
        data.mpesa_receipt ?? payment.mpesa_receipt,
        data.failure_reason ?? payment.failure_reason,
        data.paid_at ?? payment.paid_at,
        id
    );
}

// ---------------------------------------------------------
// CUSTOMER FUNCTIONS
// ---------------------------------------------------------

function createCustomer({
    phone = null,
    mac_address = null,
    ip_address = null,
    router_id = null,
    package_id = null,
    connection_type = "voucher",
    expires_at = null
}) {
    return db.prepare(`
        INSERT INTO customers (
            phone,
            mac_address,
            ip_address,
            router_id,
            package_id,
            connection_type,
            expires_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        phone,
        mac_address,
        ip_address,
        router_id,
        package_id,
        connection_type,
        expires_at
    );
}

function getCustomerById(id) {
    return db.prepare(`
        SELECT
            c.*,
            p.name AS package_name,
            p.duration_minutes,
            r.name AS router_name
        FROM customers c
        LEFT JOIN packages p
            ON p.id = c.package_id
        LEFT JOIN routers r
            ON r.id = c.router_id
        WHERE c.id = ?
    `).get(id);
}

function updateCustomerStatus(id, status) {
    return db.prepare(`
        UPDATE customers
        SET
            status = ?,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(status, id);
}

// ---------------------------------------------------------
// SESSION FUNCTIONS
// ---------------------------------------------------------

function createSession({
    customer_id = null,
    voucher_id = null,
    router_id = null,
    username = null,
    mac_address = null,
    ip_address = null,
    expires_at = null
}) {
    return db.prepare(`
        INSERT INTO sessions (
            customer_id,
            voucher_id,
            router_id,
            username,
            mac_address,
            ip_address,
            expires_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
        customer_id,
        voucher_id,
        router_id,
        username,
        mac_address,
        ip_address,
        expires_at
    );
}

function getActiveSessions() {
    return db.prepare(`
        SELECT
            s.*,
            r.name AS router_name,
            c.phone,
            p.name AS package_name
        FROM sessions s
        LEFT JOIN routers r
            ON r.id = s.router_id
        LEFT JOIN customers c
            ON c.id = s.customer_id
        LEFT JOIN vouchers v
            ON v.id = s.voucher_id
        LEFT JOIN packages p
            ON p.id = v.package_id
        WHERE s.status = 'active'
        ORDER BY s.started_at DESC
    `).all();
}

function endSession(id) {
    return db.prepare(`
        UPDATE sessions
        SET
            status = 'ended',
            ended_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `).run(id);
}

// ---------------------------------------------------------
// ROUTER LOGGING
// ---------------------------------------------------------

function addRouterLog({
    router_id,
    action,
    status,
    message = ""
}) {
    return db.prepare(`
        INSERT INTO router_logs (
            router_id,
            action,
            status,
            message
        )
        VALUES (?, ?, ?, ?)
    `).run(
        router_id,
        action,
        status,
        message
    );
}

function getRouterLogs(router_id, limit = 100) {
    return db.prepare(`
        SELECT *
        FROM router_logs
        WHERE router_id = ?
        ORDER BY id DESC
        LIMIT ?
    `).all(router_id, limit);
}

// ---------------------------------------------------------
// SYSTEM SETTINGS
// ---------------------------------------------------------

function getSetting(key) {
    const row = db.prepare(`
        SELECT setting_value
        FROM system_settings
        WHERE setting_key = ?
    `).get(key);

    return row ? row.setting_value : null;
}

function setSetting(key, value) {
    return db.prepare(`
        INSERT INTO system_settings (
            setting_key,
            setting_value,
            updated_at
        )
        VALUES (?, ?, CURRENT_TIMESTAMP)
        ON CONFLICT(setting_key)
        DO UPDATE SET
            setting_value = excluded.setting_value,
            updated_at = CURRENT_TIMESTAMP
    `).run(key, value);
}

function getAllSettings() {
    const rows = db.prepare(`
        SELECT
            setting_key,
            setting_value
        FROM system_settings
        ORDER BY setting_key
    `).all();

    return Object.fromEntries(
        rows.map(row => [
            row.setting_key,
            row.setting_value
        ])
    );
}

// ---------------------------------------------------------
// DASHBOARD STATISTICS
// ---------------------------------------------------------

function getDashboardStats() {
    const packages = db.prepare(`
        SELECT COUNT(*) AS count
        FROM packages
        WHERE active = 1
    `).get().count;

    const routers = db.prepare(`
        SELECT COUNT(*) AS count
        FROM routers
        WHERE active = 1
    `).get().count;

    const totalVouchers = db.prepare(`
        SELECT COUNT(*) AS count
        FROM vouchers
    `).get().count;

    const unusedVouchers = db.prepare(`
        SELECT COUNT(*) AS count
        FROM vouchers
        WHERE status = 'unused'
    `).get().count;

    const usedVouchers = db.prepare(`
        SELECT COUNT(*) AS count
        FROM vouchers
        WHERE status = 'used'
    `).get().count;

    const activeSessions = db.prepare(`
        SELECT COUNT(*) AS count
        FROM sessions
        WHERE status = 'active'
    `).get().count;

    const successfulPayments = db.prepare(`
        SELECT COUNT(*) AS count
        FROM payments
        WHERE status = 'success'
    `).get().count;

    const revenue = db.prepare(`
        SELECT COALESCE(SUM(amount), 0) AS total
        FROM payments
        WHERE status = 'success'
    `).get().total;

    return {
        packages,
        routers,
        vouchers: {
            total: totalVouchers,
            unused: unusedVouchers,
            used: usedVouchers
        },
        activeSessions,
        successfulPayments,
        revenue
    };
}

// ---------------------------------------------------------
// DATABASE HEALTH
// ---------------------------------------------------------

function healthCheck() {
    try {
        db.prepare("SELECT 1").get();

        return {
            status: "ok",
            database: "connected",
            path: dbPath
        };
    } catch (error) {
        return {
            status: "error",
            database: "disconnected",
            message: error.message
        };
    }
}

// ---------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------

module.exports = {
    db,

    // Packages
    createPackage,
    getPackages,
    getPackageById,
    updatePackage,
    deletePackage,

    // Routers
    createRouter,
    getRouters,
    getRouterById,
    updateRouter,
    deleteRouter,
    updateRouterConnection,

    // Vouchers
    voucherExists,
    createVoucher,
    getVouchers,
    getVoucherByCode,
    useVoucher,
    deleteVoucher,

    // Payments
    createPayment,
    getPaymentById,
    getPaymentByCheckoutRequestId,
    updatePayment,

    // Customers
    createCustomer,
    getCustomerById,
    updateCustomerStatus,

    // Sessions
    createSession,
    getActiveSessions,
    endSession,

    // Router logs
    addRouterLog,
    getRouterLogs,

    // Settings
    getSetting,
    setSetting,
    getAllSettings,

    // Dashboard
    getDashboardStats,

    // Health
    healthCheck
};
