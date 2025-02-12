import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CommercialSpacesList from "./components/CommercialSpacesList";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Accommodations from "./components/Accommodations"; // Import Accommodation Component
import "./App.css";

const App = () => {
  const location = useLocation();

  // Show Footer only on the homepage
  const showFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial-space" element={<CommercialSpacesList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/accommodations" element={<Accommodations />} /> {/* Accommodation Route */}
      </Routes>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
