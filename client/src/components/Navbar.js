// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X, Search, Calendar, User, ChevronDown } from "lucide-react";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="logo">
//           <img src="/assets/logo.jpeg" alt="Nyaatha Apartments Logo" className="logo-image" />
//         </Link>

//         <div className="menu">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/commercial-space" className="nav-link">Commercials</Link>
//           <Link to="/accommodations" className="nav-link">Accommodations</Link>
//           <Link to="/about" className="nav-link">About</Link>
//           <Link to="/help" className="nav-link">Help</Link>
//           <Link to="/contact" className="nav-link">Contact</Link>

//           {/* Profile Dropdown */}
//           <div className="profile-dropdown">
//             <button className="profile-link" onClick={() => setIsProfileOpen(!isProfileOpen)}>
//               <User className="icon" size={18} /> Profile <ChevronDown size={16} />
//             </button>
//             {isProfileOpen && (
//               <div className="dropdown-menu">
//                 <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Account</Link>
//                 <Link to="/logout" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Logout</Link>
//               </div>
//             )}
//           </div>

//           <div className="search-box">
//             <input type="text" placeholder="Search..." />
//             <Search className="search-icon" size={18} />
//           </div>

//           <Link to="/schedule" className="schedule-btn">
//             <Calendar className="icon" size={18} /> Schedule Appointment
//           </Link>
//         </div>

//         <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mobile-menu">
//           <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/commercial-space" className="mobile-link" onClick={() => setIsOpen(false)}>Commercial</Link>
//           <Link to="/accommodation" className="mobile-link" onClick={() => setIsOpen(false)}>Accommodation</Link>
//           <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</Link>
//           <Link to="/help" className="mobile-link" onClick={() => setIsOpen(false)}>Help</Link>
//           <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>

//           {/* Profile Dropdown in Mobile */}
//           <div className="profile-dropdown">
//             <button className="mobile-link profile-btn" onClick={() => setIsProfileOpen(!isProfileOpen)}>
//               <User className="icon" size={18} /> Profile <ChevronDown size={16} />
//             </button>
//             {isProfileOpen && (
//               <div className="dropdown-menu mobile-dropdown">
//                 <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Account</Link>
//                 <Link to="/logout" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Logout</Link>
//               </div>
//             )}
//           </div>

//           <div className="search-box">
//             <input type="text" placeholder="Search..." />
//             <Search className="search-icon" size={18} />
//           </div>

//           <Link to="/schedule" className="schedule-btn mobile-btn" onClick={() => setIsOpen(false)}>
//             <Calendar className="icon" size={18} /> Schedule Appointment
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, Calendar, User, ChevronDown } from "lucide-react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate(); // Redirect function

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/assets/logo.jpeg" alt="Nyaatha Apartments Logo" className="logo-image" />
        </Link>

        <div className="menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/commercial-space" className="nav-link">Commercials</Link>
          <Link to="/accommodations" className="nav-link">Accommodations</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <button className="profile-link" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <User className="icon" size={18} /> Profile <ChevronDown size={16} />
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu">
                {/* Redirect to LoginSignup when clicking Account */}
                <button 
                  className="dropdown-item" 
                  onClick={() => {
                    setIsProfileOpen(false);
                    navigate("/loginsignup"); // Redirect
                  }}
                >
                  Account
                </button>
                <Link to="/logout" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Logout</Link>
              </div>
            )}
          </div>

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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/commercial-space" className="mobile-link" onClick={() => setIsOpen(false)}>Commercial</Link>
          <Link to="/accommodation" className="mobile-link" onClick={() => setIsOpen(false)}>Accommodation</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/help" className="mobile-link" onClick={() => setIsOpen(false)}>Help</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Profile Dropdown in Mobile */}
          <div className="profile-dropdown">
            <button className="mobile-link profile-btn" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <User className="icon" size={18} /> Profile <ChevronDown size={16} />
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu mobile-dropdown">
                <button 
                  className="dropdown-item" 
                  onClick={() => {
                    setIsProfileOpen(false);
                    setIsOpen(false);
                    navigate("/loginsignup"); // Redirect
                  }}
                >
                  Account
                </button>
                <Link to="/logout" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>Logout</Link>
              </div>
            )}
          </div>

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

