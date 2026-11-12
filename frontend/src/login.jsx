import { useState } from "react";

function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://127.0.0.1:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                onLoginSuccess();
            } else {
                alert(data.message);
            }
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
                textAlign: "center"
            }}
        >
            <div style={{
    color: "#312e81",
    fontSize: "26px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px"
}}>
     🔒 Login
</div>
        

            <form onSubmit={handleLogin}>
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
    Login
</button>
            </form>
        </div>
        </div>
    );
}

export default Login;