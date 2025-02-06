// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// import HeroSection from './HeroSection';  // Import HeroSection

// const Home = () => {
//   const navigate = useNavigate();

//   const handleImageClick = (type) => {
//     if (type === 'commercial') {
//       navigate('/commercial'); // Navigate to commercial property page
//     } else if (type === 'accommodation') {
//       navigate('/accommodation'); // Navigate to accommodation page
//     }
//   };

//   return (
//     <div className="home-container">
//       <h1>Welcome to Nyaatha Apartments</h1>

//       {/* Image Gallery */}
//       <div className="image-gallery">
//         <div className="gallery-item" onClick={() => handleImageClick('commercial')}>
//           <img src="/assets/commercial.jpg" alt="Commercial Property" />
//           <button className="cta-button">Explore Commercial Property</button>
//         </div>
//         <div className="gallery-item" onClick={() => handleImageClick('accommodation')}>
//           <img src="/assets/accommodation.jpg" alt="Accommodation" />
//           <button className="cta-button">Explore Accommodation</button>
//         </div>
//       </div>

//       {/* HeroSection after the listings */}
//       <HeroSection /> {/* Add HeroSection component here */}
      
//       <h2>Unveil Our Exclusive Listings</h2>
//       {/* Slide show component goes here */}
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HeroSection from './HeroSection';
import Slideshow from './Slideshow';

const Home = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const properties = [
    {
      type: 'accommodation',
      image: '/assets/accommodation.jpg',
      title: 'Luxury Apartment',
      price: '$1,200/month',
      details: 'Fully furnished apartment with modern amenities.',
    },
    {
      type: 'accommodation',
      image: '/assets/room1.jpg',
      title: 'Standard Room',
      price: '$800/month',
      details: 'Cozy room with basic facilities for comfortable living.',
    },
    {
      type: 'accommodation',
      image: '/assets/room2.jpg',
      title: 'Deluxe Suite',
      price: '$1,500/month',
      details: 'Spacious suite with high-end furnishings.',
    },
    {
      type: 'accommodation',
      image: '/assets/room3.jpg',
      title: 'Executive Penthouse',
      price: '$2,500/month',
      details: 'High-rise penthouse with a city view.',
    },
    {
      type: 'accommodation',
      image: '/assets/room4.jpg',
      title: 'Cozy Studio',
      price: '$700/month',
      details: 'Compact studio with essential amenities.',
    },
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
      <h1 className="home-title">Welcome to Nyaatha Apartments</h1>

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

      {/* HeroSection after the listings */}
      <HeroSection />
      
      <h2 className="listings-title">Unveil Our Exclusive Listings</h2>
      
      {/* Slideshow Component */}
      <div className="slideshow-wrapper">
        <Slideshow />
      </div>
    </div>
  );
};

export default Home;
