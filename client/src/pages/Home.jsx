import React from "react";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";

import SpecsContainer from "../components/home/SpecsContainer";
import FooterBanner from "../components/layout/FooterBanner";

export default function Home() {
  return (
    <>
      <div className="homeContainer flex flex-col items-center">
        <Hero />
        <Featured />
        <SpecsContainer />
        <FooterBanner />
      </div>
    </>
  );
}
