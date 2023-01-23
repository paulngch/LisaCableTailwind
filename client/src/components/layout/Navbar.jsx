import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function Navbar() {
 

  return (
    <>
    <div

      className=" bannerContainer border-b border-gray-200 flex flex-row justify-center mt-2 max-h-40 "
    >
      <div
     
        className="logo flex justify-center items-center mt-3  max-w-[10%] "
      >
        <img
          className="hidden h-full w-full max-h-32 lg:block"
          src="/LisaWorksLogo.png"
        />
      </div>
      <div
     
        className="bannerRightContainer flex flex-col justify-center w-[60%]"
      >
        <div
     
          className="storeName text-center text-2xl pt-3 pb-1 flex justify-center"
        >
          <img className="flex h-20" src="/LisaWorksword.png" />
        </div>
        <div className="buttonContainer flex">
          <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
            <NavLink to="/pages/album">Album</NavLink>
          </button>
          <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
            <NavLink to="/pages/request">Request</NavLink>
          </button>
          <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
            <NavLink to="/pages/charity">Charity</NavLink>
          </button>
          <button className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
            <NavLink to="/pages/about">About</NavLink>
          </button>
        </div>
      </div>
      <div

        className="rightEmpty hidden w-[10%] min-w-0 lg:block"
      ></div>
    </div>
  </>
  );
}
