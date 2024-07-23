import React from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="star" src={"/flag.webp"} alt="Star" />
      </div>
      <div className="nav-links-container">
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/announcements" className="nav-link">Announcements</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/" className="nav-link">Home</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/heritage" className="nav-link">Heritage</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/services" className="nav-link">Services</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/contact" className="nav-link">Contact</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/donations" className="nav-link">Donations</a>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="nav-link-container"
        >
          <a href="/events" className="nav-link">Events</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;

