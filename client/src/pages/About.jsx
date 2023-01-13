import React from "react";

export default function About() {
  return (
    <>
      <div className="aboutHeader" class="flex bg-slate-400 h-44 items-center ">
        <div>
          <img
            class="h-44 ml-40 hidden lg:block "
            src="feathertippenlogo.png"
          />
        </div>

        <div class="text-4xl p-2 m-2">Our Story</div>
        <div class="text-4xl">|</div>
        <div class="text-4xl m-2 p-2">LisaWorks</div>
      </div>
      <div class="flex justify-center">
        <p className="storyContainer" class="flex w-2/3 m-2 p-2 pt-6 text-lg">
          Hi, my name is Paul and my story began back in August 2022 when I was
          looking for something meaningful to do in-between jobs.
          <br />
          <br /> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </>
  );
}
