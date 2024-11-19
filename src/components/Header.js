import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [showTentangKami, setShowTentangKami] = useState(false);
    const [showAkademik, setShowAkademik] = useState(false);
    const[username,setUsername] = useState(localStorage.getItem('username') || null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername(null);
    };

    const styles = {
        header: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            backgroundColor: '#1a2d55',
        },
        logoContainer: {
            flex: 1,
        },
        logoText: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: 'bold',
        },
        navbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '1rem 0',
        },
        navbarMenu: {
            listStyleType: 'none',
            display: 'flex',
            gap: '1.5rem',
            margin: 0,
            padding: 0,
        },
        navbarMenuItem: {
            position: 'relative',
        },
        navbarLink: {
            color: '#fff',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            fontWeight: 'bold',
        },
        navbarLinkHover: {
            color: '#f0a500',
        },
        dropdownMenu: {
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: '#f0a500',
            listStyleType: 'none',
            minWidth: '150px',
            padding: '0.5rem 0',
            display: 'none',
            borderRadius: '5px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
        },
        dropdownMenuItem: {
            width: '100%',
        },
        dropdownMenuLink: {
            display: 'block',
            color: '#1a2d55',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            textAlign: 'left',
        },
        dropdownMenuLinkHover: {
            backgroundColor: '#1a2d55',
            color: '#f0a500',
        },
        showDropdown: {
            display: 'block',
        },
        accountIcon: {
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0a500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: 'pointer',
        },
        '@media (maxWidth: 768px)': {
            navbarMenu: {
                flexDirection: 'column',
            },
            dropdownMenu: {
                position: 'static',
            },
        },
    };

    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <span style={styles.logoText}>FISIKA</span>
            </div>
            <nav style={styles.navbar}>
                <ul style={styles.navbarMenu}>
                    <li style={styles.navbarMenuItem}><a href="#" style={styles.navbarLink}>Beranda</a></li>

                    <li
                        style={styles.navbarMenuItem}
                        onMouseEnter={() => setShowTentangKami(true)}
                        onMouseLeave={() => setShowTentangKami(false)}
                    >
                        <a href="#" style={styles.navbarLink}>Materi</a>
                        {showTentangKami && (
                            <ul style={{ ...styles.dropdownMenu, ...styles.showDropdown }}>
                                <li style={styles.dropdownMenuItem}><a href="/modul1" style={styles.dropdownMenuLink}>Materi 1</a></li>
                                <li style={styles.dropdownMenuItem}><a href="#" style={styles.dropdownMenuLink}>Materi 2</a></li>
                            </ul>
                        )}
                    </li>

                    <li style={styles.navbarMenuItem}><a href="#" style={styles.navbarLink}>Latihan</a></li>
                    <li style={styles.navbarMenuItem}><a href="#" style={styles.navbarLink}>Menu</a></li>
                    <li style={styles.navbarMenuItem}><a href="#" style={styles.navbarLink}>Kontak</a></li>
                    
                    <li
                        style={styles.navbarMenuItem}>
                            {username? (
                                <div style={{
                                    color:'#fff',
                                    fontWeight:'bold',
                                    cursor:"pointer",
                                }} onClick={handleLogout}>
                                {username}
                            </div>
                            ) : (
                                <div
                                style={styles.accountIcon}
                                onMouseEnter={() => setShowAkademik(true)}
                                onMouseLeave={() => setShowAkademik(false)}
                                >
                            
                            <img src="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        {showAkademik && (
                            <ul style={{ ...styles.dropdownMenu, ...styles.showDropdown }}>
                                <li style={styles.dropdownMenuItem}><a href="/login" style={styles.dropdownMenuLink}>Login</a></li>
                                <li style={styles.dropdownMenuItem}><a href="/daftar" style={styles.dropdownMenuLink}>Register</a></li>
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
