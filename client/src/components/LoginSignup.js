import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState("client"); // Default role is Client
  const navigate = useNavigate();

  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in as ${role}`);

    if (role === "admin") {
      navigate("/admin-dashboard"); // Redirect admins to admin dashboard
    } else {
      navigate("/"); // Redirect clients to home
    }
  };

  return (
    <div className="auth-module-wrapper">
      <div className={`auth-module-container ${isSignUp ? "right-panel-active" : ""}`}>
        
        {/* Sign Up Form */}
        <div className="auth-module-form-container auth-module-sign-up-container">
          <form onSubmit={handleSubmit}>
            <h2 className="auth-module-heading">{isSignUp ? "Sign Up" : "Create Account"}</h2>

            {/* Role Selection */}
            <div className="auth-module-role-selection">
              <label>
                <input
                  type="radio"
                  value="client"
                  checked={role === "client"}
                  onChange={() => setRole("client")}
                />
                Client
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
            </div>

            <input type="text" placeholder="Name" className="auth-module-input" required />
            <input type="email" placeholder="Email" className="auth-module-input" required />
            <input type="password" placeholder="Password" className="auth-module-input" required />

            {isSignUp && role === "admin" && (
              <input type="text" placeholder="Admin Code" className="auth-module-input" required />
            )}

            <button className="auth-module-button" type="submit">{isSignUp ? "Sign Up" : "Register"}</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="auth-module-form-container auth-module-sign-in-container">
          <form onSubmit={handleSubmit}>
            <h2 className="auth-module-heading">{isSignUp ? "Sign Up" : "Sign In"}</h2>

            {/* Role Selection */}
            <div className="auth-module-role-selection">
              <label>
                <input
                  type="radio"
                  value="client"
                  checked={role === "client"}
                  onChange={() => setRole("client")}
                />
                Client
              </label>
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={() => setRole("admin")}
                />
                Admin
              </label>
            </div>

            <input type="email" placeholder="Email" className="auth-module-input" required />
            <input type="password" placeholder="Password" className="auth-module-input" required />
            <Link to="/forgot-password" className="auth-module-link">Forgot your password?</Link>

            <button className="auth-module-button" type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
          </form>  
        </div>

        {/* Overlay Section */}
        <div className="auth-module-overlay-container">
          <div className="auth-module-overlay">
            <div className="auth-module-overlay-panel overlay-left">
              <h2 className="auth-module-heading">{isSignUp ? "Welcome!" : "Welcome Back!"}</h2>
              <p className="auth-module-text">
                {isSignUp ? "Join us by signing up today!" : "To stay connected, please log in with your personal info"}
              </p>
              <button className="auth-module-button ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="auth-module-overlay-panel overlay-right">
              <h2 className="auth-module-heading">{isSignUp ? "Join Us!" : "Hello, Friend!"}</h2>
              <p className="auth-module-text">
                {isSignUp ? "Create an account to get started!" : "Enter your details and start your journey with us"}
              </p>
              <button className="auth-module-button ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginSignup;
