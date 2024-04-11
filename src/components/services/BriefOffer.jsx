import React from "react";
import { cardDetails } from "../../utils/SCard";
import SCard from "../../utils/SCard";


const BriefOfffer = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-center capitalize"
     
    >
      {cardDetails.map((detail, index) => (
        <div className="scard-content" key={index}
      
        >
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

export default BriefOfffer;
