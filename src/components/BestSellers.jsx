import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
    return (
        <section className="best-sellers">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Customer Favorites</span>
                    <h2>Best Sellers of the Month</h2>
                    <div className="separator"></div>
                </div>

                <div className="best-seller-grid">
                    <div className="best-seller-item main">
                        <img src="/images/flavors/vanilla.png" alt="Golden Vanilla" />
                        <div className="best-seller-info">
                            <h3>Golden Vanilla Bean</h3>
                            <p>The timeless classic, elevated with gold leaf.</p>
                            <span className="tag">#1 Top Pick</span>
                        </div>
                    </div>
                    <div className="best-seller-sub-grid">
                        <div className="best-seller-item">
                            <img src="/images/flavors/chocolate.png" alt="Dark Chocolate" />
                            <div className="best-seller-info">
                                <h3>Dark Midnight</h3>
                                <p>Rich, intense, and unforgettable.</p>
                            </div>
                        </div>
                        <div className="best-seller-item">
                            <img src="/images/flavors/pistachio.png" alt="Pistachio" />
                            <div className="best-seller-info">
                                <h3>Pistachio Sicilian</h3>
                                <p>Authentic nutty flavor from Italy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
