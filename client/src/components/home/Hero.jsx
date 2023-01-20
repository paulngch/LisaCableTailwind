import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="w-full bg-gray-800">
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto my-auto max-w-7xl px-9"
        >
          <div className="relative overflow-hidden rounded-lg ">
            <div className="absolute inset-0">
              <img
                src="/connector.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative  bg-gray-900 bg-opacity-25 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block sm:inline">New commissions</span>
                  {/* <span className="block sm:inline"></span> */}
                </h2>
                <p className="mt-3 text-xl text-white">
                  Completed commissions have, well, been completed. Check out
                  the commissions from previous limited batches.
                </p>
                <div
                  href="#"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  <NavLink to="/album">See Album</NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
