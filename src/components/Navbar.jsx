import React from 'react';
import './ProductPage.css';
import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import menu from '../assets/images/image-avatar.png'
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getTotalQuantity } = useCart();
  const cartQuantity = getTotalQuantity();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn">
          <img src={menu} alt="menu" />
        </button>
        <div className="logo">sneakers</div>
        <div className="desktop-menu">
          <ul>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#women">Women</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-right">
        <div className="cart-container">
          <button className="cart-btn">
            <img src={cartIcon} alt='carticon' />
            {cartQuantity > 0 && (
              <span className="cart-badge">{cartQuantity}</span>
            )}
          </button>
        </div>
        <div className="avatar">
          <img src={avatar} alt="User avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;