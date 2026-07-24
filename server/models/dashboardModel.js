const db = require("../config/database");

const getDashboardStatistics = (callback) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM users) AS totalUsers,
            (SELECT COUNT(*) FROM courses) AS totalCourses,
            (SELECT COUNT(*) FROM tickets) AS totalTickets,
            (SELECT COUNT(*) FROM educational_platforms) AS totalPlatforms
    `;

    db.query(sql, callback);

};

module.exports = {
    getDashboardStatistics
};