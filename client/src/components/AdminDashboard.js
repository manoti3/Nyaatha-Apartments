import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Bookings from "./Booking"; 
import Accommodations from "./Accommodations";
import Commercials from "./CommercialSpace";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          {/* ✅ Default route for /admin */}
          <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>} />
          
          <Route path="bookings" element={<Bookings />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="commercials" element={<Commercials />} />

          {/* ✅ Catch-all for unmatched routes inside /admin */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;

