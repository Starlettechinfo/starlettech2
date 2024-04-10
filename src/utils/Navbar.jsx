import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiMenu5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  
 

  return (
    <div className="bg-black h-24 w-full">
      <div className="text-white flex justify-between items-center max-w-[1240px] mx-auto px-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[110px] pt-2" />
        </Link>
        <ul className="hidden md:flex  text-xl cursor-pointer font-bold">
          <li
            className="p-4 hover:bg-orange-700 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="p-4 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="p-4 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            className="p-4 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
          >
            <Link to="/blog">Blog▽</Link>
          </li>
          <li
            className="p-4 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden ">
          {!nav ? <IoClose size={30} /> : <RiMenu5Line size={30} />}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-gray-600 border-r-gray-200 ease-in-out duration-500 md:hidden  z-10"
              : "fixed left-[-100%] "
          }
        >
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px] p-4" />
          </Link>
          <ul className="pt-8">
            <li
              className="p-4 border-b border-gray-500 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="p-4 border-b border-gray-500 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className="p-4 border-b border-gray-500 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className="p-4 border-b border-gray-500 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
            >
              <Link to="/blog">Blog▽</Link>
            </li>
            <li
              className="p-4 hover:bg-orange-600 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300"
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
