// User/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Auth.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !pass || !confirmPass) {
      alert("Please fill all fields");
      return;
    }

    if (pass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password: pass, // backend will store as 'password'
      });

      if (res.data.success) {
        alert("Registration successful!");
        // reset form
        setName("");
        setEmail("");
        setPass("");
        setConfirmPass("");
        navigate("/login");
      } else {
        alert(res.data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="auth-card">
              {/* Header */}
              <div className="auth-header text-center">
                <h2 className="auth-title">
                  JOIN <span className="text-red">BEASTX</span>
                </h2>
                <p className="auth-subtitle">
                  Start your fitness journey today!
                </p>
              </div>

              {/* Register Form */}
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control auth-input"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control auth-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control auth-input"
                    placeholder="Password (min 6 characters)"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control auth-input"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 auth-btn">
                  REGISTER
                </button>
              </form>

              {/* Footer */}
              <div className="auth-footer text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="auth-link">
                    Login here
                  </Link>
                </p>
                <Link to="/" className="auth-link">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
