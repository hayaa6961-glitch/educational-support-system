const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/database");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");


const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Educational Support System API"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});