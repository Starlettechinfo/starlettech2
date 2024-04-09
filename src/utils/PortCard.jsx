import React from "react";

import Ai from "../assets/ai.png";
import Design from "../assets/poster.png";
import Freelancer from "../assets/freelancer.png";

import "../style/portcard.css";

export const portfolios = [
  {
    date: "16",
    month: "december",
    title: "tips & tricks",
    image: Ai,
    heading: "HOW TO USE AI IN GRAPHIC DESIGN",
  },
  {
    date: "18",
    month: "january",
    title: "design principles",
    image: Design,
    heading: "PRINCIPLES OF EFFECTIVE DESIGN",
  },
  {
    date: "21",
    month: "march",
    title: "tips & tricks",
    image: Freelancer,
    heading: "BECOMING A FREELANCE DESIGNER IN SOUTH AFRICA",
  },
];

const PortCard = (props) => {
  return (
    <>
      <div className="pcard-main-con">
        <div className="con-1">
          <div className="con-2">
            <div className="con-date">
              <h3 className="date-date">{props.date}</h3>
              <h3 className="date-m">{props.month}</h3>
            </div>
            <img className="port-image" src={props.image} alt="..." />
            <p className="port-tps">{props.title}</p>
            <h1 className="con-content">{props.heading}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortCard;
