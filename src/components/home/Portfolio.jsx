import React from "react";

import "../../style/home/Portfolio.css";
import PortCard, { portfolios } from "../../utils/PortCard";

const Portfolio = () => {
  return (
    <>
      <div className="port-main-con">
        <div className="port">
          <h1 className="p-title">portfolio</h1>
          <p className="p-text">portfolio</p>
        </div>
        <h3 className="port-title">our latest and most current projects</h3>
        <div className="port-card-main">
          {portfolios.map((item, index) => (
            <div className="port-card" key={index}>
              <PortCard
                date={item.date}
                month={item.month}
                image={item.image}
                title={item.title}
                heading={item.heading}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
