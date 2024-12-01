import React from 'react';
import './zi.css';
import { useNavigate } from 'react-router-dom';

const ComponentName = () => {
    return (
        <div className="main-container">
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="hero-text">
                            <h1 className="hero-title">Selamat Datang di Web Pembelajaran Fisika.</h1>
                            <p className="hero-description">Belajar fisika jadi lebih mudah dan menyenangkan dengan berbagai materi interaktif.</p>
                            <form className="search-form">
                                <input type="search" placeholder='Cari "Materi"' className="search-input" required />
                                <button type="submit" className="submit-button">Telusuri</button>
                            </form>
                            <a href="#materi" className="cta-button">Mulai Belajar</a>
                        </div>
                    </div>
                </div>
                <div className="hero-image"></div>
            </section>
        </div>
    );
};

export default ComponentName;
