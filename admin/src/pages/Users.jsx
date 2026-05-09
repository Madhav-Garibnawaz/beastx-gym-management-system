// import React from 'react'

// function Users() {
//   return (
//     <div>Users</div>
//   )
// }

// export default Users


// Admin/User.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Registered Users</h2>
      <table className="table table-bordered table-responsive mt-3">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Status</th> */}
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No users found</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.status}</td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
