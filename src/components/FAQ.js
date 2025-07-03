import React, { useState, useEffect, useRef } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "IS OPEN SOURCE SUSTAINABLE?",
    answer:
      "When properly deployed, Open Source can help bring in flexibility and agility. It is also easier to incorporate unplanned or unforseen future changes - in either technology or roadmaps.  ",
    image: "/faq1.avif",
  },
  {
    question: "ARE OPEN SOURCE DEPLOYMENTS COMPLEX?",
    answer:
      "With such a lot of help available on net and large enterprises having already adopting Open Source, this does not hold true any longer. It depends on your perception. If having a building block approach with customisable options as per your choice bothers you as compared to deploying a proprietary and non-flexible code the you might like to choose closed source software",
    image: "/faq2.avif",
  },
  {
    question: "I AM IN A FIX. I DO NOT KNOW WHAT TO DO",
    answer:
      "Open Source adoption is a journey. We understand that customers sometimes are unsure about taking the first step. We provide advisory services to estimate your readiness to adopt Open Source as well as explore the available options commensurate with your business needs. It always helps to seek Open!",
    image: "/faq3.avif",
  },
  {
    question: "CAN I DEPLOY OPEN SOURCE SOFTWARE MYSELF?",
    answer:
      "Of course! If you have spare time then you seriously you do not need us. That is the whole beauty of Open Source. Our only value add is is that we help deliver your job while you concentrate on your business. Additionally, with our service bouquet, we can bring in some best practices that we have learnt the hard way over the years, some nuggets of hacks for your teams and of course manpower to help share your workload",
    image: "/faq4.avif",
  },
  {
    question: "WHO WILL SUPPORT MY OPEN SOURCE DEPLOYMENT IF KNA IS NOT AVAILABLE TOMORROW?",
    answer:
      "Ideally, the best way forward is to develop and maintain your own small team of resources to take care of day to day tasks and CRs. 100% dependence on external resources is not recommended.",
    image: "/faq5.avif",
  },
  {
    question: "WHAT IF I AM NOT SATISFIED WITH KEEN AND ABLE?",
    answer:
      "In our more than 25 year history, there have, of course, been the rare cases of customer expectations not matching with our delivery. In such a scenario, we make all effort to deliver what the customer wants. Ultimately, the idea of Open is being open to criticism and new learning.",
    image: "/faq6.avif",
  },
  {
    question: "WHAT IF I DEPLOY MYSELF AND FACE CHALLENGE LATER?",
    answer:
      "We are available to help in all phases of your Open Source journey. We would definitely like to sit with you and discuss your aspirations and business goals before we engage but don't worry. We have your backs covered",
    image: "/faq7.avif",
  },
];

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef();

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === faqData.length - 1 ? 0 : prev + 1));
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goToIndex = (index) => {
    clearInterval(timerRef.current);
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <section className="faq-section">
      <div className="faq-sidebar">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-question ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          >
            {item.question}
          </div>
        ))}
      </div>

      <div
        className="faq-slide"
        style={{ backgroundImage: `url(${faqData[currentIndex].image})` }}
      >
        <div key={currentIndex} className="faq-content fade-in">
          <h2>{faqData[currentIndex].question}</h2>
          <p>{faqData[currentIndex].answer}</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
