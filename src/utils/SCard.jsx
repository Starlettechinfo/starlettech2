import Web from "../assets/web-design.png";
import Brand from "../assets/branding.png";
import Host from "../assets/hosting.png";
import Digital from "../assets/social-media-marketing.png";
import App from "../assets/mobile-development.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const cardDetails = [
  {
    image: Web,
    title: "Website Design",
    // path: "/webdesign",
    content:
      "Step into digital excellence with our website design service. Our creative experts craft captivating and modern websites that drive  results. Stand out in the online crowd with our sleek designs and user-friendly interfaces. ",
  },
  {
    image: Brand,
    title: "branding & design",
    // path: "/branding",
    content:
      "Transform your brand identity with our expert branding and design solutions. From captivating logos to comprehensive brand strategies, we craft visual identities that leave a lasting impression. ",
  },
  {
    image: Host,
    title: "hosting service",
    // path: "/hosting",
    content:
      "Ensure your website's performance and security with our reliable hosting services. We provide tailored solutions to keep your online presence running smoothly. Trust us to safeguard your website's success in the digital realm. ",
  },
  {
    image: Digital,
    title: "digital marketing",
    // path: "/digital",
    content:
      "Elevate your online presence with our strategic digital marketing solutions. From SEO to social media management, we tailor our strategies to maximize your impact and reach your target audience.",
  },
  {
    image: App,
    title: "app development",
    // path: "/appdevelopment",
    content:
      "Bring your ideas to life with our expert app development services. From concept to launch, we craft cutting-edge mobile applications that redefine user experiences. Let's innovate together and turn your vision into a reality. ",
  },
];

const SCard = (props) => {
  return (
    <div className="w-full pt-5">
      <div className="flex justify-center text-blue-600  ">
        <div className="w-[350px] h-[340px] bg-[#2B2929] p-4 text-white flex flex-col items-center cursor-pointer hover:bg-white hover:text-black ease-in-out duration-500 hover:drop-shadow-lg   ">
          <div className="w-[90px] flex items-center justify-center p-2 bg-orange-500 border-t border-gray-500 mb-4  border-br-[30px] rounded-bl-[30px] rounded-tr-[30px]">
            <img src={props.image} alt="Website" width={50} />
          </div>
          <h2 className="text-center md:text-2xl sm:text-1xl text-xl mb-4">
            {props.title}
          </h2>
          <div className="w-[240px] h-[500px] ">
            <p className="text-xs  ">{props.content}</p>
          </div>
          <div className="top-[80px] ">
            <Link to={props.path}>
              <button className="w-[200px] bg-[orange]  border-br-[30px] rounded-bl-[30px] rounded-tr-[30px] ">
                Learn More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCard;
