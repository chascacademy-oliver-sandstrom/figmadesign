import React, { useState } from 'react';
import './App.css';
import ProductPage from './components/ProductPage';
import Header from './components/Header';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Produkten finns redan i kundvagnen, uppdatera kvantiteten
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      // Lägg till den nya produkten i kundvagnen
      setCartItems([...cartItems, product]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleConfirmCheckout = () => {
    // Implementera funktionaliteten för att slutföra köpet här
    setIsCheckoutOpen(false);
    setCartItems([]);
  };

  return (
    <div>
      <Header isCartOpen={isCartOpen} handleCartClick={handleToggleCart} />
      <div className="product-page-container">
        <ProductPage handleAddToCart={handleAddToCart} />
        {isCartOpen && (
          <div className="cart-overlay">
            <Cart
              cartItems={cartItems}
              handleClearCart={handleClearCart}
              handleCheckout={handleCheckout}
            />
          </div>
        )}
        {isCheckoutOpen && (
          <div className="checkout-overlay">
            <CheckoutModal
              cartItems={cartItems}
              handleClearCart={handleClearCart}
              handleCheckout={handleConfirmCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
