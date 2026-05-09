import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [photo, setPhoto] = useState(null);
  const [editId, setEditId] = useState(null);

  // ✅ Fetch products
  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Add or Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !qty) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("qty", qty);
    formData.append("price", price);
    if (photo) formData.append("photo", photo);

    try {
      if (editId) {
        // Update
        await axios.put(`http://localhost:5000/api/products/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditId(null);
      } else {
        // Add
        await axios.post(`http://localhost:5000/api/products`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      alert("product added");

      }

      // Reset
      setName("");
      setDescription("");
      setPrice("");
      setQty("");
      setPhoto(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Error saving product");
    }
  };

  // ✅ Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/product_del/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  // ✅ Edit
  const handleEdit = (prod) => {
    setEditId(prod._id);
    setName(prod.name);
    setDescription(prod.description);
    setPrice(prod.price);
    setQty(prod.qty);
    setPhoto(null); // reset file
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Manage Products</h2>

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="border p-3 mb-4 rounded shadow-sm"
      >
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
        </div>
        <div className="mt-3 text-end">
          <button
            type="submit"
            className={`btn ${editId ? "btn-warning" : "btn-success"}`}
          >
            {editId ? "✏ Update Product" : "➕ Add Product"}
          </button>
        </div>
      </form>

      {/* Products Table */}
      <table className="table table-bordered table-striped text-center align-middle shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((prod, index) => (
              <tr key={prod._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:5000/uploads/${prod.photo}`}
                    alt={prod.name}
                    width="80"
                    height="60"
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                  />
                </td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td className="fw-bold text-danger">₹{prod.price}</td>
                <td>{prod.qty}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(prod)}
                  >
                    ✏ Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(prod._id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
