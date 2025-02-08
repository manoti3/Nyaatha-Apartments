import React from 'react';
import './AboutUs.css'; 

const AboutUs = () => {
  return ( 
    <div id="about-us" className="about-us-container">
      <div className="about-us-content">
        <h1 className="title">About Nyaatha Apartments</h1>
        <div className='about-div'>
          <img src="/assets/about1.jpg" alt="Nyaatha Apartments" />
          <div className='description-about'>
            <p>Welcome to Nyaatha Apartments, your ultimate choice for luxury and comfort in modern urban living.</p>
            <p>Located in a serene and convenient environment, Nyaatha Apartments offers elegant residences equipped with modern amenities, ensuring a perfect balance of style, security, and convenience for our residents.</p>
          </div>
        </div>
        <h2 className="subtitle">Our Mission</h2>
        <div className='mission'>
          <p className="description-mission">Our mission at Nyaatha Apartments is to provide a seamless and luxurious living experience. We prioritize safety, accessibility, and high-quality services to create a vibrant and harmonious community.</p>
          <img src="/assets/about2.jpg" alt="Mission" />
        </div>
        <h2 className="subtitle">Why Choose Us?</h2>
        <div className='values'>
          <img src="/assets/about3.jpg" alt="Values" />
          <ul className="feature-list">
            <li className="feature-item"><strong>Prime Location:</strong> Strategically located near essential amenities, offering easy access to shopping centers, schools, and transport.</li>
            <li className="feature-item"><strong>Modern Amenities:</strong> Enjoy state-of-the-art facilities including a swimming pool, fitness center, secure parking, and high-speed internet.</li>
            <li className="feature-item"><strong>Security & Comfort:</strong> 24/7 security, CCTV surveillance, and controlled access ensure the safety of our residents.</li>
            <li className="feature-item"><strong>Green Spaces:</strong> Beautifully landscaped gardens and recreational areas create a peaceful environment.</li>
            <li className="feature-item"><strong>Excellent Customer Service:</strong> Our dedicated management team is always ready to assist with any inquiries or concerns.</li>
          </ul>
        </div>
        <h2 className="subtitle">Our Vision</h2>
        <div className='vision'>
          <p className="description-vision">At Nyaatha Apartments, we envision a future where luxury meets affordability. We strive to set a benchmark in real estate, offering the best living spaces that cater to diverse needs while embracing sustainability and innovation.</p>
          <img src="/assets/about4.jpg" alt="Vision" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
