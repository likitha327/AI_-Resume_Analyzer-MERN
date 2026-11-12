function JobMatchResult({ result, onBack }) {
    if (!result) return null;

    return (
        <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0e7ff, #f3e8ff, #dbeafe)",
    padding: "30px",
    fontFamily: "Arial"

        }}>
            <div style={{
                maxWidth: "750px",
                margin: "30px auto",
                padding: "30px",
                background: "#ffffff",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(80, 60, 150, 0.15)",
                border: "1px solid #ddd6fe"
            }}>
                <h2 style={{ textAlign: "center",color: "#6c4ce4" }}>
                    🎯 Job Match Results
                </h2>

                <h1 style={{
                    textAlign: "center",
                    color: "#6c4ce4",
                    fontSize: "40px"
                }}>
                    {result.score}%
                </h1>

                <p style={{ textAlign: "center" }}>
                    Job Match Score
                </p>

                <hr />

                <h3 style={{ color: "green" }}>
                    Matching Skills
                </h3>
                <p>
                    {result.matchingSkills.join(", ") || "None found"}
                </p>

                <h3 style={{ color: "#e67e22" }}>
                    Missing Skills
                </h3>
                <p>
                    {result.missingSkills.join(", ") || "None"}
                </p>

                <h3>Suggestions</h3>
                <p>
                    {result.missingSkills.length > 0
                        ? "If you have these skills, consider adding relevant examples to your resume: " +
                          result.missingSkills.join(", ")
                        : "Your resume includes all detected skills in this job description."}
                </p>

                <p style={{ color: "#777", fontSize: "13px" }}>
                    This score is based on keyword matching.
                </p>

                <button
                    onClick={onBack}
                    style={{
                        width: "100%",
                        padding: "13px",
                        marginTop: "20px",
                        background: "#333",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    ← Back to Dashboard
                </button>
            </div>
        </div>
    );
}

export default JobMatchResult;