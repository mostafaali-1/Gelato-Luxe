import React from 'react';
import './OurStory.css';

const OurStory = () => {
    return (
        <section id="about" className="story-section">
            <div className="container story-container">
                <div className="story-image">
                    <img src={`${import.meta.env.BASE_URL}images/story/kitchen.png`} alt="Our Artisanal Kitchen" />
                    <div className="experience-badge">
                        <span className="years">Est.</span>
                        <span className="text">2015</span>
                    </div>
                </div>
                <div className="story-content">
                    <span className="subtitle">The Journey</span>
                    <h2>Handcrafted with Passion</h2>
                    <div className="separator" style={{ margin: '1rem 0 2rem 0' }}></div>
                    <p>
                        It all started in a small kitchen with a big dream: to create the purest, most flavorful gelato using only nature's finest ingredients.
                    </p>
                    <p>
                        At Gelato Luxe, we believe that great desserts start with the source. That's why we source our milk from local grass-fed certified farms, our pistachios directly from Sicily, and our vanilla from sustainable growers in Madagascar.
                    </p>
                    <p>
                        Every batch is churned slowly (and with a lot of love) to achieve that signature dense, silky texture that defines true Italian gelato. No shortcuts, no artificial flavors—just pure, frozen bliss.
                    </p>
                    <button className="story-btn">Read Full Story</button>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
