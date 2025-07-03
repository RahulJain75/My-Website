import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import ContactForm from "./ContactForm"; // Import Contact Form Component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when navigating
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="company-name" onClick={handleNavigation}>
            KEEN AND ABLE
          </Link>
          <p className="slogan">ALWAYS BE OPEN!</p>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <div className={`nav-center ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={handleNavigation}>Home</Link></li>
            <li><Link to="/services" onClick={handleNavigation}>Services</Link></li>
            <li><Link to="/partners" onClick={handleNavigation}>Partners</Link></li>
            <li><Link to="/faq" onClick={handleNavigation}>FAQ</Link></li>
            <li><Link to="/about" onClick={handleNavigation}>About</Link></li>
          </ul>
        </div>

        {/* Contact Button - Navigates to Contact Page */}
        <Link to="/contact" className="contact-button">
          Click Here – We Don’t Byte!
        </Link>
      </nav>

      {/* Routing Inside Navbar */}
      <Routes>
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
};

export default Navbar;


// <div className="logo-container">
//   <Link to="/" className="logo-link" onClick={handleNavigation}>
//     <img src="/logo.png" alt="Company Logo" className="logo-image" />
//     <div className="text-container">
//       <span className="company-name">KEEN AND ABLE</span>
//       <p className="slogan">ALWAYS BE OPEN!</p>
//     </div>
//   </Link>
// </div>
