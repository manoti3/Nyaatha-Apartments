import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HeroSection.css";

const slides = [
  {
    image: "/assets/hero1.jpg",
    title: "33 YEAR LEGACY",
    description:
      "Driving lifestyle transformation and wealth creation through innovative real estate solutions.",
  },
  {
    image: "/assets/hero2.jpg",
    title: "Modern Living Spaces",
    description: "Experience luxury and comfort with our state-of-the-art apartments.",
  },
  {
    image: "/assets/hero3.jpg",
    title: "Prime Locations",
    description: "Strategically located properties offering easy access to essential amenities.",
  },
  {
    image: "/assets/hero4.jpg",
    title: "Secure & Gated Communities",
    description: "Enjoy peace of mind with 24/7 security in our exclusive residences.",
  },
  {
    image: "/assets/hero5.jpg",
    title: "Invest in the Future",
    description: "Real estate opportunities that ensure long-term value and returns.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <header className="hero-section">
      {/* Background Image */}
      <div className="hero-image-container">
        <img src={slides[currentSlide].image} alt="Hero Slide" className="hero-image" />
        <div className="overlay"></div>
      </div>

      {/* Navigation Arrows */}
      <button className="prev-arrow" onClick={goPrev}>
        <FaChevronLeft />
      </button>
      <button className="next-arrow" onClick={goNext}>
        <FaChevronRight />
      </button>

      {/* Dynamic Text Content */}
      <div className="hero-text">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].description}</p>
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {slides.map((_, index) => (
          <span key={index} className={index === currentSlide ? "dot active" : "dot"}></span>
        ))}
      </div>
    </header>
  );
};

export default HeroSection;
