import React from "react";

import "../style/staffcard.css";

const StaffCard = () => {
  return (
    <>
      <div className="stfcard-con">
        <div className="stfcard-info">
          <div className="stfcard-img">img here</div>
          <div className="stfcard-role">
            <h1 className="stf-role-1">name</h1>
            <h1 className="stf-role-2">role</h1>
            <h1 className="stf-role-3">duration</h1>
            <div className="stf-resume">
              <button className="resume-btn">view my resume</button>
            </div>
          </div>
        </div>
        <div className="stfcard-controls">
          <button className="controls-btn stf-left">↼</button>
          <button className="controls-btn stf-right">⇁</button>
        </div>
      </div>
    </>
  );
};

export default StaffCard;
