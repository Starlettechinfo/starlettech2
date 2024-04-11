import React from "react";
import { ReactTyped } from "react-typed";

const ServiceHero = () => {
  return (
    <>
      <div className="w-full bg-[#2B2929]">
        <div className="text-white">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className="text-[orange] font-bold md:text-[19px] text-[11px] sm:mt-[120px] sm:text-[15px] text-4xl">
              GET GREATEST SERVICE FROM OUR COMPANY
            </p>
            <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold md:py-6">
              OUR <span className="text-[orange]">SERVICES</span>
            </h1>
            <div>
              <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
                Fast, Flexible Website Design :
              </p>
              <ReactTyped
                className="md:text-2xl sm:text-1xl text-xl font-bold text-[orange]"
                strings={[
                  " Branding & Design",
                  " Hosting services ",
                  "Digital marketing",
                  "App development",
                ]}
                typeSpeed={140}
                backSpeed={120}
                loop
              />
            </div>
            <p className="md:text-1xl text-gray-400 px-4 text-start py-2">
              Unlock your online potential with our design and development
              suite. From captivating websites to innovative branding, we ensure
              reliability with hosting and amplify impact with digital marketing
              strategies. Trust our expert app development team to bring your
              ideas to life, partnering for digital success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHero;
