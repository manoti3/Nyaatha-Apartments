import React from "react";
import Navbar from "./components/Navbar"; // Import the Navbar component
import PhotoDisplay from "./components/PhotoDisplay";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar */}
      <PhotoDisplay />
      <Footer />
    </div>
  );
}

export default App;
