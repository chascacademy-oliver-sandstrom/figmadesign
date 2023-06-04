import React, { useState } from 'react';

const Header = ({ isCartOpen, handleCartClick }) => {
  const handleProfileClick = () => {
  };

  return (
    <header className="header-container">
      <div className="logo">
        <img src="/sneakers.svg" alt="Logo" />
      </div>
      <nav className="flex">
        <ul className="flex space-x-4 list-none">
          <li className="list-none">
            <a href="/collections">
              <img src="/Collections.svg" alt="Collections" />
            </a>
          </li>
          <li className="list-none">
            <a href="/men">
              <img src="/Men.svg" alt="Men" />
            </a>
          </li>
          <li className="list-none">
            <a href="/women">
              <img src="/Women.svg" alt="Women" />
            </a>
          </li>
          <li className="list-none">
            <a href="/about">
              <img src="/About.svg" alt="About" />
            </a>
          </li>
          <li className="list-none">
            <a href="/contact">
              <img src="/Contact.svg" alt="Contact" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="cart-profile">
        <div className="cart-container">
          <img
            src="/Shape.svg"
            alt="Cart"
            onClick={handleCartClick}
            className="mr-2 cursor-pointer"
          />
          {isCartOpen && (
            <div className="cart-popup">
            </div>
          )}
        </div>
        <img
          src="/Oval.svg"
          alt="Profile"
          onClick={handleProfileClick}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
