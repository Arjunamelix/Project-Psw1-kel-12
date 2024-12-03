import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showTentangKami, setShowTentangKami] = useState(false);
    // const [showAkademik, setShowAkademik] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);
    const [showLatihan, setShowLatihan] = useState(false);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername(null);
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
                        <a href="#">Latihan</a>
                        {showLatihan && (
                            <ul className='menu-drop'>
                                <li><Link to="/Quiz">Quiz 1</Link></li>
                                <li><Link to="/Quiz2">Quiz 2</Link></li>
                                <li><Link to="/Quiz3">Quiz 3</Link></li>
                                <li><Link to="/Quiz4">Quiz 4</Link></li>
                                <li><Link to="/Quiz5">Quiz 5</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/kalkulator">Kalkulator</a></li>
                    <li><a href="#">Kontak</a></li>
                    <div className="auth-section">
         
                            
                        <a href="/login" className="sign-in-link">Sign In</a>
                        <a href="/daftar" className="cta-button">Sign Up</a>
                   </div>

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
