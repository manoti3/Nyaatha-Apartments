import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Bookings from "./pages/Bookings";
import Accommodations from "./pages/Accommodations";
import Commercials from "./pages/Commercials";
import Dashboard from "./pages/Dashboard";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/accommodations" element={<Accommodations />} />
          <Route path="/commercials" element={<Commercials />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
