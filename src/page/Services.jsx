import React from "react";
import ServiceHero from "../components/services/ServiseHero";
import BriefOffer from "../components/services/BriefOffer";

import "../style/services/Service.css";
import Offer from "../components/services/Offer";

const Services = () => {
  return (
    <>
      <section className="serv-hero-sec">
        <div >
          <ServiceHero />
        </div>
      </section>
      <section className="brief-offer-sec">
        <div className="container">
          <BriefOffer />
        </div>
      </section>
      <section className="offer-sec">
        <div className="container">
          <Offer />
        </div>
      </section>
    </>
  );
};

export default Services;
