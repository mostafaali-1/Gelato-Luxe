import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import OurStory from './components/OurStory';
import BestSellers from './components/BestSellers';
import Testimonials from './components/Testimonials';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Newsletter from './components/Newsletter';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCartItems([]); // Clear cart
  };

  return (
    <div className="App">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <BestSellers />
      <Products addToCart={addToCart} />
      <OurStory />
      <AboutUs />
      <Testimonials />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        onCheckout={openCheckout}
      />
      <Newsletter />
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        total={cartItems.reduce((sum, item) => sum + item.price, 0)}
        onPaymentSuccess={handlePaymentSuccess}
      />
      <Footer />
    </div>
  );
}

export default App;
