import React from "react";

import "../style/card.css";

const Card = (props) => {
  return (
    <div className="top-container">
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="Props Image" width={50} />
        </div>
        <h2 className="heading">{props.heading}</h2>
        <p className="content">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
