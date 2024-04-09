import React from "react";

import "../../style/about/Profeciencies.css";
import ProfCard, { profeciencies } from "../../utils/ProfCard";

const Profeciencies = () => {
  return (
    <>
      <div className="prof-main-con">
        <div className="prof-top">
          <h1 className="prof-title">Profeciencies</h1>
          <p className="prof-p">our skill set includes</p>
        </div>
        <div className="main-map">
          {profeciencies.map((item, index) => (
            <div className="pcard-map" key={index}>
              <ProfCard
                image={item.image}
                alt={item.alt}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profeciencies;
