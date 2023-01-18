import React from "react";
import axios from "axios";

export default function UploadCable() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);

    // console.log([...formData]);
    // console.log(`${import.meta.env.VITE_BASE_URL}`);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/cable`,
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="formContainer m-10 p-10">
      <form
        // action={`${import.meta.env.VITE_BASE_URL}`}
        // method="POST"
        encType="multipart/form-data"
        className="space-y-8 divide-y divide-gray-200"
        id="form"
        onSubmit={handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h1 className="text-2xl pb-10 font-medium leading-6 text-gray-900">
                Album Cable Upload
              </h1>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Upload a Cable
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                For uploading of cables or any other image assets to S3 bucket
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                    placeholder="e.g. Single-color, braided, brown, USB A-C"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Write a few descriptive tags.
                </p>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="cable-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cable photo
                </label>
                <div className="mt-1 flex flex-col justify-start rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div>
                    <label htmlFor="photo"> Select photo:</label>
                  </div>
                  <div>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      id="image"
                    />
                  </div>
                  {/* <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="reset"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
