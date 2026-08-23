const fs = require("fs");
const path = require("path");

// ============================================================
// NEZORA WI-FI DATABASE
// ============================================================
// This is the initial persistent database layer.
// It stores application data on the server so data does not
// disappear whenever server.js restarts.
//
// Later, this layer can be migrated to PostgreSQL/MySQL without
// changing the public API structure.
// ============================================================

const DATA_DIRECTORY = path.join(__dirname, "data");
const DATABASE_FILE = path.join(DATA_DIRECTORY, "nezora-wifi.json");

// ------------------------------------------------------------
// CREATE DATABASE DIRECTORY
// ------------------------------------------------------------

if (!fs.existsSync(DATA_DIRECTORY)) {
    fs.mkdirSync(DATA_DIRECTORY, {
        recursive: true
    });
}

// ------------------------------------------------------------
// DEFAULT DATABASE STRUCTURE
// ------------------------------------------------------------

const DEFAULT_DATABASE = {
    version: 1,

    operators: [],

    packages: [],

    vouchers: [],

    payments: [],

    customers: [],

    routers: [],

    sessions: [],

    settings: {
        systemName: "Nezora Wi-Fi",
        currency: "KES",
        country: "Kenya",
        timezone: "Africa/Nairobi"
    },

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString()
};

// ------------------------------------------------------------
// LOAD DATABASE
// ------------------------------------------------------------

function loadDatabase() {
    try {
        if (!fs.existsSync(DATABASE_FILE)) {
            saveDatabase(DEFAULT_DATABASE);

            return JSON.parse(
                JSON.stringify(DEFAULT_DATABASE)
            );
        }

        const file = fs.readFileSync(
            DATABASE_FILE,
            "utf8"
        );

        if (!file.trim()) {
            saveDatabase(DEFAULT_DATABASE);

            return JSON.parse(
                JSON.stringify(DEFAULT_DATABASE)
            );
        }

        const database = JSON.parse(file);

        return normalizeDatabase(database);

    } catch (error) {
        console.error(
            "Database loading error:",
            error
        );

        throw new Error(
            "Unable to load Nezora Wi-Fi database."
        );
    }
}

// ------------------------------------------------------------
// NORMALIZE DATABASE
// ------------------------------------------------------------

function normalizeDatabase(database) {
    const normalized = {
        ...DEFAULT_DATABASE,
        ...database
    };

    normalized.operators =
        Array.isArray(database.operators)
            ? database.operators
            : [];

    normalized.packages =
        Array.isArray(database.packages)
            ? database.packages
            : [];

    normalized.vouchers =
        Array.isArray(database.vouchers)
            ? database.vouchers
            : [];

    normalized.payments =
        Array.isArray(database.payments)
            ? database.payments
            : [];

    normalized.customers =
        Array.isArray(database.customers)
            ? database.customers
            : [];

    normalized.routers =
        Array.isArray(database.routers)
            ? database.routers
            : [];

    normalized.sessions =
        Array.isArray(database.sessions)
            ? database.sessions
            : [];

    normalized.settings = {
        ...DEFAULT_DATABASE.settings,
        ...(database.settings || {})
    };

    return normalized;
}

// ------------------------------------------------------------
// SAVE DATABASE
// ------------------------------------------------------------

function saveDatabase(database) {
    try {
        database.updatedAt =
            new Date().toISOString();

        const temporaryFile =
            `${DATABASE_FILE}.tmp`;

        fs.writeFileSync(
            temporaryFile,
            JSON.stringify(database, null, 2),
            "utf8"
        );

        fs.renameSync(
            temporaryFile,
            DATABASE_FILE
        );

    } catch (error) {
        console.error(
            "Database saving error:",
            error
        );

        throw new Error(
            "Unable to save Nezora Wi-Fi database."
        );
    }
}

// ------------------------------------------------------------
// DATABASE INSTANCE
// ------------------------------------------------------------

let database = loadDatabase();

// ------------------------------------------------------------
// GET DATABASE
// ------------------------------------------------------------

function getDatabase() {
    return database;
}

// ------------------------------------------------------------
// RELOAD DATABASE
// ------------------------------------------------------------

function reloadDatabase() {
    database = loadDatabase();

    return database;
}

// ------------------------------------------------------------
// UPDATE DATABASE
// ------------------------------------------------------------

function updateDatabase(callback) {
    if (typeof callback !== "function") {
        throw new TypeError(
            "updateDatabase requires a function."
        );
    }

    callback(database);

    saveDatabase(database);

    return database;
}

// ------------------------------------------------------------
// RESET DATABASE
// ------------------------------------------------------------

function resetDatabase() {
    database = JSON.parse(
        JSON.stringify(DEFAULT_DATABASE)
    );

    saveDatabase(database);

    return database;
}

// ------------------------------------------------------------
// GENERIC COLLECTION HELPERS
// ------------------------------------------------------------

function getCollection(name) {
    if (!Array.isArray(database[name])) {
        throw new Error(
            `Unknown database collection: ${name}`
        );
    }

    return database[name];
}

function findById(collectionName, id) {
    const collection =
        getCollection(collectionName);

    return collection.find(
        item => item.id === id
    );
}

function insert(collectionName, item) {
    const collection =
        getCollection(collectionName);

    collection.push(item);

    saveDatabase(database);

    return item;
}

function updateById(
    collectionName,
    id,
    changes
) {
    const collection =
        getCollection(collectionName);

    const index =
        collection.findIndex(
            item => item.id === id
        );

    if (index === -1) {
        return null;
    }

    collection[index] = {
        ...collection[index],
        ...changes,
        updatedAt: new Date().toISOString()
    };

    saveDatabase(database);

    return collection[index];
}

function deleteById(
    collectionName,
    id
) {
    const collection =
        getCollection(collectionName);

    const index =
        collection.findIndex(
            item => item.id === id
        );

    if (index === -1) {
        return false;
    }

    collection.splice(index, 1);

    saveDatabase(database);

    return true;
}

// ------------------------------------------------------------
// DATABASE STATUS
// ------------------------------------------------------------

function getDatabaseStatus() {
    return {
        databaseFile: DATABASE_FILE,

        exists: fs.existsSync(
            DATABASE_FILE
        ),

        version: database.version,

        counts: {
            operators:
                database.operators.length,

            packages:
                database.packages.length,

            vouchers:
                database.vouchers.length,

            payments:
                database.payments.length,

            customers:
                database.customers.length,

            routers:
                database.routers.length,

            sessions:
                database.sessions.length
        },

        updatedAt:
            database.updatedAt
    };
}

// ------------------------------------------------------------
// EXPORTS
// ------------------------------------------------------------

module.exports = {
    getDatabase,
    reloadDatabase,
    updateDatabase,
    saveDatabase,
    resetDatabase,

    getCollection,
    findById,
    insert,
    updateById,
    deleteById,

    getDatabaseStatus,

    DATABASE_FILE
};
