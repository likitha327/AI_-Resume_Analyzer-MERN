import { useState } from "react";
import "./LiveCVPreview.css";

function LiveCVPreview({ onBack }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        objective: "",
        education: "",
        skills: "",
        projects: "",
        experience: "",
        certifications: ""
    });

    const [selectedTemplate, setSelectedTemplate] = useState("modern");
    const [showPayment, setShowPayment] = useState(false);
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("UPI");
    const updateField = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const inputStyle = {
        width: "100%",
        padding: "11px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "6px",
        boxSizing: "border-box"
    };

    return (
        <>
        <div style={{
            minHeight: "100vh",
            padding: "25px",
            background: "#f3f4f6",
            fontFamily: "Arial, sans-serif"
        }}>
            
            <button
                onClick={onBack}
                style={{
                    padding: "10px 18px",
                    background: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}
            >
                ← Back to Dashboard
            </button>

            

            <h1 style={{ textAlign: "center" }}>
                Live CV Preview
            </h1>
            <div style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "25px"
}}>
    {["modern", "corporate", "creative", "elegant", "professional"].map((template) => (
        <button
            key={template}
            onClick={() => setSelectedTemplate(template)}
            style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: "8px",
                background: selectedTemplate === template ? "#6c4ce4" : "#ddd",
                color: selectedTemplate === template ? "white" : "#333",
                cursor: "pointer"
            }}
        >
            {template.charAt(0).toUpperCase() + template.slice(1)}
        </button>
    ))}
</div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "25px",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>
                <div style={{
                    flex: "1 1 350px",
                    maxWidth: "500px",
                    background: "white",
                    padding: "25px",
                    borderRadius: "12px"
                }}>
                    <h2>Enter Your Details</h2>

                    {[
                        ["name", "Full Name"],
                        ["email", "Email"],
                        ["phone", "Phone Number"],
                        ["address", "Address"]
                    ].map(([field, label]) => (
                        <div key={field}>
                            <label>{label}</label>
                            <input
                                style={inputStyle}
                                name={field}
                                value={form[field]}
                                onChange={updateField}
                                placeholder={`Enter ${label.toLowerCase()}`}
                            />
                        </div>
                    ))}

                    {[
                        ["objective", "Career Objective"],
                        ["education", "Education"],
                        ["skills", "Skills"],
                        ["projects", "Projects"],
                        ["experience", "Work Experience"],
                        ["certifications", "Certifications"]
                    ].map(([field, label]) => (
                        <div key={field}>
                            <label>{label}</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name={field}
                                value={form[field]}
                                onChange={updateField}
                                placeholder={`Enter ${label.toLowerCase()}`}
                            />
                        </div>
                    ))}
                </div>

                <div 
                    className={`cv-preview $ {selectedTemplate}`}
                    style={{
                    flex: "1 1 350px",
                    maxWidth: "650px",
                    minHeight: "600px",
                    background: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 3px 12px #00000015"
                }}>
                    <h1>{form.name || "Your Name"}</h1>
                    <p>{form.email}</p>
                    <p>{form.phone}</p>
                    <p>{form.address}</p>

                    <hr />

                    <h3>Career Objective</h3>
                    <p>{form.objective}</p>

                    <h3>Education</h3>
                    <p>{form.education}</p>

                    <h3>Skills</h3>
                    <p>{form.skills}</p>

                    <h3>Projects</h3>
                    <p>{form.projects}</p>

                    <h3>Work Experience</h3>
                    <p>{form.experience}</p>

                    <h3>Certifications</h3>
                    <p>{form.certifications}</p>
                </div>
            </div>
        </div>
       <div style={{ textAlign: "center", marginTop: "20px" }}>
    <button
        onClick={() => setShowPayment(true)}
        style={{
            padding: "12px 30px",
            background: "#6c4ce4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
        }}
    >
        Download CV / PDF
    </button>
</div>

{showPayment && (
    <div style={{
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
            maxWidth: "450px",
            color: "#222"
        }}>
            <h2>Complete Your CV Download</h2>
            <h3>Amount: ₹49</h3>
            <p>Select a payment option:</p>

            {["Credit / Debit Card", "UPI", "Net Banking"].map((method) => (
                <label key={method} style={{
                    display: "block",
                    padding: "12px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}>
                    <input
                        type="radio"
                        name="livePayment"
                        value={method}
                        checked={selectedPaymentMethod === method}
                        onChange={() => setSelectedPaymentMethod(method)}
                    />
                    {" "}{method}
                </label>
            ))}

            <p style={{ color: "#666", fontSize: "13px" }}>
                Demo checkout only. No real payment will be processed.
                Do not enter financial details.
            </p>

            <button
                type="button"
                onClick={() => {
                    alert("Demo payment successful! No money was deducted.");
                    setShowPayment(false);
                    window.print();
                }}
                style={{
                    padding: "12px",
                    background: "#6c4ce4",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    cursor: "pointer"
                }}
            >
                Continue to Demo Payment – ₹49
            </button>

            <button
                type="button"
                onClick={() => setShowPayment(false)}
                style={{
                    padding: "12px",
                    background: "#555",
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
</>
    );
}
export default LiveCVPreview;