import React from "react";

import Logo from "../assets/logo.png";

import "../style/testcard.css";

// TODO: complete 

const TestCard = () => {
  return (
    <>
      <div className="tcard-con-1">
        <div className="tcard-con-2">
          <div className="tcard-msg">msg goes here</div>
          <div className="tcard-details">
            <div className="details-img">
              <img src={Logo} alt="logo" width={80} />
            </div>
            <div className="details-info">
              <h4 className="client-det">client details</h4>
              <h4 className="client-rol">client role</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCard;
