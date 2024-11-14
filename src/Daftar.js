import React from "react";
import { useState } from "react";
import { useNavigate , } from "react-router-dom";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const Daftar =() => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [schoolname, setSchoolname] = useState('');
    const [message, setMessage] = useState('');
    const [schooladdress, setSchooladdress] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [district, setDistrict] = useState('');
    const [province, setProvince] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    
    const handleTogglePasswordVisibility = () => setShowPassword (!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Mauliate, ${username}! Kamu telah mendaftar di web ini.`);

        localStorage.setItem("username" , username);
        localStorage.setItem("password", password);
        alert("registrasi berhasil silahkan login");
        navigate('/Login');
    

        setUsername('');
        setPassword('');
        setSchoolname('');
        setSchooladdress('');
        setDistrict('');
        setProvince('');
        setDate('');
    };

    return (
        <div
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh",
            backgroundColor:"#f7f9fc",
            padding:"20px"
        }}>
        <div style={{
                display:"flex",
                flexDirection:"row",
                backgroundColor:"#ffffff",
                borderRadius:"10px",
                boxShadow:"0 4px 12px rgba(0, 0, 0, 0.1)",
                maxWidth:"900px",
                width:"100%",
                overflow:"hidden"
            }} >
               <div style={{
                backgroundColor:"#003366",
                color:"#ffffff",
                padding:"40px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                width:"50%"
               }}>

            <h2 style={{
                fontSize:"28px",
                fontWeight:"bold",
                marginBottom:"20px",
            }}> Registration Form </h2>

            <p style={{
                fontSize:"16px",
                lineHeight:"1.6",
                marginBottom:"20px",
            }}>
                Buruan Join
            </p>

            <div style={{
                display:"flex",
                justifyContent:"center",
            }}>
                <img src=""
                style={{
                    borderRadius:"8px",
                    width:"80%",
                }} />
                </div>
            </div>

            <div style={{
                padding:"40px",
                width:"50%"
            }}>
            
            <h3 style={{
                color:"#003366",
                fontWeight:"600",
                marginBottom:"20px",
                fontSize:"24px",
                textAlign:"center"
            }}>Daftar Sini</h3>

            <form onSubmit={handleSubmit} style={{
                display:"grid",
                gap:"15px"
            }}>
                    <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required 
                    style={{
                        padding:"10px",
                        fontSize:"14px",
                        borderRadius:"5px",
                        border:"1px solid #ddd",
                        width:"100%"
                    }}
                />
                
                <div style={{
                    position:"relative"
                }}>
                    <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding:"10px",
                        fontSize:"14px",
                        borderRadius:"5px",
                        border:"1 px solid #ddd",
                        width:"100%"
                    }}
                    />
                    
                    {/* <span onClick={handleTogglePasswordVisibility} style={{
                        position:"absolute",
                        right:"10px",
                        top:"50%",
                        transform:"translateY(-50%)",
                        cursor:"pointer",
                        color:"#888"
                    }}>
                        {showPassword ? <FaEyeSlash/> : <FaEye />}
                    </span> */}
                </div>
                    
                <input
                type="text"
                placeholder="schoolname"
                value={schoolname}
                onChange={(e)  => setSchoolname(e.target.value)}
                required
                style={{
                    padding:"10px",
                    fontSize:"14px",
                    borderRadius:"5px",
                    border:"1px solid #ddd",
                    width:"100%"
                }}
                />
                
                <input
                type="text"
                placeholder="schooladdress"
                value={schooladdress}
                onChange={(e) => setSchooladdress(e.target.value)}
                required
                style={{
                    padding:"10px",
                    fontSize:"14px",
                    borderRadius:"5px",
                    border:"1px solid #ddd",
                    width:"100%"
                }}
                />

                <input
                type="text"
                placeholder="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                required
                style={{
                    padding:"10px",
                    fontSize:"14px",
                    borderRadius:"5px",
                    border:"1px solid #ddd",
                    width:"100%"
                }}
                />

                <input
                type="text"
                placeholder="province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
                style={{
                    padding:"10px",
                    fontSize:"14px",
                    borderRadius:"5px",
                    border:"1px solid #ddd",
                    width:"100%"
                }}
                />

                <input
                type="date"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{
                    padding:"10px",
                    fontSize:"14px",
                    borderRadius:"5px",
                    border:"1px solid #ddd",
                    width:"100%"
                }}
                />

                <button type="submit"
                    style={{
                        marginTop:"20px",
                        padding:"10px",
                        fontSize:"16px",
                        borderRadius:"5px",
                        border:"none",
                        width:"100%",
                        backgroundColor:"#4A90E2",
                        color:"#ffffff",
                        cursor:"pointer",
                        transition:"background-color 0.3s ease"
                    }}
                >Register</button>
            </form>
            {message && <div style={{
                marginTop:"20px",
                padding:"10px",
                borderRadius:"5px",
                backgroundColor:"#DFF0D8",
                color:"#3C763D",
                textAlign:"center"
            }}>
                {message}
        </div>}
        </div>
        </div>
        </div>
    );
};

export default Daftar;