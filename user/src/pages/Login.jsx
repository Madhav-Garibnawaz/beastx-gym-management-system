// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./styles/Auth.css";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/user/login", {
//         email,
//         password,
//       });
      
//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         window.dispatchEvent(new Event("storage"));
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         setError(res.data.message || "Invalid credentials");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error, please try again");
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 col-lg-5">
//             <div className="auth-card">
//               {/* Header */}
//               <div className="auth-header text-center">
//                 <h2 className="auth-title">
//                   LOGIN TO <span className="text-red">BEASTX</span>
//                 </h2>
//                 <p className="auth-subtitle">Welcome back, warrior!</p>
//               </div>

//               {/* Error message */}
//               {error && (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               )}

//               {/* Login Form */}
//               <form className="auth-form" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control auth-input"
//                     placeholder="Email Address"
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
//                     minLength="6"
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary w-100 auth-btn">
//                   LOGIN
//                 </button>
//               </form>

//               {/* Footer */}
//               <div className="auth-footer text-center mt-3">
//                 <p>
//                   Don’t have an account?{" "}
//                   <Link to="/register" className="auth-link">
//                     Register here
//                   </Link>
//                 </p>
//                 <Link to="/" className="auth-link">
//                   ← Back to Home
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Auth.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });

      if (res.data.success) {
        // ✅ STORE USER IN SESSION STORAGE (required by Memberform.jsx)
        sessionStorage.setItem("user", JSON.stringify(res.data.user));

        // 🔥 Tell Header.jsx to update instantly
        window.dispatchEvent(new Event("sessionUserUpdated"));
        
        alert("Login Successful!");

        // redirect
        navigate("/");
      } else {
        setError(res.data.message || "Invalid Credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Server error, please try again");
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
                  LOGIN TO <span className="text-red">BEASTX</span>
                </h2>
                <p className="auth-subtitle">Welcome back, warrior!</p>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <form className="auth-form" onSubmit={handleSubmit}>
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

                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control auth-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 auth-btn">
                  LOGIN
                </button>
              </form>

              <div className="auth-footer text-center mt-3">
                <p>
                  Don’t have an account?{" "}
                  <Link to="/register" className="auth-link">Register here</Link>
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

export default Login;
