import React, { useEffect } from 'react';
import './MainContent.css';

const embracingOpenSourceImage = "/1st.avif"; // For "Embracing Open Source"
const ourStoryImage = "/2nd.avif"; // For "Our Story"
const serviceImage1 = "/3rd.avif"; // First service image
const serviceImage2 = "/4th.avif"; // Second service image
const reliableSupportImage = "/5th.avif"; // Reliable support image

const MainContent = () => {
  // Intersection Observer for smooth animations
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.25, // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in'); // Add animation when in view
        } else {
          entry.target.classList.remove('animate-in'); // Remove animation if not in view
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section); // Observe all sections
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-content">
      
      {/* Open Source Journey Section */}
      <section className="section open-source-journey text-and-image">
        <div className="content">
          <h2>Embracing Open Source: Our Journey</h2>
          <p>
            Our amazing Open Source journey started in the early 2000s, and what a ride it has been! 
            We never imagined such widespread adoption and deployment of Open Source technologies over the years. 
            We take pride in having played a role in this adoption, collaborating with our associates, customers, and partners alike.
          </p>
        </div>
        <div className="image-container">
          <img src={embracingOpenSourceImage} alt="Embracing Open Source" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="section about-us text-and-image">
        <div className="content">
          <h2>Our Story</h2>
          <p>
            Keen and Able started as a college dream in the minds of a few youngsters who wished to have something to call their own. 
            Open Source happened by chance but has stuck for long. Over the years, we have explored various Open Source technologies 
            and successfully helped our customers adopt them.
          </p>
        </div>
        <div className="image-container">
          <img src={ourStoryImage} alt="Our Story" />
        </div>
      </section>

      {/* Services Section with Reliable Support */}
      <section className="section services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={serviceImage1} alt="Architecting" />
            <h3>Architecting</h3>
            <p>
              A well-thought-out architecture helps our customers maintain control of their deployments long after we complete our work. 
              With our global experience, we design software architectures that keep the bigger picture in mind.
            </p>
          </div>
          <div className="service-card">
            <img src={serviceImage2} alt="Deployment" />
            <h3>Deployment</h3>
            <p>
              We provide deployment services for almost any Open Source technology. Our approach is simple – 
              if we don’t know it, we learn it. We are always ready to walk the path with our customers on their Open Source journey.
            </p>
          </div>
          <div className="service-card">
            <img src={reliableSupportImage} alt="Reliable Support" />
            <h3>Reliable Support</h3>
            <p>
              For customers requiring long-term support for their Open Source technology deployments, 
              we help build dedicated teams to manage and maintain their systems. 
              We go beyond conventional support to help our clients break limitations and explore new opportunities with Open Source.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>Get in Touch</h2>
        <p>
          We are eager to learn about your business and Open Source challenges. 
          Whether you need deployment, support, or just want to say Hi, we’d love to hear from you!
        </p>
        <a href="mailto:sales@keenable.in" className="contact-btn">Contact Us</a>
      </section>

    </div>
  );
};

export default MainContent;




/* 
import React, { useEffect } from 'react';
import './MainContent.css';

const embracingOpenSourceImage = "/1st.avif"; // For "Embracing Open Source"
const ourStoryImage = "/2nd.avif"; // For "Our Story"
const serviceImage1 = "/3rd.avif"; // First service image
const serviceImage2 = "/4th.avif"; // Second service image
const reliableSupportImage = "/5th.avif"; // Reliable support image

const MainContent = () => {
  // Intersection Observer for smooth animations
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.25, // Trigger when 25% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in'); // Add animation when in view
        } else {
          entry.target.classList.remove('animate-in'); // Remove animation if not in view
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section); // Observe all sections
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-content">
      
 
      <section className="section open-source-journey overlay-image">
        <div className="image-container">
          <img src={embracingOpenSourceImage} alt="Embracing Open Source" />
          <div className="overlay">
            <h2>Embracing Open Source: Our Journey</h2>
            <p>
              Our amazing Open Source journey started in the early 2000s, and what a ride it has been! 
              We never imagined such widespread adoption and deployment of Open Source technologies over the years. 
              We take pride in having played a role in this adoption, collaborating with our associates, customers, and partners alike.
            </p>
          </div>
        </div>
      </section>

 
      <section className="section about-us overlay-image">
        <div className="image-container">
          <img src={ourStoryImage} alt="Our Story" />
          <div className="overlay">
            <h2>Our Story</h2>
            <p>
              Keen and Able started as a college dream in the minds of a few youngsters who wished to have something to call their own. 
              Open Source happened by chance but has stuck for long. Over the years, we have explored various Open Source technologies 
              and successfully helped our customers adopt them.
            </p>
          </div>
        </div>
      </section>

      <section className="section services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card overlay-card">
            <img src={serviceImage1} alt="Architecting" />
            <div className="overlay">
              <h3>Architecting</h3>
              <p>
                A well-thought-out architecture helps our customers maintain control of their deployments long after we complete our work. 
                With our global experience, we design software architectures that keep the bigger picture in mind.
              </p>
            </div>
          </div>
          <div className="service-card overlay-card">
            <img src={serviceImage2} alt="Deployment" />
            <div className="overlay">
              <h3>Deployment</h3>
              <p>
                We provide deployment services for almost any Open Source technology. Our approach is simple – 
                if we don’t know it, we learn it. We are always ready to walk the path with our customers on their Open Source journey.
              </p>
            </div>
          </div>
          <div className="service-card overlay-card">
            <img src={reliableSupportImage} alt="Reliable Support" />
            <div className="overlay">
              <h3>Reliable Support</h3>
              <p>
                For customers requiring long-term support for their Open Source technology deployments, 
                we help build dedicated teams to manage and maintain their systems. 
                We go beyond conventional support to help our clients break limitations and explore new opportunities with Open Source.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Get in Touch</h2>
        <p>
          We are eager to learn about your business and Open Source challenges. 
          Whether you need deployment, support, or just want to say Hi, we’d love to hear from you!
        </p>
        <a href="mailto:sales@keenable.in" className="contact-btn">Contact Us</a>
      </section>

    </div>
  );
};

export default MainContent;
*/
