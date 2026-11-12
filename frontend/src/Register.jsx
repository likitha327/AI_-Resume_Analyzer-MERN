import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        alert("Register button clicked");

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            alert(data.message);
        } catch (error) {
            alert("Cannot connect to backend");
            console.log(error);
        }
    };

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
                    width: "350px",
                    padding: "30px",
                    border: "1px solid #ddd",
                    borderRadius: "15px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    backgroundColor: "#fff"
                }}
            >
                <h2
    style={{
        fontSize: "28px",
        fontWeight: "bold",
        color: "#222",
        marginBottom: "25px"
    }}
>
    📝 Register
</h2>

                <form onSubmit={handleRegister}>
                    <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{
        width: "90%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "15px"
    }}
/>

                    <br />
                    <br />

                    <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={{
        width: "90%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "15px"
    }}
/>

                    <br />
                    <br />

                    <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
        width: "90%",
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "15px"
    }}
/>

                    <br />
                    <br />

                    <button
    type="submit"
    style={{
        width: "95%",
        padding: "12px",
        backgroundColor: "#333",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
    }}
>
    Register
</button>
                </form>
            </div>
        </div>
    );
}

export default Register;