// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in from localStorage
//     const savedUser = localStorage.getItem('beastx_user');
//     if (savedUser) {
//       setUser(JSON.parse(savedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email, password) => {
//     // Simulate API call
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simple validation for demo
//         if (email && password.length >= 6) {
//           const userData = {
//             id: Date.now(),
//             email,
//             name: email.split('@')[0],
//             joinDate: new Date().toISOString()
//           };
//           setUser(userData);
//           localStorage.setItem('beastx_user', JSON.stringify(userData));
//           resolve(userData);
//         } else {
//           reject(new Error('Invalid credentials'));
//         }
//       }, 1000);
//     });
//   };

//   const register = async (name, email, password) => {
//     // Simulate API call
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (name && email && password.length >= 6) {
//           const userData = {
//             id: Date.now(),
//             email,
//             name,
//             joinDate: new Date().toISOString()
//           };
//           setUser(userData);
//           localStorage.setItem('beastx_user', JSON.stringify(userData));
//           resolve(userData);
//         } else {
//           reject(new Error('Please fill all fields correctly'));
//         }
//       }, 1000);
//     });
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('beastx_user');
//   };

//   const value = {
//     user,
//     login,
//     register,
//     logout,
//     loading
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };