import { Link as NavLink } from "react-router-dom";
import React, { useState, Fragment, useRef } from "react";
import { Transition, Dialog } from "@headlessui/react";
import designData from "../../data/designData";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";

const RequestFormSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  email: Yup.string().email("Invalid email").required("Required"),
  contact: Yup.string().required("required"),
});

export default function RequestForm() {
  const CustomInputComponent = (props) => <textarea {...props} />;

  //For Failed Upload
  const [open, setOpen] = useState(false);
  //Cancel button state for closing of "submission success"
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          design: "",
          country: "singapore",
          discord: "",
          comments: "",
          hostUsb: "A",
          deviceUsb: "C",
        }}
        validationSchema={RequestFormSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          try {
            const res = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/api/requestform`,
              values
            );
            resetForm();
            return setOpen(true);
          } catch (error) {
            return console.log(error.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form id="reqForm" className="space-y-6">
            <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Preference
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be used by us to estimate a quote.
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
                              <p className=" text-xs text-gray-500">
                                Click to enlarge.
                                <br />
                                (Illustration purposes only)
                              </p>
                              <Zoom>
                                <img
                                  className=" pr-2 max-w-[200px]"
                                  src={design.imageUrl}
                                />
                              </Zoom>
                            </div>
                            <div className="ml-3 flex pl-2 items-center ">
                              <Field
                                id={`design-${design.id}`}
                                name="design"
                                type="radio"
                                value={`${design.design}`}
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
                      <Field
                        as={CustomInputComponent}
                        id="comments"
                        name="comments"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description of reason for your choice. Please also
                      include connector and cable length if required.
                    </p>
                  </div>

                  <div className="grid grid-cols-8 gap-6">
                    <div className="col-span-4 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Host-side USB
                      </label>
                      <Field
                        as="select"
                        id="hostUsb"
                        name="hostUsb"
                        required="required"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="A">USB-A</option>
                        <option value="C">USB-C</option>
                      </Field>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Device-side USB
                      </label>
                      <Field
                        as="select"
                        id="deviceUsb"
                        name="deviceUsb"
                        required="required"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="C">USB-C</option>
                        <option value="others">Others</option>
                      </Field>
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
                    We will use this information to contact you with a
                    quote/further discussions only. No spam!
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
                      <Field
                        name="name"
                        placeholder="e.g. Lisa"
                        type="text"
                        id="name"
                        required="required"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <div className="flex justify-between ">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Discord ID
                        </label>
                        <span
                          className="text-sm text-gray-500"
                          id="email-optional"
                        >
                          Optional
                        </span>
                      </div>
                      <Field
                        placeholder="e.g. TinyFox#20"
                        type="text"
                        name="discord"
                        id="discord"
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

                      <Field
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        required="required"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="contact"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contact number
                      </label>

                      <Field
                        name="contact"
                        type="number"
                        id="contact"
                        required="required"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.contact && touched.contact ? (
                        <div>{errors.contact}</div>
                      ) : null}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <Field
                        id="country"
                        as="select"
                        name="country"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="singapore">Singapore</option>
                        <option value="international">International</option>
                      </Field>
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
          </Form>
        )}
      </Formik>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckCircleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Success!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Form successfully submitted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Okay
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
