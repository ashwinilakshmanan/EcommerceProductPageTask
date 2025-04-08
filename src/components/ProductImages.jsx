import { useState, useEffect } from "react";
import './ProductImages.css';
import image1 from '../assets/images/image-product-1.jpg'
import image2 from '../assets/images/image-product-2.jpg'
import image3 from '../assets/images/image-product-3.jpg'
import image4 from '../assets/images/image-product-4.jpg'
import imageThumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import imageThumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import imageThumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import imageThumb4 from '../assets/images/image-product-4-thumbnail.jpg'
import previous from '../assets/images/icon-previous.svg'
import next from '../assets/images/icon-next.svg'

const ProductImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [animating, setAnimating] = useState(false);

  const images = [image1, image2, image3, image4];
  const thumbnails = [imageThumb1, imageThumb2, imageThumb3, imageThumb4];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextImage = () => {
    setAnimating(true);
    setCurrentImage((prev) => (prev + 1) % images.length);

    setTimeout(() => setAnimating(false), 500);
  };

  const prevImage = () => {
    setAnimating(true);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const selectImage = (index) => {
    if (currentImage !== index) {
      setAnimating(true);
      setCurrentImage(index);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  return (
    <div className="product-images">
      <div className="main-image">
        <button className="prev-btn" onClick={prevImage} aria-label="Previous image">
          <img src={previous} alt="Previous" />
        </button>
        <div className={`image-container ${animating ? 'animating' : ''}`}>
          <img
            src={images[currentImage]}
            alt={`Product view ${currentImage + 1}`}
            className="main-product-image"
          />
        </div>
        <button className="next-btn" onClick={nextImage} aria-label="Next image">
          <img src={next} alt="Next" />
        </button>
      </div>
      <div className="thumbnail-container">
        {(isMobile ? thumbnails : images).map((img, index) => (
          <div
            key={index}
            className={`thumbnail ${currentImage === index ? 'active' : ''}`}
            onClick={() => selectImage(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;