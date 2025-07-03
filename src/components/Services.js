import React, { useEffect, useRef } from "react";
import "./Services.css"; // Import the updated CSS file

const servicesData = [
  {
    image: "/service1.avif",
    title: "Software Advisory & Architecting Services",
    description:
      "Over the years, we have come across many situations where a design mistake has already been made when we are called. It is a very tough situation for a customer and we can totally empathise with it. Should the customer go ahead knowing that there is an issue due to cost, time and other considerations; or should start afresh. There is no easy answer here. But what we have realised is that the software design and architecture should be open and have a building blocks approach to make it last. Our areas of interest here are",
    points: [
      "Software Design Workshops",
      "Producing Design HLD and LLD",
      "Application Modernisation Workshops",
      "Design Review and Modifications",
    ],
  },
  {
    image: "/service2.avif",
    title: "Software Build & Deployment Services",
    description:
      "Once the software design is ready, we have teams to help customers deploy them. We also undertake deployment of software for design done by others. We work equally Our areas of interest and delivery in this area span across",
    points: [
      "Linux OS and associated services",
      "Cloud and Cloud Orchestration",
      "Containers and Application Modernisation",
      "Lift and Shift legacy Applications to containers",
      "Open Source DBs and NoSQL DBs",
      "Process Automation on Open Source",
      "Red Hat Middleware product suite",
      "Using Open Source tools to set up alerting and monitoring dashboards",
      "Bespoke software development using Open Source software and tools",
    ],
  },
  {
    image: "/service3.avif",
    title: "Monitoring & Support Services",
    description:
      "Customers might need additional support after deployments or even monitoring of their critical systems to maintain uptime. Various teams need to be aware of actions required to be taken if any component is not functioning. This requires monitoring of deployments right from hardware level to the application and everything in between. We provide these services to our customers. Some of the areas we address are",
    points: [
      "24X7 monitoring",
      "Creating dynamic information dashboards",
      "Rule-based monitoring",
      "Log Management",
      "Automated Inventory Discovery",
      "Automating monitoring workflows",
      "Manpower support for operations",
      "Day 2 support and CR handling",
      "Creating Policies for monitoring",
    ],
  },
];

const principles = [
  {
    title: "Holistic Requirement Gathering",
    description:
      "Discussions with all stakeholders to get a holistic view of requirements.",
    icon: "📋",
  },
  {
    title: "Architecture Considerations",
    description:
      "Considerations of all the affected systems to put the inter-play of components in architecture delivery.",
    icon: "🏛️",
  },
  {
    title: "Use Case Analysis",
    description:
      "Discuss possible scenarios and use cases to help sharpen the requirement gathering.",
    icon: "🔍",
  },
  {
    title: "Future-Ready Solutions",
    description:
      "Help customers think beyond the immediate product/problem to help create a future-ready Open Source software architecture.",
    icon: "🚀",
  },
];

const Services = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="services-container">
      <h1>Services</h1>
      <p className="subheading">Openly Trying To Exceed Your Expectations</p>

      {/* First Service */}
      <div ref={(el) => (sectionsRef.current[0] = el)} className="service-section hidden">
        <img src={servicesData[0].image} alt={servicesData[0].title} className="service-image" />
        <div className="service-text">
          <h2>{servicesData[0].title}</h2>
          <p>{servicesData[0].description}</p>
          <ul>
            {servicesData[0].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="section-divider"></div>
      </div>

      {/* Principles Section - moved up */}
      <div className="principles-container">
        <h2>Our software design practice is guided by the following principles</h2>
        <div className="section-divider"></div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[1 + index] = el)}
              className="principle-card hidden"
            >
              <div className="principle-icon">{principle.icon}</div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
        <div className="section-divider"></div>
      </div>

      {/* Second Service */}
      <div ref={(el) => (sectionsRef.current[principles.length + 1] = el)} className="service-section hidden">
        <img src={servicesData[1].image} alt={servicesData[1].title} className="service-image" />
        <div className="service-text">
          <h2>{servicesData[1].title}</h2>
          <p>{servicesData[1].description}</p>
          <ul>
            {servicesData[1].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="section-divider"></div>
      </div>

      {/* Third Service */}
      <div ref={(el) => (sectionsRef.current[principles.length + 2] = el)} className="service-section hidden">
        <img src={servicesData[2].image} alt={servicesData[2].title} className="service-image" />
        <div className="service-text">
          <h2>{servicesData[2].title}</h2>
          <p>{servicesData[2].description}</p>
          <ul>
            {servicesData[2].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
