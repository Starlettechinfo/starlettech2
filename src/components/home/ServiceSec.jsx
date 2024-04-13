import React from "react";

import ServSecCard from "../../utils/ServSecCard";
import { services } from "../../utils/ServSecCard";

import "../../style/home/ServiceSec.css";
import { Link } from "react-router-dom";

const ServiceSec = () => {
  return (
    <>
      <div className="serv-sec-con">
        <h1 className="sec-con-title">Services</h1>
        <div className="serv-head">
          <h1 className="bold-title">Services</h1>
          <p className="serv-offer">
            we offer a wide-range of services that are tailor made for your
            every desire and wish
          </p>
        </div>
        <div className="sec-card">
          {services.map((service, index) => (
            <div className="servcard-con" key={index}>
              <ServSecCard
                image={service.image}
                title={service.title}
                content={service.content}
              />
            </div>
          ))}
        </div>
        <Link to="/services">
          <div className="s-btn">
            <button className="servsec-btn">Brows all our services</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceSec;
