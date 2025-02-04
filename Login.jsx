import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="facebook-container">
      <div className="facebook-left">
        <h1 className="facebook-logo">Just Search</h1>
        <p className="facebook-tagline">
          Helper helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="facebook-right">
        <div className="form-container">
          <form>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email address or phone number"
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
            </div>
            <button
              type="submit"
              className="button login-button"
            >
              Login
            </button>
            <a
              href="#"
              className="forgot-password"
            >
              Forgotten password?
            </a>
          </form>
          <hr className="divider" />
          <button
            type="button"
            className="button create-account-button"
          >
            Create new account
          </button>
        </div>
        <p className="create-page">
          <a href="#">Create a Page</a> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
