import React from "react";
import Featured from "../components/home/Featured";

import SpecsContainer from "../components/home/SpecsContainer";

export default function Home() {
  return (
    <>
      <div className="homeContainer" class="flex flex-col items-center">
        <div class="bg-red-300">TOP CAROUSEL</div>
        {/* <div class="bg-slate-300 flex flex-col items-center">
          commissionscontainer<div>COMMISSIONS</div>
          <div>Some of our previous works</div>
          <div>ALBUM CAROUSEL</div>
          <button class="bg-pink-600">VIEW ALL</button>
        </div> */}
        <Featured/>
        <SpecsContainer/>
      </div>
    </>
  );
}
