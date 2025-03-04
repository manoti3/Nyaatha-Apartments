import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("client"); // Default role is Client
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(null); // Clear errors when switching forms
  };

  // ✅ Handle Sign-Up (Local Storage)
  const handleSignUp = (e) => {
    e.preventDefault();

    if (role === "admin" && adminCode !== "SECRET123") {
      setError("Invalid admin code!");
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError("User already exists! Please sign in.");
      return;
    }

    // Save new user to localStorage
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("role", role);

    navigate(role === "admin" ? "/admin" : "/");
  };

  // ✅ Handle Sign-In (Local Storage)
  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("role", user.role);
    navigate(user.role === "admin" ? "/admin" : "/");
  };

  return (
    <div className="auth-module-wrapper">
      <div className={`auth-module-container ${isSignUp ? "right-panel-active" : ""}`}>

        {/* Sign-Up Form */}
        <div className="auth-module-form-container auth-module-sign-up-container">
          <form onSubmit={handleSignUp}>
            <h2 className="auth-module-heading">Sign Up</h2>

            {/* Role Selection */}
            <div className="auth-module-role-selection">
              <label>
                <input type="radio" value="client" checked={role === "client"} onChange={() => setRole("client")} />
                Client
              </label>
              <label>
                <input type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
                Admin
              </label>
            </div>

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            {role === "admin" && (
              <input type="text" placeholder="Admin Code" value={adminCode} onChange={(e) => setAdminCode(e.target.value)} required />
            )}

            {error && <p className="error-message">{error}</p>}

            <button className="auth-module-button" type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="auth-module-form-container auth-module-sign-in-container">
          <form onSubmit={handleSignIn}>
            <h2 className="auth-module-heading">Sign In</h2>

            {/* Role Selection */}
            <div className="auth-module-role-selection">
              <label>
                <input type="radio" value="client" checked={role === "client"} onChange={() => setRole("client")} />
                Client
              </label>
              <label>
                <input type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
                Admin
              </label>
            </div>

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Link to="/forgot-password" className="auth-module-link">Forgot your password?</Link>

            {error && <p className="error-message">{error}</p>}

            <button className="auth-module-button" type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="auth-module-overlay-container">
          <div className="auth-module-overlay">
            <div className="auth-module-overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <p>To stay connected, please log in</p>
              <button className="auth-module-button ghost" onClick={toggleForm}>Sign In</button>
            </div>
            <div className="auth-module-overlay-panel overlay-right">
              <h2>Hello, Friend!</h2>
              <p>Enter your details and start your journey</p>
              <button className="auth-module-button ghost" onClick={toggleForm}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
