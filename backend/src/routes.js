const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");


const routes = express.Router();
const upload = multer(uploadConfig);

// HTTP (async) vs. WEBSocket (sync)

// GET, POST, PUT, DELETE
// req.query = Access query parameters (for filters)
// req.params = Access route parameters (for editing or deleting resources)
// req.body = Access request's body (for creating or editing resources)
// req.headers = Access the request's headers (for all types of HTTP requests)

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/booking/:booking_id/approvals", ApprovalController.store);
routes.post("/booking/:booking_id/rejections", RejectionController.store);

module.exports = routes;
