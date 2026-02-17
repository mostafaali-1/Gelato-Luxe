import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col">
                    <h3>Gelato Luxe</h3>
                    <p>Handcrafted daily with organic ingredients for the ultimate dessert experience.</p>
                </div>
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#flavors">Flavors</a></li>
                        <li><a href="#about">Our Story</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Visit Us</h4>
                    <ul>
                        <li>123 Ice Cream Blvd</li>
                        <li>Sweet City, SC 90210</li>
                        <li>hello@gelatoluxe.com</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow</h4>
                    <div className="social-links">
                        <a href="#">IG</a>
                        <a href="#">FB</a>
                        <a href="#">TW</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Gelato Luxe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
