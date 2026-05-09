import React from 'react';
import './styles/About.css';

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title text-white">ABOUT <span className="text-red">BEASTX-FITNESS</span></h2>
            <div className="section-divider"></div>
            <p className="about-text">
              BeastX-Fitness is more than just a gym - it's a lifestyle transformation center. 
              We believe that every individual has the potential to become their strongest, 
              most confident self. With state-of-the-art equipment, expert trainers, and 
              a supportive community, we're here to help you unleash your inner beast 
              and achieve the results you've always dreamed of.
            </p>
            <div className="stats-container">
              <div className="row">
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3 className="stat-number">500+</h3>
                    <p className="stat-label">Members</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3 className="stat-number">10+</h3>
                    <p className="stat-label">Expert Trainers</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stat-item">
                    <h3 className="stat-number">5</h3>
                    <p className="stat-label">Years Experience</p>
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

export default About;