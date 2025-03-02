// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./PropertyDetails.css";

// function PropertyDetails() {
//   const { id } = useParams();
//   const [accommodation, setAccommodation] = useState(null);
//   const [activeTab, setActiveTab] = useState("description");

//   useEffect(() => {
//     fetch("/accommodations.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const foundAccommodation = data.accommodations.find(
//           (acc) => acc.id === Number(id) // Ensure proper number comparison
//         );
//         setAccommodation(foundAccommodation);
//       })
//       .catch((error) => console.error("Error fetching accommodations:", error));
//   }, [id]);

//   if (!accommodation) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="accommodation-details">
//       <img
//         src={accommodation.cover_image}
//         alt={accommodation.title}
//         className="cover-imageA"
//       />
//       <h2 className="title">{accommodation.title}</h2>
//       <p className="vibe">{accommodation.vibe}</p>
//       <p className="price">
//         <strong>Beds:</strong> {accommodation.beds}
//       </p>

//       <button className="book-now">Book Now</button>

//       {/* Tabs */}
//       <div className="tabs">
//         <button
//           className={activeTab === "description" ? "active" : ""}
//           onClick={() => setActiveTab("description")}
//         >
//           Description
//         </button>
//         <button
//           className={activeTab === "gallery" ? "active" : ""}
//           onClick={() => setActiveTab("gallery")}
//         >
//           Gallery
//         </button>
//         <button
//           className={activeTab === "price" ? "active" : ""}
//           onClick={() => setActiveTab("price")}
//         >
//           Price
//         </button>
//         <button
//           className={activeTab === "reviews" ? "active" : ""}
//           onClick={() => setActiveTab("reviews")}
//         >
//           Reviews
//         </button>
//       </div>

//       {/* Active Tab Content */}
//       <div className="tab-content">
//         {activeTab === "description" && (
//           <div className="description">
//             <h3>About {accommodation.title}</h3>
//             <p>{accommodation.description}</p>
//           </div>
//         )}

//         {activeTab === "gallery" && (
//           <div className="gallery">
//             <h3>Photo Gallery</h3>
//             {accommodation.images?.length > 0 ? (
//               accommodation.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`gallery-${index}`}
//                   className="gallery-image"
//                 />
//               ))
//             ) : (
//               <p>No images available.</p>
//             )}
//           </div>
//         )}

//         {activeTab === "price" && (
//           <div className="price">
//             <p>{accommodation.price}</p>
//           </div>
//         )}

//         {activeTab === "reviews" && (
//           <div className="reviews">
//             <h3>Customer Reviews</h3>
//             {accommodation.reviews?.length > 0 ? (
//               accommodation.reviews.map((review, index) => (
//                 <div key={index} className="review">
//                   <p>
//                     <strong>User {review.user_id}</strong> rated {review.rating} stars
//                   </p>
//                   <p>{review.comment}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No reviews yet.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PropertyDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/accommodations.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAccommodation = data.accommodations.find(
          (acc) => acc.id === Number(id)
        );
        setAccommodation(foundAccommodation);
      })
      .catch((error) => console.error("Error fetching accommodations:", error));
  }, [id]);

  if (!accommodation) {
    return <div className="loading-message">Accommodation not found or still loading...</div>;
  }

  return (
    <div className="accommodation-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Listings
      </button>
      <img
        src={accommodation.cover_image}
        alt={accommodation.title}
        className="cover-imageA"
      />
      <h2 className="title">{accommodation.title}</h2>
      <p className="vibe">{accommodation.vibe}</p>
      <p className="price">
        <strong>Beds:</strong> {accommodation.beds}
      </p>

      <button className="book-now" onClick={() => setShowModal(true)}>Book Now</button>
      <BookNowModal show={showModal} onClose={() => setShowModal(false)} accommodation={accommodation} />

      <div className="tabs">
        {['description', 'gallery', 'price', 'reviews'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "description" && (
          <div className="description">
            <h3>About {accommodation.title}</h3>
            <p>{accommodation.description}</p>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="gallery">
            <h3>Photo Gallery</h3>
            {accommodation.images?.length > 0 ? (
              accommodation.images.map((image, index) => (
                <img key={index} src={image} alt={`gallery-${index}`} className="gallery-image" />
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        )}

        {activeTab === "price" && <div className="price"><p>{accommodation.price}</p></div>}

        {activeTab === "reviews" && (
          <div className="reviews">
            <h3>Customer Reviews</h3>
            {accommodation.reviews?.length > 0 ? (
              accommodation.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p><strong>{review.username || `User ${review.user_id}`}</strong> rated {review.rating} stars</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function BookNowModal({ show, onClose, accommodation }) {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Book {accommodation.title}</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          
          <label>Email:</label>
          <input type="email" required />
          
          <label>Check-in Date:</label>
          <input type="date" required />
          
          <label>Check-out Date:</label>
          <input type="date" required />
          
          <button type="submit">Confirm Booking</button>
        </form>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PropertyDetails;
