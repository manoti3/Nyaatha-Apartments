import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-images">
        <img src="/assets/hero1.jpg" alt="Interior" className="hero-img" />
        <img src="/assets/hero2.jpg" alt="Kitchen" className="hero-img" />
        <img src="/assets/hero3.jpg" alt="Building" className="hero-img" />
        <img src="/assets/hero4.jpg" alt="Living Room" className="hero-img" />
        <img src="/assets/hero5.jpg" alt="Office" className="hero-img" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Exceptional Rentals for Memorable Stays</h1>
        <p className="hero-description">
          Our short-term rental solutions blend comfort and convenience, providing spaces that enhance your travel experience. Discover your perfect home away from home with our expertise.
        </p>
        <button className="hero-button">Start Your Stay</button>
      </div>
    </header>
  );
};

export default HeroSection;
