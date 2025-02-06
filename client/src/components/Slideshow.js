import React, { useState } from 'react';
import './Slideshow.css';

const Slideshow = () => {
  const packages = [
    {
      image: '/assets/room1.jpg',
      title: 'Standard Room',
      description: 'A cozy and affordable room with all basic amenities.',
    },
    {
      image: '/assets/room2.jpg',
      title: 'Deluxe Suite',
      description: 'Spacious suite with a king-size bed and premium facilities.',
    },
    {
      image: '/assets/room3.jpg',
      title: 'Family Apartment',
      description: 'Perfect for families, with multiple rooms and a kitchen.',
    },
    {
      image: '/assets/room4.jpg',
      title: 'Penthouse',
      description: 'Luxury living with panoramic views and top-class services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length);
  };

  return (
    <div className="slideshow-container">
      <button onClick={prevSlide} className="prev-button">‹</button>
      <div className="card">
        <img src={packages[currentIndex].image} alt={packages[currentIndex].title} className="card-image" />
        <div className="card-content">
          <h3>{packages[currentIndex].title}</h3>
          <p>{packages[currentIndex].description}</p>
        </div>
      </div>
      <button onClick={nextSlide} className="next-button">›</button>
    </div>
  );
};

export default Slideshow;
