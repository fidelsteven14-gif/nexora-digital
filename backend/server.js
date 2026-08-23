const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const crypto = require("crypto");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --------------------------------------------------
// BASIC CONFIGURATION
// --------------------------------------------------

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// TEMPORARY APPLICATION DATA
// --------------------------------------------------
// This is only the first development layer.
// We will replace this with a real database later.

const operators = [
    {
        id: "operator-001",
        username: "admin",
        password: "CHANGE_THIS_PASSWORD"
    }
];

const packages = [
    {
        id: "pkg-001",
        name: "1 Hour",
        price: 10,
        durationMinutes: 60,
        downloadSpeed: "5M",
        uploadSpeed: "2M",
        active: true
    },
    {
        id: "pkg-002",
        name: "3 Hours",
        price: 20,
        durationMinutes: 180,
        downloadSpeed: "5M",
        uploadSpeed: "2M",
        active: true
    },
    {
        id: "pkg-003",
        name: "6 Hours",
        price: 30,
        durationMinutes: 360,
        downloadSpeed: "8M",
        uploadSpeed: "3M",
        active: true
    },
    {
        id: "pkg-004",
        name: "12 Hours",
        price: 50,
        durationMinutes: 720,
        downloadSpeed: "10M",
        uploadSpeed: "5M",
        active: true
    },
    {
        id: "pkg-005",
        name: "24 Hours",
        price: 80,
        durationMinutes: 1440,
        downloadSpeed: "10M",
        uploadSpeed: "5M",
        active: true
    }
];

const vouchers = [];

const payments = [];

const customers = [];

// --------------------------------------------------
// UTILITY FUNCTIONS
// --------------------------------------------------

function generateId(prefix) {
    return `${prefix}-${crypto.randomUUID()}`;
}

function generateVoucherCode(length = 10) {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let result = "";

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return result;
}

function findPackage(packageId) {
    return packages.find(
        (item) => item.id === packageId && item.active === true
    );
}

function findVoucher(code) {
    return vouchers.find(
        (voucher) =>
            voucher.code.toUpperCase() === code.toUpperCase()
    );
}

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/", (req, res) => {
    res.json({
        success: true,
        application: "Nezora Wi-Fi",
        service: "Billing Backend",
        status: "online",
        version: "1.0.0"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "healthy",
        timestamp: new Date().toISOString()
    });
});

// --------------------------------------------------
// PACKAGE MANAGEMENT
// --------------------------------------------------

app.get("/api/packages", (req, res) => {
    const activePackages = packages.filter(
        (item) => item.active === true
    );

    res.json({
        success: true,
        packages: activePackages
    });
});

app.get("/api/packages/:id", (req, res) => {
    const packageItem = packages.find(
        (item) => item.id === req.params.id
    );

    if (!packageItem) {
        return res.status(404).json({
            success: false,
            message: "Package not found."
        });
    }

    res.json({
        success: true,
        package: packageItem
    });
});

app.post("/api/packages", (req, res) => {
    const {
        name,
        price,
        durationMinutes,
        downloadSpeed,
        uploadSpeed
    } = req.body;

    if (
        !name ||
        price === undefined ||
        !durationMinutes ||
        !downloadSpeed ||
        !uploadSpeed
    ) {
        return res.status(400).json({
            success: false,
            message: "All package fields are required."
        });
    }

    const newPackage = {
        id: generateId("pkg"),
        name,
        price: Number(price),
        durationMinutes: Number(durationMinutes),
        downloadSpeed,
        uploadSpeed,
        active: true,
        createdAt: new Date().toISOString()
    };

    packages.push(newPackage);

    res.status(201).json({
        success: true,
        message: "Package created successfully.",
        package: newPackage
    });
});

