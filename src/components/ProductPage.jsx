import React, { useState } from 'react';
import Modal from 'react-modal';
import products from './Products';

const ProductPage = ({ handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    const product = products[0];
    if (product) {
      const item = {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: quantity,
      };
      handleAddToCart(item);
    }
  };

  const product = products[0];

  if (!product) {
    return null;
  }

  const openModal = (index) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-page">
      <div className="product-image">
        <img
          src={product.image}
          alt="Product"
          className="product-image"
          onClick={() => openModal(0)}
        />
        <ul className="preview-images">
          {product.previewImages.map((image, index) => (
            <li key={index} onClick={() => openModal(index)}>
              <img src={image} alt={image.name} />
              <p>{image.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="product-description">
        <ul>
          <li>{product.companyLogo}</li>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{product.price}</li>
        </ul>
        <div className="cart1">
          <div className="quantity-controls">
            <button onClick={handleDecrease}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className="add-to-cart" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-image">
          <img
            src={product.previewImages[activeImageIndex]}
            alt={product.name}
          />
          <div className="modal-image-navigation">
            <button
              onClick={() =>
                setActiveImageIndex((prevIndex) =>
                  prevIndex === 0
                    ? product.previewImages.length - 1
                    : prevIndex - 1
                )
              }
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setActiveImageIndex((prevIndex) =>
                  prevIndex === product.previewImages.length - 1
                    ? 0
                    : prevIndex + 1
                )
              }
            >
              &#8250;
            </button>
          </div>
        </div>
        <ul className="modal-preview-images">
          {product.previewImages.map((image, index) => (
            <li
              key={index}
              className={index === activeImageIndex ? 'active' : ''}
              onClick={() => setActiveImageIndex(index)}
            >
              <img src={image} alt={image.name} />
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default ProductPage;
