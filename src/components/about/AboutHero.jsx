import React from "react";

import '../../style/about/AboutHero.css'

const AboutHero = () => {
  return (
    <>
      <div className="abt-con">
        <div className="abt-info">
          <h4 className="abt-brief">A bit more</h4>
          <h1 className="abt-title">about us</h1>
        </div>
        <p className="abt-para">
          An overview of how we got here, our skill set, and some of the clients
          that put their trust in us.
        </p>
      </div>
    </>
  );
};

export default AboutHero;
