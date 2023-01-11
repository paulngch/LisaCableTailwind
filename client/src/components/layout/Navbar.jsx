import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div
        className="bannerContainer"
        class="border-b border-gray-200 flex flex-row justify-center mt-2 bg-pink-600 max-h-40 "
      >
        <div className="logo" class="bg-slate-400 max-w-[10%]">
          <img class="h-full w-full max-h-28" src="/LisaWorksLogo.png" />
        </div>
        <div
          className="bannerRightContainer"
          class=" flex flex-col bg-blue-200 justify-center w-[60%]"
        >
          <div className="storeName" class=" text-center text-2xl pt-3 pb-1">
            LISA WORKS
          </div>
          <div className="buttonContainer" class="flex">
            <button class="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
              <NavLink to="/">Home</NavLink>
            </button>
            <button class="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
              <NavLink to="/album">Album</NavLink>
            </button>
            <button class="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
              <NavLink to="/request">Request</NavLink>
            </button>
            <button class="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
              <NavLink to="/charity">Charity</NavLink>
            </button>
            <button class="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium">
              <NavLink to="/about">About</NavLink>
            </button>
          </div>
        </div>
        <div className="rightEmpty" class="bg-slate-500 w-[10%] min-w-0"></div>
      </div>
    </>
  );
}
