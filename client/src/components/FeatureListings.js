import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./FeatureListings.css";

const properties = [
  {
    title: "Exceptional Rental Experiences",
    description:
      "Transform your travel experience with our thoughtfully designed rental spaces tailored to your unique needs and preferences.",
    image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Eco-Friendly Rental Practices",
    description:
      "Discover stylish and comfortable short-term apartment rentals that make your stay unforgettable.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Exceptional Guest Services",
    description:
      "Experience seamless booking with detailed listings, transparent pricing, and attentive customer service from start to finish.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeatureListings = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <section className="feature-listings">
      <div className="feature-header">
        <h2>Unveil Our Exclusive Listings</h2>
        <p>
          Explore our latest offerings: stylish, fully-equipped apartments that
          combine comfort with convenience for your perfect getaway.
        </p>
      </div>
      <div className="feature-content">
        <div className="feature-images">
          {properties.map((property, index) => (
            <div key={index} className="feature-item">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Button to View Listings */}
      <div className="feature-button">
        <button onClick={() => navigate("/listings")}>View Our Listings</button>
      </div>
    </section>
  );
};

export default FeatureListings;
