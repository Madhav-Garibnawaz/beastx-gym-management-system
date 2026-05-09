// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import "./styles/Memberform.css"
// import "./styles/Auth.css";
// import { useLocation } from "react-router-dom";
// // import { useState } from "react";
// import axios from 'axios';

// function Memberform() {
//   // const { plan } = useParams();
//   // const [selectedPlan, setSelectedPlan] = useState(plan || "Gold");

//   const location = useLocation();
//   const defaultPlan = location.state.selectedPlan; // fallback if not passed
//   const [planName, setPlan] = useState(defaultPlan);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     plan: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted:\n" + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <div className="app">
//       <div className="card">
//         <h1 className="title">
//           Join <span className="accent">BEASTX</span> Gym
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="number"
//             name="age"
//             placeholder="Age"
//             value={formData.age}
//             onChange={handleChange}
//             required
//           />

//           <select
//             name="plan"
//             value={planName}
//             // onChange={(e) => setPlan(e.target.value)}
//             onChange={(e) => formData.plan = e.target.value}
//           >
//             <option value="Basic">Basic Plan</option>
//             <option value="Standard">Standard Plan</option>
//             <option value="Premium">Premium Plan</option>
//           </select>

//           <button type="submit">Join Now</button>
//         </form>

//         <div className="auth-footer text-center mt-3">
//           <Link to="/" className="auth-link">
//             ← Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Memberform



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./styles/Memberform.css";
import "./styles/Auth.css";
import axios from 'axios';

function Memberform() {
  const location = useLocation();
  const defaultPlan = location.state?.selectedPlan || "Basic"; // fallback if not passed
  const isRenew = location.state?.renew || false;

  // ✅ State for the selected plan
  const [planName, setPlan] = useState(defaultPlan);

  // ✅ State for the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    plan: defaultPlan,
  });

  // ✅ Load session user (auto-fill Name & Email)
  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      const user = JSON.parse(sessionUser);
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, []);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:5000/api/members', formData)
  //     .then((response) => {
  //       alert('Membership successful!');
  //       // Optionally, redirect or clear form here
  //     })
  //     .catch((error) => {
  //       console.error('There was an error submitting the form!', error);
  //       alert('Failed to submit membership. Please try again.');
  //     });
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) return alert("User not logged in");

  if (isRenew) {
    // ⭐ UPDATE MEMBERSHIP
    axios.put(`http://localhost:5000/api/members/update/${user.email}`, formData)
      .then(() => {
        alert("Membership renewed successfully!");
      })
      .catch(() => alert("Failed to renew membership"));
  } else {
    // ⭐ NEW MEMBERSHIP
    axios.post("http://localhost:5000/api/members", formData)
      .then(() => {
        alert("Membership purchased successfully!");
      })
      .catch(() => alert("Failed to purchase membership"));
  }
};


  return (
    <div className="app">
      <div className="card">
        <h1 className="title">
          Join <span className="accent">BEASTX</span> Gym
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            readOnly  // ✅ Prevent editing auto-filled name
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            readOnly  // ✅ Prevent editing auto-filled email
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="plan"
            value={planName}
            onChange={(e) => {
              setPlan(e.target.value);
              setFormData({ ...formData, plan: e.target.value });
            }}
          >
            <option value="Basic">Basic Plan</option>
            <option value="Standard">Standard Plan</option>
            <option value="Premium">Premium Plan</option>
          </select>

          <button type="submit">Join Now</button>
        </form>

        <div className="auth-footer text-center mt-3">
          <Link to="/" className="auth-link">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Memberform;
