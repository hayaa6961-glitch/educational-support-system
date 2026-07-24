const express = require("express");
const router = express.Router();

const {
    dashboardStatistics
} = require("../controllers/dashboardController");

router.get("/statistics", dashboardStatistics);

module.exports = router;