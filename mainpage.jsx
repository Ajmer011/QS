import React from "react";
import "./App1.css"; // Create a CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">My Assister</div>
        <nav className="navbar">
          <a href="#product">Home</a>
          <a href="#resources">History</a>
          <a href="#https://www.rgpvonline.com/#google_vignette">Question paper</a>
          <a href="#about">About</a>
          <a href="#https://www.youtube.com/">Youtube</a>
         
          <button className="profile-btn">p</button>
        </nav>
      </header>

      <main className="main">
        <h1>AI Search Engine for search</h1>
        <p>Find & understand Questions, faster.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ask the question..."
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
        <div className="suggestions">
          <button className="suggestion-btn">
            🏃Rajiv Gandhi Proudhyogiki 
          </button>
          <button className="suggestion-btn">
            💊 Sage university
          </button>
          <button className="suggestion-btn">
            💵 LNCT university
          </button>
          <button className="suggestion-btn">
            🧘Indira Gandhi university
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
