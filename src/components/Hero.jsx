import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <span className="subtitle">Handcrafted with Love</span>
                    <h1>Experience the <br /> <span className="highlight">Perfect Scoop</span></h1>
                    <p>Artisanal gelato made from the finest organic ingredients. Elevate your dessert experience today.</p>
                    <a href="#flavors" className="cta-button">Order Now</a>
                </div>
                <div className="hero-image">
                    <img src="/hero.png" alt="Delicious Ice Cream" className="floating-img" />
                    <div className="blob"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
