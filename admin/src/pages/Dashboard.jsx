// import React from "react";

// function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Dashboard Overview</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {/* Users */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Users</h2>
//           <p className="text-4xl font-extrabold text-blue-600 mt-2">1,245</p>
//           <p className="text-sm text-gray-500 mt-1">+50 this week</p>
//         </div>

//         {/* Products */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Products</h2>
//           <p className="text-4xl font-extrabold text-green-600 mt-2">320</p>
//           <p className="text-sm text-gray-500 mt-1">+12 new</p>
//         </div>

//         {/* Memberships */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Memberships</h2>
//           <p className="text-4xl font-extrabold text-purple-600 mt-2">580</p>
//           <p className="text-sm text-gray-500 mt-1">+30 active</p>
//         </div>

//         {/* Revenue */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Revenue</h2>
//           <p className="text-4xl font-extrabold text-red-600 mt-2">₹2,45,000</p>
//           <p className="text-sm text-gray-500 mt-1">+5% from last month</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Dashboard() {
//   const [userCount, setUserCount] = useState(0);
//   const [productCount, setProductCount] = useState(0);
//   const [membershipCount, setMembershipCount] = useState(0); // until you add real memberships
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     fetchUsers();
//     fetchProducts();
//     fetchMemberships();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/users");
//       setUserCount(res.data.length);
//     } catch (err) {
//       console.error("Error fetching users:", err);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       setProductCount(res.data.length);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   // TEMP: Mock memberships (until you add a Membership DB)
//   const fetchMemberships = () => {
//     setMembershipCount(0); 
//     setRevenue(0);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">📊 Dashboard Overview</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {/* Users */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Users</h2>
//           <p className="text-4xl font-extrabold text-blue-600 mt-2">{userCount}</p>
//           <p className="text-sm text-gray-500 mt-1">Total Registered Users</p>
//         </div>

//         {/* Products */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Products</h2>
//           <p className="text-4xl font-extrabold text-green-600 mt-2">{productCount}</p>
//           <p className="text-sm text-gray-500 mt-1">Products Available</p>
//         </div>

//         {/* Memberships */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Memberships</h2>
//           <p className="text-4xl font-extrabold text-purple-600 mt-2">{membershipCount}</p>
//           <p className="text-sm text-gray-500 mt-1">Active Subscriptions</p>
//         </div>

//         {/* Revenue */}
//         <div className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 border border-gray-100">
//           <h2 className="text-lg font-semibold text-gray-600">Revenue</h2>
//           <p className="text-4xl font-extrabold text-red-600 mt-2">₹{revenue}</p>
//           <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaUsers, FaBoxOpen, FaCrown, FaRupeeSign } from "react-icons/fa";

// function Dashboard() {
//   const [userCount, setUserCount] = useState(0);
//   const [productCount, setProductCount] = useState(0);

//   // Static (as requested)
//   const membershipCount = 580;
//   const revenue = "2,45,000";

//   useEffect(() => {
//     fetchUsers();
//     fetchProducts();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/users");
//       setUserCount(res.data.length);
//     } catch (err) {
//       console.error("Error fetching users:", err);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/products");
//       setProductCount(res.data.length);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   const cards = [
//     {
//       title: "Users",
//       value: userCount,
//       color: "from-blue-500 to-blue-700",
//       icon: <FaUsers size={32} />,
//       subtitle: "Total Registered Users",
//     },
//     {
//       title: "Products",
//       value: productCount,
//       color: "from-green-500 to-green-700",
//       icon: <FaBoxOpen size={32} />,
//       subtitle: "Products Available",
//     },
//     {
//       title: "Memberships",
//       value: membershipCount,
//       color: "from-purple-500 to-purple-700",
//       icon: <FaCrown size={32} />,
//       subtitle: "Active Membership Plans",
//     },
//     {
//       title: "Revenue",
//       value: `₹${revenue}`,
//       color: "from-red-500 to-red-700",
//       icon: <FaRupeeSign size={32} />,
//       subtitle: "Total Revenue Earned",
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-8 text-gray-800">
//         📊 Dashboard Overview
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`
//               bg-white/80 backdrop-blur-lg 
//               shadow-lg hover:shadow-2xl 
//               transition-all duration-300 
//               rounded-2xl p-6 border border-gray-200 
//               hover:-translate-y-1
//             `}
//           >
//             <div
//               className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center mb-4 shadow-md`}
//             >
//               {card.icon}
//             </div>

//             <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>

//             <p className="text-4xl font-extrabold text-gray-900 mt-2">
//               {card.value}
//             </p>

//             <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaBoxOpen, FaCrown, FaRupeeSign } from "react-icons/fa";
import "./Dashboard.css"; // create this file (CSS below)

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [recentUsers, setRecentUsers] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [lowStockCount, setLowStockCount] = useState(0);

  // Static values (requested)
  const membershipCount = 580;
  const revenue = "2,45,000";

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      const users = res.data || [];
      setUserCount(users.length);

      // Show 3 most recent (assuming insertion order or createdAt; fallback to last 3)
      const recent = users.slice(-3).reverse(); // last 3 users
      setRecentUsers(recent);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      const products = res.data || [];
      setProductCount(products.length);

      // low stock count = qty <= 5
      const lowStock = products.filter((p) => {
        // ensure qty exists and is numeric
        const q = Number(p.qty);
        return !isNaN(q) && q <= 5;
      }).length;
      setLowStockCount(lowStock);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Card data (keeps rendering tidy)
  const cards = [
    {
      id: "users",
      title: "Users",
      value: userCount,
      delta: "+50 this week", // static label — replace with real calc if available
      detailLabel: `${recentUsers.length} recent`,
      detailList: recentUsers,
      icon: <FaUsers size={20} />,
      iconBg: "card-icon-blue",
    },
    {
      id: "products",
      title: "Products",
      value: productCount,
      delta: "+12 new",
      detailLabel: `${lowStockCount} low stock`,
      detailList: [], // not listing names here
      icon: <FaBoxOpen size={20} />,
      iconBg: "card-icon-green",
    },
    {
      id: "memberships",
      title: "Memberships",
      value: membershipCount,
      delta: "+30 active",
      detailLabel: "Popular: Standard",
      detailList: [],
      icon: <FaCrown size={20} />,
      iconBg: "card-icon-purple",
    },
    {
      id: "revenue",
      title: "Revenue",
      value: `₹${revenue}`,
      delta: "+5% from last month",
      detailLabel: "Estimated MTD",
      detailList: [],
      icon: <FaRupeeSign size={20} />,
      iconBg: "card-icon-red",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>📊 Dashboard Overview</h1>
        <p className="muted">Overview of the key metrics for your gym & store</p>
      </div>

      <div className="row gx-3 gy-4">
        {cards.map((card) => (
          <div key={card.id} className="col-12 col-sm-6 col-lg-3">
            <div className="admin-card">
              <div className="card-top">
                <div className={`card-icon ${card.iconBg}`}>{card.icon}</div>
                <div className="card-meta">
                  <div className="card-title">{card.title}</div>
                  <div className="card-delta muted">{card.delta}</div>
                </div>
              </div>

              <div className="card-main">
                <div className="card-value">{card.value}</div>
                <div className="card-sub">{card.detailLabel}</div>
              </div>

              {/* Small list if present (used for recent users) */}
              {card.detailList && card.detailList.length > 0 && (
                <div className="card-list">
                  {card.detailList.map((u, i) => (
                    <div className="card-list-item" key={u._id || i}>
                      <div className="bullet" />
                      <div>
                        <div className="list-name">{u.name || u.email}</div>
                        <div className="list-sub muted">{u.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
