import React from "react";
import './signup.css';
import { Link } from "react-router-dom";

export const Registration = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-container h1">Create an Account</h2>

        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="form-group input"
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login" className="link-text">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration; 