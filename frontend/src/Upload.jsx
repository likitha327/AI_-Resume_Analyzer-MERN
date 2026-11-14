import { useState } from "react";
import { apiUrl } from "./api";

function Upload({ onAnalysisComplete ,onBack }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleAnalyze = async () => {
        if (!file) {
            alert("Please select a resume first.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("resume", file);

            const response = await fetch(
                apiUrl("/api/resume/analyze"),
                {
                    method: "POST",
                    body: formData
                }
            );

            const data = await response.json();

            if (response.ok) {
                onAnalysisComplete(data);
            } else {
                alert(data.message || "Resume analysis failed");
            }
        } catch (error) {
            console.error(error);
            alert("Cannot connect to backend");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "40px 20px",
                backgroundColor: "#f3f4f6"
            }}
        >
            <div
                style={{
                    maxWidth: "650px",
                    margin: "0 auto",
                    padding: "40px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    textAlign: "center"
                }}
            >
                <h2
                    style={{
                        color: "#222",
                        fontSize: "30px",
                        fontWeight: "bold",
                        marginBottom: "10px"
                    }}
                >
                    📄 Upload Your Resume
                </h2>
                <button
    onClick={onBack}
    style={{
        padding: "10px 20px",
        backgroundColor: "#6c4ce4",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "20px"
    }}
>
    ⬅ Back to Dashboard
</button>

                <p
                    style={{
                        color: "#666",
                        fontSize: "16px",
                        marginBottom: "30px"
                    }}
                >
                    Upload your resume and get an AI-powered analysis.
                </p>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{
                        width: "90%",
                        padding: "15px",
                        border: "2px dashed #999",
                        borderRadius: "12px",
                        backgroundColor: "#fafafa",
                        cursor: "pointer",
                        fontSize: "14px",
                        marginBottom: "25px"
                    }}
                />

                <br />

                <button
                    onClick={handleAnalyze}
                    style={{
                        padding: "13px 30px",
                        backgroundColor: "#333",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginTop: "5px"
                    }}
                >
                    🔍 Analyze Resume
                </button>
            </div>
        </div>
    );
}

export default Upload;
