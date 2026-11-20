const express = require("express");
const userStore = require("../services/userStore");

const router = express.Router();

const NO_CACHE_HEADERS = { "Cache-Control": "no-store" };

const readCredentials = (body) => ({
    email: String(body?.email ?? "").trim(),
    password: String(body?.password ?? "")
});

const validateCredentials = ({ email, password }) => {
    if (!email) return "Email is required";
    if (!password) return "Password is required";
    if (!email.includes("@")) return "Enter a valid email address";
    return null;
};

router.post("/register", async (req, res) => {
    const { email, password } = readCredentials(req.body);
    const name = String(req.body?.name ?? "").trim();

    const validationError = validateCredentials({ email, password });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    try {
        const { created } = await userStore.createUser({ name, email, password });

        if (!created) {
            return res.status(400).json({ message: "User already exists" });
        }

        return res.status(201).json({
            message: "Registration successful",
            storage: userStore.getStorageMode()
        });
    } catch (error) {
        console.error("Register error:", error.message);
        return res.status(500).json({ message: "Registration failed" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = readCredentials(req.body);

    const validationError = validateCredentials({ email, password });
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    try {
        const user = await userStore.findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid password" });
        }

        return res.status(200).set(NO_CACHE_HEADERS).json({
            message: "Login successful",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            storage: userStore.getStorageMode()
        });
    } catch (error) {
        console.error("Login error:", error.message);
        return res.status(500).json({ message: "Login failed" });
    }
});

module.exports = router;
