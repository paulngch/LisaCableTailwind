import React, { useState, useEffect } from "react";
import axios from "axios";

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

  // const dbCables = albumPictures.map((ele, i) => (
  //   <>
  //     <div>{ele.desc}</div>
  //     <img src={ele.url} />
  //   </>
  // ));
  // const products = [
  //   {
  //     id: 1,
  //     name: "Nomad Pouch",
  //     href: "#",
  //     price: "$50",
  //     availability: "White and Black",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg",
  //     imageAlt:
  //       "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  //   },
  //   {
  //     id: 2,
  //     name: "Zip Tote Basket",
  //     href: "#",
  //     price: "$140",
  //     availability: "Washed Black",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg",
  //     imageAlt:
  //       "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
  //   },
  //   {
  //     id: 3,
  //     name: "Medium Stuff Satchel",
  //     href: "#",
  //     price: "$220",
  //     availability: "Blue",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg",
  //     imageAlt:
  //       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  //   },
  //   // More products...
  // ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2
          id="category-heading"
          className="text-2xl font-bold tracking-tight text-gray-900 my-10"
        >
          Commissions
        </h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {albumPictures.map((cable, index) => (
            <div
              key={index}
              className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={cable.url}
                  alt={cable.desc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a>
                    {/* href={product.href} */}
                    <span aria-hidden="true" className="absolute inset-0" />
                    {cable.desc}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  {/* <p className="sr-only">{product.rating} out of 5 stars</p> */}
                  {/* <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      
                    ))}
                  </div> */}
                  {/* <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p> */}
                </div>
                {/* <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
