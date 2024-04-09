import web from "../../assets/webd.png";
import brand from "../../assets/image 6.png";
import host from "../../assets/host.png";
import social from "../../assets/social.png";
import app from "../../assets/app.png";

import OfferCard from "../../utils/OfferCard";

import '../../style/services/Offer.css'

const Offer = () => {
  return (
    <div className="offer-parent">
      <div className="offer-left">
        <img className="res-img" src={web} alt="Web design" />
        <OfferCard
          className="first-card"
          firstTitle="What We span"
          list1="Custom Website Design"
          list2="Responsive Layouts"
          list3="User Experience Optimization"
          list4="E-commerce Integration"
          list5="SEO Implementation"
          secTitle="Why Choose Us"
          slist1="Experienced Team of Designers"
          slist2="Tailored Solutions "
          slist3="Attention to Detail"
          slist4="Timely Delivery"
          slist5="Client Satisfaction Guaranteed"
        />
      </div>
      <div className="offer-right">
        <img className="off-rgt res-img" src={brand} alt="Web design" />
        <OfferCard
          className="off-lft"
          firstTitle="What We offer"
          list1="Logo Design"
          list2="Brand Identity Development"
          list3="Visual Style Guides"
          list4="Packaging Design"
          list5="Marketing Collateral"
          secTitle="Why Choose Us"
          slist1="Creative Excellence"
          slist2="Tailored Solutions for Your Brand"
          slist3="Attention to Detail"
          slist4="Consistent Brand Messaging"
          slist5="Client-Centric Approach"
        />
      </div>
      <div className="offer-left">
        <img className="res-img" src={host} alt="Web design" />
        <OfferCard
          className="off-lft"
          firstTitle="What We offer"
          list1="Shared Hosting"
          list2="Virtual Private Servers (VPS"
          list3="Cloud Hosting"
          list4="Dedicated Hosting"
          list5="Domain Registration"
          secTitle="Why Choose Us"
          slist1="Reliable Infrastructure"
          slist2="Scalable Solutions"
          slist3="24/7 Technical Support"
          slist4="Data Security"
          slist5="Competitive Pricing"
        />
      </div>
      <div className="offer-right">
        <img className="off-rgt res-img" src={social} alt="Web design" />
        <OfferCard
          className="off-lft"
          firstTitle="What We offer"
          list1="Search Engine Optimization (SEO)"
          list2="Social Media Marketing"
          list3="Email Marketingg"
          list4="Pay-Per-Click (PPC) Advertising"
          list5="Content Creation and Marketing"
          secTitle="Why Choose Us"
          slist1="Strategic Approach"
          slist2="Data-Driven Insights"
          slist3="Targeted Campaigns"
          slist4="Results-Oriented Strategies"
          slist5="Transparent Reporting"
        />
      </div>
      <div className="offer-left">
        <img className="last res-img" src={app} alt="Web design" />
        <OfferCard
          firstTitle="What We offer"
          list1="iOS App Development"
          list2="Android App Development"
          list3="Cross-Platform Development"
          list4="UI/UX Design"
          list5="App Maintenance and Support"
          secTitle="Why Choose Us"
          slist1="Experienced Development Team"
          slist2="Customized Solutions for Your Needs"
          slist3="User-Centric Design Approach"
          slist4="Quality Assurance"
          slist5="Timely Delivery"
        />
      </div>
    </div>
  );
};

export default Offer;
