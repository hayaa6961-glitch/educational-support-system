const bcrypt = require("bcrypt");
const { findUserByEmail } = require("../models/authModel");

const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    findUserByEmail(email, async (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        res.status(200).json({
            message: "Login successful",

            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
                role: user.role
            }

        });

    });

};

module.exports = {
    login
};