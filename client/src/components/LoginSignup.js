// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Import Link
// import "./LoginSignup.css";

// const LoginSignup = () => {
//   const [isSignUp, setIsSignUp] = useState(false);

//   return (
//     <div className={`auth-module-container ${isSignUp ? "right-panel-active" : ""}`}>
//       {/* Sign Up Form */}
//       <div className="auth-module-form-container auth-module-sign-up-container">
//         <form>
//           <h2 className="auth-module-heading">Create Account</h2>
//           <div className="auth-module-social-container">
//             <a href="https://www.facebook.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="https://accounts.google.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="https://www.linkedin.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//           <span className="auth-module-text">or use your email for registration</span>
//           <input type="text" placeholder="Name" className="auth-module-input" />
//           <input type="email" placeholder="Email" className="auth-module-input" />
//           <input type="password" placeholder="Password" className="auth-module-input" />
//           <button className="auth-module-button">Sign Up</button>
//         </form>
//       </div>

//       {/* Sign In Form */}
//       <div className="auth-module-form-container auth-module-sign-in-container">
//         <form>
//           <h2 className="auth-module-heading">Sign In</h2>
//           <div className="auth-module-social-container">
//             <a href="https://www.facebook.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="https://accounts.google.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="https://www.linkedin.com/" className="auth-module-social" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//           <span className="auth-module-text">or use your account</span>
//           <input type="email" placeholder="Email" className="auth-module-input" />
//           <input type="password" placeholder="Password" className="auth-module-input" />
          
//           {/* Change <a> to <Link> if it's an internal page */}
//           <Link to="/forgot-password" className="auth-module-link">Forgot your password?</Link>

//           <button className="auth-module-button">Sign In</button>
//         </form>
//       </div>

//       {/* Overlay Panels */}
//       <div className="auth-module-overlay-container">
//         <div className="auth-module-overlay">
//           <div className="auth-module-overlay-panel overlay-left">
//             <h2 className="auth-module-heading">Welcome Back!</h2>
//             <p className="auth-module-text">To keep connected with us please login with your personal info</p>
//             <button className="auth-module-button ghost" onClick={() => setIsSignUp(false)}>Sign In</button>
//           </div>
//           <div className="auth-module-overlay-panel overlay-right">
//             <h2 className="auth-module-heading">Hello, Friend!</h2>
//             <p className="auth-module-text">Enter your personal details and start your journey with us</p>
//             <button className="auth-module-button ghost" onClick={() => setIsSignUp(true)}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
