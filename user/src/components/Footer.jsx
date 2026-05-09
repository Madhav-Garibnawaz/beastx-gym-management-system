import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-brand">
              <h3 className="brand-text">BEAST<span className="brand-highlight">X</span>-FITNESS</h3>
              <p className="footer-description">
                Transform your body, transform your life. Join the BeastX family today.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#membership">Membership</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="row">
          <div className="col-12 text-center">
            <p className="copyright">
              &copy; 2025 BeastX-Fitness. All rights reserved. | Designed with 💪 for fitness enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;