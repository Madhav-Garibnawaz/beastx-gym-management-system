// import React, { useState } from 'react';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Settings from './pages/Settings';
// import Sidebar from './components/Sidebar';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './style.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from './pages/Login';
// import Product from './pages/Product';
// import Membership from './pages/Membership';

// function App() {
//     const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarVisible(!sidebarVisible);
//     };

//     const handleLogin = () => {
//         setIsAuthenticated(true);
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//     };

//     return (
//         <Router>
//             {isAuthenticated ? (
//                 <div className="d-flex">
//                     {/* Sidebar */}
//                     {sidebarVisible && <Sidebar />}

//                     {/* Page Content */}
//                     <div className="flex-grow-1">
//                         {/* Navbar */}
//                         <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
//                             <div className="container-fluid">
//                                 <button className="btn btn-dark" onClick={toggleSidebar}>
//                                     ☰
//                                 </button>
//                                 <span className="ms-3 fw-bold text-white">Admin Panel</span>
//                                 <button 
//                                     className="btn btn-outline-light ms-auto"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         </nav>

//                         {/* Routes */}
//                         <div className="container-fluid m-0 p-0">
//                             <Routes>
//                                 <Route path="/" element={<Dashboard />} />
//                                 <Route path="/users" element={<Users />} />
//                                 <Route path="/settings" element={<Settings />} />
//                                 <Route path="/product" element={<Product />} />
//                                 <Route path="/membership" element={<Membership />} />
//                                 <Route path="*" element={<Navigate to="/" />} />
//                             </Routes>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 // If not logged in → only show Login page
//                 <Routes>
//                     <Route path="/login" element={<Login onLogin={handleLogin} />} />
//                     <Route path="*" element={<Navigate to="/login" />} />
//                 </Routes>
//             )}
//         </Router>
//     );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
// import Settings from './pages/Settings';
// import Sidebar from './components/Sidebar';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './style.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from './pages/Login';
// import Product from './pages/Product';
// import Membership from './pages/Membership';
// import Members from './pages/Members';
// import MemberTable from './components/MemberTable';

// function App() {
//     const [sidebarVisible, setSidebarVisible] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     // Check localStorage for login status when app loads
//     useEffect(() => {
//         const loggedIn = localStorage.getItem("isAuthenticated");
//         if (loggedIn === "true") {
//             setIsAuthenticated(true);
//         }
//     }, []);

//     const toggleSidebar = () => {
//         setSidebarVisible(!sidebarVisible);
//     };

//     const handleLogin = () => {
//         setIsAuthenticated(true);
//         localStorage.setItem("isAuthenticated", "true");
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         localStorage.removeItem("isAuthenticated");
//     };

//     return (
//         <Router>
//             {isAuthenticated ? (
//                 <div className="d-flex">
//                     {sidebarVisible && <Sidebar />}

//                     <div className="flex-grow-1">
//                         <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
//                             <div className="container-fluid">
//                                 <button className="btn btn-dark" onClick={toggleSidebar}>
//                                     ☰
//                                 </button>
//                                 <span className="ms-3 fw-bold text-white">Admin Panel</span>
//                                 <button 
//                                     className="btn btn-outline-light ms-auto"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         </nav>

//                         <div className="container-fluid m-0 p-0">
//                             <Routes>
//                                 <Route path="/" element={<Dashboard />} />
//                                 <Route path="/users" element={<Users />} />
//                                 <Route path="/settings" element={<Settings />} />
//                                 <Route path="/product" element={<Product />} />
//                                 <Route path="/membership" element={<Membership />} />
//                                 <Route path="/members" element={<Members />} />
//                                 <Route path="*" element={<Navigate to="/" />} />
//                             </Routes>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <Routes>
//                     <Route path="/login" element={<Login onLogin={handleLogin} />} />
//                     <Route path="*" element={<Navigate to="/login" />} />
//                 </Routes>
//             )}
//         </Router>
//     );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/Login';
import Product from './pages/Product';
import Membership from './pages/Membership';
import Members from './pages/Members';

function App() {

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // 🔥 CHECK admin sessionStorage on refresh
    useEffect(() => {
        const adminLoggedIn = sessionStorage.getItem("admin");
        if (adminLoggedIn) {
            setIsAuthenticated(true);
        }
    }, []);

    // 🔥 Toggle sidebar
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // 🔥 Admin login
    const handleLogin = () => {
        sessionStorage.setItem("admin", "true");
        setIsAuthenticated(true);
    };

    // 🔥 Admin logout
    const handleLogout = () => {
        sessionStorage.removeItem("admin");
        setIsAuthenticated(false);
    };

    return (
        <Router>
            {isAuthenticated ? (
                <div className="d-flex">
                    {/* Sidebar */}
                    {sidebarVisible && <Sidebar />}

                    {/* Main content */}
                    <div className="flex-grow-1">
                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
                            <div className="container-fluid">
                                <button className="btn btn-dark" onClick={toggleSidebar}>
                                    ☰
                                </button>
                                <span className="ms-3 fw-bold text-white">Admin Panel</span>
                                
                                <button 
                                    className="btn btn-outline-light ms-auto"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </nav>

                        {/* Routes */}
                        <div className="container-fluid m-0 p-0">
                            <Routes>
                                <Route path="/admin/dashboard" element={<Dashboard />} />
                                <Route path="/admin/users" element={<Users />} />
                                <Route path="/admin/settings" element={<Settings />} />
                                <Route path="/admin/product" element={<Product />} />
                                <Route path="/admin/membership" element={<Membership />} />
                                <Route path="/admin/members" element={<Members />} />

                                {/* Default route → dashboard */}
                                <Route path="*" element={<Navigate to="/admin/dashboard" />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/admin/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="*" element={<Navigate to="/admin/login" />} />
                </Routes>
            )}
        </Router>
    );
}

export default App;
