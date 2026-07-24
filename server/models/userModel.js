const db = require("../config/database");

const createUser = (userData, callback) => {
    const { full_name, email, password, role } = userData;

    const sql = `
        INSERT INTO users (full_name, email, password, role)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [full_name, email, password, role],
        callback
    );
};

module.exports = {
    createUser
};