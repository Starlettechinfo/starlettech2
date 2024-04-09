import React from "react";

import PS from "../assets/PS.png";
import AI from "../assets/Adobe I.png";
import ID from "../assets/ID.png";
import PR from "../assets/PR.png";
import AE from "../assets/AE.png";
import XD from "../assets/XD.png";
import HTML from "../assets/HTML.png";
import SEO from "../assets/SEO.png";
import Model from "../assets/3D.png";

import "../style/profcard.css";

export const profeciencies = [
  {
    image: PS,
    title: "Adobe Photoshop",
    alt: "Adobe Photoshop",
    content:
      "With a great background in the industry, We have finely honed our photo editing and image manipulation skills. With Adobe products being as well integrated as they can we use all vector and pixel software as one unit.",
  },
  {
    image: AI,
    title: "Adobe Illustrator",
    alt: "Adobe Illustrator",
    content:
      "With the cross-integration of the Adobe suite and the love for illustration and vector artwork, We are extremely proficient in Illustrator. We use this toolfor all logo designs and vector artwork. From illustration through to full-on poster and printable designs.",
  },
  {
    image: ID,
    title: "Adobe indesign",
    alt: "Adobe indesign",
    content:
      "We am highly proficient in InDesign. For all types of layout and mass document designs. The ability to use both photoshop, illustrator and Premier combined with InDesign we can create highly interactive documents.",
  },
  {
    image: PR,
    title: "premier pro",
    alt: "premier pro",
    content:
      "A love for film and a need for film editing We started exploring this tool more and more while we got a better grasp of Social media and festival post party editing. We use Adobe Premier combined with After effects and audition to effectively create a high-end edited video.",
  },
  {
    image: AE,
    title: "After effects",
    alt: "After effects",
    content:
      "A love for Illustration sparks a love for making those drawings move. We use Adobe After Effects build awesome motion graphics. Either to use on its own or to integrate with some of Adobe's other editing software.",
  },
  {
    image: XD,
    title: "Adobe xd",
    alt: "Adobe xd",
    content:
      "Highly proficient in both CMS and custom web design, we also am highly proficient in Adobe XD for wire framing and Prototyping. This allows for both the planning phase as well as the actual site build to go seamlessly. Allowing for structured creativity if you will.",
  },
  {
    image: HTML,
    title: "htlm, css & wordpress",
    alt: "htlm, css & wordpress",
    content:
      "We are well versed in frontend languages like HTML, Css, JavaScript amd frameworks like React. Additionally, we are also well versed in WordPress and help many clients build sites that can easily scale up or larger sites with all the bells & whistles.",
  },
  {
    image: SEO,
    title: "seo & digital marketing",
    alt: "seo & digital marketing",
    content:
      "We have a whole set of tools in my arsenal. This allows me to do competitor research, find the right keywords, implement them on a website, track the performance of all marketing campaigns and adjust the tactic for better traffic and an over-all better ranking.",
  },
  {
    image: Model,
    title: "3d modeling and rendering",
    alt: "3d modeling and rendering",
    content:
      "We have a good understanding of 3Dimensional digital art. We have used some of these tools and we am still in the learning phase. While saying this we are also in the process of learning app development i.e Unity as well as Blender.",
  },
];

const ProfCard = (props) => {
  return (
    <>
      <div className="pcard-con">
        <img src={props.image} alt={props.alt} width={80} />
        <h1 className="pcard-title">{props.title}</h1>
        <p className="pcard-msg">{props.content}</p>
      </div>
    </>
  );
};

export default ProfCard;
