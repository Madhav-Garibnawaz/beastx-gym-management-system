import React, { useState } from 'react';
import './styles/Contect.css';

const Contect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-white">GET IN <span className="text-red">TOUCH</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Ready to start your fitness journey?</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-form">
                    <h3 className="form-title">Send us a Message</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control custom-input"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control custom-input"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control custom-input"
                          name="message"
                          rows="5"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-danger w-100">
                        SEND MESSAGE
                      </button>
                    </form>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="contact-info">
                    <h3 className="info-title">Contact Information</h3>
                    <div className="contact-item">
                      <strong>Address:</strong>
                      <p>123 Fitness Street, Mumbai, Maharashtra 400001</p>
                    </div>
                    <div className="contact-item">
                      <strong>Phone:</strong>
                      <p>+91 98765 43210</p>
                    </div>
                    <div className="contact-item">
                      <strong>Email:</strong>
                      <p>info@beastx-fitness.com</p>
                    </div>
                    <div className="contact-item">
                      <strong>Hours:</strong>
                      <p>Mon-Fri: 5:00 AM - 11:00 PM<br/>
                         Sat-Sun: 6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contect;