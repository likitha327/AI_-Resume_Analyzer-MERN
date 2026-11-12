import { useState } from "react";

const templates = [
    { id: 1, name: "Classic Professional", color: "#b08d57" },
    { id: 2, name: "Modern Blue", color: "#2563eb" },
    { id: 3, name: "Elegant Minimal", color: "#9b8065" },
    { id: 4, name: "Creative Teal", color: "#0f766e" },
    { id: 5, name: "Tech Professional", color: "#7c3aed" }
];

const initialForm = {
    name: "",
    email: "",
    phone: "",
    address: "",
    objective: "",
    education: "",
    skills: "",
    projects: "",
    experience: "",
    certifications: "",
    photo: ""
};

function CVBuilder({ onBack }) {
    const [step, setStep] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("UPI");

    const selected = templates.find(
        (template) => template.id === selectedTemplate
    );

    const updateField = (event) => {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setForm((previous) => ({
                ...previous,
                photo: URL.createObjectURL(file)
            }));
        }
    };

    const handleClearForm = () => {
        const confirmClear = window.confirm(
            "Are you sure you want to clear all CV details?"
        );

        if (confirmClear) {
            setForm({ ...initialForm });
        }
    };

    const buttonStyle = {
        padding: "12px 22px",
        border: "none",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: "bold",
        margin: "6px"
    };

    const inputStyle = {
        width: "100%",
        padding: "12px",
        marginTop: "7px",
        marginBottom: "16px",
        border: "1px solid #d1d5db",
        borderRadius: "7px",
        boxSizing: "border-box",
        fontSize: "15px"
    };

    const labelStyle = {
        fontWeight: "bold",
        color: "#374151"
    };
    const sectionData = [
        ["Career Objective", form.objective],
        ["Education", form.education],
        ["Skills", form.skills],
        ["Projects", form.projects],
        ["Work Experience", form.experience],
        ["Certifications", form.certifications]
    ];

    const sections = sectionData.filter(
        ([title, content]) => content.trim() !== ""
    );

    const contact = [form.email, form.phone, form.address]
        .filter(Boolean)
        .join(" | ");

    const sectionStyle = {
        marginTop: "22px",
        lineHeight: 1.6,
        overflowWrap: "anywhere"
    };

    const renderSections = (headingColor, background = "transparent") => (
        sections.map(([title, content]) => (
            <section key={title} style={{
                ...sectionStyle,
                background,
                padding: background === "transparent" ? "0" : "10px",
                borderRadius: "6px"
            }}>
                <h3 style={{
                    color: headingColor,
                    fontSize: "16px",
                    borderBottom: `1px solid ${headingColor}`,
                    paddingBottom: "6px"
                }}>
                    {title}
                </h3>
                <p style={{
                    whiteSpace: "pre-wrap",
                    fontSize: "14px"
                }}>
                    {content}
                </p>
            </section>
        ))
    );

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 1:
                return (
                    <div style={{
                        fontFamily: "Georgia, serif",
                        background: "#ffffff",
                        color: "#292929",
                        minHeight: "700px"
                    }}>
                        <div style={{
                            background: "#252525",
                            color: "white",
                            padding: "38px 30px",
                            display: "flex",
                            alignItems: "center",
                            gap: "25px",
                            borderBottom: "6px solid #c5a15d"
                        }}>
                            <div style={{
    width: "105px",
    height: "105px",
    minWidth: "105px",
    border: "3px solid #c5a15d",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "38px",
    color: "#c5a15d",
    fontFamily: "Arial, sans-serif"
}}>
    {form.photo ? (
        <img
            src={form.photo}
            alt="Profile"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}
        />
    ) : (
        (form.name || "Y").charAt(0).toUpperCase()
    )}
