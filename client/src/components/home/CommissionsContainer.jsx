import { useState, useRef, useEffect, forwardRef } from "react";
import Carousel from "./Carousel";

export default function CommissionsContainer() {
  const ref = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div class="flex">
      <button onClick={prev}>Prev</button>
      <Carousel ref={ref} />
      <button onClick={next}>Next</button>
    </div>
  );
}
