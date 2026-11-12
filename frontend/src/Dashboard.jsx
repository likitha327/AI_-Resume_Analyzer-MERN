function Dashboard({ onUpload, onCreateCV, onLiveCV, onJobMatch }) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f3f4f6"
            }}
        >
            <div
                style={{
                    width: "450px",
                    maxWidth: "85%",
                    padding: "40px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
            >
                <h2
                    style={{
                        color: "#222",
                        fontSize: "26px",
                        fontWeight: "bold",
                        marginBottom: "15px"
                    }}
                >
                    📄 Welcome to AI Resume Analyzer
                </h2>

                <p
                    style={{
                        color: "#555",
                        fontSize: "16px",
                        marginBottom: "25px"
                    }}
                >
                    Create your CV or analyze your existing resume.
                </p>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}
                >
                    <button
                        onClick={onCreateCV}
                        style={{
                            padding: "12px 25px",
                            backgroundColor: "#6c4ce4",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        ✨ Create CV
                    </button>

                    <button
                        onClick={onLiveCV}
                        style={{
                            padding: "12px 25px",
                            backgroundColor: "#0f9d8a",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        👁️ Live CV Preview
                    </button>

                    <button
                        onClick={onUpload}
                        style={{
                            padding: "12px 25px",
                            backgroundColor: "#333",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >
                        📤 Upload Resume
                    </button>
                    <button
    onClick={onJobMatch}
    style={{
        padding: "12px 25px",
        backgroundColor: "#e67e22",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
    }}
>
    🎯 Job Description Match
</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;