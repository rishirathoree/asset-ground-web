import React from "react";
import logo from "../assets/AGLogo.png";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation()
    return (
    <>
    {location.pathname !== '/Signup' && location.pathname !== '/login' && location.pathname !== "/forgotpassword" && location.pathname !== "/Additioninformation" && location.pathname !== "/digitCodePage" && location.pathname !== "/resetPassword"
    ?
    <>
    <div className="shadows lg:px-20 md:px-12 sm:px-8 py-8 ">
      <div className="flex items-start lg:flex-row md:flex-row sm:flex-col justify-between">
      <div className="logos space-y-6">
        <img src={logo} alt="" />
        <p className="w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam in.
        </p>
        <div className="flex items-center gap-2">
            <i className="bx p-2 rounded-full bg-red-500/10 bxl-facebook"></i>
            <i className="bx p-2 rounded-full bg-red-500/10 bxl-instagram"></i>
            <i className="bx p-2 rounded-full bg-red-500/10 bxl-linkedin"></i>
        </div>
        <p></p>
      </div>
      
      <ul className="font-normal flex flex-col gap-4 items-start">
        <li className="lg:flex md:hidden sm:hidden"><p className="text-gray-600 font-normal">Marketplace</p></li>
        <li className="lg:flex md:hidden sm:hidden"><p className="text-gray-600 font-normal">How it Works?</p></li>
        <li className="lg:flex md:hidden sm:hidden"><p className="text-gray-600 font-normal">Pricing</p></li>
        <li className="lg:flex md:hidden sm:hidden"><p className="text-gray-600 font-normal">About us</p></li>
        <li className="lg:flex md:hidden sm:hidden"><p className="text-gray-600 font-normal">Contact us</p></li>
      </ul>
      <div className="space-y-4">
        <p>Get updates when a specific property type available</p>
        <input type="text" className="focus:outline-none outline-none ring-1 ring-gray-400/50 bg-gray-200 rounded w-full p-2" />
        <button className='text-center p-3  text-white bg-[#0E4B72] w-max rounded-lg'>Subscribe</button>
      </div>
      </div>
    </div>
    <div className="border-t p-2 flex items-center justify-evenly">
        <p className="text-sm font-normal text-gray-400">© 2023, Asset Ground Powered by XYZ</p>
    <div className="items-center flex gap-4">
    <p className="text-sm font-normal text-gray-400">Terms & Conditions</p>
    <p className="text-sm font-normal text-gray-400">Privacy Policy</p>
    </div>
    </div>
    </>
    :
    <>
    </>
}
    
    </>
  );
};

export default Footer;
