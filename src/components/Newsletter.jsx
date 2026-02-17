import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log('Newsletter signup for:', email);
        alert('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>Join our newsletter for the latest ice cream flavors and special offers.</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
