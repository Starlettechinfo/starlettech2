import React from "react";
import { cardDetails } from "../../utils/SCard";
import SCard from "../../utils/SCard";

const BriefOffer = () => {
  return (
    <>
    <div className="Bcontain">
      {cardDetails.map((detail, index) => (
        <div className="scard-content" key={index}>
          <SCard
            image={detail.image}
            title={detail.title}
            content={detail.content}
            path={detail.path}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default BriefOffer;
