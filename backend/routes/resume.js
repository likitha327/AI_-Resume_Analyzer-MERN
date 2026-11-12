const express = require("express");
const Analysis = require("../models/Analysis");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("resume"), async (req, res) => {
    console.log("Resume analysis request received");

    if (!req.file) {
        return res.status(400).json({
            message: "No resume file received"
        });
    }

    try {
        let resumeText = "";

        if (req.file.mimetype === "application/pdf") {
            const data = await pdfParse(req.file.buffer);
            resumeText = data.text;
        } 
        else if (
            req.file.mimetype ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            const result = await mammoth.extractRawText({
                buffer: req.file.buffer
            });
            resumeText = result.value;
        } 
        else {
            return res.status(400).json({
                message: "Please upload a PDF or DOCX resume"
            });
        }

        console.log("Resume text extracted successfully");
        console.log("Resume text:",resumeText);
        const skills = [
    "python",
    "java",
    "javascript",
    "html",
    "css",
    "sql",
    "mongodb",
    "react",
    "node.js",
    "flask",
    "c",
    "c++",
    "git",
    "github",
    "express",
    "mysql",
    "php",
    "bootstrap",
    "typescript",
    "angular",
    "aws",
    "docker",
    "machine learning",
    "data analytics",
    "power bi"
];

const foundSkills = skills.filter(skill =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
);

const recommendedSkills = skills.filter(skill => !foundSkills.includes(skill));

console.log("Skills found:", foundSkills);
let atsScore = Math.min(foundSkills.length * 4, 70);

const hasSummary =  resumeText.toLowerCase().includes("summary");
const hasObjective = resumeText.toLowerCase().includes("objective");

console.log("Has Summary:",hasSummary);
console.log("Has Objective:",hasObjective);

if (hasSummary || hasObjective) {
    atsScore += 10;
}

const hasEducation = 

resumeText.toLowerCase().includes("education") ||

resumeText.toLowerCase().includes("bca") ||

resumeText.toLowerCase().includes("degree"); 

if (hasEducation) {
    atsScore += 10;
}

const hasProjects = 

resumeText.toLowerCase().includes("projects") ||

resumeText.toLowerCase().includes("project");

if (hasProjects) {
    atsScore += 10;
}

const hasExperience = 

resumeText.toLowerCase().includes("experience") ||

resumeText.toLowerCase().includes("internship");

if (hasExperience) {
    atsScore += 10;
}

console.log("Has Experience:",hasExperience);


const hasGoodLength = resumeText.length >= 500;

if (hasGoodLength) {
    atsScore += 5;
}

console.log("Resume text length:", resumeText.length);
console.log("Good length:", hasGoodLength);

console.log("Final ATS Score:",atsScore);

const feedback = [];

if (resumeText.length < 500) {
    feedback.push("Resume content is short. Consider adding more details.");
}

if (hasSummary || hasObjective) {
    feedback.push("Summary or Objective section found.");
} else {
    feedback.push("Add a Summary or Objective section.");
}

if (hasEducation) {
    feedback.push("Education section found.");
} else {
    feedback.push("Add an Education section.");
}

if (hasProjects) {
    feedback.push("Projects section found.");
} else {
    feedback.push("Add Projects to your resume.");
}

if (hasExperience) {
    feedback.push("Experience or Internship section found.");
} else {
    feedback.push("Add work experience or internship details.");
}
        
 let suggestion = "";

if (atsScore < 40) {
    suggestion = "Add more relevant technical skills to improve your ATS score.";
} else if (atsScore < 60) {
    suggestion = "Add more relevant skills and improve your resume content.";
} else if (atsScore < 80) {
    suggestion = "Your resume is good, but adding more relevant skills may improve the score.";
} else {
    suggestion = "Your resume has a strong set of relevant skills.";
}
let strength = "";

if (atsScore >= 80) {
    strength = "Excellent";
} else if (atsScore >= 60) {
    strength = "Good";
} else if (atsScore >= 40) {
    strength = "Average";
} else {
    strength = "Needs Improvement";
}
const analysis = new Analysis({
    resumeFilename: req.file.originalname,
    atsScore: atsScore,
    strength: strength,
    suggestion: suggestion,
    textLength: resumeText.length,
    foundSkills: foundSkills,
    recommendedSkills: recommendedSkills,
    feedback: feedback
});

await analysis.save();
res.json({
    message: "Resume analyzed successfully",
    textLength: resumeText.length,
    atsScore: atsScore,
    strength: strength,
    suggestion: suggestion,
    foundSkills: foundSkills,
    recommendedSkills: recommendedSkills,
    feedback: feedback
});


    } catch (error) {
        console.log("Resume analysis error:", error);

        res.status(500).json({
            message: "Could not analyze resume",
            error: error.message
        });
    }
});

module.exports = router;