const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const dataDir = path.join(__dirname, "data");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "nexora-wifi.db");

const db = new Database(dbPath);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS operators (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    role TEXT NOT NULL DEFAULT 'operator',
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL CHECK(price >= 0),
    duration_minutes INTEGER NOT NULL CHECK(duration_minutes > 0),
    download_speed_kbps INTEGER,
    upload_speed_kbps INTEGER,
    data_limit_mb INTEGER,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS routers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    host TEXT NOT NULL,
    port INTEGER NOT NULL DEFAULT 8728,
    username TEXT NOT NULL,
    password_encrypted TEXT NOT NULL,
    hotspot_name TEXT,
    nas_identifier TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    last_connected_at TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS vouchers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    package_id INTEGER NOT NULL,
    router_id INTEGER,
    status TEXT NOT NULL DEFAULT 'unused'
      CHECK(status IN ('unused','used','expired','disabled')),
    expires_at TEXT,
    used_at TEXT,
    used_by TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(package_id)
      REFERENCES packages(id)
      ON DELETE RESTRICT,

    FOREIGN KEY(router_id)
      REFERENCES routers(id)
      ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    phone_number TEXT UNIQUE,
    mac_address TEXT,
    ip_address TEXT,
    username TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS payments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    package_id INTEGER NOT NULL,
    phone_number TEXT NOT NULL,
    amount REAL NOT NULL CHECK(amount >= 0),
    provider TEXT NOT NULL DEFAULT 'mpesa',
    checkout_request_id TEXT UNIQUE,
    merchant_request_id TEXT,
    transaction_reference TEXT UNIQUE,
    status TEXT NOT NULL DEFAULT 'pending'
      CHECK(status IN ('pending','success','failed','cancelled')),
    failure_reason TEXT,
    paid_at TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(customer_id)
      REFERENCES customers(id)
      ON DELETE SET NULL,

    FOREIGN KEY(package_id)
      REFERENCES packages(id)
      ON DELETE RESTRICT
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    voucher_id INTEGER,
    package_id INTEGER NOT NULL,
    router_id INTEGER,
    mac_address TEXT,
    ip_address TEXT,
    started_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expires_at TEXT NOT NULL,
    ended_at TEXT,
    status TEXT NOT NULL DEFAULT 'active'
      CHECK(status IN ('active','expired','terminated')),

    FOREIGN KEY(customer_id)
      REFERENCES customers(id)
      ON DELETE SET NULL,

    FOREIGN KEY(voucher_id)
      REFERENCES vouchers(id)
      ON DELETE SET NULL,

    FOREIGN KEY(package_id)
      REFERENCES packages(id)
      ON DELETE RESTRICT,

    FOREIGN KEY(router_id)
      REFERENCES routers(id)
      ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS audit_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    operator_id INTEGER,
    action TEXT NOT NULL,
    entity_type TEXT,
    entity_id INTEGER,
    details TEXT,
    ip_address TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(operator_id)
      REFERENCES operators(id)
      ON DELETE SET NULL
  );

  CREATE INDEX IF NOT EXISTS idx_vouchers_status
    ON vouchers(status);

  CREATE INDEX IF NOT EXISTS idx_vouchers_package
    ON vouchers(package_id);

  CREATE INDEX IF NOT EXISTS idx_payments_status
    ON payments(status);

  CREATE INDEX IF NOT EXISTS idx_payments_phone
    ON payments(phone_number);

  CREATE INDEX IF NOT EXISTS idx_sessions_status
    ON sessions(status);

  CREATE INDEX IF NOT EXISTS idx_sessions_expires
    ON sessions(expires_at);

  CREATE INDEX IF NOT EXISTS idx_audit_operator
    ON audit_logs(operator_id);
`);

console.log("Nexora Wi-Fi database initialized.");
console.log(`Database: ${dbPath}`);

module.exports = db;
