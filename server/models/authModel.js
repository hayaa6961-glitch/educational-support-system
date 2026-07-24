const db = require("../config/database");

const findUserByEmail = (email, callback) => {

    const sql = `
        SELECT * FROM users
        WHERE email = ?
    `;

    db.query(sql, [email], callback);

};

module.exports = {
    findUserByEmail
};