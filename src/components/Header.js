import React, { useEffect, useState } from 'react';
import './Header.css';

const Navbar = () => {
    const [showTentangKami, setShowTentangKami] = useState(false);
    const [showAkademik, setShowAkademik] = useState(false);
    const [username, setUsername] = useState(localStorage.getItem('username') || null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername(null);
    };

    return (
        <header>
            <div>
                <span>FISIKA</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Beranda</a></li>
                    <li
                        onMouseEnter={() => setShowTentangKami(true)}
                        onMouseLeave={() => setShowTentangKami(false)}
                    >
                        <a href="#">Materi</a>
                        {showTentangKami && (
                            <ul>
                                <li><a href="/menubook">Materi</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/quiz">Latihan</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Kontak</a></li>
                    <li>
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
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
