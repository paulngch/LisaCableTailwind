import React from "react";
import { Link as NavLink } from "react-router-dom";
import designData from "../../data/designData";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Formik, Field, Form } from "formik";

export default function RequestForm() {
  return (
    <>
      <form className="space-y-6" action="#" method="POST">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Preference
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be will be used by us to estimate a quote.
              </p>
            </div>
            <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-3 gap-6">
                <fieldset>
                  <legend className="text-lg font-medium text-gray-900">
                    Design
                  </legend>

                  <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200 ">
                    {designData.map((design) => (
                      <div
                        key={design.id}
                        className="relative flex flex-colitems-start py-4"
                      >
                        <div className="min-w-0 flex-1 text-sm">
                          <label
                            htmlFor={`design-${design.id}`}
                            className="select-none font-medium text-gray-700"
                          >
                            {design.type}
                          </label>
                          <p className=" text-sm text-gray-500">
                            Click to enlarge.
                          </p>
                          <Zoom>
                            <img
                              className=" px-2 max-w-[200px]"
                              src={design.imageUrl}
                            />
                          </Zoom>
                        </div>
                        <div className="ml-3 flex pl-2 items-center ">
                          <input
                            id={`design-${design.id}`}
                            name={`design`}
                            type="radio"
                            required="required"
                            className=" h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div>
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Comments
                </label>
                <div className="mt-1">
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description of reason for your choice.
                </p>
              </div>

              <div className="grid grid-cols-8 gap-6">
                <div className="col-span-2 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Host-side USB
                  </label>
                  <select
                    id="host-usb"
                    name="host-usb"
                    required="required"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>USB-A</option>
                    <option>USB-C</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Device-side USB
                  </label>
                  <select
                    id="device-usb"
                    name="device-usb"
                    required="required"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>USB-C</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We will use this information to contact you with a quote/further
                discussions only. No spam!
              </p>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    placeholder="e.g. Lisa"
                    type="text"
                    name="first-name"
                    id="first-name"
                    required="required"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="flex justify-between ">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Discord ID
                    </label>
                    <span className="text-sm text-gray-500" id="email-optional">
                      Optional
                    </span>
                  </div>
                  <input
                    placeholder="e.g. TinyFox#20"
                    type="text"
                    name="discord-name"
                    id="discord-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>

                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required="required"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact number
                  </label>

                  <input
                    type="number"
                    name="contact-number"
                    id="contact-number"
                    required="required"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Singapore</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pr-4">
          <button
            type="button"
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <NavLink to="/">Cancel</NavLink>
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
