// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function MyMembership() {
//   const [membership, setMembership] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(sessionStorage.getItem("user"));
//     if (!user) return;

//     axios
//       .get(`http://localhost:5000/api/members/byemail/${user.email}`)
//       .then(res => {
//         if (res.data.success) {
//           setMembership(res.data.member);
//         }
//       });
//   }, []);

//   if (!membership) {
//     return <h3 className="text-center mt-5">You have not purchased any membership.</h3>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>Your Membership Details</h2>
//       <p><strong>Email:</strong> {membership.email}</p>
//       <p><strong>Plan:</strong> {membership.plan}</p>
//       <p><strong>Age:</strong> {membership.age}</p>
//       <p><strong>Phone:</strong> {membership.phone}</p>
//     </div>
//   );
// }

// export default MyMembership;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles/MyMembership.css";  // 🔥 create this file
// import { CloudMoonRain } from "lucide-react";

// function MyMembership() {
//   const [membership, setMembership] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(sessionStorage.getItem("user"));
//     if (!user) return;

//     axios
//       .get(`http://localhost:5000/api/members/byemail/${user.email}`)
//       .then(res => {
//         if (res.data.success) {
//           setMembership(res.data.member);
//         }
//       });
//   }, []);

//   if (!membership) {
//     return (
//       <div className="membership-container empty-msg">
//         <div className="membership-card">
//           <h2 className="title">You have not purchased any membership yet.</h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="membership-container">
//       <div className="membership-card">
//         <h1 className="title">
//           YOUR <span className="highlight">MEMBERSHIP</span>
//         </h1>

//         <div className="details">
//           <p><strong>Plan:</strong> {membership.plan}</p>
//           <p><strong>Age:</strong> {membership.age}</p>
//           <p><strong>Phone:</strong> {membership.phone}</p>
//           <p><strong>Email:</strong> {membership.email}</p>
//         </div>

//         <button className="btn-renew">Renew Membership</button>
//       </div>
//     </div>
//   );
// }

// export default MyMembership;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./styles/MyMembership.css";

// function MyMembership() {
//   const [membership, setMembership] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(sessionStorage.getItem("user"));
//     if (!user) return;

//     axios
//       .get(`http://localhost:5000/api/members/byemail/${user.email}`)
//       .then(res => {
//         if (res.data.success) setMembership(res.data.member);
//       });
//   }, []);

//   if (!membership) {
//     return (
//       <div className="my-m-container">
//         <div className="my-m-card">
//           <h2 className="my-m-title">You have not purchased any membership yet.</h2>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="my-m-container">
//       <div className="my-m-card">
//         <h1 className="my-m-title">
//           YOUR <span className="my-m-highlight">MEMBERSHIP</span>
//         </h1>

//         <div className="my-m-details">
//           <p><strong>Plan:</strong> {membership.plan}</p>
//           <p><strong>Age:</strong> {membership.age}</p>
//           <p><strong>Phone:</strong> {membership.phone}</p>
//           <p><strong>Email:</strong> {membership.email}</p>
//         </div>

//         <button className="my-m-btn-renew">Renew Membership</button>
//       </div>
//     </div>
//   );
// }

// export default MyMembership;




import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/MyMembership.css";
import { useNavigate } from "react-router-dom";

function MyMembership() {
  const [membership, setMembership] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return;

    axios
      .get(`http://localhost:5000/api/members/byemail/${user.email}`)
      .then(res => {
        if (res.data.success) {
          setMembership(res.data.member);
        }
      });
  }, []);

  // ⭐ RENEW MEMBERSHIP
  const handleRenew = () => {
    navigate("/memberform", { state: { renew: true } });
  };

  // ⭐ CANCEL MEMBERSHIP
  const handleCancel = async () => {
    const confirmDelete = window.confirm("Are you sure you want to cancel your membership?");
    if (!confirmDelete) return;

    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return;

    const res = await axios.delete(`http://localhost:5000/api/members/${user.email}`);
    
    if (res.data.success) {
      alert("Membership cancelled successfully!");
      setMembership(null);
    } else {
      alert("Failed to cancel membership.");
    }
  };

  // ⭐ If user has no membership
  if (!membership) {
    return (
      <div className="my-m-container">
        <div className="my-m-card">
          <h2 className="my-m-title">You have not purchased any membership yet.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="my-m-container">
      <div className="my-m-card">
        <h1 className="my-m-title">
          YOUR <span className="my-m-highlight">MEMBERSHIP</span>
        </h1>

        <div className="my-m-details">
          <p><strong>Plan:</strong> {membership.plan}</p>
          <p><strong>Age:</strong> {membership.age}</p>
          <p><strong>Phone:</strong> {membership.phone}</p>
          <p><strong>Email:</strong> {membership.email}</p>
        </div>

        <button className="my-m-btn-renew" onClick={handleRenew}>
          Renew Membership
        </button>

        <button className="my-m-btn-cancel" onClick={handleCancel}>
          Cancel Membership
        </button>
      </div>
    </div>
  );
}

export default MyMembership;
