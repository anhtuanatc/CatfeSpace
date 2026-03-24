import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg"></div>

            {/* Floating Elements - Updated to match Theme */}
            <div className="floating-icon icon-1">🧶</div>
            <div className="floating-icon icon-2">🍵</div>
            <div className="floating-icon icon-3">💻</div>

            <div className="container hero-content">
                <div className="hero-badge">Serving Fresh Code Daily ☕</div>
                <h1 className="hero-title">
                    Brewing the Perfect <br />
                    <span className="gradient-text">Game Dev Experience</span>
                </h1>
                <p className="hero-desc">
                    Welcome to Catfe Studio! We craft chill Unity tools and assets to help you relax while you build your dream game. Less stress, more purrs.
                </p>
                <div className="hero-buttons">
                    <a href="#tools" className="btn btn-primary">Check the Menu (Tools)</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
