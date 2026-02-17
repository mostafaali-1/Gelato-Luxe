import React, { useState, useEffect } from 'react';
import './Checkout.css';

const Checkout = ({ isOpen, onClose, items, total, onPaymentSuccess }) => {
    const [step, setStep] = useState('details'); // details, processing, success
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatCardNumber = (value) => {
        return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    };

    const handleCardChange = (e) => {
        const val = e.target.value;
        if (val.length <= 19) {
            setFormData({ ...formData, cardNumber: formatCardNumber(val) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep('processing');

        // Simulate payment processing
        setTimeout(() => {
            setStep('success');
        }, 2500);
    };

    const handleFinish = () => {
        onPaymentSuccess();
        onClose();
        setStep('details');
        setFormData({
            name: '',
            address: '',
            city: '',
            cardNumber: '',
            expiry: '',
            cvv: ''
        });
    };

    if (!isOpen) return null;

    return (
        <div className="checkout-overlay">
            <div className={`checkout-modal ${step}`}>
                <button className="close-checkout" onClick={onClose} disabled={step === 'processing'}>
                    <span className="material-icons">close</span>
                </button>

                {step === 'details' && (
                    <div className="checkout-content">
                        <div className="checkout-left">
                            <h3>Order Summary</h3>
                            <div className="order-items">
                                {items.map((item, index) => (
                                    <div key={index} className="order-item">
                                        <span>{item.name}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="order-total">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="checkout-right">
                            <h3>Payment Details</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="credit-card-box">
                                    <div className="card-logos">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" height="20" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" height="20" />
                                    </div>
                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            required
                                            value={formData.cardNumber}
                                            onChange={handleCardChange}
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Expiry</label>
                                            <input
                                                type="text"
                                                name="expiry"
                                                required
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                value={formData.expiry}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>CVV</label>
                                            <input
                                                type="password"
                                                name="cvv"
                                                required
                                                maxLength="3"
                                                value={formData.cvv}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="pay-btn">
                                    Pay ${total.toFixed(2)}
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {step === 'processing' && (
                    <div className="processing-state">
                        <div className="spinner"></div>
                        <p>Processing Payment...</p>
                        <span className="secure-text">
                            <span className="material-icons">lock</span> Secure Transaction
                        </span>
                    </div>
                )}

                {step === 'success' && (
                    <div className="success-state">
                        <div className="check-circle">
                            <span className="material-icons">check</span>
                        </div>
                        <h3>Payment Successful!</h3>
                        <p>Thank you for your order. Your delicious gelato is on the way.</p>
                        <button className="finish-btn" onClick={handleFinish}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
