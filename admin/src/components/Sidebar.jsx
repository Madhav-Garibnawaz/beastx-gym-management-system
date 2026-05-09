// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import pic from './image.png';

// const Sidebar = () => {
//   return (
//     <div className="sidebar bg-dark text-white p-3" style={{ minHeight: "100vh", width: "250px" }}>
      
//       {/* Profile Image */}
//       <div className="d-flex justify-content-center my-3">
//         <img 
//           src={pic} 
//           className="rounded-circle" 
//           height="100" 
//           width="100" 
//           alt="Logo" 
//         />
//       </div>

//       {/* Navigation Links */}
//       <ul className="list-unstyled">
//         <li className="mb-2">
//           <NavLink 
//             to="/" 
//             end
//             className={({ isActive }) => 
//               `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
//             }
//           >
//             Home
//           </NavLink>
//         </li>

//         <li className="mb-2">
//           <NavLink 
//             to="/product"
//             className={({ isActive }) => 
//               `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
//             }
//           >
//             Product
//           </NavLink>
//         </li>

//         <li className="mb-2">
//           <NavLink 
//             to="/membership"
//             className={({ isActive }) => 
//               `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
//             }
//           >
//             Membership
//           </NavLink>
//         </li>

//         <li className="mb-2">
//           <NavLink 
//             to="/members"
//             className={({ isActive }) => 
//               `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
//             }
//           >
//             Members
//           </NavLink>
//         </li>

//         <li className="mb-2">
//           <NavLink 
//             to="/users"
//             className={({ isActive }) => 
//               `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
//             }
//           >
//             Users
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import pic from './image.png';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3" style={{ minHeight: "100vh", width: "250px" }}>
      
      {/* Profile Image */}
      <div className="d-flex justify-content-center my-3">
        <img 
          src={pic} 
          className="rounded-circle" 
          height="100" 
          width="100" 
          alt="Logo" 
        />
      </div>

      {/* Navigation Links */}
      <ul className="list-unstyled">

        <li className="mb-2">
          <NavLink 
            to="/admin/dashboard"
            className={({ isActive }) => 
              `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink 
            to="/admin/product"
            className={({ isActive }) => 
              `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
            }
          >
            Product
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink 
            to="/admin/membership"
            className={({ isActive }) => 
              `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
            }
          >
            Membership
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink 
            to="/admin/members"
            className={({ isActive }) => 
              `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
            }
          >
            Members
          </NavLink>
        </li>

        <li className="mb-2">
          <NavLink 
            to="/admin/users"
            className={({ isActive }) => 
              `d-block p-2 rounded text-decoration-none ${isActive ? "bg-light text-dark" : "text-white"}`
            }
          >
            Users
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
