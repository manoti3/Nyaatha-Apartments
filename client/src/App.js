// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import FeatureListings from "./components/FeatureListings";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import "./App.css";

// const Home = () => (
//   <div>
//     <HeroSection />
//     <FeatureListings />
//     <Testimonials />
//     <Footer />
//   </div>
// );

// const App = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";  // Import Home here
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  {/* This will be the homepage */}
        <Route path="/about" element={<AboutUs />} />
        {/* You can add other routes here */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
