import React from "react";
import photo from "../assets/Frame 7.png";
import instagram from "../assets/image 4.png";
import facebook from "../assets/image 5.png";

import '../style/offercard.css'

const OfferCard = (props) => {
  return (
    <div className="det">
      <div className="card-con">
        <div className="offers">
          <h1 className="titles">{props.firstTitle} </h1>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          <li>{props.list4}</li>
          <li>{props.list5}</li>
        </div>
        <div className="choose">
          <h1 className="titles">{props.secTitle}</h1>
          <li>{props.slist1}</li>
          <li>{props.slist2}</li>
          <li>{props.slist3}</li>
          <li>{props.slist4}</li>
          <li>{props.slist5}</li>
        </div>
      </div>
      <div className="contact-card">
        <p>Contact us today to elevate your brand's online presence!</p>
        <div className="contact-boxes">
          <img src={photo} alt="phoneicon" />
          <div className="details">
            <h4>Contact: **************</h4>
            <h4>Email: **************</h4>
          </div>
        </div>
        <div className="social-media">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