app.put("/api/packages/:id", (req, res) => {
    const packageItem = packages.find(
        (item) => item.id === req.params.id
    );

    if (!packageItem) {
        return res.status(404).json({
            success: false,
            message: "Package not found."
        });
    }

    const {
        name,
        price,
        durationMinutes,
        downloadSpeed,
        uploadSpeed,
        active
    } = req.body;

    if (name !== undefined) {
        packageItem.name = name;
    }

    if (price !== undefined) {
        packageItem.price = Number(price);
    }

    if (durationMinutes !== undefined) {
        packageItem.durationMinutes = Number(durationMinutes);
    }

    if (downloadSpeed !== undefined) {
        packageItem.downloadSpeed = downloadSpeed;
    }

    if (uploadSpeed !== undefined) {
        packageItem.uploadSpeed = uploadSpeed;
    }

    if (active !== undefined) {
        packageItem.active = Boolean(active);
    }

    packageItem.updatedAt = new Date().toISOString();

    res.json({
        success: true,
        message: "Package updated successfully.",
        package: packageItem
    });
});

app.delete("/api/packages/:id", (req, res) => {
    const packageItem = packages.find(
        (item) => item.id === req.params.id
    );

    if (!packageItem) {
        return res.status(404).json({
            success: false,
            message: "Package not found."
        });
    }

    packageItem.active = false;

    res.json({
        success: true,
        message: "Package deleted successfully."
    });
});

// --------------------------------------------------
// VOUCHER GENERATION
// --------------------------------------------------

app.post("/api/vouchers/generate", (req, res) => {
    const {
        packageId,
        quantity
    } = req.body;

    const packageItem = findPackage(packageId);

    if (!packageItem) {
        return res.status(400).json({
            success: false,
            message: "Invalid package."
        });
    }

    const amount = Number(quantity);

    if (
        !Number.isInteger(amount) ||
        amount < 1 ||
        amount > 10000
    ) {
        return res.status(400).json({
            success: false,
            message: "Quantity must be between 1 and 10,000."
        });
    }

    const generatedVouchers = [];

    for (let i = 0; i < amount; i++) {
        let code;

        do {
            code = generateVoucherCode(10);
        } while (vouchers.some((voucher) => voucher.code === code));

        const voucher = {
            id: generateId("voucher"),
            code,
            packageId: packageItem.id,
            packageName: packageItem.name,
            price: packageItem.price,
            durationMinutes: packageItem.durationMinutes,
            downloadSpeed: packageItem.downloadSpeed,
            uploadSpeed: packageItem.uploadSpeed,
            status: "unused",
            createdAt: new Date().toISOString(),
            usedAt: null,
            expiresAt: null
        };

        vouchers.push(voucher);
        generatedVouchers.push(voucher);
    }

    res.status(201).json({
        success: true,
        message: `${generatedVouchers.length} voucher(s) generated.`,
        vouchers: generatedVouchers
    });
});

// --------------------------------------------------
// VIEW VOUCHERS
// --------------------------------------------------

app.get("/api/vouchers", (req, res) => {
    res.json({
        success: true,
        total: vouchers.length,
        vouchers
    });
});

// --------------------------------------------------
// DELETE VOUCHER
// --------------------------------------------------

app.delete("/api/vouchers/:id", (req, res) => {
    const index = vouchers.findIndex(
        (voucher) => voucher.id === req.params.id
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Voucher not found."
        });
    }

    vouchers.splice(index, 1);

    res.json({
        success: true,
        message: "Voucher deleted successfully."
    });
});

// --------------------------------------------------
// VOUCHER LOGIN / REDEMPTION
// --------------------------------------------------

