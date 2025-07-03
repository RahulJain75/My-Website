import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <div className="hero">
      {/* Video Background */}
      <video autoPlay loop muted className="video-bg">
        <source src={`${process.env.PUBLIC_URL}/Video3.mp4`} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Keen and Able</h1>
        <h2>Doing Business the Open Way</h2>
      </div>
    </div>
  );
};

export default HeroSection;
