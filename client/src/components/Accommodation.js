import React from "react";
import "./Accommodation.css";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: "$150 per night",
    space: "45 sqm",
    description: "A spacious suite with a king-sized bed and balcony.",
    image: "/assets/accommodation1.jpg",
  },
  {
    id: 2,
    name: "Standard Room",
    price: "$100 per night",
    space: "30 sqm",
    description: "Cozy room with modern amenities and a city view.",
    image: "/assets/accommodation2.jpg",
  },
  {
    id: 3,
    name: "Penthouse",
    price: "$300 per night",
    space: "80 sqm",
    description: "Luxurious penthouse with a private terrace and Jacuzzi.",
    image: "/assets/accommodation3.jpg",
  },
];

const Accommodation = () => {
  return (
    <div className="accommodation-grid">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <img src={room.image} alt={room.name} className="room-image" />
          <div className="room-content">
            <h2 className="room-title">{room.name}</h2>
            <p className="room-description">{room.description}</p>
            <div className="room-info">
              <span className="room-price">{room.price}</span>
              <span className="room-space">({room.space})</span>
            </div>
            <button className="book-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accommodation;
