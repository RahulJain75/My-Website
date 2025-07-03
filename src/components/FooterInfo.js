import React from "react";
import { FaLinkedin, FaFacebook, FaPhone, FaEnvelope, FaArrowUp, FaMapMarkerAlt } from "react-icons/fa";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <div className="footer-info">
      <div className="footer-section left">
        <h3>Our Office</h3>
        <hr />
        <p>
          <a href="https://maps.app.goo.gl/TKzD676AXeycmEHSA"
            target="_blank"
            rel="noopener noreferrer"
            className="map-icon-link">
            <FaMapMarkerAlt className="map-icon" />
          </a>
          B149, Ground Floor, Sector 63, Noida, India - 201301
        </p>
      </div>

      <div className="footer-section right">
        <h3>Get in Touch</h3>
        <hr />
        <p>
          <FaPhone />  
          <a href="tel:+911204217213" className="contact-link">+91 120 421 7213</a>
        </p>
        <p>
          <FaEnvelope />  
          <a href="mailto:sales@keenable.in" className="contact-link">sales@keenable.in</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/keenable/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.facebook.com/Alwaysbeenopen/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default FooterInfo;
