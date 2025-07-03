import React from "react";
import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-header">
        <h2>Our Partners</h2>
        <p>
          We would have never been able to reach the wider world had we not had our partners
          to support and work with us. Following are few of our partners we work closely with:
        </p>
      </div>

      <div className="partner-category">
        <h3>Technology Partners</h3>
        <div className="partner-cards">
          <div className="partner-card">
            <img src="/redhat.png" alt="Red Hat" />
            <h4>Red Hat</h4>
            <p>
              One of our closest and largest associates. We are lucky to have been associated
              with Red Hat since long and have been their go-to partners for services delivery
              across the world.
            </p>
          </div>

          <div className="partner-card">
            <img src="/EDB.png" alt="EDB" />
            <h4>EDB</h4>
            <p>
              Leaders in Open Source Databases. We have been working with Postgres in a lot of
              our customer projects.
            </p>
          </div>
        </div>
      </div>

      <div className="partner-category">
        <h3>Global SIs</h3>
        <div className="partner-cards">
          <div className="partner-card">
            <img src="/Tech-Mahindra.png" alt="Tech Mahindra" />
            <h4>Tech Mahindra</h4>
            <p>
              Working on cloud orchestration and containerisation projects along with cutting-edge tech.
            </p>
          </div>

          <div className="partner-card">
            <img src="/infosys.jpeg" alt="Infosys" />
            <h4>Infosys</h4>
            <p>
              Worked on several Middleware-led projects with Infosys' extended teams.
            </p>
          </div>

          <div className="partner-card">
            <img src="/HCL.png" alt="HCL Technologies" />
            <h4>HCL Technologies</h4>
            <p>
              Delivered Automation and Containerisation projects for customers worldwide.
            </p>
          </div>

          <div className="partner-card">
            <img src="/wipro.png" alt="Wipro" />
            <h4>Wipro</h4>
            <p>
              Engaged in Open Source community and enterprise projects over the years.
            </p>
          </div>

          <div className="partner-card">
            <img src="/IBM.png" alt="IBM" />
            <h4>IBM</h4>
            <p>
              Collaborated post-Red Hat acquisition in areas of Cloud and Containerisation.
            </p>
          </div>

          <div className="partner-card">
            <img src="/LTI.jpeg" alt="LTI" />
            <h4>LTI</h4>
            <p>
              Partnered on large-scale Government of India projects in automation and containerisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;





// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Partners.css";

// const Partners = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="partners">
//       <div className="partners-header" data-aos="fade-down">
//         <h2>Our Partners</h2>
//         <p>
//           We would have never been able to reach the wider world had we not had our partners
//           to support and work with us. Following are few of our partners we work closely with:
//         </p>
//       </div>

//       <div className="partner-category" data-aos="fade-up">
//         <h3>Technology Partners</h3>
//         <div className="partner-cards">
//           <div className="partner-card" data-aos="zoom-in">
//             <img src="/redhat.png" alt="Red Hat" />
//             <h4>Red Hat</h4>
//             <p>
//               One of our closest and largest associates. We are lucky to have been associated
//               with Red Hat since long and have been their go-to partners for services delivery
//               across the world.
//             </p>
//           </div>

//           <div className="partner-card" data-aos="zoom-in" data-aos-delay="100">
//             <img src="/EDB.png" alt="EDB" />
//             <h4>EDB</h4>
//             <p>
//               Leaders in Open Source Databases. We have been working with Postgres in a lot of
//               our customer projects.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="partner-category" data-aos="fade-up">
//         <h3>Global SIs</h3>
//         <div className="partner-cards">
//           {[
//             { src: "/Tech-Mahindra.png", alt: "Tech Mahindra", title: "Tech Mahindra", text: "Working on cloud orchestration and containerisation projects along with cutting-edge tech." },
//             { src: "/infosys.jpeg", alt: "Infosys", title: "Infosys", text: "Worked on several Middleware-led projects with Infosys' extended teams." },
//             { src: "/HCL.png", alt: "HCL", title: "HCL Technologies", text: "Delivered Automation and Containerisation projects for customers worldwide." },
//             { src: "/wipro.png", alt: "Wipro", title: "Wipro", text: "Engaged in Open Source community and enterprise projects over the years." },
//             { src: "/IBM.png", alt: "IBM", title: "IBM", text: "Collaborated post-Red Hat acquisition in areas of Cloud and Containerisation." },
//             { src: "/LTI.jpeg", alt: "LTI", title: "LTI", text: "Partnered on large-scale Government of India projects in automation and containerisation." },
//           ].map((partner, idx) => (
//             <div className="partner-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
//               <img src={partner.src} alt={partner.alt} />
//               <h4>{partner.title}</h4>
//               <p>{partner.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;