</div>

                            <div>
                                <p style={{
                                    color: "#c5a15d",
                                    letterSpacing: "4px",
                                    fontSize: "11px",
                                    margin: "0 0 10px"
                                }}>
                                    PROFESSIONAL RESUME
                                </p>

                                <h1 style={{
                                    fontSize: "30px",
                                    margin: "0 0 12px",
                                    letterSpacing: "1px"
                                }}>
                                    {form.name || "YOUR NAME"}
                                </h1>

                                <p style={{
                                    fontSize: "12px",
                                    color: "#e5e5e5",
                                    lineHeight: 1.8,
                                    overflowWrap: "anywhere"
                                }}>
                                    {contact || "Email | Phone | Address"}
                                </p>
                            </div>
                        </div>

                        <div style={{
                            padding: "30px 35px"
                        }}>
                            <div style={{
                                display: "flex",
                                gap: "25px",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    flex: 1,
                                    minWidth: 0
                                }}>
                                    <h2 style={{
                                        color: "#a47d38",
                                        fontSize: "17px",
                                        letterSpacing: "2px",
                                        borderBottom: "2px solid #c5a15d",
                                        paddingBottom: "9px"
                                    }}>
                                        PROFILE
                                    </h2>

                                    <p style={{
                                        fontSize: "14px",
                                        lineHeight: 1.8
                                    }}>
                                        {form.objective || "Your professional summary will appear here."}
                                    </p>
                                </div>

                                <div style={{
                                    width: "35%",
                                    background: "#f5f1e8",
                                    padding: "15px",
                                    borderTop: "3px solid #c5a15d",
                                    boxSizing: "border-box"
                                }}>
                                    <h3 style={{
                                        color: "#a47d38",
                                        fontSize: "14px"
                                    }}>
                                        KEY SKILLS
                                    </h3>

                                    <p style={{
                                        fontSize: "13px",
                                        lineHeight: 1.8,
                                        whiteSpace: "pre-wrap"
                                    }}>
                                        {form.skills || "Your skills"}
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                marginTop: "25px"
                            }}>
                                {sections
                                    .filter(([title]) => title !== "Career Objective" && title !== "Skills")
                                    .map(([title, content]) => (
                                        <section key={title} style={{
                                            marginBottom: "22px"
                                        }}>
                                            <h3 style={{
                                                color: "#a47d38",
                                                fontSize: "15px",
                                                letterSpacing: "1px",
                                                borderBottom: "1px solid #c5a15d",
                                                paddingBottom: "7px"
                                            }}>
                                                {title.toUpperCase()}
                                            </h3>

                                            <p style={{
                                                fontSize: "14px",
                                                lineHeight: 1.8,
                                                whiteSpace: "pre-wrap"
                                            }}>
                                                {content}
                                            </p>
                                        </section>
                                    ))}
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div style={{
                        display: "flex",
                        minHeight: "700px",
                        fontFamily: "Arial, sans-serif",
                        color: "#263448",
                        background: "#ffffff"
                    }}>
                        <div style={{
                            width: "34%",
                            background: "#183b63",
                            color: "white",
                            padding: "30px 20px",
                            boxSizing: "border-box"
                        }}>
                            <div style={{
                                width: "95px",
                                height: "95px",
                                borderRadius: "50%",
                                background: "#ffffff",
                                color: "#183b63",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "38px",
                                fontWeight: "bold",
                                margin: "0 auto 22px",
                                overflow: "hidden",
                                border: "3px solid white"
                            }}>
                                {form.photo ? (
                                    <img
                                        src={form.photo}
                                        alt="Profile"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                ) : (
                                    (form.name || "Y").charAt(0).toUpperCase()
                                )}
                            </div>

                            <h2 style={{
                                textAlign: "center",
                                fontSize: "21px",
                                overflowWrap: "anywhere"
                            }}>
                                {form.name || "YOUR NAME"}
                            </h2>

                            <p style={{
                                textAlign: "center",
                                fontSize: "11px",
                                lineHeight: 1.8,
                                color: "#dce8f5",
                                overflowWrap: "anywhere"
                            }}>
                                {contact || "Email | Phone | Address"}
                            </p>

                            <hr style={{
                                border: "1px solid #6d91b8",
                                margin: "25px 0"
                            }} />

                            <h3 style={{
                                fontSize: "15px",
                                letterSpacing: "2px"
                            }}>
                                KEY SKILLS
                            </h3>

                            <p style={{
                                fontSize: "13px",
                                lineHeight: 1.9,
                                whiteSpace: "pre-wrap"
                            }}>
                                {form.skills || "Your skills"}
                            </p>
                        </div>

                        <div style={{
                            flex: 1,
                            padding: "35px 28px",
                            boxSizing: "border-box"
                        }}>
                            <h2 style={{
                                color: "#183b63",
                                fontSize: "18px",
                                borderBottom: "3px solid #3d83bd",
                                paddingBottom: "9px"
                            }}>
                                PROFESSIONAL PROFILE
                            </h2>

                            <p style={{
                                fontSize: "14px",
                                lineHeight: 1.8,
                                marginBottom: "30px"
                            }}>
                                {form.objective || "Your professional summary will appear here."}
                            </p>

                            {sections
                                .filter(([title]) => title !== "Career Objective" && title !== "Skills")
                                .map(([title, content]) => (
                                    <section key={title} style={{
                                        marginBottom: "25px"
                                    }}>
                                        <h3 style={{
                                            color: "#183b63",
                                            fontSize: "16px",
                                            borderBottom: "2px solid #3d83bd",
                                            paddingBottom: "8px"
                                        }}>
                                            {title.toUpperCase()}
                                        </h3>

                                        <p style={{
                                            fontSize: "14px",
                                            lineHeight: 1.8,
                                            whiteSpace: "pre-wrap"
                                        }}>
                                            {content}
                                        </p>
                                    </section>
                                ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div style={{
                        background: "#faf8f3",
                        color: "#34312d",
                        minHeight: "700px",
                        padding: "40px",
                        fontFamily: "Georgia, serif",
                        boxSizing: "border-box"
                    }}>
                        <div style={{
                            textAlign: "center",
                            padding: "25px 10px",
                            borderTop: "3px solid #ad9270",
                            borderBottom: "3px solid #ad9270"
                        }}>
                            <p style={{
                                letterSpacing: "5px",
                                color: "#ad9270",
                                fontSize: "11px"
                            }}>
                                CURRICULUM VITAE
                            </p>

                            <h1 style={{
                                fontSize: "32px",
                                fontWeight: "normal",
                                letterSpacing: "2px",
                                margin: "12px 0"
                            }}>
                                {form.name || "YOUR NAME"}
                            </h1>

                            <p style={{
                                fontSize: "12px",
                                color: "#746b60",
                                lineHeight: 1.8,
                                overflowWrap: "anywhere"
                            }}>
                                {contact || "Email | Phone | Address"}
                            </p>
                        </div>

                        <div style={{
                            padding: "25px 5px"
                        }}>
                            <h2 style={{
                                textAlign: "center",
                                color: "#ad9270",
                                fontSize: "16px",
                                letterSpacing: "3px"
                            }}>
                                PROFILE
                            </h2>

                            <p style={{
                                fontSize: "14px",
                                lineHeight: 1.9,
                                textAlign: "center",
                                marginBottom: "30px"
                            }}>
                                {form.objective || "Your professional summary will appear here."}
                            </p>

                            <div style={{
                                background: "#eee8dc",
                                padding: "18px 22px",
                                marginBottom: "25px"
                            }}>
                                <h3 style={{
                                    color: "#927653",
                                    fontSize: "14px",
                                    letterSpacing: "2px"
                                }}>
                                    SKILLS
                                </h3>

                                <p style={{
                                    fontSize: "14px",
                                    lineHeight: 1.9,
                                    whiteSpace: "pre-wrap"
                                }}>
                                    {form.skills || "Your skills"}
                                </p>
                            </div>

                            {sections
                                .filter(([title]) => title !== "Career Objective" && title !== "Skills")
                                .map(([title, content]) => (
                                    <section key={title} style={{
                                        marginBottom: "24px"
                                    }}>
                                        <h3 style={{
                                            color: "#927653",
                                            fontSize: "15px",
                                            letterSpacing: "2px",
                                            borderBottom: "1px solid #ad9270",
                                            paddingBottom: "8px"
                                        }}>
                                            {title.toUpperCase()}
                                        </h3>

                                        <p style={{
                                            fontSize: "14px",
                                            lineHeight: 1.9,
                                            whiteSpace: "pre-wrap"
                                        }}>
                                            {content}
                                        </p>
                                    </section>
                                ))}
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div style={{
                        background: "#ffffff",
                        color: "#263b3b",
                        minHeight: "700px",
                        fontFamily: "Arial, sans-serif"
                    }}>
                        <div style={{
                            background: "#176b68",
                            color: "white",
                            padding: "38px 32px",
                            borderBottom: "8px solid #d6a85f"
                        }}>
                            <p style={{
                                color: "#f2d49d",
                                letterSpacing: "4px",
                                fontSize: "11px"
                            }}>
                                CREATIVE PROFESSIONAL
                            </p>

                            <h1 style={{
                                fontSize: "32px",
                                margin: "12px 0"
                            }}>
                                {form.name || "YOUR NAME"}
                            </h1>

                            <p style={{
                                fontSize: "12px",
                                lineHeight: 1.8,
                                color: "#e0f1ed",
                                overflowWrap: "anywhere"
                            }}>
                                {contact || "Email | Phone | Address"}
                            </p>
                        </div>

                        <div style={{
                            padding: "28px 32px"
                        }}>
                            <div style={{
                                background: "#eaf4f1",
                                borderLeft: "5px solid #176b68",
                                padding: "18px 20px",
                                marginBottom: "28px"
                            }}>
                                <h2 style={{
                                    color: "#176b68",
                                    fontSize: "16px",
                                    letterSpacing: "2px",
                                    marginTop: 0
                                }}>
                                    ABOUT ME
                                </h2>

                                <p style={{
                                    fontSize: "14px",
                                    lineHeight: 1.8,
                                    marginBottom: 0
                                }}>
                                    {form.objective || "Your professional summary will appear here."}
                                </p>
                            </div>

                            <div style={{
                                display: "flex",
                                gap: "25px",
                                alignItems: "flex-start"
                            }}>
                                <div style={{
                                    width: "32%",
                                    background: "#f3f7f5",
                                    padding: "15px",
                                    boxSizing: "border-box"
                                }}>
                                    <h3 style={{
                                        color: "#176b68",
                                        fontSize: "14px",
                                        letterSpacing: "1px"
                                    }}>
                                        MY SKILLS
                                    </h3>

                                    <p style={{
                                        fontSize: "13px",
                                        lineHeight: 1.9,
                                        whiteSpace: "pre-wrap"
                                    }}>
                                        {form.skills || "Your skills"}
                                    </p>
                                </div>

                                <div style={{
                                    flex: 1,
                                    minWidth: 0
                                }}>
                                    {sections
                                        .filter(([title]) => title !== "Career Objective" && title !== "Skills")
                                        .map(([title, content]) => (
                                            <section key={title} style={{
                                                marginBottom: "24px"
                                            }}>
                                                <h3 style={{
                                                    color: "#176b68",
                                                    fontSize: "15px",
                                                    borderBottom: "2px solid #d6a85f",
                                                    paddingBottom: "8px"
                                                }}>
                                                    {title.toUpperCase()}
                                                </h3>

                                                <p style={{
                                                    fontSize: "14px",
                                                    lineHeight: 1.8,
                                                    whiteSpace: "pre-wrap"
                                                }}>
                                                    {content}
                                                </p>
                                            </section>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div style={{
                        background: "#ffffff",
                        color: "#292b45",
                        minHeight: "700px",
                        fontFamily: "Arial, sans-serif"
                    }}>
                        <div style={{
                            background: "#29264f",
                            color: "white",
                            padding: "38px 32px",
                            borderBottom: "7px solid #8b78d6"
                        }}>
                            <p style={{
                                color: "#c3b5ff",
                                letterSpacing: "4px",
                                fontSize: "11px"
                            }}>
                                TECHNOLOGY & PROFESSIONAL PROFILE
                            </p>

                            <h1 style={{
                                fontSize: "32px",
                                margin: "12px 0"
                            }}>
                                {form.name || "YOUR NAME"}
                            </h1>

                            <p style={{
                                color: "#e0dcf5",
                                fontSize: "12px",
                                lineHeight: 1.8,
                                overflowWrap: "anywhere"
                            }}>
                                {contact || "Email | Phone | Address"}
                            </p>
                        </div>

                        <div style={{
                            padding: "30px 32px"
                        }}>
                            <div style={{
                                background: "#f1effb",
                                padding: "20px",
                                borderRadius: "8px",
                                borderLeft: "5px solid #7563bd",
                                marginBottom: "28px"
                            }}>
                                <h2 style={{
                                    color: "#51438f",
                                    fontSize: "16px",
                                    letterSpacing: "2px",
                                    marginTop: 0
                                }}>
                                    PROFESSIONAL SUMMARY
                                </h2>

                                <p style={{
                                    fontSize: "14px",
                                    lineHeight: 1.8,
                                    marginBottom: 0
                                }}>
                                    {form.objective || "Your professional summary will appear here."}
                                </p>
                            </div>

                            <h2 style={{
                                color: "#51438f",
                                fontSize: "16px",
                                letterSpacing: "2px",
                                borderBottom: "2px solid #8b78d6",
                                paddingBottom: "9px"
                            }}>
                                TECHNICAL SKILLS
                            </h2>

                            <p style={{
                                background: "#f7f6fc",
                                padding: "15px",
                                fontSize: "14px",
                                lineHeight: 1.9,
                                whiteSpace: "pre-wrap",
                                borderRadius: "6px"
                            }}>
                                {form.skills || "Your skills"}
                            </p>

                            {sections
                                .filter(([title]) => title !== "Career Objective" && title !== "Skills")
                                .map(([title, content]) => (
                                    <section key={title} style={{
                                        marginTop: "25px"
                                    }}>
                                        <h3 style={{
                                            color: "#51438f",
                                            fontSize: "15px",
                                            letterSpacing: "1px",
                                            borderBottom: "1px solid #b9afe8",
                                            paddingBottom: "8px"
                                        }}>
                                            {title.toUpperCase()}
                                        </h3>

                                        <p style={{
                                            fontSize: "14px",
                                            lineHeight: 1.8,
                                            whiteSpace: "pre-wrap"
                                        }}>
                                            {content}
                                        </p>
                                    </section>
                                ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };
    const printStyles = `
        @page {
            size: A4;
            margin: 12mm;
        }

        @media print {
            body {
                background: white !important;
                margin: 0 !important;
            }

            body * {
                visibility: hidden;
            }

            #cv-preview,
            #cv-preview * {
                visibility: visible;
            }

            #cv-preview {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 100% !important;
                max-width: none !important;
                min-height: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border: none !important;
            }
        }
    `;

    return (
        <>
            <style>{printStyles}</style>

            <div style={{
                minHeight: "100vh",
                padding: "25px",
                background: "#f3f4f6",
                fontFamily: "Arial, sans-serif"
            }}>

                <button
                    onClick={() => {
                        if (step === 1) {
                            if (onBack) onBack();
                        } else {
                            setStep(step - 1);
                        }
                    }}
                    style={{
                        ...buttonStyle,
                        background: "#333"
                    }}
                >
                    ← {step === 1 ? "Back to Dashboard" : "Previous Page"}
                </button>

                <p style={{
                    textAlign: "center",
                    color: "#666"
                }}>
                    Step {step} of 3
                </p>

                {step === 1 && (
                    <div>
                        <h1 style={{
                            textAlign: "center",
                            color: "#222"
                        }}>
                            Choose Your CV Template
                        </h1>

                        <p style={{
                            textAlign: "center",
                            color: "#666"
                        }}>
                            Select a design for your professional CV.
                        </p>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                            gap: "20px",
                            maxWidth: "1000px",
                            margin: "30px auto"
                        }}>
                            {templates.map((template) => (
                                <div
                                    key={template.id}
                                    onClick={() => setSelectedTemplate(template.id)}
                                    style={{
                                        background: "white",
                                        borderRadius: "12px",
                                        padding: "22px",
                                        cursor: "pointer",
                                        border: selectedTemplate === template.id
                                            ? `3px solid ${template.color}`
                                            : "2px solid #e5e7eb",
                                        boxShadow: "0 3px 12px #00000010"
                                    }}
                                >
                                    <div style={{
                                        height: "150px",
                                        background: "#f9fafb",
                                        borderRadius: "8px",
                                        padding: "15px",
                                        boxSizing: "border-box"
                                    }}>
                                        <div style={{
                                            height: "15px",
                                            width: "65%",
                                            background: template.color,
                                            borderRadius: "4px",
                                            marginBottom: "15px"
                                        }} />

                                        <div style={{
                                            height: "7px",
                                            width: "90%",
                                            background: "#d1d5db",
                                            marginBottom: "10px"
                                        }} />

                                        <div style={{
                                            height: "7px",
                                            width: "75%",
                                            background: "#d1d5db",
                                            marginBottom: "18px"
                                        }} />

                                        <div style={{
                                            height: "7px",
                                            width: "85%",
                                            background: template.color,
                                            marginBottom: "10px"
                                        }} />

                                        <div style={{
                                            height: "7px",
                                            width: "70%",
                                            background: "#d1d5db"
                                        }} />
                                    </div>

                                    <h3 style={{
                                        textAlign: "center",
                                        color: template.color
                                    }}>
                                        {template.name}
                                    </h3>

                                    <button
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            setSelectedTemplate(template.id);
                                            setStep(2);
                                        }}
                                        style={{
                                            ...buttonStyle,
                                            background: template.color,
                                            width: "100%",
                                            margin: "0"
                                        }}
                                    >
                                        Select Template
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div style={{
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "25px",
    maxWidth: "1400px",
    margin: "25px auto"
}}>
    <div style={{
        flex: "1 1 450px",
        maxWidth: "650px",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 3px 12px #00000010"
    }}>
                        <h1 style={{
                            textAlign: "center",
                            color: selected.color
                        }}>
                            Enter Your CV Details
                        </h1>

                        <form onSubmit={(event) => {
                            event.preventDefault();
                            setStep(3);
                        }}>
                            <label style={labelStyle}>Full Name</label>
                            <input
                                style={inputStyle}
                                name="name"
                                value={form.name}
                                onChange={updateField}
                                placeholder="Enter your full name"
                                required
                            />
                            <label style={labelStyle}>Upload Your Photo</label>
                            <input
                                style={inputStyle}
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />

                            {form.photo && (
    <div style={{ marginBottom: "16px" }}>
        <img
            src={form.photo}
            alt="Selected profile"
            style={{
                width: "110px",
                height: "110px",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                marginBottom: "10px"
            }}
        />

        <button
            type="button"
            onClick={() => {
                setForm((previous) => ({
                    ...previous,
                    photo: ""
                }));
            }}
            style={{
                padding: "8px 15px",
                background: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
            }}
        >
            Remove Photo
        </button>
    </div>
)}
                            <label style={labelStyle}>Email</label>
                            <input
                                style={inputStyle}
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={updateField}
                                placeholder="Enter your email"
                            />

                            <label style={labelStyle}>Phone Number</label>
                            <input
                                style={inputStyle}
                                name="phone"
                                value={form.phone}
                                onChange={updateField}
                                placeholder="Enter your phone number"
                            />

                            <label style={labelStyle}>Address</label>
                            <input
                                style={inputStyle}
                                name="address"
                                value={form.address}
                                onChange={updateField}
                                placeholder="Enter your address"
                            />

                            <label style={labelStyle}>Career Objective</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="objective"
                                value={form.objective}
                                onChange={updateField}
                                placeholder="Write your career objective"
                            />

                            <label style={labelStyle}>Education</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="education"
                                value={form.education}
                                onChange={updateField}
                                placeholder="Enter your education details"
                            />

                            <label style={labelStyle}>Skills</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="skills"
                                value={form.skills}
                                onChange={updateField}
                                placeholder="Enter your skills"
                            />

                            <label style={labelStyle}>Projects</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="projects"
                                value={form.projects}
                                onChange={updateField}
                                placeholder="Describe your projects"
                            />

                            <label style={labelStyle}>Work Experience</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="experience"
                                value={form.experience}
                                onChange={updateField}
                                placeholder="Enter your work experience"
                            />

                            <label style={labelStyle}>Certifications</label>
                            <textarea
                                style={inputStyle}
                                rows="3"
                                name="certifications"
                                value={form.certifications}
                                onChange={updateField}
                                placeholder="Enter your certifications"
                            />
                            <div style={{
                                textAlign: "center",
                                marginTop: "20px"
                            }}>
                                <button
                                    type="button"
                                    onClick={handleClearForm}
                                    style={{
                                        ...buttonStyle,
                                        background: "#dc2626"
                                    }}
                                >
                                    Clear All Details
                                </button>
                            </div>

                            <div style={{ textAlign: "center" }}>
                                <button
                                    type="submit"
                                    style={{
                                        ...buttonStyle,
                                        background: selected.color
                                    }}
                                >
                                    Generate CV Preview →
                                </button>
                            </div>
                        </form>
                    </div>
                    
</div>
                )}

                {step === 3 && (
                    <>
                        <h1 style={{
                            textAlign: "center",
                            color: "#222"
                        }}>
                            Your CV Preview
                        </h1>

                        <p style={{
                            textAlign: "center",
                            color: selected.color,
                            fontWeight: "bold"
                        }}>
                            {selected.name}
                        </p>

                        <div
                            id="cv-preview"
                            style={{
                                maxWidth: "750px",
                                minHeight: "700px",
                                margin: "25px auto",
                                background: "white",
                                boxShadow: "0 3px 12px #00000015",
                                overflowWrap: "anywhere"
                            }}
                        >
                            {renderTemplate()}
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "12px",
                            margin: "25px"
                        }}>
                            <button
                                onClick={() => setStep(2)}
                                style={{
                                    ...buttonStyle,
                                    background: "#333"
                                }}
                            >
                                Edit Details
                            </button>

                            <button
                                onClick={() => setShowPayment(true)}
                                style={{
                                    ...buttonStyle,
                                    background: selected.color
                                }}
                            >
                                Download / Print PDF
                            </button>
                        </div>
                    </>
                )}
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
            maxWidth: "450px"
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
                        name="payment"
                        value={method}
                        checked={selectedPaymentMethod === method}
                        onChange={() => setSelectedPaymentMethod(method)}
                    />
                    {" "}{method}
                </label>
            ))}

            <p style={{ color: "#666", fontSize: "13px" }}>
                This is a simulated checkout. No payment will be processed
                and no financial details should be entered.
            </p>

            <button
                type="button"
                onClick={() => {
                    alert("Payment successful! No money was deducted.");
                    setShowPayment(false);
                    window.print();
                }}
                style={{
                    ...buttonStyle,
                    background: selected.color,
                    width: "100%",
                    marginTop: "10px"
                }}
            >
                Continue to Demo payment – ₹49
            </button>

            <button
                type="button"
                onClick={() => setShowPayment(false)}
                style={{
                    ...buttonStyle,
                    background: "#555",
                    width: "100%",
                    marginTop: "10px"
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

export default CVBuilder;