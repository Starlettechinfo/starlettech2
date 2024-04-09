import Android from "../../assets/104471_android_icon.svg";
import Market from "../../assets/1243706_shop_store_market_icon.svg";
import Web from "../../assets/5355692_code_coding_development_programming_web_icon.svg";
import Graphic from "../../assets/9025778_paint_brush_icon.svg";

import Card from "../../utils/Card";

import "../../style/home/Hero.css";

const Hero = () => {
  const hero = (
    <div className="hero">
      <h3 className="top-head">Multi-media company</h3>
      <h1 className="mid-head">Starlet Tech</h1>
      <h4 className="low-head">creative design agency</h4>
    </div>
  );

  const cardDetails = [
    {
      cardImage: Graphic,
      cardHeading: "Graphic Design",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Market,
      cardHeading: "digital marketing",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Android,
      cardHeading: "app development",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
    {
      cardImage: Web,
      cardHeading: "web development",
      cardContent:
        "We help clients establish their brands either through logo designs, corporate identity design, marketing material or any other aspect to showcases a lasting visual language.",
    },
  ];

  return (
    <>
      {hero}
      <div className="card-main-con">
        {cardDetails.map((detail, index) => (
          <div className="hero-container" key={index}>
            <Card
              image={detail.cardImage}
              heading={detail.cardHeading}
              content={detail.cardContent}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
