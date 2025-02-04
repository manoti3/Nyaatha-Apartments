import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTreeCity, faBuilding, faMountainCity, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const cities = [
    { name: "Amsterdam", icon: faLandmark },
    { name: "Firenze", icon: faTreeCity },
    { name: "Nairobi", icon: faGlobe },
    { name: "Madrid", icon: faBuilding },
    { name: "Kobe", icon: faMountainCity },
    { name: "Berlin", icon: faLandmark },
    { name: "Paris", icon: faTreeCity },
    { name: "Tokyo", icon: faBuilding },
    { name: "New York", icon: faGlobe },
    { name: "Sydney", icon: faMountainCity },
  ];

  const [visibleCities, setVisibleCities] = useState(cities.slice(0, 6));
  const rotateCities = () => {
    setVisibleCities((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  useEffect(() => {
    const interval = setInterval(rotateCities, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="title">Client Testimonials</h2>
      <p className="description">
        Discover why we are the trusted choice for short-term apartment rentals.
      </p>
      <a href="#reviews" className="cta">
        Check out our guest reviews ➔
      </a>
      <div className="city-logos">
        {visibleCities.map((city, index) => (
          <span key={index} className="city">
            <FontAwesomeIcon icon={city.icon} size="2x" /> {city.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;