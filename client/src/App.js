import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CommercialSpacesList from "./components/CommercialSpacesList";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Accommodations from "./components/Accommodations";
import PropertyDetails from "./components/PropertyDetails";
import LoginSignup from "./components/LoginSignup";
import "./App.css";

const App = () => {
  const location = useLocation();

  // Hide Navbar on these routes
  const hideNavbarRoutes = ["/loginsignup"];

  // Show Footer only on the homepage
  const showFooter = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally Render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/commercial-space" element={<CommercialSpacesList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodation/:id" element={<PropertyDetails />} />
      </Routes>

      {/* Show Footer only on the Home page */}
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
