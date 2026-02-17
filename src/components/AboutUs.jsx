import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us-section" id="about-us">
            <div className="about-content">
                <h2 className="section-title">About Us</h2>
                <p className="about-description">
                    Welcome to our world of delicious ice creams! We are passionate about crafting the finest frozen treats using only the specialized ingredients. Our mission is to bring joy to every scoop.
                </p>
                <div className="about-grid">
                    <div className="about-card">
                        <h3>Quality Ingredients</h3>
                        <p>We source the freshest milk and fruits for an authentic taste.</p>
                    </div>
                    <div className="about-card">
                        <h3>Handcrafted with Love</h3>
                        <p>Every batch is made with care to ensure the perfect texture and flavor.</p>
                    </div>
                    <div className="about-card">
                        <h3>Community First</h3>
                        <p>We believe in giving back and supporting our local community.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
