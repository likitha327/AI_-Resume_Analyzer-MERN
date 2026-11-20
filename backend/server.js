const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/resume",resumeRoutes);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("MONGO_URI is not set. Add it to your environment variables.");
} else if (
    !MONGO_URI.startsWith("mongodb://") &&
    !MONGO_URI.startsWith("mongodb+srv://")
) {
    console.error(
        'MONGO_URI is invalid: it must start with "mongodb://" or "mongodb+srv://".'
    );
} else {
    mongoose
        .connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
            socketTimeoutMS: 5000
        })
        .then(() => console.log("MongoDB connected successfully"))
        .catch((error) => console.log("MongoDB connection error:", error.message));
}

const CONNECTION_STATES = ["disconnected", "connected", "connecting", "disconnecting"];

app.get("/", (req, res) => {
    res.send("AI Resume Analyzer Backend is Running!");
});

app.get("/api/health", (req, res) => {
    const database = CONNECTION_STATES[mongoose.connection.readyState] || "unknown";
    const isHealthy = database === "connected";

    res.status(isHealthy ? 200 : 503).json({
        status: isHealthy ? "ok" : "degraded",
        database,
        mongoUriConfigured: Boolean(process.env.MONGO_URI)
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
