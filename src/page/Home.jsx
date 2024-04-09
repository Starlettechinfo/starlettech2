import React from "react";

import Hero from "../components/home/Hero";
import AboutSec from "../components/home/AboutSec";
import ServiceSec from "../components/home/ServiceSec";
import Portfolio from "../components/home/Portfolio";
import Impact from "../components/home/Impact";
import CTA from "../components/home/CTA";
import Feedback from "../components/home/Feedback";

import '../style/pages/Home.css'

const Home = () => {
  return (
    <>
      <section className="hero-sec">
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className="about-sec">
        <div className="container">
          <AboutSec />
        </div>
      </section>
      <section className="service-sec">
        <div className="container">
          <ServiceSec />
        </div>
      </section>
      <section className="portfolio-sec">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section className="impact-sec">
        <div className="container">
          <Impact />
        </div>
      </section>
      <section className="cta-sec">
        <div className="container">
          <CTA />
        </div>
      </section>
      <section className="feedback-sec">
        <div className="container">
          <Feedback />
        </div>
      </section>
    </>
  );
};

export default Home;
