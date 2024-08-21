import React from 'react';
import './Home.css';

function Home() {
  const grievances = [
    "Title of Grievance",
    "Title of Grievance",
    "Title of Grievance",
    "Title of Grievance",
    "Title of Grievance",
  ];

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <nav className="nav">
          <a href="#emails">Emails</a>
          <a href="#resolved">Resolved Grievance</a>
          <a href="#logout">Logout</a>
        </nav>
      </header>

      <div className="grievance-summary">
        <div className="grievance-counter">
          <span>Pending Grievance Count</span>
        </div>
        <div className="grievance-counter">
          <span>Resolved Grievance Count</span>
        </div>
      </div>

      <div className="grievance-list">
        {grievances.map((grievance, index) => (
          <div key={index} className="grievance-item">
            <span>{grievance}</span>
            <button className="summarize-button">Summarize</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

