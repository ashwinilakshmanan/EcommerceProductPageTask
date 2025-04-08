import { useState } from "react";
import './ProductPage.css';
import minusIcon from '../assets/images/icon-minus.svg'
import plusIcon from '../assets/images/icon-plus.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import { useCart } from "../context/CartContext";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();
  
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.00,
    originalPrice: 250.00,
    discount: "50%"
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(0); 
  };

  return (
    <div className="product-info">
      <div className="company">SNEAKER COMPANY</div>
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </p>
      <div className="price-container">
        <div className="current-price">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="discount">{product.discount}</span>
        </div>
        <div className="original-price">${product.originalPrice.toFixed(2)}</div>
      </div>
      <div className="actions">
        <div className="quantity-selector">
          <button className="quantity-btn minus" onClick={decreaseQuantity}>
            <img src={minusIcon} alt="minus-icon" />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn plus" onClick={increaseQuantity}>
            <img src={plusIcon} alt="plus-icon" />
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <img src={cartIcon} alt="cart-icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;