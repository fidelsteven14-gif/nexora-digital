"use strict";

/*
============================================================
NEZORA WI-FI BILLING SYSTEM
Backend API Server
============================================================

This server provides the foundation for:

- Operator management
- Internet package management
- Voucher management
- Customer management
- Payment records
- Router records
- Customer sessions
- System settings
- Database persistence

IMPORTANT:
M-Pesa and MikroTik integration will be connected in later
modules. We are deliberately building the system in layers
so that every component can be tested before the next one
is added.
============================================================
*/

const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const {
    getDatabase,
    updateDatabase,
    getCollection,
    findById,
    insert,
    updateById,
    deleteById,
    getDatabaseStatus
} = require("./database");

// ============================================================
// APPLICATION
// ============================================================

const app = express();

const PORT = process.env.PORT || 3000;

const database = getDatabase();

// ============================================================
// MIDDLEWARE
// ============================================================

app.use(
    cors({
        origin: true,
        credentials: true
    })
);

app.use(
    express.json({
        limit: "2mb"
    })
);

app.use(
    express.urlencoded({
        extended: true
    })
);

// ============================================================
// REQUEST LOGGING
// ============================================================

app.use((req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const duration =
            Date.now() - start;

        console.log(
            `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`
        );
    });

    next();
});

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function generateId(prefix) {
    return (
        prefix +
        "_" +
        crypto.randomBytes(12).toString("hex")
    );
}

function now() {
    return new Date().toISOString();
}

function sendSuccess(
    res,
    data = {},
    status = 200
) {
    return res.status(status).json({
        success: true,
        data
    });
}

function sendError(
    res,
    message,
    status = 400,
    details = null
) {
    return res.status(status).json({
        success: false,
        error: message,
        ...(details
            ? { details }
            : {})
    });
}

function requireFields(
    body,
    fields
) {
    const missing = [];

    for (const field of fields) {
        if (
            body[field] === undefined ||
            body[field] === null ||
            String(body[field]).trim() === ""
        ) {
            missing.push(field);
        }
    }

    return missing;
}

function normalizeText(value) {
    return String(
        value ?? ""
    ).trim();
}

function normalizeNumber(value) {
    const number = Number(value);

    return Number.isFinite(number)
        ? number
        : null;
}

// ============================================================
// HEALTH CHECK
// ============================================================

app.get(
    "/",
    (req, res) => {
        sendSuccess(res, {
            system: "Nezora Wi-Fi",
            service: "Billing System API",
            status: "online",
            version: "1.0.0",
            timestamp: now()
        });
    }
);

app.get(
    "/api/health",
    (req, res) => {
        sendSuccess(res, {
            status: "healthy",
            system: "Nezora Wi-Fi",
            database: getDatabaseStatus(),
            timestamp: now()
        });
    }
);

// ============================================================
// SYSTEM INFORMATION
// ============================================================

app.get(
    "/api/system",
    (req, res) => {
        const db = getDatabase();

        sendSuccess(res, {
            name:
                db.settings.systemName,

            currency:
                db.settings.currency,

            country:
                db.settings.country,

            timezone:
                db.settings.timezone,

            version:
                db.version
        });
    }
);

// ============================================================
// OPERATOR MANAGEMENT
// ============================================================

/*
Create operator

POST /api/operators

Example body:

{
    "name": "Network Operator",
    "username": "operator",
    "phone": "0712345678"
}
*/

app.post(
    "/api/operators",
    (req, res) => {
        try {
            const missing =
                requireFields(
                    req.body,
                    [
                        "name",
                        "username"
                    ]
                );

            if (missing.length) {
                return sendError(
                    res,
                    "Required fields are missing.",
                    400,
                    { missing }
                );
            }

            const username =
                normalizeText(
                    req.body.username
                ).toLowerCase();

            const operators =
                getCollection(
                    "operators"
                );

            const existing =
                operators.find(
                    operator =>
                        operator.username ===
                        username
                );

            if (existing) {
                return sendError(
                    res,
                    "An operator with this username already exists.",
                    409
                );
            }

            const operator = {
                id: generateId("operator"),

                name:
                    normalizeText(
                        req.body.name
                    ),

                username,

                phone:
                    normalizeText(
                        req.body.phone
                    ),

                role:
                    "operator",

                active: true,

                createdAt: now(),

                updatedAt: now()
            };

            insert(
                "operators",
                operator
            );

            return sendSuccess(
                res,
                operator,
                201
            );

        } catch (error) {
            console.error(error);

            return sendError(
                res,
                "Unable to create operator.",
                500
            );
        }
    }
);

