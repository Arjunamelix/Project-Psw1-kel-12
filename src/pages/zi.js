import React from 'react';
import './zi.css';

const ComponentName = () => {
    return (
        <div className="main-container">
            {/* <header className="header">
                <div className="container">
                    <div className="logo-section">
                        <a href="#" className="logo-link"></a>
                    </div>
                    <nav className="navigation">
                        <a href="#" className="nav-link">Learn</a>
                        <a href="#" className="nav-link">OKe</a>
                        <a href="#" className="nav-link">Hehe</a>
                        <a href="#" className="nav-link">About</a>
                    </nav>
                    <div className="auth-section">
                        <a href="#" className="sign-in-link">Sign In</a>
                        <a href="#" className="cta-button">Create Free Account</a>
                    </div>
                </div>
            </header> */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1 className="hero-title">Selamat Datang di Web Pembelajaran Fisika.</h1>
                        <p className="hero-description">Belajar fisika jadi lebih mudah dan menyenangkan dengan berbagai materi interaktif.</p>
                        <form className="search-form">
                            <input type="search" placeholder='Cari "Materi"' className="search-input" required />
                            <button type="submit" className="submit-button">Telusuri</button>
                        </form>
                        <div className="items-hero">
                            <div className="item-hero">
                                {/* <p className="stat-value">Tumbnail</p> */}
                                <p className="label1">Jelajahi berbagai materi yang menarik dan menantang</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentName;
