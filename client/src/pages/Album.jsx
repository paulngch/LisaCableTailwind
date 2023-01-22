import React, { useState, useEffect } from "react";
import axios from "axios";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Album() {
  const [albumPictures, setAlbumPictures] = useState([]);
  const [error, setError] = useState("");

  const fetchAlbum = async () => {
    try {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/cable`
      );
      if (response) {
        setAlbumPictures(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Commissions</h2>
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900 my-10"
        >
          Commissions
        </h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {albumPictures.map((cable, index) => (
            <div
              key={`${index}-${cable.desc}`}
              className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <Zoom>
                  <img
                    src={cable.url}
                    alt={cable.desc}
                    className="h-full w-full object-cover object-center pointer-events-auto"
                  />
                </Zoom>
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a>
                    {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                    {cable.desc}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