// ------------------------------------------------------------
// LIST OPERATORS
// ------------------------------------------------------------

app.get(
    "/api/operators",
    (req, res) => {
        const operators =
            getCollection(
                "operators"
            );

        sendSuccess(res, operators);
    }
);

// ------------------------------------------------------------
// GET OPERATOR
// ------------------------------------------------------------

app.get(
    "/api/operators/:id",
    (req, res) => {
        const operator =
            findById(
                "operators",
                req.params.id
            );

        if (!operator) {
            return sendError(
                res,
                "Operator not found.",
                404
            );
        }

        sendSuccess(res, operator);
    }
);

// ------------------------------------------------------------
// UPDATE OPERATOR
// ------------------------------------------------------------

app.patch(
    "/api/operators/:id",
    (req, res) => {
        const changes = {};

        if (
            req.body.name !==
            undefined
        ) {
            changes.name =
                normalizeText(
                    req.body.name
                );
        }

        if (
            req.body.phone !==
            undefined
        ) {
            changes.phone =
                normalizeText(
                    req.body.phone
                );
        }

        if (
            req.body.active !==
            undefined
        ) {
            changes.active =
                Boolean(
                    req.body.active
                );
        }

        const operator =
            updateById(
                "operators",
                req.params.id,
                changes
            );

        if (!operator) {
            return sendError(
                res,
                "Operator not found.",
                404
            );
        }

        sendSuccess(res, operator);
    }
);

// ============================================================
// PACKAGE MANAGEMENT
// ============================================================

/*
Package example:

{
    "name": "Daily 5 Mbps",
    "price": 50,
    "durationMinutes": 1440,
    "speedDownload": "5M",
    "speedUpload": "5M"
}
*/

// ------------------------------------------------------------
// CREATE PACKAGE
// ------------------------------------------------------------

app.post(
    "/api/packages",
    (req, res) => {
        const missing =
            requireFields(
                req.body,
                [
                    "name",
                    "price",
                    "durationMinutes"
                ]
            );

        if (missing.length) {
            return sendError(
                res,
                "Required package fields are missing.",
                400,
                { missing }
            );
        }

        const price =
            normalizeNumber(
                req.body.price
            );

        const durationMinutes =
            normalizeNumber(
                req.body.durationMinutes
            );

        if (
            price === null ||
            price < 0
        ) {
            return sendError(
                res,
                "Package price is invalid."
            );
        }

        if (
            durationMinutes === null ||
            durationMinutes <= 0
        ) {
            return sendError(
                res,
                "Package duration is invalid."
            );
        }

        const packageRecord = {
            id:
                generateId(
                    "package"
                ),

            name:
                normalizeText(
                    req.body.name
                ),

            description:
                normalizeText(
                    req.body.description
                ),

            price,

            currency:
                getDatabase()
                    .settings.currency,

            durationMinutes,

            speedDownload:
                normalizeText(
                    req.body.speedDownload
                ),

            speedUpload:
                normalizeText(
                    req.body.speedUpload
                ),

            active:
                req.body.active !==
                false,

            createdAt: now(),

            updatedAt: now()
        };

        insert(
            "packages",
            packageRecord
        );

        sendSuccess(
            res,
            packageRecord,
            201
        );
    }
);

// ------------------------------------------------------------
// LIST PACKAGES
// ------------------------------------------------------------

app.get(
    "/api/packages",
    (req, res) => {
        let packages =
            getCollection(
                "packages"
            );

        if (
            req.query.active ===
            "true"
        ) {
            packages =
                packages.filter(
                    item =>
                        item.active ===
                        true
                );
        }

        sendSuccess(
            res,
            packages
        );
    }
);

// ------------------------------------------------------------
// GET PACKAGE
// ------------------------------------------------------------

app.get(
    "/api/packages/:id",
    (req, res) => {
        const packageRecord =
            findById(
                "packages",
                req.params.id
            );

        if (!packageRecord) {
            return sendError(
                res,
                "Package not found.",
                404
            );
        }

        sendSuccess(
            res,
            packageRecord
        );
    }
);

