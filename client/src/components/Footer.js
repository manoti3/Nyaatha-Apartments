import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Only available icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Address: 123 RealEstate St, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@realestate.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={30} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3>Newsletter Signup</h3>
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>

      {/* Legal Section */}
      <div className="footer-legal">
        <p>&copy; 2025 RealEstate. All Rights Reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
