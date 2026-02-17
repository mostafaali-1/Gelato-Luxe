import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">Gelato Luxe</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#flavors">Flavors</a></li>
          <li><a href="#about">Our Story</a></li>
        </ul>
        <div className="cart-icon" onClick={onCartClick}>
          <span className="material-icons">shopping_bag</span>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
