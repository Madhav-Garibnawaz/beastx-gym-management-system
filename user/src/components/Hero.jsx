import React from 'react'
import './styles/Hero.css'

function Hero() {

    // Smoothly scroll to Membership section
    const goToMembership = () => {
        const section = document.getElementById("membership");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <section id="home" className="hero-section">
            <div className="hero-overlay">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-8 mx-auto text-center">
                            <h1 className="hero-title text-white">
                                HARD WORK IS FOR
                                <span className="hero-highlight"> EVERY SUCCESS</span>
                            </h1>
                            <p className="hero-subtitle">
                                Transform your body, transform your life. Join BeastX-Fitness today.
                            </p>
                            <button className="btn btn-danger btn-lg hero-btn" onClick={goToMembership}>
                                GET STARTED
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero