import React from "react";

export default function FeaturedItem({ details }) {
  const { type, imageUrl } = details;
  return (
    <>
      {/* <div class="flex basis-[100px] flex-shrink-0 flex-grow-0 h-full">
        <div>{headline}</div>
        <img class="" src={imageUrl} />
        <div class="">{description}</div>
      </div> */}

      <a
        href="#"
        class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
      >
        <span aria-hidden="true" class="absolute inset-0">
          <img
            src={imageUrl}
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </span>
        <span
          aria-hidden="true"
          class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
        ></span>
        <span class="relative mt-auto text-center text-xl font-bold text-white">
          {type}
        </span>
      </a>
    </>
  );
}
