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
  const currentPath = location.pathname.toLowerCase();

  // Hide Navbar on LoginSignup page
  const hideNavbar = currentPath === "/loginsignup";

  // Show Footer only on the Home page
  const showFooter = currentPath === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally Render Navbar */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercial-space" element={<CommercialSpacesList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodation/:id" element={<PropertyDetails />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>

      {/* Show Footer only on the Home page */}
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
