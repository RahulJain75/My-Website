import React from "react";
import "./About.css";

const About = () => {
  const sectionStyle = {
    background: `linear-gradient(rgba(15, 15, 15, 0.9), rgba(26, 26, 26, 0)), url("/About.avif") center/cover no-repeat`,
  };

  return (
    <section className="about-timeline" style={sectionStyle}>
      <h2 className="about-title">Our Background</h2>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="content">
            <h3>2002</h3>
            <p>Our first Linux cluster for SAP deployment. Stepping into the unknown with passion and purpose.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>2012</h3>
            <p>Red Hat's integration suite Fuse deployed, showcasing our evolving expertise.</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h3>2015</h3>
            <p>Openstack deployment done — again, learning and delivering beyond limits.</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h3>Today</h3>
            <p>We’re now solving challenges in AI, Low Code/No Code, Optaplanner — and still dreaming big.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
