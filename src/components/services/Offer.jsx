import web from "../../assets/webd.png";
import brand from "../../assets/image 6.png";
import host from "../../assets/host.png";
import social from "../../assets/social.png";
import app from "../../assets/app.png";

import OfferCard from "../../utils/OfferCard";

const Offer = () => {
  return (
    <>
      <div className="w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <img className="w-[420px] mx-auto" src={web} alt="Web design" />
          <OfferCard
            className="first-card"
            firstTitle="What We "
            secondTitle="Offer"
            list1="Custom Website Design"
            list2="Responsive Layouts"
            list3="User Experience Optimization"
            list4="Pay-Per-Click (PPC) Advertising"
            list5="SEO Implementation"
            secTitle="Why Choose "
            secTitle2="us"
            slist1="Experienced Team of Designers"
            slist2="Tailored Solutions "
            slist3="Attention to Detail"
            slist4="Timely Delivery"
            slist5="Client Satisfaction Guaranteed"
          />
        </div>
      </div>
      <div className="w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <OfferCard
            className="first-card"
            firstTitle="What We "
            secondTitle="Offer"
            list1="Logo Design"
            list2="Brand Identity Development"
            list3="Visual Style Guides"
            list4="Packaging Design"
            list5="Marketing Collateral"
            secTitle="Why Choose "
            secTitle2="us"
            slist1="Creative Excellence"
            slist2="Tailored Solutions for Your Brand "
            slist3="Attention to Detail"
            slist4="Consistent Brand Messaging"
            slist5="Client-Centric Approach"
          />
          <img className="w-[420px] mx-auto" src={brand} alt="Web design" />
        </div>
      </div>
      <div className="w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <img className="w-[420px] mx-auto" src={host} alt="Web design" />
          <OfferCard
            className="first-card"
            firstTitle="What We "
            secondTitle="Offer"
            list1="Shared Hosting"
            list2="Virtual Private Servers (VPS"
            list3="Cloud Hosting"
            list4="Dedicated Hosting"
            list5="Domain Registration"
            secTitle="Why Choose "
            secTitle2="us"
            slist1="Reliable Infrastructure"
            slist2="Scalable Solutions"
            slist3="24/7 Technical Support"
            slist4="Data Security"
            slist5="Competitive Pricing"
          />
        </div>
      </div>
      <div className="w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <OfferCard
            className="first-card"
            firstTitle="What We "
            secondTitle="Offer"
            list1="Search Engine Optimization (SEO)"
            list2="Social Media Marketing"
            list3="Email Marketing"
            list4="Pay-Per-Click (PPC) Advertising"
            list5="Content Creation and Marketing"
            secTitle="Why Choose "
            secTitle2="us"
            slist1="Strategic Approach"
            slist2="Tailored Solutions "
            slist3="Targeted Campaigns"
            slist4="Results-Oriented Strategies"
            slist5="Transparent Reporting"
          />
          <img className="w-[420px] mx-auto" src={social} alt="Web design" />
        </div>
      </div>
      <div className="w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 ">
          <img className="w-[420px] mx-auto" src={app} alt="Web design" />
          <OfferCard
            className="first-card"
            firstTitle="What We "
            secondTitle="Offer"
            list1="iOS App Development"
            list2="Android App Development"
            list3="Cross-Platform Development"
            list4="UI/UX Design"
            list5="App Maintenance and Support"
            secTitle="Why Choose "
            secTitle2="us"
            slist1="Experienced Development Team"
            slist2="Customized Solutions for Your Needs "
            slist3="Quality Assurance"
            slist4="User-Centric Design Approach"
            slist5="Timely Delivery"
          />
        </div>
      </div>
    </>
  );
};

export default Offer;
