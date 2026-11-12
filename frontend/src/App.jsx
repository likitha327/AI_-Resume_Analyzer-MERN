import Upload from "./Upload";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Result from "./Result";
import CVBuilder from "./CVBuilder";
import LiveCVPreview from "./LiveCVPreview";
import JobMatch from "./JobMatch";
import JobMatchResult from "./JobMatchResult";

function App() {
    const [page, setPage] = useState("register");
    const [analysisResult, setAnalysisResult] = useState(null);
    const [jobMatchResult, setJobMatchResult] = useState(null);

    if (page === "dashboard") {
        return (
            <Dashboard
    onUpload={() => setPage("upload")}
    onCreateCV={() => setPage("createcv")}
    onLiveCV={() => setPage("livecv")}
    onJobMatch={() => setPage("jobmatch")}
/>
        );
    }

    if (page === "createcv") {
        return (
            <CVBuilder
                onBack={() => setPage("dashboard")}
            />
        );
    }

    if (page === "livecv") {
    return (
        <LiveCVPreview
            onBack={() => setPage("dashboard")}
        />
    );
}

if (page === "jobmatch") {
    return (
        <JobMatch
            onBack={() => setPage("dashboard")}
            onResult={(data) => {
                setJobMatchResult(data);
                setPage("jobmatchresult");
            }}
        />
    );
}

if (page === "jobmatchresult") {
    return (
        <JobMatchResult
            result={jobMatchResult}
            onBack={() => setPage("dashboard")}
        />
    );
}

    if (page === "upload") {
        return (
            <Upload
            
                onAnalysisComplete={(data) => {
                    setAnalysisResult(data);
                    setPage("result");
                }}
                onBack={() => setPage("dashboard")}
            />
        );
    }

    if (page === "result") {
        return (
            <Result
                result={analysisResult}
                onBack={() => setPage("upload")}
            />
        );
    }

    return (
        <div style={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column"
}}>
            {page === "login" ? (
                <Login
                    onLoginSuccess={() => setPage("dashboard")}
                />
            ) : (
                <Register />
            )}

            <br />

            <button
                onClick={() =>
                    setPage(page === "login" ? "register" : "login")
                }
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#555",
                    color: "white",
                    fontSize: "14px",
                    cursor: "pointer"
                }}
            >
                {page === "login" ? "Go to Register" : "Go to Login"}
            </button>
        </div>
    );
}

export default App;