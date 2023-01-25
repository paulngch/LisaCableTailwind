import React, { useState, useEffect } from "react";
import mockData from "../../data/mockData";
import FeaturedItem from "./FeaturedItem";
import { Link as NavLink } from "react-router-dom";

export default function Featured() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (
    <section
      aria-labelledby="category-heading"
      className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
    >
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Commissions
        </h2>
        <button
          // href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          <NavLink to="/pages/album">View all</NavLink>
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {data.map((item, index) => (
                <FeaturedItem key={index} details={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
