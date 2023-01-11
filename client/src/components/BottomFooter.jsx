import React from "react";
import { Link as NavLink, Link, useNavigate } from "react-router-dom";

export default function BottomFooter() {
  return (
    <div class="flex flex-col pt-4 mt-10">
      <div class="flex justify-center">
        <hr class=" w-[80%] h-0.5 my-8 bg-gray-300 border-0 rounded dark:bg-gray-700" />
      </div>

      <div
        className="footerContainer"
        class="flex items-start justify-evenly space-x-40"
      >
        <div className="footerLeft" class="flex flex-col p-2 bg-slate-500m">
          <div class="flex text-xl font-semibold">Lisa Works</div>
          <div class="flex">Our Social Media:</div>
          <div className="socialIcons" class="flex">
            <img class="max-h-11 p-2" src="/facebook.png" />
            <img class="max-h-11 p-2" src="/Instagram.png" />
          </div>
        </div>
        <div className="footerCenter" class="p-2">
          <div class=" text-xl font-semibold pt-2">Useful Links</div>
          <div>
            <button class="text-gray-700 w-1/2 text-left py-2">
              <NavLink to="/">Home</NavLink>
            </button>
            <button class="text-gray-700 w-1/2 text-left py-2">
              <NavLink to="/album">Album</NavLink>
            </button>
            <button class="text-gray-700 w-1/2 text-left py-2">
              <NavLink to="/request">Request</NavLink>
            </button>
            <button class="text-gray-700 w-1/2 text-left py-2">
              <NavLink to="/charity">Charity</NavLink>
            </button>
            <button class="text-gray-700 w-1/2 text-left py-2">
              <NavLink to="/about">About</NavLink>
            </button>
          </div>
        </div>
        <div className="footerRight" class="p-2 mt-4">
          Copyright © 2023. LisaWorks
        </div>
      </div>
    </div>
  );
}
