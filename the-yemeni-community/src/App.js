import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Heritage from './components/heritage/Heritage';
import Contact from './components/contact/Contact';
import Donations from './components/donations/Donations';
import Events from './components/events/Events';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Announcements from './components/announcements/Announcements';

function App() {
  return (
    <Router>
      <div className="font-arial bg-[#FFF6F4]">
        <Navbar />
        <Routes>
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/" element={<Home />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

