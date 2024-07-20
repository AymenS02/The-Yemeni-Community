import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="star" src={"/redstar.png"} alt="Star" />
      </div>
      <div className="nav-links-container">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
        <a href="/donations" className="nav-link">Donations</a>
        <a href="/events" className="nav-link">Events</a>
      </div>
    </div>
  );
}

export default Navbar;

