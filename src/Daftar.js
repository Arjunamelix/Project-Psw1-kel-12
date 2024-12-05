import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Daftar = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [berhasil, setBerhasil] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setBerhasil("Sign up berhasil! Anda akan diarahkan ke page sign in..");
    
    setTimeout(() => {
      navigate("/login");
    }, 3000);
    
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
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
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", lineHeight:"1.3" }}>
          Welcome To PhysicsUnveiled!
          </h2>
          <p style={{ fontSize: "18px", textAlign: "center" }}>
            Let's Study Together With Us
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
            Sign Up
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                backgroundColor: "#1a73e8 ",
                color: "#0D1B2A",
                cursor: "pointer",
              }}
            >
              Sign Up
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
                <p>Have An Account?
                    <button className="btn btn-link"
                    onClick={() => navigate ('/login')}>
                        Sign In Here
                    </button>
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
