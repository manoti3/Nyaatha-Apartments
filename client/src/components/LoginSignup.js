import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("client"); // Default role is Client
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const dummyAdmin = { name: "Admin User", email: "admin@domain.com", password: "admin123", role: "admin" };
  const dummyClient = { name: "Client User", email: "client@domain.com", password: "client123", role: "client" };

  // Load dummy users if not present
  const initializeDummyUsers = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.find((user) => user.email === dummyAdmin.email)) {
      users.push(dummyAdmin);
    }
    if (!users.find((user) => user.email === dummyClient.email)) {
      users.push(dummyClient);
    }
    localStorage.setItem("users", JSON.stringify(users));
  };
  initializeDummyUsers();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(null); // Clear errors when switching forms
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      setError("User already exists! Please sign in.");
      return;
    }
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    localStorage.setItem("role", role);
    navigate(role === "admin" ? "/admin" : "/");
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError("Invalid email or password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    localStorage.setItem("role", user.role);
    navigate(user.role === "admin" ? "/admin" : "/");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="auth-module-wrapper">
      <div className={`auth-module-container ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="auth-module-form-container auth-module-sign-up-container">
          <form onSubmit={handleSignUp}>
            <h2 className="auth-module-heading">Sign Up</h2>
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
            {error && <p className="error-message">{error}</p>}
            <button className="auth-module-button" type="submit">Sign Up</button>
          </form>
        </div>
        <div className="auth-module-form-container auth-module-sign-in-container">
          <form onSubmit={handleSignIn}>
            <h2 className="auth-module-heading">Sign In</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <Link to="/forgot-password" className="auth-module-link">Forgot your password?</Link>
            {error && <p className="error-message">{error}</p>}
            <button className="auth-module-button" type="submit">Sign In</button>
          </form>
        </div>
      </div>
      <button onClick={handleLogout} className="auth-module-button">Logout</button>
    </div>
  );
};

export default LoginSignup;
