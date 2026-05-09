// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./styles/Header.css";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [user, setUser] = useState(null); // ✅ store logged in user

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Load user and listen for changes
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     // Listen for localStorage changes (login/logout)
//     const handleStorageChange = () => {
//       const updatedUser = localStorage.getItem("user");
//       setUser(updatedUser ? JSON.parse(updatedUser) : null);
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);


//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     window.location.href = "/login"; // redirect to login
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark fixed-top ${
//         scrolled ? "scrolled" : ""
//       }`}
//     >
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <span className="brand-text">
//             BEAST<span className="brand-highlight">X</span>
//           </span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#home">
//                 HOME
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 ABOUT
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#products">
//                 PRODUCTS
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#membership">
//                 MEMBERSHIP
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#trainers">
//                 TRAINERS
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">
//                 CONTACT
//               </a>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link cart-link btn btn-danger rounded-pill px-3"
//                 to="/cart"
//               >
//                 CART (0)
//               </Link>
//             </li>

//             {/* ✅ If logged in, show username + logout */}
//             {user ? (
//               <>
//                 <li className="nav-item">
//                   <span className="nav-link">Hello, {user.name}</span>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-link nav-link"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 {/* ✅ If NOT logged in, show Login + Register */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     LOGIN
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     REGISTER
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./styles/Header.css";

// function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // ✅ Load user from sessionStorage (NOT localStorage)
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }

//     // Listen for login/logout updates
//     const handleStorageChange = () => {
//       const updatedUser = sessionStorage.getItem("user");
//       setUser(updatedUser ? JSON.parse(updatedUser) : null);
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   // ✅ Logout function
//   const handleLogout = () => {
//     sessionStorage.removeItem("user");
//     window.dispatchEvent(new Event("storage")); // update navbar instantly
//     setUser(null);
//     window.location.href = "/login";
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark fixed-top ${
//         scrolled ? "scrolled" : ""
//       }`}
//     >
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <span className="brand-text">
//             BEAST<span className="brand-highlight">X</span>
//           </span>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item"><a className="nav-link" href="#home">HOME</a></li>
//             <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
//             <li className="nav-item"><a className="nav-link" href="#products">PRODUCTS</a></li>
//             <li className="nav-item"><a className="nav-link" href="#membership">MEMBERSHIP</a></li>
//             <li className="nav-item"><a className="nav-link" href="#trainers">TRAINERS</a></li>
//             <li className="nav-item"><a className="nav-link" href="#contact">CONTACT</a></li>

//             <li className="nav-item">
//               <Link className="nav-link cart-link btn btn-danger rounded-pill px-3" to="/cart">
//                 CART (0)
//               </Link>
//             </li>

//             {/* If logged in */}
//             {user ? (
//               <>
//                 <li className="nav-item">
//                   <span className="nav-link">Hello, {user.name}</span>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-link nav-link" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 {/* If NOT logged in */}
//                 <li className="nav-item"><Link className="nav-link" to="/login">LOGIN</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/register">REGISTER</Link></li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/Header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  // 🔥 Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Load user and listen for both login + logout updates
  useEffect(() => {
    const loadUser = () => {
      const storedUser = sessionStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    // Load user initially
    loadUser();

    // Listen for login or logout from Login.jsx
    window.addEventListener("sessionUserUpdated", loadUser);

    // Also listen to storage changes (e.g., logout from another tab)
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("sessionUserUpdated", loadUser);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  // 🔥 Logout system
  const handleLogout = () => {
    sessionStorage.removeItem("user");

    // Notify Header instantly
    window.dispatchEvent(new Event("sessionUserUpdated"));

    setUser(null);
    window.location.href = "/login";
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${
      scrolled ? "scrolled" : ""
    }`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">
            BEAST<span className="brand-highlight">X</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* <li className="nav-item"><a className="nav-link" href="#home">HOME</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
            <li className="nav-item"><a className="nav-link" href="#products">PRODUCTS</a></li>
            <li className="nav-item"><a className="nav-link" href="#membership">MEMBERSHIP</a></li>
            <li className="nav-item"><a className="nav-link" href="#trainers">TRAINERS</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">CONTACT</a></li> */}

            <li className="nav-item"><Link className="nav-link" to="/#home">HOME</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#about">ABOUT</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#products">PRODUCTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#membership">MEMBERSHIP</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#trainers">TRAINERS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#contact">CONTACT</Link></li>


          
            <li className="nav-item">
              <Link className="nav-link" to="/mymembership">MY MEMBERSHIP</Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link cart-link btn btn-danger rounded-pill px-3" to="/cart">
                CART (0)
              </Link>
            </li> */}

            {/* 🔥 If logged in */}
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hello, {user.name}</span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* 🔥 If NOT logged in */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">LOGIN</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">REGISTER</Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
