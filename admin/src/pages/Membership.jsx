import React from "react";

function Membership() {
  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Membership <span className="text-danger">Plans</span></h1>
        <p className="text-muted">Choose the perfect plan for your fitness journey</p>
      </div>

      {/* Plans */}
      <div className="row g-4">
        {/* Basic Plan */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h3 className="card-title">Basic</h3>
              <h4 className="text-danger fw-bold">₹1,999 <small className="text-muted">/month</small></h4>
              <ul className="list-unstyled mt-3">
                <li>✔ Access to gym equipment</li>
                <li>✔ Locker facility</li>
                <li>✔ Basic fitness consultation</li>
                <li>✔ Mobile app access</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="col-md-4">
          <div className="card border-danger shadow-sm h-100">
            <div className="card-body text-center">
              <h3 className="card-title">Standard</h3>
              <h4 className="text-danger fw-bold">₹3,499 <small className="text-muted">/month</small></h4>
              <ul className="list-unstyled mt-3">
                <li>✔ Everything in Basic</li>
                <li>✔ Group fitness classes</li>
                <li>✔ Personal trainer (2 sessions)</li>
                <li>✔ Nutrition guidance</li>
                <li>✔ Free guest passes (2/month)</li>
              </ul>
              <span className="badge bg-danger mt-3">Most Popular</span>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h3 className="card-title">Premium</h3>
              <h4 className="text-danger fw-bold">₹5,999 <small className="text-muted">/month</small></h4>
              <ul className="list-unstyled mt-3">
                <li>✔ Everything in Standard</li>
                <li>✔ Unlimited personal training</li>
                <li>✔ Custom meal plans</li>
                <li>✔ Priority booking</li>
                <li>✔ Free supplements</li>
                <li>✔ 24/7 gym access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
