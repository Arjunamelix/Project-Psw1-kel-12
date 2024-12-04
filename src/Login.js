import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("Login berhasil!");
      navigate("/menuhome");
    } else {
      alert("Email atau password salah!");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "FFFFFF",
        padding: "20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#1B263B",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "900px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "50%",
            padding: "40px",
            backgroundColor: "#0D1B2A",
            color: "#FFD700",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
            Welcome back again!
          </h2>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            Silakan login untuk melanjutkan belajar bersama kami.
          </p>
        </div>
        <div
          style={{
            padding: "40px",
            width: "50%",
            backgroundColor: "#1B263B",
          }}
        >
          <h3
            style={{
              color: "#FFD700",
              fontSize: "24px",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Sign In
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #394867",
                backgroundColor: "#273A50",
                color: "#FFD700",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #394867",
                backgroundColor: "#273A50",
                color: "#FFD700",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFD700",
                color: "#0D1B2A",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

            <div className="mt-3 text-center">
                <p>Don't Have An Account?
                    <button className="btn btn-link"
                    onClick={() => navigate ('/daftar')}>
                        Sign Up Here
                    </button>
                </p>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
