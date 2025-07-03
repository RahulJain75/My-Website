import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import FooterInfo from "./components/FooterInfo";
import MainContent from "./components/MainContent";
import "./App.css";

function AppContent() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <ScrollToTop /> 

      {location.pathname === "/" && <Hero />}

      {/* Ensure content expands fully */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>

      {/* Footer should always be at the bottom */}
      <div className="footer-container">
        <Footer />
        <FooterInfo />
      </div>
    </div>
  );
}



function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
