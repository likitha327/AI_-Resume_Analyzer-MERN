import { useState } from "react";

function JobMatch({ onBack, onResult }) {
    const [resumeText, setResumeText] = useState("");
    const [jobDescription, setJobDescription] = useState("");

    const fillSample = () => {
    setResumeText(`Name: Rahul Kumar
Career Objective: Junior Web Developer
Education: BCA Graduate
Technical Skills: HTML, CSS, JavaScript, React, Python, SQL
Projects: Online Shopping Website, Student Management System
Soft Skills: Communication, Teamwork`);

    setJobDescription(`We are looking for a Junior Web Developer.
Required Skills: HTML, CSS, JavaScript, React, Node.js, MongoDB.
Responsibilities: Develop and maintain web applications.
Work with databases and frontend technologies.
Work effectively in a team.`);
};


    const skills = [
        "html", "css", "javascript", "react",
        "node.js", "mongodb", "express",
        "python", "java", "sql", "flask",
        "communication", "teamwork", "git"
    ];

    const checkMatch = () => {
        if (!resumeText.trim() || !jobDescription.trim()) {
            alert("Please enter both resume text and job description.");
            return;
        }

        const resume = resumeText.toLowerCase();
        const job = jobDescription.toLowerCase();

        const containsSkill = (text, skill) => {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i");
    return regex.test(text);
};

const requiredSkills = skills.filter(skill =>
    containsSkill(job, skill)
);

const matchingSkills = requiredSkills.filter(skill =>
    containsSkill(resume, skill)
);

        const missingSkills = requiredSkills.filter(skill =>
            !resume.includes(skill)
        );

        const score = requiredSkills.length === 0
            ? 0
            : Math.round(
                (matchingSkills.length / requiredSkills.length) * 100
            );

        onResult({
            score,
            matchingSkills,
            missingSkills,
            requiredSkills
        });
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#f3f4f6",
            padding: "30px",
            fontFamily: "Arial"
        }}>
            <button onClick={onBack}>← Back to Dashboard</button>

            <div style={{
                maxWidth: "750px",
                margin: "30px auto",
                background: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{ textAlign: "center", color: "#333" }}>
                    🎯 AI Job Description Matcher
                </h2>

                <p style={{ textAlign: "center", color: "#666" }}>
                    Check how well your resume matches a job.
                </p>

                <div style={{
    background: "#eef2ff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "left"
}}>
    <h3 style={{ color: "#4338ca" }}>
        📌 How to Use Job Matcher
    </h3>

    <p>1. Copy your resume text from your resume PDF.</p>
    <p>2. Paste it in the Resume Text box below.</p>
    <p>3. Copy a job description from a job vacancy.</p>
    <p>4. Paste it in the Job Description box.</p>
    <p>5. Click Check Job Match.</p>
    <p>6. View your matching skills and missing skills.</p>
</div>

<button
    onClick={fillSample}
    style={{
        padding: "10px 20px",
        backgroundColor: "#6c4ce4",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "15px"
    }}
>
    ✨ Try Sample
</button>

                <h3>Resume Text</h3>
                <textarea
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste your resume text here..."
                    rows="8"
                    style={{
                        width: "100%",
                        padding: "12px",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <h3>Job Description</h3>
                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Example: We are hiring a Web Developer. Required skills: HTML, CSS, React, Node.js..."
                    rows="8"
                    style={{
                        width: "100%",
                        padding: "12px",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        border: "1px solid #ccc"
                    }}
                />

                <button
                    onClick={checkMatch}
                    style={{
                        width: "100%",
                        padding: "14px",
                        marginTop: "20px",
                        background: "#e67e22",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Check Job Match
                </button>

                
            </div>
        </div>
    );
}

export default JobMatch;