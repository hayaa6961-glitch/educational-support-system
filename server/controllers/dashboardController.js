const { getDashboardStatistics } = require("../models/dashboardModel");

const dashboardStatistics = (req, res) => {

    getDashboardStatistics((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(results[0]);

    });

};

module.exports = {
    dashboardStatistics
};