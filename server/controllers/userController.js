const bcrypt = require("bcrypt");
const { createUser } = require("../models/userModel");

const register = async (req, res) => {
    try {
        const { full_name, email, password, role } = req.body;

        if (!full_name || !email || !password || !role) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        createUser(
            {
                full_name,
                email,
                password: hashedPassword,
                role
            },
            (err, result) => {
                if (err) {
                    return res.status(500).json({
                        message: "Database Error",
                        error: err
                    });
                }

                res.status(201).json({
                    message: "User registered successfully"
                });
            }
        );

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        });
    }
};

module.exports = {
    register
};