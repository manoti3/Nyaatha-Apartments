import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  if (!isAdminPage) return null;

  const handleLogout = () => {
    localStorage.removeItem("role"); // ✅ Remove admin role
    window.location.href = "/"; // ✅ Redirect to Home Page
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold">Admin Panel</h2>
      <ul>
        <li><Link to="/admin/bookings">Bookings</Link></li>
        <li><Link to="/admin/accommodations">Accommodations</Link></li>
        <li><Link to="/admin/commercials">Commercials</Link></li>
      </ul>
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
