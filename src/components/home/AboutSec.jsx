import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import '../../style/home/AboutSec.css'

const AboutSec = () => {
  return (
    <>
      <div className="about-sec-container">
        <h1>About Us</h1>
        <div className="main-ab-container">
          <div className="ab-image">
            <div className="image-place">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="ab-info">
            <h3 className="ab-title">About us</h3>
            <p className="ab-text-1">Creativity is intelligence having fun</p>
            <p className="ab-text-2">.....(info about Starlet)</p>
            <Link to="/about">
              <button className="ab-btn">More about us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
