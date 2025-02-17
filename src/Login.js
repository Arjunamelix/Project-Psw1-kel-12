import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [berhasil, setBerhasil] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      setBerhasil("Sign in berhasil! Anda akan diarahkan ke homepage..");
    
      localStorage.setItem("currentUser", email);
      
      setTimeout(() => {
        navigate("/menuhome");
      }, 3000);
    } else {
      setBerhasil("Email atau password salah!");
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
            textAlign:"center"
          }}
        >
          <h2 style={{ fontSize: "25px", fontWeight: "700", marginBottom: "15px" }}>
            Welcome Back Again!
          </h2>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            You Should Sign in to Access This Website
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
                color: "#fff",
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
                color: "#fff",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#1a73e8",
                color: "#0D1B2A",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

            {berhasil && (
            <p style={{
              marginTop:"10px",
              color:"#00FF00",
              textAlign:"center",
              fontWeight:"bold",
            }}>
              {berhasil}
            </p>
              )}

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