// ------------------------------------------------------------
// UPDATE PACKAGE
// ------------------------------------------------------------

app.patch(
    "/api/packages/:id",
    (req, res) => {
        const changes = {};

        if (
            req.body.name !==
            undefined
        ) {
            changes.name =
                normalizeText(
                    req.body.name
                );
        }

        if (
            req.body.description !==
            undefined
        ) {
            changes.description =
                normalizeText(
                    req.body.description
                );
        }

        if (
            req.body.price !==
            undefined
        ) {
            const price =
                normalizeNumber(
                    req.body.price
                );

            if (
                price === null ||
                price < 0
            ) {
                return sendError(
                    res,
                    "Invalid package price."
                );
            }

            changes.price = price;
        }

        if (
            req.body.durationMinutes !==
            undefined
        ) {
            const duration =
                normalizeNumber(
                    req.body.durationMinutes
                );

            if (
                duration === null ||
                duration <= 0
            ) {
                return sendError(
                    res,
                    "Invalid package duration."
                );
            }

            changes.durationMinutes =
                duration;
        }

        if (
            req.body.speedDownload !==
            undefined
        ) {
            changes.speedDownload =
                normalizeText(
                    req.body.speedDownload
                );
        }

        if (
            req.body.speedUpload !==
            undefined
        ) {
            changes.speedUpload =
                normalizeText(
                    req.body.speedUpload
                );
        }

        if (
            req.body.active !==
            undefined
        ) {
            changes.active =
                Boolean(
                    req.body.active
                );
        }

        const updated =
            updateById(
                "packages",
                req.params.id,
                changes
            );

        if (!updated) {
            return sendError(
                res,
                "Package not found.",
                404
            );
        }

        sendSuccess(
            res,
            updated
        );
    }
);

// ------------------------------------------------------------
// DELETE PACKAGE
// ------------------------------------------------------------

app.delete(
    "/api/packages/:id",
    (req, res) => {
        const removed =
            deleteById(
                "packages",
                req.params.id
            );

        if (!removed) {
            return sendError(
                res,
                "Package not found.",
                404
            );
        }

        sendSuccess(
            res,
            {
                message:
                    "Package deleted successfully."
            }
        );
    }
);

// ============================================================
// VOUCHER MANAGEMENT
// ============================================================

function generateVoucherCode() {
    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 10; i++) {
        code +=
            characters[
                crypto.randomInt(
                    0,
                    characters.length
                )
            ];
    }

    return code;
}

// ------------------------------------------------------------
// CREATE SINGLE VOUCHER
// ------------------------------------------------------------

app.post(
    "/api/vouchers",
    (req, res) => {
        const missing =
            requireFields(
                req.body,
                [
                    "packageId"
                ]
            );

        if (missing.length) {
            return sendError(
                res,
                "Package ID is required.",
                400,
                { missing }
            );
        }

        const packageRecord =
            findById(
                "packages",
                req.body.packageId
            );

        if (!packageRecord) {
            return sendError(
                res,
                "The selected package does not exist.",
                404
            );
        }

        let code;

        do {
            code =
                generateVoucherCode();
        } while (
            getCollection(
                "vouchers"
            ).some(
                voucher =>
                    voucher.code ===
                    code
            )
        );

        const voucher = {
            id:
                generateId(
                    "voucher"
                ),

            code,

            packageId:
                packageRecord.id,

            packageName:
                packageRecord.name,

            status:
                "unused",

            price:
                packageRecord.price,

            durationMinutes:
                packageRecord.durationMinutes,

            speedDownload:
                packageRecord.speedDownload,

            speedUpload:
                packageRecord.speedUpload,

            createdAt: now(),

            activatedAt: null,

            expiresAt: null,

            usedBy: null,

            deleted: false
        };

        insert(
            "vouchers",
            voucher
        );

        sendSuccess(
            res,
            voucher,
            201
        );
    }
);

// ------------------------------------------------------------
// GENERATE MULTIPLE VOUCHERS
// ------------------------------------------------------------

