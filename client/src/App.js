// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import CommercialSpacesList from "./components/CommercialSpacesList";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import Home from "./components/Home";
// import ContactUs from "./components/ContactUs";
// import Accommodations from "./components/Accommodations";
// import PropertyDetails from "./components/PropertyDetails";
// import LoginSignup from "./components/LoginSignup";
// import "./App.css";

// const App = () => {
//   const location = useLocation();
//   const [showLogin, setShowLogin] = useState(false);

//   // Hide Navbar on these routes
//   const hideNavbarRoutes = ["/loginsignup"];

//   // Show Footer only on the homepage
//   const showFooter = location.pathname === "/";

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Conditionally Render Navbar */}
//       {!hideNavbarRoutes.includes(location.pathname) && <Navbar onAccountClick={() => setShowLogin(true)} />}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/commercial-space" element={<CommercialSpacesList />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/accommodations" element={<Accommodations />} />
//         <Route path="/accommodation/:id" element={<PropertyDetails />} />
//         <Route path="/loginsignup" element={<LoginSignup />} />
//       </Routes>

//       {/* Show LoginSignup as a modal when showLogin is true */}
//       {showLogin && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg relative">
//             <button className="absolute top-2 right-2 text-gray-500" onClick={() => setShowLogin(false)}>X</button>
//             <LoginSignup />
//           </div>
//         </div>
//       )}

//       {/* Show Footer only on the Home page */}
//       {showFooter && <Footer />}
//     </div>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Bookings from "./components/Booking";
import Accommodations from "./components/Accommodations";
import Commercials from "./components/CommercialSpace";
import Navbar from "./components/Navbar";
import CommercialSpacesList from "./components/CommercialSpacesList";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import PropertyDetails from "./components/PropertyDetails";
import LoginSignup from "./components/LoginSignup";
import BookingPage from "./components/BookingPage";
import AdminDashboard from "./components/AdminDashboard"; 
import "./App.css";

const PrivateRoute = ({ element }) => {
  const role = localStorage.getItem("role");
  return role === "admin" ? element : <Navigate to="/loginsignup" replace />;
};

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const hideNavbar = currentPath === "/loginsignup" || currentPath.startsWith("/admin");
  const hideSidebar = currentPath === "/loginsignup" || currentPath.startsWith("/admin");
  const showFooter = currentPath === "/";

  return (
    <div className="flex h-screen bg-gray-100">
      {!hideSidebar && <Sidebar />}

      <div className="flex-1 p-6 overflow-auto">
        {!hideNavbar && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commercial-space" element={<CommercialSpacesList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/accommodation/:id" element={<PropertyDetails />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/commercials" element={<Commercials />} />

          {/* ✅ Admin Dashboard - Protected Route */}
          <Route path="/admin/*" element={<PrivateRoute element={<AdminDashboard />} />} />

          {/* ✅ Redirect /admin-dashboard to /admin */}
          <Route path="/admin-dashboard" element={<Navigate to="/admin" replace />} />
          
          {/* ✅ Catch-all Route - Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;




