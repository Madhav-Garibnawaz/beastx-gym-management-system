import React from 'react';
import './styles/Membership.css';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "₹1,999",
      period: "/month",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Basic fitness consultation",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "₹3,499",
      period: "/month",
      features: [
        "Everything in Basic",
        "Group fitness classes",
        "Personal trainer (2 sessions)",
        "Nutrition guidance",
        "Free guest passes (2/month)"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹5,999",
      period: "/month",
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Custom meal plans",
        "Priority booking",
        "Free supplements",
        "24/7 gym access"
      ],
      popular: false
    }
  ];

  const handleAddMembership = (plan) => {
    // navigate(`/memberform/${planName}`);
    navigate("/memberform", { state: { selectedPlan: plan.name } });
  };

  return (
    <section id="membership" className="membership-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title text-white">MEMBERSHIP <span className="text-red">PLANS</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Choose the perfect plan for your fitness journey</p>
          </div>
        </div>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={`membership-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>
                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className={`btn btn-outline-light w-100 plan-btn text-white mt-auto`}
                  onClick={() => handleAddMembership(plan)}
                >
                  SELECT PLAN
                </button>
                {/* <Link className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-light'} w-100 plan-btn text-white`} to="/memberform">
                  SELECT PLAN
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;