app.post(
    "/api/vouchers/bulk",
    (req, res) => {
        const packageId =
            req.body.packageId;

        const requestedCount =
            normalizeNumber(
                req.body.count
            );

        if (!packageId) {
            return sendError(
                res,
                "Package ID is required."
            );
        }

        if (
            requestedCount === null ||
            requestedCount < 1 ||
            requestedCount > 10000 ||
            !Number.isInteger(
                requestedCount
            )
        ) {
            return sendError(
                res,
                "Voucher count must be a whole number between 1 and 10000."
            );
        }

        const packageRecord =
            findById(
                "packages",
                packageId
            );

        if (!packageRecord) {
            return sendError(
                res,
                "Package not found.",
                404
            );
        }

        const vouchers = [];

        for (
            let i = 0;
            i < requestedCount;
            i++
        ) {
            let code;

            do {
                code =
                    generateVoucherCode();
            } while (
                getCollection(
                    "vouchers"
                ).some(
                    voucher =>
                        voucher.code ===
                        code
                ) ||
                vouchers.some(
                    voucher =>
                        voucher.code ===
                        code
                )
            );

            vouchers.push({
                id:
                    generateId(
                        "voucher"
                    ),

                code,

                packageId:
                    packageRecord.id,

                packageName:
                    packageRecord.name,

                status:
                    "unused",

                price:
                    packageRecord.price,

                durationMinutes:
                    packageRecord.durationMinutes,

                speedDownload:
                    packageRecord.speedDownload,

                speedUpload:
                    packageRecord.speedUpload,

                createdAt: now(),

                activatedAt: null,

                expiresAt: null,

                usedBy: null,

                deleted: false
            });
        }

        updateDatabase(db => {
            db.vouchers.push(
                ...vouchers
            );
        });

        sendSuccess(
            res,
            {
                count:
                    vouchers.length,

                vouchers
            },
            201
        );
    }
);

// ------------------------------------------------------------
// LIST VOUCHERS
// ------------------------------------------------------------

app.get(
    "/api/vouchers",
    (req, res) => {
        let vouchers =
            getCollection(
                "vouchers"
            );

        if (
            req.query.status
        ) {
            vouchers =
                vouchers.filter(
                    voucher =>
                        voucher.status ===
                        req.query.status
                );
        }

        if (
            req.query.packageId
        ) {
            vouchers =
                vouchers.filter(
                    voucher =>
                        voucher.packageId ===
                        req.query.packageId
                );
        }

        sendSuccess(
            res,
            vouchers
        );
    }
);

// ------------------------------------------------------------
// LOOK UP VOUCHER
// ------------------------------------------------------------

app.get(
    "/api/vouchers/code/:code",
    (req, res) => {
        const code =
            normalizeText(
                req.params.code
            ).toUpperCase();

        const voucher =
            getCollection(
                "vouchers"
            ).find(
                item =>
                    item.code ===
                    code
            );

        if (!voucher) {
            return sendError(
                res,
                "Voucher not found.",
                404
            );
        }

        sendSuccess(
            res,
            voucher
        );
    }
);

// ------------------------------------------------------------
// DELETE VOUCHER
// ------------------------------------------------------------

app.delete(
    "/api/vouchers/:id",
    (req, res) => {
        const voucher =
            findById(
                "vouchers",
                req.params.id
            );

        if (!voucher) {
            return sendError(
                res,
                "Voucher not found.",
                404
            );
        }

        /*
        We do not immediately erase the voucher record.
        Instead we mark it deleted so that transaction and
        audit information is not silently lost.
        */

        const updated =
            updateById(
                "vouchers",
                req.params.id,
                {
                    deleted: true,
                    status: "deleted"
                }
            );

        sendSuccess(
            res,
            {
                message:
                    "Voucher deleted successfully.",

                voucher:
                    updated
            }
        );
    }
);

// ============================================================
// CUSTOMER MANAGEMENT
// ============================================================

// ------------------------------------------------------------
// CREATE CUSTOMER
// ------------------------------------------------------------

app.post(
    "/api/customers",
    (req, res) => {
        const phone =
            normalizeText(
                req.body.phone
            );

        if (!phone) {
            return sendError(
                res,
                "Customer phone number is required."
            );
        }

        const customers =
            getCollection(
                "customers"
            );

        let customer =
            customers.find(
                item =>
                    item.phone ===
                    phone
            );

        if (customer) {
            return sendSuccess(
                res,
                customer
            );
        }

        customer = {
            id:
                generateId(
                    "customer"
                ),

            phone,

            name:
                normalizeText(
                    req.body.name
                ),

            macAddress:
                normalizeText(
                    req.body.macAddress
                ),

            ipAddress:
                normalizeText(
                    req.body.ipAddress
                ),

            createdAt: now(),

            updatedAt: now()
        };

        insert(
            "customers",
            customer
        );

        sendSuccess(
            res,
            customer,
            201
        );
    }
);

// ------------------------------------------------------------
// LIST CUSTOMERS
// ------------------------------------------------------------

app.get(
    "/api/customers",
    (req, res) => {
        sendSuccess(
            res,
            getCollection(
                "customers"
            )
        );
    }
);

// ------------------------------------------------------------
// GET CUSTOMER
// ------------------------------------------------------------

app.get(
    "/api/customers/:id",
    (req, res) => {
        const customer =
            findById(
                "customers",
                req.params.id
            );

        if (!customer) {
            return sendError(
                res,
                "Customer not found.",
                404
            );
        }

        sendSuccess(
            res,
            customer
        );
    }
);

// ============================================================
// PAYMENT RECORDS
// ============================================================

// ------------------------------------------------------------
// CREATE PAYMENT RECORD
// ------------------------------------------------------------

app.post(
    "/api/payments",
    (req, res) => {
        const missing =
            requireFields(
                req.body,
                [
                    "amount",
                    "phone"
                ]
            );

        if (missing.length) {
            return sendError(
                res,
                "Payment information is incomplete.",
                400,
                { missing }
            );
        }

        const amount =
            normalizeNumber(
                req.body.amount
            );

        if (
            amount === null ||
            amount <= 0
        ) {
            return sendError(
                res,
                "Invalid payment amount."
            );
        }

        const payment = {
            id:
                generateId(
                    "payment"
                ),

            phone:
                normalizeText(
                    req.body.phone
                ),

            amount,

            currency:
                getDatabase()
                    .settings.currency,

            packageId:
                req.body.packageId ||
                null,

            method:
                req.body.method ||
                "mpesa",

            status:
                "pending",

            providerReference:
                null,

            checkoutRequestId:
                null,

            createdAt: now(),

            completedAt: null
        };

        insert(
            "payments",
            payment
        );

        sendSuccess(
            res,
            payment,
            201
        );
    }
);

// ------------------------------------------------------------
// LIST PAYMENTS
// ------------------------------------------------------------

app.get(
    "/api/payments",
    (req, res) => {
        let payments =
            getCollection(
                "payments"
            );

        if (
            req.query.status
        ) {
            payments =
                payments.filter(
                    payment =>
                        payment.status ===
                        req.query.status
                );
        }

        sendSuccess(
            res,
            payments
        );
    }
);

// ------------------------------------------------------------
// PAYMENT STATUS
// ------------------------------------------------------------

app.get(
    "/api/payments/:id",
    (req, res) => {
        const payment =
            findById(
                "payments",
                req.params.id
            );

        if (!payment) {
            return sendError(
                res,
                "Payment not found.",
                404
            );
        }

        sendSuccess(
            res,
            payment
        );
    }
);

// ============================================================
// ROUTER MANAGEMENT
// ============================================================

// ------------------------------------------------------------
// CREATE ROUTER
// ------------------------------------------------------------

app.post(
    "/api/routers",
    (req, res) => {
        const missing =
            requireFields(
                req.body,
                [
                    "name",
                    "host"
                ]
            );

        if (missing.length) {
            return sendError(
                res,
                "Router name and host are required.",
                400,
                { missing }
            );
        }

        const router = {
            id:
                generateId(
                    "router"
                ),

            name:
                normalizeText(
                    req.body.name
                ),

            host:
                normalizeText(
                    req.body.host
                ),

            port:
                normalizeNumber(
                    req.body.port
                ) || 8728,

            username:
                normalizeText(
                    req.body.username
                ),

            /*
            Never store a plaintext router password in the
            frontend. The actual encrypted credential store
            will be implemented when MikroTik integration is
            added.
            */

            status:
                "unconfigured",

            enabled:
                req.body.enabled !==
                false,

            createdAt: now(),

            updatedAt: now()
        };

        insert(
            "routers",
            router
        );

        sendSuccess(
            res,
            router,
            201
        );
    }
);

// ------------------------------------------------------------
// LIST ROUTERS
// ------------------------------------------------------------

