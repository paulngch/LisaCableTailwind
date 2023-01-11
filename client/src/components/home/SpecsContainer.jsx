import React from "react";
import { Link as NavLink } from "react-router-dom";

export default function SpecsContainer() {
  return (
    <div
      className="specsContainer"
      class="bg-neutral-500 flex flex-col items-center"
    >
      specificationscontainer
      <div class=" flex justify-center max-w-3xl items-center">
        <img class="w-1/2" src="/pixellab-connector.png" />
        <div class="max-w-1/2 flex items-center p-2 bg-orange-500">
          Sourcing only the best.
          <br />A mix of USA-made 550 paracord, plated push-pull connectors and
          genuine TechFlexo® sleeves.
        </div>
      </div>
      <div class=" flex justify-center max-w-3xl mt-10 mb-28 items-center">
        <img class="w-1/2" src="/pixellab-heatshrink.png" />
        <div class="max-w-1/2 flex items-center p-2 bg-orange-500">
          Meticulously Terminated.
          <br />
          Host-Device connectors protected with genuine TechFlex® 3:1
          heatshrinks.
        </div>
      </div>
      <div class="flex justify-center max-w-3xl">
        <img class="w-1/2" src="/pixellab-braided.png" />
        <div class="max-w-1/2 flex items-center p-2 bg-orange-500">
          Four-strand hand braided.
          <br />
          Each cable is individually sleeved before braiding to ensure nothing
          is compromised functionally and aesthetically.
        </div>
        <div></div>
      </div>
      <button class="mt-16 bg-pink-600 w-36"><NavLink to="/request">Request a quote</NavLink></button>
    </div>
  );
}
