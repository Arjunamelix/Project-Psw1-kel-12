import React from 'react';
import './zi.css';

const ComponentName = () => {
    return (
        <div className="main-container">
            <header className="header">
                <div className="container">
                    <div className="logo-section">
                        <a href="#" className="logo-link">
                            {/* <img className="logo" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="Logo" /> */}
                        </a>
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
            </header>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1 className="hero-title">A specialMaterials.</h1>
                        <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
                        <form className="email-form">
                            <input type="email" placeholder="Enter email address" className="email-input" required />
                            <button type="submit" className="submit-button">Get Free Lesson</button>
                        </form>
                        <div className="stats">
                            <div className="stat-item">
                                <p className="stat-value">Tumbnail</p>
                                <p className="stat-label">Wkwkwkwk</p>
                            </div>
                            <div className="stat-item">
                                <p className="stat-value">$1M</p>
                                <p className="stat-label">Awowkowkwok</p>
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
