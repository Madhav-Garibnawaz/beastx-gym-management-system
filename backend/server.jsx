const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// 🔹 Serve uploaded images
app.use('/uploads', express.static('uploads'));


// Connect To MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// ================== PRODUCT ==================

// Product Schema (linked to Category)
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number,
  price: Number,
  photo: String,
});
const Product = mongoose.model('Product', productSchema);

// Multer storage for products
const productStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const uploadProduct = multer({ storage: productStorage });

// Add Product
app.post('/api/products', uploadProduct.single('photo'), async (req, res) => {
  try {
    const { name, description, qty, price } = req.body;
    const photo = req.file ? req.file.filename : null;
    if (!name || !description || !qty || !price || !photo) {
      return res.status(400).send('Missing Required Fields');
    }

    const newProduct = new Product({ name, description, qty, price, photo });
    await newProduct.save();
    res.status(201).send('Product Added!');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error Saving Product');
  }
});

// Get products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error Fetching Products');
  }
});

// Delete Product
app.delete('/api/product_del/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.send('Product Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting product');
  }
});

// Update Product
app.put('/api/products/:id', uploadProduct.single('photo'), async (req, res) => {
  try {
    const { name, description, qty, price } = req.body; // get all fields
    let updateData = { name, description, qty, price };

    // if new photo uploaded, update it
    if (req.file) {
      updateData.photo = req.file.filename;
    }

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true } // runValidators ensures schema validation
    );

    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating product');
  }
});
// ================== USERS ==================
// Users Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // store password as String
  status: { type: Number, default: 0 },
});
const User = mongoose.model('User', userSchema);

// Register User
app.post('/api/user/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'Missing required fields' });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'Email already registered' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
});

// Login User
app.post('/api/user/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: 'Missing email or password' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: 'Invalid credentials' });
    }

    res.json({
      success: true,
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email },
      token: 'dummy-token', // later replace with JWT if needed
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error logging in' });
  }
});
// Get users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error Fetching Users');
  }
});



// ==================== MEMBERSHIP =================
const memberSchema = new mongoose.Schema({
  email: String,
  phone: String,
  age: String,
  plan: String,
});
const Member = mongoose.model('Member', memberSchema);

// Add Membership
app.post('/api/members', async (req, res) => {
  try {
    const { email, phone, age, plan } = req.body;

    if (!email || !phone || !age || !plan) {
      return res.status(400).send('Missing Required Fields');
    }

    const newMember = new Member({ email, phone, age, plan });
    await newMember.save();
    res.status(201).send('Membership subscribed !');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error to purchase membership');
  }
});

// Get Members
app.get('/api/getmembers', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error Fetching Members');
  }
});


//membership detail fetch
app.get("/api/members/byemail/:email", async (req, res) => {
  try {
    const member = await Member.findOne({ email: req.params.email });
    if (!member) return res.json({ success: false });
    res.json({ success: true, member });
  } catch (err) {
    res.json({ success: false });
  }
});


//Update Membership (RENEW)
app.put('/api/members/update/:email', async (req, res) => {
  try {
    const { phone, age, plan } = req.body;

    const updated = await Member.findOneAndUpdate(
      { email: req.params.email },
      { phone, age, plan },
      { new: true }
    );

    if (!updated) {
      return res.json({ success: false, message: "Membership not found" });
    }

    res.json({ success: true, message: "Membership updated", member: updated });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error updating membership" });
  }
});

// Cancel/Delete Membership
app.delete('/api/members/:email', async (req, res) => {
  try {
    const deleted = await Member.findOneAndDelete({ email: req.params.email });

    if (!deleted) {
      return res.json({ success: false, message: "Membership not found" });
    }

    res.json({ success: true, message: "Membership cancelled" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Error cancelling membership" });
  }
});



// =============Admin========================

const adminSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});
  
const Admin = mongoose.model("Admin", adminSchema);

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.json({ success: false, message: "Invalid admin credentials" });
    }

    res.json({ 
      success: true, 
      admin: { name: admin.name, email: admin.email } 
    });

  } catch (err) {
    res.json({ success: false, message: "Server error" });
  }
});


// // ================== PRODUCT ==================
// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   qty: Number,
//   price: Number,
//   photo: String,
// });
// const Product = mongoose.model('Product', productSchema);

// // Get products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error Fetching Products');
//   }
// });

// ================== START SERVER ==================
app.listen(5000, () => console.log('✅ User Server running on port 5000'));

