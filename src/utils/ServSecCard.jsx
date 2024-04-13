import React from "react";

import Design from "../assets/design.png";
import Host from "../assets/database.png";
import Dev from "../assets/dev.png";

import "../style/servseccard.css";

export const services = [
  {
    image: Design,
    title: "Design",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
  {
    image: Host,
    title: "Hosting",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
  {
    image: Dev,
    title: "Development",
    content:
      "Design can be a relatively broad profession. As a Multi-media Designer our skill set spans quite far. This allows for much more than once-off projects. Establishing brands across multiple media channels these include both graphic and website design.",
  },
];

const ServSecCard = (props) => {
  return (
    <>
      <div className="top-sev-con">
        <div className="sec-card-container">
          <img src={props.image} alt="..." width={30} />
          <h3 className="serv-card-title">{props.title}</h3>
          <p className="serv-card-content">{props.content}</p>
        </div>
      </div>
    </>
  );
};

export default ServSecCard;
