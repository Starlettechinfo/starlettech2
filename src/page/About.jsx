import React from "react";

import AboutHero from "../components/about/AboutHero";
import Staff from "../components/about/Staff";
import Profeciencies from "../components/about/Profeciencies";

import '../style/pages/About.css'

const About = () => {
  return (
    <>
      <section className="abt-hero-sec">
        <div className="container">
          <AboutHero />
        </div>
      </section>
      <section className="staff-sec">
        <div className="container">
          <Staff />
        </div>
      </section>
      <section className="prof-sec">
        <div className="container">
          <Profeciencies />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default About;
