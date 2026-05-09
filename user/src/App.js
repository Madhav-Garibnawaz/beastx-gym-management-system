import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Membership from "./components/Membership";
import Trainer from "./components/Trainer";
import Contect from "./components/Contect"; 

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Memberform from "./pages/Memberform";
import MyMembership from "./pages/MyMembership";

// Homepage with multiple sections
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Product />
    <Membership />
    <Trainer />
    <Contect />
  </>
);

function App() {

  const location = useLocation();

  // ⭐ Fix navigation for all pages
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } 
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/memberform" element={<Memberform />} />
        <Route path="/mymembership" element={<MyMembership />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