app.get(
    "/api/routers",
    (req, res) => {
        sendSuccess(
            res,
            getCollection(
                "routers"
            )
        );
    }
);

// ------------------------------------------------------------
// GET ROUTER
// ------------------------------------------------------------

app.get(
    "/api/routers/:id",
    (req, res) => {
        const router =
            findById(
                "routers",
                req.params.id
            );

        if (!router) {
            return sendError(
                res,
                "Router not found.",
                404
            );
        }

        sendSuccess(
            res,
            router
        );
    }
);

// ------------------------------------------------------------
// UPDATE ROUTER
// ------------------------------------------------------------

app.patch(
    "/api/routers/:id",
    (req, res) => {
        const changes = {};

        if (
            req.body.name !==
            undefined
        ) {
            changes.name =
                normalizeText(
                    req.body.name
                );
        }

        if (
            req.body.host !==
            undefined
        ) {
            changes.host =
                normalizeText(
                    req.body.host
                );
        }

        if (
            req.body.port !==
            undefined
        ) {
            const port =
                normalizeNumber(
                    req.body.port
                );

            if (
                port === null ||
                port < 1 ||
                port > 65535
            ) {
                return sendError(
                    res,
                    "Invalid router port."
                );
            }

            changes.port = port;
        }

        if (
            req.body.username !==
            undefined
        ) {
            changes.username =
                normalizeText(
                    req.body.username
                );
        }

        if (
            req.body.enabled !==
            undefined
        ) {
            changes.enabled =
                Boolean(
                    req.body.enabled
                );
        }

        const router =
            updateById(
                "routers",
                req.params.id,
                changes
            );

        if (!router) {
            return sendError(
                res,
                "Router not found.",
                404
            );
        }

        sendSuccess(
            res,
            router
        );
    }
);

// ------------------------------------------------------------
// DELETE ROUTER
// ------------------------------------------------------------

app.delete(
    "/api/routers/:id",
    (req, res) => {
        const removed =
            deleteById(
                "routers",
                req.params.id
            );

        if (!removed) {
            return sendError(
                res,
                "Router not found.",
                404
            );
        }

        sendSuccess(
            res,
            {
                message:
                    "Router removed successfully."
            }
        );
    }
);

// ============================================================
// DATABASE STATUS
// ============================================================

app.get(
    "/api/database/status",
    (req, res) => {
        sendSuccess(
            res,
            getDatabaseStatus()
        );
    }
);

// ============================================================
// SETTINGS
// ============================================================

app.get(
    "/api/settings",
    (req, res) => {
        sendSuccess(
            res,
            getDatabase().settings
        );
    }
);

app.patch(
    "/api/settings",
    (req, res) => {
        const allowed = [
            "systemName",
            "currency",
            "country",
            "timezone"
        ];

        const changes = {};

        for (
            const key of allowed
        ) {
            if (
                req.body[key] !==
                undefined
            ) {
                changes[key] =
                    normalizeText(
                        req.body[key]
                    );
            }
        }

        updateDatabase(db => {
            db.settings = {
                ...db.settings,
                ...changes
            };
        });

        sendSuccess(
            res,
            getDatabase().settings
        );
    }
);

// ============================================================
// 404 HANDLER
// ============================================================

app.use(
    (req, res) => {
        sendError(
            res,
            "API endpoint not found.",
            404,
            {
                method:
                    req.method,

                path:
                    req.originalUrl
            }
        );
    }
);

// ============================================================
// GLOBAL ERROR HANDLER
// ============================================================

app.use(
    (
        error,
        req,
        res,
        next
    ) => {
        console.error(
            "Unhandled server error:",
            error
        );

        if (
            res.headersSent
        ) {
            return next(error);
        }

        sendError(
            res,
            "Internal server error.",
            500
        );
    }
);

// ============================================================
// START SERVER
// ============================================================

app.listen(
    PORT,
    () => {
        console.log(
            "=================================================="
        );

        console.log(
            "        NEZORA WI-FI BILLING SYSTEM"
        );

        console.log(
            "=================================================="
        );

        console.log(
            `API server running on port ${PORT}`
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log(
            `Health: http://localhost:${PORT}/api/health`
        );

        console.log(
            "Database:",
            getDatabaseStatus()
        );

        console.log(
            "=================================================="
        );
    }
);
