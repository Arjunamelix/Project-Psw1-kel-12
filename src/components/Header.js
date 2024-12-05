import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link , useNavigate} from 'react-router-dom';

const Navbar = () => {
    const [showTentangKami, setShowTentangKami] = useState(false);
    // const [showAkademik, setShowAkademik] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);
    const [showLatihan, setShowLatihan] = useState(false);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const storedEmail = localStorage.getItem('currentUser');
        setUserEmail(storedEmail);
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('currentUSer');
        setUserEmail(null);
        navigate('/login');
    };

    return (
        <header className="sticky-navbar">
            <div>
                <span>PhysicsUnveiled</span>
            </div>
            <nav>
                <ul>
                    <li><a href="/menuhome">Beranda</a></li>
                    <li
                        onMouseEnter={() => setShowTentangKami(true)}
                        onMouseLeave={() => setShowTentangKami(false)}
                    >
                        <a href="/menubook">Materi</a>
                    </li>
                    <li
                    onMouseEnter={() => setShowLatihan(true)}
                    onMouseLeave={() => setShowLatihan(false)}
                    >
                        <a href="#">Quiz</a>
                        {showLatihan && (
                            <ul className='menu-drop'>
                                <li><Link to="/Quiz">Quiz1</Link></li>
                                <li><Link to="/Quiz2">Quiz2</Link></li>
                                <li><Link to="/Quiz3">Quiz3</Link></li>
                                <li><Link to="/Quiz4">Quiz4</Link></li>
                                <li><Link to="/Quiz5">Quiz5</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><a href="/ContactForm">Kontak</a></li>

                    <li>
                        {userEmail ? (
                            <div style={{
                                display:"flex",
                                alignItems:"center",
                                gap:"10px"
                            }}>
                            <span style={{
                                color:"#ffd700",
                                fontWeight:"bold",
                                fontSize:"14px",
                            }}>
                                {userEmail}
                            </span>
                            < button
                            onClick={handleLogout}
                            style={{
                                padding:"5px 10px",
                                border:"none",
                                borderRadius:"5px",
                                backgroundColor:"#dc143c",
                                color:"#fff",
                                cursor:"pointer",
                            }}>
                                LogOut
                            </button>
                        </div>
                        ) : null}
                    </li>
                  
                       {/* <li> <a href="/daftar" className="cta-button">Sign Up</a> </li> */}
                
                    {/* <li>
                        {username ? (
                            <div onClick={handleLogout}>
                                {username}
                            </div>
                        ) : (
                            <div
                                className="account-icon"
                                onMouseEnter={() => setShowAkademik(true)}
                                onMouseLeave={() => setShowAkademik(false)}
                            >
                                <img src="" alt="Account Icon" />
                                {showAkademik && (
                                    <ul>
                                        <li><a href="/login">Login</a></li>
                                        <li><a href="/daftar">Register</a></li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
