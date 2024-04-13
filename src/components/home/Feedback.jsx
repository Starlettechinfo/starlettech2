import React from "react";

import "../../style/home/Feedback.css";
import TestCard from "../../utils/TestCard";

const Feedback = () => {
  return (
    <>
      <div className="feed-main">
        <div className="feed-top">
          <h1 className="feed-title">feedback</h1>
          <div className="test">
            <div className="testimonials">
              <h3 className="mon-title">testimonials</h3>
              <div className="mon-con">
                <h2>
                  Feedback from <br /> past clients
                </h2>
              </div>
              <div className="mon-controls">
                <div className="mon-left">
                  <button className="left-btn con-btn">↼</button>
                </div>
                <div className="mon-right">
                  <button className="right-btn con-btn">⇁</button>
                </div>
              </div>
            </div>
            <div className="clients">
              <TestCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
