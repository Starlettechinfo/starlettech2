import React from "react";
import explor from "../assets/web-exploring.png";
import tech from "../assets/image 7.png";
import design from "../assets/45 (2).jpg";
import team from "../assets/developer-team.png";
import ux from '../assets/image 8.png'

const Learnmore= () => {
  return (
    <>
      <div className="w-full  p-4 bg-gradient-to-r from-orange-300 to-blue-200">
        <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center items-center  w-9/12 mx-auto">
          <div className="space-y-[-3px]  lg:space-y-[-05px] ">
            <h1 className="lg:text-[40px] font-extrabold md:text-[30px] text-[20px] sm:text-[19]">
              we provide
            </h1>
            <h1 className="lg:text-[40px] font-extrabold md:text-[30px] text-[20px] sm:text-[19]">
              Website Design
            </h1>
            <h1 className="lg:text-[40px] font-extrabold md:text-[30px] text-[20px] sm:text-[19]">
              for your
            </h1>
            <h1 className="lg:text-[40px] font-extrabold md:text-[30px] text-[20px] sm:text-[19]">
              Business
            </h1>
          </div>
          <div>
            <img src={explor} alt="web-exploring" />
          </div>
        </div>
        <div className="  bg-white mx-auto w-[300px] h-10 items-center justify-center flex rounded-full">
          <h3 className="text-[20px] font-bold text-[orange] ">
            Web Design Services
          </h3>
        </div>
      </div>
      <div className="md:w-[600px] mx-auto text-center my-9 p-2 ">
        <p>
          Personalized service offerings designed for your specific requirements
        </p>
        <p>Advanced technology and expertise to ensure top-notch results.</p>
        <p>Dedicated support team available around the clock to assist you.</p>
      </div>

      <div className="max-w-7xl my-14 mx-auto border border-black ">
        <div className="grid grid-flow-row-dense md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 ">
          <div className="col-span-1 sm p-4 lg:m-auto sm:m-auto ">
            <img src={tech} alt="tech" />
          </div>
          <div className=" col-span-2 p-5 text-white bg-[#2B2929] ">
            <h2 className="font-bold text-[20px] text-[orange] mb-6 px-4 text-center">
              Detailed Information
            </h2>

            <div className="p-4 ">
              <p>
                <span className="font-bold">Title:</span> Advanced Technology
                Integration
              </p>
              <p>
                <span className="font-bold">Description:</span> Our service
                utilizes the latest technology to streamline processes and
                enhance From AI-driven algorithms to machine learning
                capabilities, we ensure that you stay ahead of the curve.
                Callout: Experience seamless integration and unparalleled
                performance with our advanced technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl m-auto my-10 flex flex-col items-center justify-cente pb-8">
        <p className="text-center font-bold text-[20px] my-5">Our Design</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 m-auto max-w-5xl  ">
          <img src={design} alt="" className="w-[219px] h-[219px]" />
          <img src={design} alt="" className="w-[219px] h-[219px]" />
          <img src={design} alt="" className="w-[219px] h-[219px]" />
          <img src={design} alt="" className="w-[219px] h-[219px]" />
        </div>
      </div>

      <div className="p-5 bg-[#2B2929] max-w-6xl mx-auto my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white" >
          <div className="py-5 space-y-5 px-3">
            <div className="max-w-[480px]">
              <h1 className="text-[36px] font-bold text-white">
                UI/UX <span className="text-[orange]">Design</span>
              </h1>
              <p className="font-serif mb-5">
                Our team of seasoned UI/UX designers combines artistic flair
                with technical precision to craft visually stunning interfaces
                that resonate with your target audience. We meticulously analyze
                user behavior, preferences, and pain points to develop
                customized solutions that prioritize usability, functionality,
                and aesthetic appeal.
              </p>
              <h3 className="font-bold text-[20px]">User interface Design</h3>
              <h3 className="font-bold text-[20px]">User Experience Design</h3>
              <h3 className="font-bold text-[20px]">Mobile Application Design</h3>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={team} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-white" >
          <div className=" ">
            <img src={ux} alt="" />
          </div>
          <div className="py-5 space-y-5 px-3">
            <div className="max-w-[480px]">
              <h1 className="text-[36px] font-bold text-white">
                UI/UX <span className="text-[orange]">Design</span>
              </h1>
              <p className="font-serif mb-5">
                Our team of seasoned UI/UX designers combines artistic flair
                with technical precision to craft visually stunning interfaces
                that resonate with your target audience. We meticulously analyze
                user behavior, preferences, and pain points to develop
                customized solutions that prioritize usability, functionality,
                and aesthetic appeal.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto my-10 bg-[#2B2929] p-5 px-9 text-white rounded-[50px]">
        <h1 className="font-bold md:text-[30px] text-[13px] ">We are Ready Develop your site</h1>
        <li className="font-sans">Custom Website Design</li>
        <li className="font-sans">Responsive Layouts</li>
        <li className="font-sans">User Experience Optimization</li>
        <li className="font-sans">E-commerce Integration</li>
        <li className="font-sans">SEO Implementation</li>
      </div>
      
     <div className="text-center my-8 font-serif font-bold underline text-[20px] space-y-1" >
      <button >Next page...</button>
      <div className="h-1 bg-orange-500 w-[100px] mx-auto"></div>
      <div className="h-1 bg-orange-500 w-[50px] mx-auto"></div>
      <div className="h-1 bg-orange-500 w-[20px] mx-auto"></div>
     </div>
    </>
  );
};

export default Learnmore;
