/*
 * ============================================================
 * NEXORA WI-FI
 * Hotspot Billing & Network Management Platform
 * ============================================================
 *
 * Backend foundation
 *
 * This server will eventually handle:
 *
 * 1. Operator authentication
 * 2. Customer management
 * 3. Internet packages
 * 4. Voucher generation
 * 5. Voucher activation
 * 6. M-Pesa payments
 * 7. MikroTik integration
 * 8. RADIUS authentication
 * 9. Active sessions
 * 10. Network monitoring
 * 11. Payment records
 * 12. Reports
 *
 * IMPORTANT:
 * Never put M-Pesa credentials, MikroTik passwords,
 * API keys or database passwords in frontend JavaScript.
 *
 * Those credentials belong on the backend/server.
 * ============================================================
 */

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

/*
 * ------------------------------------------------------------
 * BASIC CONFIGURATION
 * ------------------------------------------------------------
 */

const PORT = process.env.PORT || 3000;

const APP_NAME = "NEXORA Wi-Fi";
const APP_VERSION = "1.0.0";

/*
 * ------------------------------------------------------------
 * MIDDLEWARE
 * ------------------------------------------------------------
 */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

/*
 * ------------------------------------------------------------
 * REQUEST LOGGER
 * ------------------------------------------------------------
 */

app.use((req, res, next) => {
  const now = new Date().toISOString();

  console.log(
    `[${now}] ${req.method} ${req.originalUrl}`
  );

  next();
});

/*
 * ------------------------------------------------------------
 * ROOT ROUTE
 * ------------------------------------------------------------
 */

app.get("/", (req, res) => {
  res.json({
    success: true,
    application: APP_NAME,
    version: APP_VERSION,
    status: "online",
    message: "NEXORA Wi-Fi backend is running."
  });
});

/*
 * ------------------------------------------------------------
 * HEALTH CHECK
 * ------------------------------------------------------------
 *
 * This endpoint allows us to test whether the backend
 * is working correctly.
 */

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: APP_NAME,
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

/*
 * ------------------------------------------------------------
 * SYSTEM INFORMATION
 * ------------------------------------------------------------
 */

app.get("/api/system", (req, res) => {
  res.json({
    success: true,
    data: {
      name: APP_NAME,
      version: APP_VERSION,
      environment: process.env.NODE_ENV || "development",
      serverTime: new Date().toISOString()
    }
  });
});

/*
 * ------------------------------------------------------------
 * API STATUS
 * ------------------------------------------------------------
 */

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "NEXORA Wi-Fi API",
    version: APP_VERSION,
    modules: {
      authentication: "planned",
      customers: "planned",
      packages: "planned",
      vouchers: "planned",
      payments: "planned",
      mpesa: "planned",
      mikrotik: "planned",
      radius: "planned",
      sessions: "planned",
      reports: "planned"
    }
  });
});

/*
 * ------------------------------------------------------------
 * TEMPORARY PACKAGE ENDPOINT
 * ------------------------------------------------------------
 *
 * The real package system will later use a database.
 *
 * We are deliberately NOT pretending that these are
 * permanent database records yet.
 */

const temporaryPackages = [];

/*
 * Get packages
 */

app.get("/api/packages", (req, res) => {
  res.json({
    success: true,
    count: temporaryPackages.length,
    packages: temporaryPackages
  });
});

/*
 * Create package
 */

app.post("/api/packages", (req, res) => {
  const {
    name,
    price,
    durationMinutes,
    downloadSpeed,
    uploadSpeed
  } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Package name is required."
    });
  }

  if (
    price === undefined ||
    price === null ||
    Number.isNaN(Number(price))
  ) {
    return res.status(400).json({
      success: false,
      message: "A valid package price is required."
    });
  }

  if (
    durationMinutes === undefined ||
    durationMinutes === null ||
    Number.isNaN(Number(durationMinutes))
  ) {
    return res.status(400).json({
      success: false,
      message: "Package duration is required."
    });
  }

  const newPackage = {
    id: `PKG-${Date.now()}`,
    name: String(name).trim(),
    price: Number(price),
    durationMinutes: Number(durationMinutes),
    downloadSpeed: downloadSpeed || null,
    uploadSpeed: uploadSpeed || null,
    active: true,
    createdAt: new Date().toISOString()
  };

  temporaryPackages.push(newPackage);

  res.status(201).json({
    success: true,
    message: "Package created successfully.",
    package: newPackage
  });
});

/*
 * ------------------------------------------------------------
 * TEMPORARY VOUCHER ENDPOINTS
 * ------------------------------------------------------------
 *
 * The permanent voucher engine will be connected to the
 * database and MikroTik/RADIUS later.
 */

const temporaryVouchers = [];

/*
 * Get vouchers
 */

app.get("/api/vouchers", (req, res) => {
  res.json({
    success: true,
    count: temporaryVouchers.length,
    vouchers: temporaryVouchers
  });
});

/*
 * Generate voucher
 */

app.post("/api/vouchers", (req, res) => {
  const {
    packageId,
    quantity
  } = req.body;

  const requestedQuantity = Number(quantity || 1);

  if (
    !Number.isInteger(requestedQuantity) ||
    requestedQuantity < 1 ||
    requestedQuantity > 1000
  ) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be between 1 and 1000."
    });
  }

  const generated = [];

  for (let i = 0; i < requestedQuantity; i++) {
    const code =
      `NWF-${Math.random().toString(36).substring(2, 8).toUpperCase()}-` +
      `${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const voucher = {
      id: `VCH-${Date.now()}-${i}`,
      code,
      packageId: packageId || null,
      status: "unused",
      createdAt: new Date().toISOString(),
      activatedAt: null,
      expiresAt: null
    };

    temporaryVouchers.push(voucher);
    generated.push(voucher);
  }

  res.status(201).json({
    success: true,
    message: `${generated.length} voucher(s) generated.`,
    count: generated.length,
    vouchers: generated
  });
});

/*
 * ------------------------------------------------------------
 * VOUCHER VALIDATION
 * ------------------------------------------------------------
 */

app.post("/api/vouchers/validate", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({
      success: false,
      message: "Voucher code is required."
    });
  }

  const voucher = temporaryVouchers.find(
    item => item.code === String(code).trim().toUpperCase()
  );

  if (!voucher) {
    return res.status(404).json({
      success: false,
      valid: false,
      message: "Voucher not found."
    });
  }

  if (voucher.status !== "unused") {
    return res.status(400).json({
      success: false,
      valid: false,
      message: "Voucher has already been used or is unavailable."
    });
  }

  res.json({
    success: true,
    valid: true,
    message: "Voucher is valid.",
    voucher
  });
});

/*
 * ------------------------------------------------------------
 * 404 HANDLER
 * ------------------------------------------------------------
 */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found.",
    path: req.originalUrl
  });
});

/*
 * ------------------------------------------------------------
 * ERROR HANDLER
 * ------------------------------------------------------------
 */

app.use((error, req, res, next) => {
  console.error("SERVER ERROR:", error);

  res.status(500).json({
    success: false,
    message: "Internal server error."
  });
});

/*
 * ------------------------------------------------------------
 * START SERVER
 * ------------------------------------------------------------
 */

app.listen(PORT, () => {
  console.log("==============================================");
  console.log("       NEXORA WI-FI BACKEND");
  console.log("==============================================");
  console.log(`Application: ${APP_NAME}`);
  console.log(`Version:     ${APP_VERSION}`);
  console.log(`Port:        ${PORT}`);
  console.log(`Status:      ONLINE`);
  console.log("==============================================");
});
