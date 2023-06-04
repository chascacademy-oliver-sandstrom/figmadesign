import React from 'react';

const Cart = ({ cartItems, handleClearCart, handleCheckout }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                {item.name}
                <h3>{item.price}</h3>
                <p>Quantity: {item.quantity}</p>
                <button onClick={handleClearCart}>Clear Cart</button>
              </div>
            </li>
            ))}
            </ul>
          </div>  
      )}
      <div className="cart-buttons">
        <button className="cart-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
