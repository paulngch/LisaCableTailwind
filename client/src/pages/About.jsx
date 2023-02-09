import React from "react";

export default function About() {
  return (
    <>
      <div className=" aboutHeader flex  h-44 items-center">
        <div>
          <img
            className="h-44 ml-40 hidden lg:block "
            src="/feathertippenlogo.png"
          />
        </div>

        <div className="text-4xl p-2 m-2 ml-24">Our Story</div>
        <div className="text-4xl hidden lg:block">|</div>
        <div className="text-4xl m-2 p-2 hidden lg:block">LisaWorks</div>
      </div>
      <div className="flex justify-center">
        <p className="storyContainer flex w-2/3 m-2 p-2 pt-6 text-lg">
          Hi, my name is Paul and my story began back in August 2022 when I was
          looking for something meaningful to do in-between jobs.
          <br />
          <br /> I love crafting stuff and DIY. And I love mechanical
          keyboards. So I came to a not-so-eureka moment of combining both, and
          why not do some good at the same time! And thus, LisaWorks was born!
        </p>
      </div>
    </>
  );
}
