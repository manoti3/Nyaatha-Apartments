import React from "react";

const CommercialSpace = ({ image, title, plotNumber, size, price, location, description }) => {
  return (
    <div className="commercial-space">
      <img src={image} alt={title} className="space-image" />
      <h3>{title}</h3>
      <p><strong>Plot No:</strong> {plotNumber}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Price:</strong> {price}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
};

export default CommercialSpace;
