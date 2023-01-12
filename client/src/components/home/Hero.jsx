import React from "react";

export default function Hero() {
  return (
    <>
      <div class="w-full bg-gray-800">
        <section
          aria-labelledby="social-impact-heading"
          class="mx-auto my-auto max-w-7xl px-9"
        >
          <div class="relative overflow-hidden rounded-lg ">
            <div class="absolute inset-0">
              <img
                src="/connector.jpg"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="relative  bg-gray-900 bg-opacity-25 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span class="block sm:inline">New commissions</span>
                  {/* <span class="block sm:inline"></span> */}
                </h2>
                <p class="mt-3 text-xl text-white">
                  Completed commissions have, well, been completed. Check out the commissions from previous limited batches.
                </p>
                <a
                  href="#"
                  class="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  See Album
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
