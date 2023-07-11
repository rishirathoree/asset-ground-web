import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AGLogo from "../assets/AGLogo.png";

const navs = [
  "Marketplace",
  "How it Works?",
  "Pricing",
  "About us",
  "Contact us",
];

const Navbar = () => {
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const getLoggedUserFromLocalStorage = () => {
    const loggedStatus = localStorage.getItem("user");
    if (loggedStatus){
      setUserLoggedIn(true);
    }
    else{
      setUserLoggedIn(false);
    }
  };
  useEffect(() => {
    const handleResizeRemoveClassFromBody = () => {
      if (window.innerWidth > 300 && document.body.classList.contains('Sidebar-collapse')) {
        document.body.classList.remove('Sidebar-collapse');
        console.log('first')
      }
    };

    window.addEventListener('resize', handleResizeRemoveClassFromBody);

    return () => {
      window.removeEventListener('resize', handleResizeRemoveClassFromBody);
    };
  }, [window]);

  useEffect(() => {
    getLoggedUserFromLocalStorage();
  }, []);

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/Signup" ? (
        <div className="border-t-[8px] fixed w-full top-0 right-0 z-[500] shadow-custom bg-white flex items-center justify-between lg:px-20 md:px-12 sm:px-4 py-4 border-[#d54049]">
          <div>
            <Link to="/dashboard"><img src={AGLogo} className="lg:w-52 md:w-52 sm:w-52" alt="" /></Link>
          </div>
          <div className="flex items-center gap-4">
            <ul className="sideMenu lg:translate-x-0 md:-translate-x-full sm:-translate-x-full lg:shadow-none md:shadow-lg sm:shadow-lg flex lg:visible md:invisible sm:invisible lg:flex-row md:flex-col sm:flex-col lg:static md:fixed sm:fixed top-0 left-0 lg:w-full md:w-2/5 sm:w-2/4 lg:duration-0 md:duration-500 sm:duration-500 lg:bg-transparent md:bg-white sm:bg-white lg:h-full md:screen sm:h-screen z-50">
              <li className="w-full text-white">
                <div className="lg:hidden md:flex sm:flex flex-col">
                  <div className="flex p-3 border-b text-black w-full items-center gap-2">
                  <p className="font-normal text-sm">My Account</p>
                  </div>
                  <div className="flex w-full border-b items-center justify-between gap-2 p-2">
                    <div className="w-1/2 text-center">
                      <p className="text-sm rounded-sm bg-red-500 w-full p-3 font-medium capitalize">login</p>
                    </div>
                    <div className="w-1/2 text-center bg-[#0E4B72] flex items-center justify-center space-x-1 p-3">
                      <i className="bx bx-x ring-[1.5px] ring-white p-[0.1px] text-[14px] rounded-full"></i>
                      <p className="text-sm rounded-sm  font-medium capitalize">Sell</p>
                    </div>
                  </div>
                </div>
              </li>
              
              {navs.map((items,index)=>{return(<><Link to={`/${items.split(' ').join('')}`}><li className="p-3 w-full lg:border-b-0 md:border-b sm:border-b border-slate-100 lg:block lg:w-max md:w-full sm:w-full md:block sm:block"><p key={index} className="text-xsm">{items}</p></li></Link></>)})}
            </ul>
            <div onClick={()=>{document.body.classList.remove('Sidebar-collapse')}} className="sidebar-overlay invisible opacity-0 duration-500 w-full h-screen top-0 right-0 bg-black bg-opacity-20 z-10 fixed"></div>
            <div className="flex items-center gap-4">
              <i className="bx bx-search"></i>
              <i onClick={()=>{document.body.classList.toggle('Sidebar-collapse')}} className="lg:hidden md:block sm:block bx bx-sm bx-menu"></i>
              {!userLoggedIn && <Link to="/login">
                <button className="flex items-center bg-red-600 px-4 space-x-1 py-2 text-white rounded">
              <p className="font-bold text-sm">Login</p>
                </button>
              </Link>}
            </div>
            {userLoggedIn && 
            <Link to="/account">
            <div className="w-full lg:block md:hidden sm:hidden">
              <div className="w-max flex items-center gap-2">
                <i className="bx bxs-user text-red-600"></i>
                <p className="text-xsm font-medium">My Account</p>
              </div>
            </div>  
            </Link>
            }
            <Link to="/sell">
              <button className="lg:flex md:hidden sm:hidden flex items-center bg-[#0E4B72] px-4 space-x-1 py-2 text-white rounded">
              <i className="bx bx-plus ring-[1.5px] ring-white p-[0.1px] text-[14px] rounded-full"></i>
              <p className="font-bold text-sm">Sell</p>
            </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;


{/* <ul className="font-normal flex lg:flex md:flex top-0 right-0 lg:static md:fixed sm:fixed lg:flex-row md:flex-col lg:bg-transparent md:bg-white sm:bg-white lg:h-full lg:z-0 md:z-50 sm:z-50 md:h-screen sm:h-screen sm:flex-col gap-4 items-center lg:w-full md:w-1/3 sm:w-1/2"> */}