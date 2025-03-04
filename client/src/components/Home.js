// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import HeroSection from './HeroSection';
// import WhyChooseUs from './WhyChooseUs';
// import Testimonials from './Testimonials';
// import KeyMetrics from './KeyMetrics';  // Import KeyMetrics Component

// const Home = () => {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   const properties = [
//     { type: 'accommodation', image: '/assets/accommodation.jpg', title: 'Luxury Apartment', price: '$1,200/month', details: 'Fully furnished apartment with modern amenities.' },
//     { type: 'accommodation', image: '/assets/room1.jpg', title: 'Standard Room', price: '$800/month', details: 'Cozy room with basic facilities for comfortable living.' },
//     { type: 'accommodation', image: '/assets/room2.jpg', title: 'Deluxe Suite', price: '$1,500/month', details: 'Spacious suite with high-end furnishings.' },
//     { type: 'accommodation', image: '/assets/room3.jpg', title: 'Executive Penthouse', price: '$2,500/month', details: 'High-rise penthouse with a city view.' },
//     { type: 'accommodation', image: '/assets/room4.jpg', title: 'Cozy Studio', price: '$700/month', details: 'Compact studio with essential amenities.' },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollLeft += 1;
//       }
//     }, 30);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Full-width Hero Section */}
//       <div className="full-width-hero">
//         <HeroSection />
//       </div>

//       {/* Content Section */}
//       <div className="content-container">
//         <h1 className="home-title new-features-title">New Features</h1>

//         {/* Property Cards Carousel */}
//         <div className="property-carousel" ref={scrollRef}>
//           <div className="property-gallery">
//             {properties.map((property, index) => (
//               <div key={index} className="property-card" onClick={() => navigate(`/${property.type}`)}>
//                 <img src={property.image} alt={property.title} className="property-image" />
//                 <div className="property-info">
//                   <h3>{property.title}</h3>
//                   <p>{property.details}</p>
//                   <span className="property-price">{property.price}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Why Choose Us Section */}
//         <WhyChooseUs />

//         {/* Key Metrics Section (Added Below Why Choose Us) */}
//         <KeyMetrics />

//         {/* Testimonials Section */}
//         <Testimonials />

//         {/* Slideshow Component */}
//         <div className="slideshow-wrapper">
//           {/* Add Slideshow component if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HeroSection from './HeroSection';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import KeyMetrics from './KeyMetrics';  // Import KeyMetrics Component

const Home = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Redirect admin users away from homepage
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin-dashboard");  // Redirect admin users
    }
  }, [navigate]);

  const properties = [
    { type: 'accommodation', image: '/assets/accommodation.jpg', title: 'Luxury Apartment', price: '$1,200/month', details: 'Fully furnished apartment with modern amenities.' },
    { type: 'accommodation', image: '/assets/room1.jpg', title: 'Standard Room', price: '$800/month', details: 'Cozy room with basic facilities for comfortable living.' },
    { type: 'accommodation', image: '/assets/room2.jpg', title: 'Deluxe Suite', price: '$1,500/month', details: 'Spacious suite with high-end furnishings.' },
    { type: 'accommodation', image: '/assets/room3.jpg', title: 'Executive Penthouse', price: '$2,500/month', details: 'High-rise penthouse with a city view.' },
    { type: 'accommodation', image: '/assets/room4.jpg', title: 'Cozy Studio', price: '$700/month', details: 'Compact studio with essential amenities.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Full-width Hero Section */}
      <div className="full-width-hero">
        <HeroSection />
      </div>

      {/* Content Section */}
      <div className="content-container">
        <h1 className="home-title new-features-title">New Features</h1>

        {/* Property Cards Carousel */}
        <div className="property-carousel" ref={scrollRef}>
          <div className="property-gallery">
            {properties.map((property, index) => (
              <div key={index} className="property-card" onClick={() => navigate(`/${property.type}`)}>
                <img src={property.image} alt={property.title} className="property-image" />
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p>{property.details}</p>
                  <span className="property-price">{property.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Key Metrics Section */}
        <KeyMetrics />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Slideshow Component */}
        <div className="slideshow-wrapper">
          {/* Add Slideshow component if needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
