import React, { useState } from "react";
import Loc from "../assets/location.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="py-16">
        <div className="max-w-6xl mx-auto p-4 md:p-16 xl:p-20">
          <div className="lg:w-2/3 space-y-5 text-center mx-auto mb-10">
            <h1 className="text-gray-800 uppercase -tracking-widest dark:text-white font-medium text-4xl">
              get in touch
            </h1>
            <div className="h-0.5 bg-[orange]"></div>
            <p className="text-gray-400 dark:text-gray-400 text-base leading-6 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              excepturi ad praesentium ratione tempora sunt facilis qui voluptas
              nostrum necessitatibus,
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 ">
            <div class="bg-[#2B2929] h-auto p-4">
              <div>
                <div className="flex my-6 ">
                  <div className=" bg-[orange] h-[50px] w-[50px] items-center justify-center rounded-full flex">
                    <img src={Loc} alt="" className=" rounded-full " />
                  </div>

                  <address className="ml-2 text-white w-full">
                    <h3 className="text-base font-medium text-[16px]  dark:text-white">
                      Address:{" "}
                      <span className="text-[13px] font-light w-full">
                        198 west 21th
                      </span>
                    </h3>
                    <span span className="text-[13px] font-light w-full">
                      {" "}
                      198 west 21th street, 721 joburg
                    </span>
                    <p className="text-[13px] font-light">2190</p>
                  </address>
                </div>
                <div className="flex my-6 items-center">
                  <div className=" bg-[orange] h-[50px] w-[50px] items-center justify-center rounded-full flex">
                    <img src={Phone} alt="" className=" rounded-full " />
                  </div>

                  <address className="ml-2 text-white w-full">
                    <h3 className="text-base font-medium text-[16px]  dark:text-white">
                      Phone:{" "}
                      <span className="text-[13px] font-light w-full">
                        +(27) 72 196 2692
                      </span>
                    </h3>
                  </address>
                </div>
                <div className="flex my-6 items-center ">
                  <div className=" bg-[orange] h-[50px] w-[50px] items-center justify-center rounded-full flex">
                    <img src={Email} alt="" className=" rounded-full " />
                  </div>

                  <address className="ml-2 text-white w-full">
                    <h3 className="text-base font-medium text-[16px]  dark:text-white">
                      Email:{" "}
                      <span className="text-[13px] font-light">
                        sikhwethamulanga@gmail.com
                      </span>
                    </h3>
                  </address>
                </div>
              </div>
            </div>

            <div class="bg-orange-300 h-auto p-4  ">
              <h3 className="capitalize text-[23px] font-bold mb-6">
                Contact us today
              </h3>
              <form onSubmit={handleSubmit}>
                <div className=" grid grid-cols-1 sm:grid-cols-2 mb-4 gap-2">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-[100%] bg-transparent border-b-2 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-[100%]  bg-transparent border-b-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-[100%]  bg-transparent border-b-2 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-[100%] bg-transparent border-b-2 outline-none h-[77px]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-[180px] bg-white h-[40px] rounded-br-[30px] rounded-tl-[30px] my-9 relative overflow-hidden focus:outline-none focus:border-blue-500 group"
                >
                  {" "}
                  <span class="relative z-10 hover:text-white">
                    Send Message
                  </span>
                  <div class="absolute inset-0 bg-orange-400 w-0 transition-all duration-300 group-hover:w-full"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
