import React from 'react';

const CheckoutModal = ({ cartItems, handleClearCart, handleCheckout }) => {
  return (
    <div className="checkout-modal">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div className="checkout-item-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-buttons">
        <button onClick={handleClearCart}>Clear Cart</button>
        <button onClick={handleCheckout}>Confirm Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
