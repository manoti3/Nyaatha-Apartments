import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'John Doe',
    review: 'This property management system made my rental experience seamless and stress-free!',
    image: '/assets/user1.jpg',
  },
  {
    name: 'Jane Smith',
    review: 'A user-friendly platform that ensures everything from payments to bookings runs smoothly!',
    image: '/assets/user2.jpg',
  },
  {
    name: 'Michael Johnson',
    review: 'Excellent service and support! I highly recommend it for all property owners.',
    image: '/assets/user3.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-card">
        <img src={testimonialsData[currentIndex].image} alt={testimonialsData[currentIndex].name} className="testimonial-image" />
        <p className="testimonial-review">"{testimonialsData[currentIndex].review}"</p>
        <h4 className="testimonial-name">- {testimonialsData[currentIndex].name}</h4>
      </div>
    </div>
  );
};

export default Testimonials;