app.post("/api/vouchers/redeem", (req, res) => {
    const {
        code,
        customerMac,
        customerIp
    } = req.body;

    if (!code) {
        return res.status(400).json({
            success: false,
            message: "Voucher code is required."
        });
    }

    const voucher = findVoucher(code);

    if (!voucher) {
        return res.status(404).json({
            success: false,
            message: "Invalid voucher code."
        });
    }

    if (voucher.status === "used") {
        return res.status(409).json({
            success: false,
            message: "This voucher has already been used."
        });
    }

    if (voucher.status === "deleted") {
        return res.status(409).json({
            success: false,
            message: "This voucher is no longer available."
        });
    }

    voucher.status = "used";
    voucher.usedAt = new Date().toISOString();

    voucher.expiresAt = new Date(
        Date.now() +
        voucher.durationMinutes * 60 * 1000
    ).toISOString();

    const customer = {
        id: generateId("customer"),
        macAddress: customerMac || null,
        ipAddress: customerIp || null,
        voucherId: voucher.id,
        connectedAt: new Date().toISOString(),
        expiresAt: voucher.expiresAt,
        status: "pending-mikrotik"
    };

    customers.push(customer);

    // MikroTik authorization will be connected here later.

    res.json({
        success: true,
        message: "Voucher accepted.",
        customer,
        access: {
            durationMinutes: voucher.durationMinutes,
            downloadSpeed: voucher.downloadSpeed,
            uploadSpeed: voucher.uploadSpeed
        }
    });
});

// --------------------------------------------------
// PAYMENT CREATION
// --------------------------------------------------

app.post("/api/payments/initiate", (req, res) => {
    const {
        packageId,
        phoneNumber
    } = req.body;

    const packageItem = findPackage(packageId);

    if (!packageItem) {
        return res.status(400).json({
            success: false,
            message: "Invalid package."
        });
    }

    if (!phoneNumber) {
        return res.status(400).json({
            success: false,
            message: "M-Pesa phone number is required."
        });
    }

    const payment = {
        id: generateId("payment"),
        packageId: packageItem.id,
        packageName: packageItem.name,
        amount: packageItem.price,
        phoneNumber,
        status: "pending",
        createdAt: new Date().toISOString(),
        completedAt: null
    };

    payments.push(payment);

    /*
     * M-Pesa STK Push will be connected here.
     *
     * The actual implementation will:
     *
     * 1. Authenticate with the payment provider.
     * 2. Send an STK Push to the customer's phone.
     * 3. Wait for the callback.
     * 4. Verify the transaction.
     * 5. Mark the payment as successful.
     * 6. Create/activate customer access.
     */

    res.status(201).json({
        success: true,
        message: "Payment request created.",
        payment
    });
});

// --------------------------------------------------
// PAYMENT STATUS
// --------------------------------------------------

app.get("/api/payments/:id", (req, res) => {
    const payment = payments.find(
        (item) => item.id === req.params.id
    );

    if (!payment) {
        return res.status(404).json({
            success: false,
            message: "Payment not found."
        });
    }

    res.json({
        success: true,
        payment
    });
});

// --------------------------------------------------
// M-PESA CALLBACK PLACEHOLDER
// --------------------------------------------------

app.post("/api/payments/mpesa/callback", (req, res) => {
    console.log(
        "M-Pesa callback received:",
        JSON.stringify(req.body, null, 2)
    );

    /*
     * The real callback verification will be implemented
     * when the M-Pesa integration is connected.
     */

    res.json({
        ResultCode: 0,
        ResultDesc: "Callback received successfully."
    });
});

// --------------------------------------------------
// MIKROTIK CONFIGURATION
// --------------------------------------------------

app.post("/api/mikrotik/test-connection", (req, res) => {
    const {
        host,
        port,
        username
    } = req.body;

    if (!host || !username) {
        return res.status(400).json({
            success: false,
            message: "Router host and username are required."
        });
    }

    /*
     * Real MikroTik API connection will be implemented
     * in the MikroTik service layer.
     */

    res.json({
        success: true,
        message: "Router configuration received.",
        router: {
            host,
            port: port || 8728,
            username
        },
        status: "connection-test-pending"
    });
});

// --------------------------------------------------
// CUSTOMER STATUS
// --------------------------------------------------

app.get("/api/customers", (req, res) => {
    res.json({
        success: true,
        customers
    });
});

// --------------------------------------------------
// ERROR HANDLER
// --------------------------------------------------

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found."
    });
});

app.use((error, req, res, next) => {
    console.error(error);

    res.status(500).json({
        success: false,
        message: "Internal server error."
    });
});

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {
    console.log("----------------------------------------");
    console.log("NEZORA WI-FI BILLING SYSTEM");
    console.log("----------------------------------------");
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log("----------------------------------------");
});
