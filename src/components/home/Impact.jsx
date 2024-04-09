import React from "react";

import "../../style/home/Impact.css";
import Carousel from "../../utils/Carousel";

const Impact = () => {
  return (
    <>
      <div className="imp-main-con">
        <div className="imp-top-con">
          <h1 className="imp-title">social impact</h1>
          <h3 className="mid-title">Some of our</h3>
          <h1 className="low-title">Impact on the community</h1>
        </div>
        <p className="imp-p">
          We have worked with a wide-range of companies and sponsors incl.
        </p>
        <div className="carousel">
          {/* TODO: complete carousel */}
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Impact;
