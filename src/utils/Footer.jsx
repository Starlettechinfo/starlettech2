import React from "react";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Ig from "../assets/ig.png";
import LinkedIn from "../assets/linkedin.png";

import "../style/footer.css";

const Footer = () => {
  const footerLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Social impact", path: "#social-impact" },
    { title: "CTA", path: "#cta" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "Contact Us", path: "/contact" },
  ];

  const contactImg = [
    { image: Facebook, alt: "Facebook" },
    { image: Twitter, alt: "Twitter" },
    { image: Ig, alt: "Instagram" },
    { image: LinkedIn, alt: "LinkedIn" },
  ];

  return (
    <section className="foot-sec">
      <div className="foot-container container">
        <div className="box-container">
          <div className="boxes first-box">
            <div className="box-image">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="footer-text-1">
              A multi-skilled, multi-media Designer & Art Director with an
              extensive skill set in Advertising, Brand Establishment and
              Digital Design and Marketing.
            </p>
            <p className="footer-text-2">
              We am here to help you build something that'll last.
            </p>
          </div>
          <div className="boxes sec-box">
            <div className="sec-box_container">
              <h3 className="foot-title">Navigation</h3>
              {footerLinks.map((link, index) => (
                <div className="foot-links">
                  <li key={index}>
                    <a href={link.path}>{link.title}</a>
                  </li>
                </div>
              ))}
            </div>
          </div>
          <div className="boxes">
            <div className="sec-box_container">
              <h3 className="foot-title">Contact</h3>
              <div className="foot-email">
                <h4>Email:</h4>
                <p>mutilmeadia@starlettech.co.za</p>
              </div>
              <div className="foot-icons-container">
                {contactImg.map((link, index) => (
                  <div className="foot-icons" key={index}>
                    <img src={link.image} alt={link.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="foot-end">
          <h3 className="foot-content">
            CONTENT ON THIS SITE IS SUBJECT TO COPYRIGHT © TERMS & CONDITIONS
            APPLY
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;
