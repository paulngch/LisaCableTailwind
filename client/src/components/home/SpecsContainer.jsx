import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function SpecsContainer() {
  return (
    <div  className="specsContainer flex flex-col items-center pt-10">
      <div className=" flex justify-center max-w-3xl items-center">
        <img className="w-1/2 pr-2" src="/pixellab-connector.png" />
        <div className="rounded-xl max-w-1/2 flex items-center p-2 bg-gray-300">
          Sourcing only the best.
          <br />A mix of USA-made 550 paracord, plated push-pull connectors and
          genuine TechFlexo® sleeves.
        </div>
      </div>
      <div className=" flex justify-center max-w-3xl mt-10 mb-28 items-center">
        <img className="w-1/2 pr-2" src="/pixellab-heatshrink.png" />
        <div className=" rounded-xl  max-w-1/2 flex items-center p-2 bg-gray-300">
          Meticulously Terminated.
          <br />
          Host-Device connectors protected with genuine TechFlex® 3:1
          heatshrinks.
        </div>
      </div>
      <div className="flex justify-center max-w-3xl">
        <img className="w-1/2 pr-2" src="/pixellab-braided.png" />
        <div className="rounded-xl max-w-1/2 flex items-center p-2 bg-gray-300">
          Four-strand hand braided.
          <br />
          Each cable is individually sleeved before braiding to ensure nothing
          is compromised functionally and aesthetically.
        </div>
        <div></div>
      </div>
      <button className="mt-10 inline-flex items-center rounded border border-transparent bg-gray-500 px-2.5 py-1.5 text-xs font-medium text-black-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <NavLink to="/pages/request">Request a quote</NavLink>
      </button>
    </div>
  );
}
