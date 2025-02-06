import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Calendar, User } from "lucide-react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/assets/logo.jpeg" alt="Nyaatha Apartments Logo" className="logo-image" />
        </Link>

        <div className="menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/commercial-space" className="nav-link">Commercial Space</Link>
          <Link to="/accommodation" className="nav-link">Accommodation</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <Link to="/profile" className="nav-link profile-link">
            <User className="icon" size={18} /> Profile
          </Link>

          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <Search className="search-icon" size={18} />
          </div>

          <Link to="/schedule" className="schedule-btn">
            <Calendar className="icon" size={18} /> Schedule Appointment
          </Link>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/commercial-space" className="mobile-link" onClick={() => setIsOpen(false)}>Commercial Space</Link>
          <Link to="/accommodation" className="mobile-link" onClick={() => setIsOpen(false)}>Accommodation</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/help" className="mobile-link" onClick={() => setIsOpen(false)}>Help</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/profile" className="mobile-link" onClick={() => setIsOpen(false)}>
            <User className="icon" size={18} /> Profile
          </Link>

          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <Search className="search-icon" size={18} />
          </div>

          <Link to="/schedule" className="schedule-btn mobile-btn" onClick={() => setIsOpen(false)}>
            <Calendar className="icon" size={18} /> Schedule Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
