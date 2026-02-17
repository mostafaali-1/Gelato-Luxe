import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Gelato Luxe Logo" className="logo-img" />
          <span>Gelato Luxe</span>
        </div>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#flavors" onClick={closeMenu}>Flavors</a></li>
          <li><a href="#about" onClick={closeMenu}>Our Story</a></li>
        </ul>

        <div className="cart-icon" onClick={onCartClick}>
          <span className="material-icons">shopping_bag</span>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
