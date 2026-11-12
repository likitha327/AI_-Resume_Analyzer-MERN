const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({
    resumeFilename: {
        type: String,
        required: true
    },
    atsScore: {
        type: Number,
        required: true
    },
    strength: {
        type: String
    },
    suggestion: {
        type: String
    },
    textLength: {
        type: Number
    },
    foundSkills: {
        type: [String]
    },
    recommendedSkills: {
        type: [String]
    },
    feedback: {
        type: [String]
    }
});

module.exports = mongoose.model("Analysis", analysisSchema);