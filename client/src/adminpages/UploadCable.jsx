import React from "react";
import axios from "axios";

export default function UploadCable() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    const formData = new FormData(form);

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
