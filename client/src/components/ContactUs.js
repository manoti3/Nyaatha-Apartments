import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-info">
          <h3>Our Contact Details</h3>
          <p><strong>📍 Address:</strong> XYZ Plaza, 5th Floor, Nairobi, Kenya</p>
          <p><strong>📞 Phone:</strong> +254 700 123 456</p>
          <p><strong>✉️ Email:</strong> info@example.com</p>
          
          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.101442146243!2d36.82194636227401!3d-1.2920656439984508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173e5b9d79c7%3A0x14bfb9f4e9c9e881!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1698947308294!5m2!1sen!2ske"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
