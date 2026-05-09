// import React, { useState } from 'react';
// import axios from 'axios';

// function Category() {
//   const [formData, setFormData] = useState({ name: '', photo: null });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;



//     if (name === 'photo') {
//       setFormData({ ...formData, photo: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Use FormData to send a file
//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('photo', formData.photo);

    
//     try {
//       await axios.post('http://localhost:5000/api/category', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       alert("Category added successfully!");
//       setFormData({ name: '', photo: null });
//     } catch (error) {
//       alert("Error adding category");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Add Category</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         /><br />
//         <input
//           type="file"
//           name="photo"
//           onChange={handleChange}
//         /><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Category;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CategoryTable() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [editId, setEditId] = useState(null); // track edit mode

  // ✅ Fetch categories
  const fetchCategories = () => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ✅ Add or Update category
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !photo) {
      alert("Please enter name or upload a photo");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    if (photo) formData.append("photo", photo);

    try {
      if (editId) {
        // Update
        await axios.put(`http://localhost:5000/api/category/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditId(null);
      } else {
        // Add
        await axios.post("http://localhost:5000/api/category", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setName("");
      setPhoto(null);
      fetchCategories(); // refresh table
    } catch (err) {
      console.error(err);
      alert("Error saving category");
    }
  };

  // ✅ Delete category
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/category_del/${id}`);
      fetchCategories();
    } catch (err) {
      console.error(err);
      alert("Error deleting category");
    }
  };

  // ✅ Load category into form for editing
  const handleEdit = (cat) => {
    setEditId(cat._id);
    setName(cat.name);
    setPhoto(null); // reset file, optional
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Manage Categories</h2>

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="border p-3 mb-4 rounded shadow-sm"
      >
        <div className="row g-2 align-items-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className={`btn ${editId ? "btn-warning" : "btn-success"} w-100`}>
              {editId ? "✏ Update Category" : "➕ Add Category"}
            </button>
          </div>
        </div>
      </form>

      {/* Categories Table */}
      <table className="table table-bordered table-striped text-center align-middle shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat, index) => (
              <tr key={cat._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:5000/uploads/${cat.photo}`}
                    alt={cat.name}
                    width="80"
                    height="60"
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                  />
                </td>
                <td>{cat.name}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(cat)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(cat._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Categories Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}