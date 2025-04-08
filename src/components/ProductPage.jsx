import { CartProvider } from "../context/CartContext";
import Navbar from "./Navbar";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import './ProductPage.css';

const ProductPage = () => {
  return (
    <CartProvider>
    <div className="product-page">
      <Navbar />
      <div className="product-container">
        <ProductImages />
        <ProductInfo />
      </div>
    </div>
    </CartProvider>
  );
};

export default ProductPage;