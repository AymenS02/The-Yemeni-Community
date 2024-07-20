import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Ensure you have a corresponding SCSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/donations">Donations</Link>
      <Link className="nav-link" to="/events">Events</Link>
    </nav>
  );
}

export default Navbar;
