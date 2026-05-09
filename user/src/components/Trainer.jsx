import React from 'react';
import './styles/Trainer.css';
import img1 from '../images/react_gym_trainer1.jpeg';
import img2 from '../images/react_gym_trainer2.jpeg';
import img3 from '../images/react_gym_trainer3.jpeg';
import img4 from '../images/react_gym_trainer4.jpeg';

const Trainer = () => {
  const trainers = [
    {
      name: "Alex Rodriguez",
      specialty: "Strength Training",
      experience: "8 Years",
      // image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      image: img1,
      bio: "Certified strength coach specializing in powerlifting and functional training."
    },
    {
      name: "Sarah Johnson",
      specialty: "Yoga & Flexibility",
      experience: "6 Years",
      // image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400",
      image: img2,
      bio: "Expert yoga instructor helping clients achieve balance and flexibility."
    },
    {
      name: "Mike Chen",
      specialty: "HIIT & Cardio",
      experience: "7 Years",
      // image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      image: img3,
      bio: "High-intensity interval training specialist focused on fat loss and endurance."
    },
    {
      name: "Emma Wilson",
      specialty: "Nutrition & Wellness",
      experience: "5 Years",
      // image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      image: img4,
      bio: "Certified nutritionist helping clients achieve their goals through proper diet."
    }
  ];

  return (
    <section id="trainers" className="trainers-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-white">EXPERT <span className="text-red">TRAINERS</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Meet our certified fitness professionals</p>
          </div>
        </div>
        
        <div className="row">
          {trainers.map((trainer, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="trainer-card">
                <div className="trainer-image-container">
                  <img src={trainer.image} alt={trainer.name} className="trainer-image" />
                  <div className="trainer-overlay">
                    <div className="trainer-social">
                      <span className="social-icon">📧</span>
                      <span className="social-icon">📱</span>
                    </div>
                  </div>
                </div>
                <div className="trainer-info">
                  <h4 className="trainer-name">{trainer.name}</h4>
                  <p className="trainer-specialty">{trainer.specialty}</p>
                  <p className="trainer-experience">{trainer.experience} Experience</p>
                  <p className="trainer-bio">{trainer.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainer;