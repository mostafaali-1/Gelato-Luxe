import React from 'react';
import './Cart.css';

const Cart = ({ isOpen, onClose, items, removeFromCart, onCheckout }) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h3>Your Selection</h3>
                    <button className="close-btn" onClick={onClose}>
                        <span className="material-icons">close</span>
                    </button>
                </div>

                <div className="cart-items">
                    {items.length === 0 ? (
                        <p className="empty-msg">Your bowl is empty.</p>
                    ) : (
                        items.map((item, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                    <span className="item-price">${item.price.toFixed(2)}</span>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                                    <span className="material-icons">delete_outline</span>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="total-row">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn" disabled={items.length === 0} onClick={onCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
