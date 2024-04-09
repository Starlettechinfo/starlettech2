import React from "react";

import "../../style/about/Staff.css";
import StaffCard from "../../utils/StaffCard";

const Staff = () => {
  return (
    <>
      <div className="stf-con">
        <div className="stf-top">
          <h1 className="stf-title">staff</h1>
          <p className="stf-p">Get to know our team of amazing people</p>
        </div>
        <div className="sft-details">
          <StaffCard />
        </div>
      </div>
    </>
  );
};

export default Staff;
