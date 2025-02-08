import React from "react";
import CommercialSpace from "./CommercialSpace";
import "./CommercialSpacesList.css"; // Import the CSS

const commercialSpaces = [
  {
    image: "/assets/commercial1.jpg",
    title: "KAREN | THE WATERMARK | RIVERINA COURT",
    plotNumber: "1600L",
    size: "1011 SQ.FT - 6263 SQ.FT",
    price: "FROM KSHS. 130 PSF.PM",
    location: "KAREN",
    description: "Signature development on 10.8 acres offering space from 1011 to 6263 sq.ft with 5 to 9 car parking respectively.",
  },
  {
    image: "/assets/commercial2.jpg",
    title: "GIGIRI | UN AVENUE | COMMERCIAL OFFICES",
    plotNumber: "247/III",
    size: "FROM 2,650 SQ.FT",
    price: "KSHS. 230 PSF.PM",
    location: "GIGIRI",
    description: "Exclusive office development of 30,000 sq.ft offering space from 2,650 sq.ft with private facilities and backup generator. Available immediately.",
  }
];

const CommercialSpacesList = () => {
  return (
    <div className="commercial-spaces-list">
      <h2>Available Commercial Spaces</h2>
      <div className="spaces-container">
        {commercialSpaces.map((space, index) => (
          <div className="commercial-space" key={index}>
            <img src={space.image} alt={space.title} />
            <div className="space-details">
              <h3>{space.title} | PLOT No. {space.plotNumber}</h3>
              <p><strong>📐 SIZE:</strong> {space.size}</p>
              <p><strong>💰 PRICE:</strong> {space.price}</p>
              <p><strong>📍 LOCATION:</strong> {space.location}</p>
              <p>{space.description}</p>
              <button className="enquire-button">Enquire</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialSpacesList;
