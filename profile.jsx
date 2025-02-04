import React from "react";
import "./App.css";

const ProfileSettings = () => {
  return (
    <div className="profile-settings-container">
      <div className="sidebar">
        <div className="profile-picture"></div>
        <h1>Name</h1>
      </div>
      <div className="main-content">
        <div className="form-section">
          <h2>Profile</h2>
          <form className="profile-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Surname" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Mobile Number" />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="University" />
              <input type="text" placeholder="State" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email ID" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Semester" />
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="City" />
            </div>
            <button type="submit" className="save-button">Save Profile</button>
          </form>
        </div>
        <div className="experience-section">
          <h2>Feedback</h2>
          <form className="experience-form">
            <div className="form-group">
              <textarea placeholder="Feedback"></textarea>
            </div>
            <button type="submit" className="experience-button">Submit feedback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;