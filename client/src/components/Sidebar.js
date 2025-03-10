// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();
//   const isAdminPage = location.pathname.startsWith("/admin");

//   if (!isAdminPage) return null;

//   const handleLogout = () => {
//     localStorage.removeItem("role");  
//     localStorage.removeItem("users"); 
//     window.location.href = "/"; 
//   };
  

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4">
//       <h2 className="text-lg font-bold">Admin Panel</h2>
//       <ul>
//         <li><Link to="/admin/bookings">Bookings</Link></li>
//         <li><Link to="/admin/accommodations">Accommodations</Link></li>
//         <li><Link to="/admin/commercials">Commercials</Link></li>
//       </ul>
//       <button
//         onClick={handleLogout}
//         className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBriefcase, FiBookOpen, FiLogOut } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  if (!isAdminPage) return null;

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("users");
    window.location.href = "/";
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
          <FiHome className="text-xl" />
          <Link to="/admin/dashboard" className="text-lg">Dashboard</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
          <FiBookOpen className="text-xl" />
          <Link to="/admin/bookings" className="text-lg">Bookings</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
          <FaBuilding className="text-xl" />
          <Link to="/admin/accommodations" className="text-lg">Accommodations</Link>
        </li>
        <li className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded-md">
          <FiBriefcase className="text-xl" />
          <Link to="/admin/commercials" className="text-lg">Commercials</Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
      >
        <FiLogOut className="text-xl" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
