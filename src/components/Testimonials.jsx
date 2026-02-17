import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        text: "The Golden Vanilla Bean is an absolute dream. I've never tasted ice cream this rich and creamy before!",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        text: "Gelato Luxe has completely raised the bar. The Pistachio Sicilian reminds me of my trip to Italy.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Wilson",
        text: "Fast delivery and the packaging kept everything perfectly frozen. A premium experience from start to finish.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">What People Say</span>
                    <h2>Customer Reviews</h2>
                    <div className="separator"></div>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map(review => (
                        <div key={review.id} className="testimonial-card">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="material-icons">star</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer">
                                <div className="avatar-placeholder">
                                    {review.name.charAt(0)}
                                </div>
                                <span className="reviewer-name">{review.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
