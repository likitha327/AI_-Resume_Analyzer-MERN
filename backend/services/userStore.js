const mongoose = require("mongoose");
const User = require("../models/User");

const memoryUsersByEmail = new Map();
let nextMemoryId = 0;

const isDatabaseConnected = () => mongoose.connection.readyState === 1;

const normalizeEmail = (email) => String(email ?? "").trim().toLowerCase();

const toPlainUser = (record) => ({
    id: String(record.id ?? record._id),
    name: record.name,
    email: record.email,
    password: record.password
});

const findUserByEmail = async (email) => {
    const normalizedEmail = normalizeEmail(email);

    if (isDatabaseConnected()) {
        try {
            const document = await User.findOne({ email: normalizedEmail });
            return document ? toPlainUser(document) : null;
        } catch (error) {
            console.error("MongoDB query failed, falling back to in-memory:", error.message);
        }
    }

    return memoryUsersByEmail.get(normalizedEmail) ?? null;
};

const createUser = async ({ name, email, password }) => {
    const normalizedEmail = normalizeEmail(email);
    const existingUser = await findUserByEmail(normalizedEmail);

    if (existingUser) {
        return { created: false, user: existingUser };
    }

    if (isDatabaseConnected()) {
        const document = await User.create({
            name,
            email: normalizedEmail,
            password
        });

        return { created: true, user: toPlainUser(document) };
    }

    nextMemoryId += 1;

    const memoryUser = {
        id: `memory-${nextMemoryId}`,
        name,
        email: normalizedEmail,
        password
    };

    memoryUsersByEmail.set(normalizedEmail, memoryUser);

    return { created: true, user: memoryUser };
};

const getStorageMode = () => (isDatabaseConnected() ? "mongodb" : "in-memory");

module.exports = {
    findUserByEmail,
    createUser,
    getStorageMode,
    isDatabaseConnected
};
