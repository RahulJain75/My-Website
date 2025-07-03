import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <button className="close-btn" onClick={() => navigate("/")}>✖</button>
      <div className="contact-container">
        <h2 className="contact-heading">✨ Contact Us ✨</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">🚀 Send Message</button>
        </form>
        {submitted && (
          <div className="success-message">Thank you! We'll get back to you shortly.</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ContactForm.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 5000);
//   };

//   return (
//     <div className="contact-page">
//       <button className="close-btn" onClick={() => navigate("/")}>✖</button>
//       <div className="contact-container">

//         <div className="animated-intro">
//           <h2 className="glow-title">🌟 Welcome to Keen&Able</h2>
//           <p>We're supercharging progress for our <strong>clients</strong>, our <strong>people</strong>, and our <strong>communities</strong>.</p>
//           <p>To learn more about our products and services, just fill out the form below.</p>
//           <p className="get-started">🚀 Ready to get started? <span>Let’s talk!</span></p>
//         </div>

//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="input-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name*"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address*"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number*"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <textarea
//               name="message"
//               placeholder="Your Message..."
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="submit-btn">🚀 Send Message</button>
//         </form>

//         {submitted && (
//           <div className="success-message">Thank you! We'll get back to you shortly.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
