import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Calendar, User } from "lucide-react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/assets/logo.jpeg" alt="Nyaatha Apartments Logo" className="logo-image" />
        </Link>

        {/* Desktop Menu */}
        <div className="menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/help" className="nav-link">Help</Link>
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

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/help" className="mobile-link" onClick={() => setIsOpen(false)}>Help</Link>
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
