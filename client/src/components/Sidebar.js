import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/accommodations">Accommodations</Link></li>
        <li><Link to="/commercials">Commercials</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
