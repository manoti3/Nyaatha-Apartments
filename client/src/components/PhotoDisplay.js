import React from "react";
import "./PhotoDisplay.css";

const PhotoDisplay = () => {
  const photos = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domain.com.au%2Fsale%2Fmont-albert-north-vic-3129%2F&psig=AOvVaw3uRwTDF5zoYdild-LglVo7&ust=1738751818811000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjOsrnpqYsDFQAAAAAdAAAAABAT+1",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domain.com.au%2Fsale%2Fmont-albert-north-vic-3129%2F&psig=AOvVaw3uRwTDF5zoYdild-LglVo7&ust=1738751818811000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjOsrnpqYsDFQAAAAAdAAAAABAT+2",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domain.com.au%2Fsale%2Fmont-albert-north-vic-3129%2F&psig=AOvVaw3uRwTDF5zoYdild-LglVo7&ust=1738751818811000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjOsrnpqYsDFQAAAAAdAAAAABAT+3",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domain.com.au%2Fsale%2Fmont-albert-north-vic-3129%2F&psig=AOvVaw3uRwTDF5zoYdild-LglVo7&ust=1738751818811000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjOsrnpqYsDFQAAAAAdAAAAABAT+4",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.domain.com.au%2Fsale%2Fmont-albert-north-vic-3129%2F&psig=AOvVaw3uRwTDF5zoYdild-LglVo7&ust=1738751818811000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjOsrnpqYsDFQAAAAAdAAAAABAT+5",
  ];

  return (
    <section className="photo-display">
      <div className="photo-container">
        {photos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img src={photo} alt={`View of a property ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoDisplay;
