import React from "react";

import "../../style/home/CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <div className="cta-con">
        <div className="cta-content">
          <h1 className="cta-title">
            choose the company that caters for all <br />
            choose starlet tech
          </h1>
          <div className="cta-btns-con">
            <Link className="main-btn" to="/about">
              <button className="cta-btn">Learn more about us →</button>
            </Link>
            <Link className="main-btn" to="/blog">
              <button className="cta-btn">Why choose us →</button>
            </Link>
            <Link className="main-btn" to="/services">
              <button className="cta-btn">Browse our services →</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
