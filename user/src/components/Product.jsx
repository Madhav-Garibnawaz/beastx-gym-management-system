import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { useCart } from '../context/CartContext';
import './styles/Product.css';

const Product = () => {
  //   const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);


  return (
    <section id="products" className="products-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-white">GYM <span className="text-red">PRODUCTS</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Premium fitness equipment and supplements</p>
          </div>
        </div>

        <div className="row">
          {products.map(product => (
            <div key={product._id} className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image-container">
                  <img
                    src={`http://localhost:5000/uploads/${product.photo}`}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <button className="btn btn-primary">VIEW DETAILS</button>
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">₹{product.price}</div>
                  <button
                    className="btn btn-outline-light btn-sm text-white"
                  // onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;