// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login({ onLogin }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Dummy validation (replace with backend API later)
//         if (email === "admin@gmail.com" && password === "1234") {
//             onLogin(); // set auth in App.jsx
//             navigate("/"); // redirect to dashboard
//         } else {
//             alert("Invalid Email or Password");
//         }
//     };

//     return (
//         <div style={{ backgroundColor: '#dfefff', height: '100vh' }} className="d-flex justify-content-center align-items-center">
//             <div className='card p-4 shadow rounded ' style={{ width: '100%', maxWidth: '400px' }}>
//                 <h2 className='text-center text-primary mb-4'>Admin Login</h2>
//                 <form onSubmit={handleSubmit}>  
//                     <div className='mb-3'>
//                         <label htmlFor="email" className='form-label'>Email address</label>
//                         <input 
//                             type="email" 
//                             className="form-control" 
//                             id="email" 
//                             placeholder='Enter Email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password" className='form-label'>Password</label>
//                         <input 
//                             type="password" 
//                             className="form-control" 
//                             id="password" 
//                             placeholder='Enter Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" id="remember" />
//                             <label className="form-check-label" htmlFor="remember">
//                                 Remember Me
//                             </label>
//                         </div>
//                         <a href="#" className="text-decoration-none small text-primary">Forgot Password?</a>
//                     </div>
//                     <button type="submit" className='btn btn-primary w-100'>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css"

// function AdminLogin({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     // 🔥 SAME ADMIN LOGIN LOGIC (Do NOT change)
//     if (email === "admin@gmail.com" && password === "1234") {
//       onLogin(); 
//       alert("Admin Login Successful!");
//       navigate("/"); // redirect to Admin Dashboard
//     } else {
//       setError("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5">
//             <div className="auth-card mt-5">

//               <div className="auth-header text-center">
//                 <h2 className="auth-title">
//                   ADMIN <span className="text-red">LOGIN</span>
//                 </h2>
//                 <p className="auth-subtitle">Access Admin Dashboard</p>
//               </div>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <form className="auth-form" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control auth-input"
//                     placeholder="Admin Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     type="password"
//                     className="form-control auth-input"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100 auth-btn">
//                   LOGIN
//                 </button>
//               </form>

//               <div className="auth-footer text-center mt-3">
//                 <p className="auth-link" style={{ cursor: "default" }}>
//                   Admin access only
//                 </p>

//                 <a href="/" className="auth-link">
//                   ← Back to Home
//                 </a>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";
// import axios from "axios";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         sessionStorage.setItem("admin", JSON.stringify(res.data.admin));

//         alert("Admin Login Successful!");
//         navigate("/"); // Go to admin dashboard
//       } else {
//         setError(res.data.message || "Invalid Admin Credentials");
//       }
//     } catch (err) {
//       setError("Server Error, please try again");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5">
//             <div className="auth-card mt-5">

//               <div className="auth-header text-center">
//                 <h2 className="auth-title">
//                   ADMIN <span className="text-red">LOGIN</span>
//                 </h2>
//                 <p className="auth-subtitle">Welcome, Administrator</p>
//               </div>

//               {error && <div className="alert alert-danger">{error}</div>}

//               <form className="auth-form" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control auth-input"
//                     placeholder="Admin Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     type="password"
//                     className="form-control auth-input"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     minLength="4"
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100 auth-btn">
//                   LOGIN
//                 </button>
//               </form>

//               {/* <div className="auth-footer text-center mt-3">
//                 <a href="/" className="auth-link">
//                   ← Back to Home
//                 </a>
//               </div> */}

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";  // optional if you want style

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 CHECK ADMIN FROM DATABASE
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      if (res.data.success) {
        // Store admin session
        sessionStorage.setItem("admin", JSON.stringify(res.data.admin));

        // Update parent (App.jsx)
        onLogin();

        // 🔥 Instant redirect — no refresh required
        navigate("/admin/dashboard");
      } else {
        alert(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="auth-card mt-5">
              <div className="auth-header text-center">
                <h2 className="auth-title">
                  ADMIN <span className="text-red">LOGIN</span>
                </h2>
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                <input 
                  type="email"
                  className="form-control auth-input"
                  placeholder="Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input 
                  type="password"
                  className="form-control auth-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button type="submit" className="btn btn-primary w-100 auth-btn">
                  LOGIN
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
