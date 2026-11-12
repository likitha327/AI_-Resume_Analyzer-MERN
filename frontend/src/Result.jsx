import { useState } from "react";
import "./Result.css";
function Result({ result, onBack }) {
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("UPI");
    return (
        <div
        className="result-container"
            style={{
                minHeight: "100vh",
                padding: "40px 20px",
                backgroundColor: "#f3f4f6"
            }}
        >
            <div
                style={{
                    maxwidth: "700px",
                    margin: "0 auto",
                    padding: "30px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)"
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "#222",
                        marginBottom: "30px"
                    }}
                >
                    📊 Resume Analysis Result
                </h2>

                <div className="result-box">
                    <h3>🎯 ATS Score</h3>
                    <div className="score">
                        {result?.atsScore}
                    </div>
                </div>

                <div className="result-box">
                    <strong>💪 Resume Strength</strong>
                    <p>{result?.strength}</p>
                </div>


                <div className="result-box">
                    <strong>📄 Resume Text Length</strong>
                    <p>{result?.textLength} characters</p>
                </div>

                <div className="result-box">
                    <strong>💡 Suggestion</strong>
                    <p>{result?.suggestion}</p>
                </div>

                <div className="result-box">
                    <h3>🛠️ Skills Found</h3>

                    {result?.foundSkills?.map((skill, index) => (
                        <p key={index} className="result-item">
                            ✓ {skill}
                        </p>
                    ))}
                </div>

                <div className="result-box">
                    <h3>⭐ Recommended Skills</h3>

                    {result?.recommendedSkills
                        ?.slice(0, 5)
                        .map((skill, index) => (
                            <span
                                key={index}
                                className="skill-item"
                            >
                                {skill}
                            </span>
                        ))}
                </div>

                <div className="result-box">
                    <h3>📝 Resume Feedback</h3>

                    {result?.feedback?.map((item, index) => (
                        <p key={index} className="result-item">
                            ✓ {item}
                        </p>
                    ))}
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    margintop: "20px"
                }}
              >      
                    <button
                    className="no-print"
                        onClick={() => setShowPayment(true)}
                        style={{
                            width: "220px",
                            padding: "12px 10px",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "16px"
                        }}
                    >
                        📥 Download Analysis Report
                    </button>

                    <button
                    className="no-print"
                        onClick={onBack}
                        style={{
                            width: "220px",
                            padding: "12px 10px",
                            backgroundcolor: "#333",
                            color: "#fff",
                            border: "none",
                            borderradius: "8px",
                            cursor: "pointer",
                            fontsize: "16px"
                        }}
                        >
                            Back to Upload 
                        </button>
                </div>
            </div>
            {showPayment && (
    <div
    className="no-print"
    style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "20px"
    }}>
        <div style={{
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            width: "100%",
            maxWidth: "450px"
        }}>
            <h2>Complete Your Download</h2>
            <h3>Amount: ₹49</h3>
            <p>Select a payment option:</p>

            {["UPI", "Credit / Debit Card", "Net Banking"].map((method) => (
                <label key={method} style={{
                    display: "block",
                    padding: "12px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                }}>
                    <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={selectedPaymentMethod === method}
                        onChange={() => setSelectedPaymentMethod(method)}
                    />
                    {" "}{method}
                </label>
            ))}

            <p style={{ color: "#666", fontSize: "13px" }}>
                Demo checkout only. No real payment will be processed.
            </p>

            <button
                type="button"
                onClick={() => {
                    alert("Demo payment successful! No money was deducted.");
                    setShowPayment(false);
                    setTimeout(() => {
                    window.print();
                },300);}}
                style={{
                    padding: "12px",
                    background: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    cursor: "pointer"
                }}
            >
                Continue – ₹49
            </button>

            <button
                type="button"
                onClick={() => setShowPayment(false)}
                style={{
                    padding: "12px",
                    background: "#777",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    marginTop: "10px",
                    cursor: "pointer"
                }}
            >
                Cancel
            </button>
        </div>
    </div>
)}
        </div>
        
        
    );
}

export default Result;