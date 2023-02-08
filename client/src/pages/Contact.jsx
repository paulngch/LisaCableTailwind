import { useState, Fragment, useRef } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import SubmitSuccess from "../components/forms/SubmitSuccess";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const publishingOptions = [
  { title: "Request", description: "For custom cable requests", current: true },
  { title: "Feedback", description: "For general feedbacks", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

export default function Contact() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  const [open, setOpen] = useState(false); //This is for success MSG
  const [openError, setOpenError] = useState(false); //This is for ERROR MSG
  const cancelButtonRef = useRef(null);
  //================CHANGE EMAIL HERE=================
  const contactUsEmail = "TinyLisa@pm.me";
  //==================================================
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState(publishingOptions[0].title);

  const CustomInputComponent = (props) => <textarea {...props} />;

  const handleSubmit = (event) => {
    event.preventDefault();
    const msgSubject = selected.title;
    const msgMessage = message;
    document.location = `mailto:${contactUsEmail}?subject=${msgSubject}&body=${msgMessage}`;
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={async (values, { resetForm }) => {
          // console.log(values);
          const updatedValues = { ...values, feedback: feedbackType };
          // console.log("UPDATED VALs", updatedValues);
          //===========================================
          //TRY CATCH for Axios to post to mongoDB
          //============
          try {
            const res = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/api/contactform`,
              // "https://dead-teal-pike-gear.cyclic.app/api/contactform",
              updatedValues
            );
            resetForm();
            console.log(res);
            return setOpen(true); //open Submit-success Msg
          } catch (error) {
            console.log(error.message);
            return setOpenError(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <div className="relative bg-white">
            <div className="absolute inset-0">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
            </div>
            <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
              <div className="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div className="mx-auto max-w-lg">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Get in touch
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-500">
                    Send your feedback, or send your custom requests.
                    <br />
                    Either way,we'd love to hear more from you.
                  </p>
                  <div className="mt-8 text-base text-gray-500">
                    <div>
                      <div className="sr-only">Postal address</div>
                      <div>
                        <p>79 Anson Road</p>
                        <p>Singapore, 079906</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="sr-only">Phone number</div>
                      {/* <div className="flex">
                        <PhoneIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">+65 235-3535</span>
                      </div> */}
                    </div>
                    <div className="mt-3">
                      <div className="sr-only">Email</div>
                      <div className="flex">
                        <EnvelopeIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                          onClick={(e) => handleSubmit(e)}
                        />
                        <span className="ml-3" onClick={(e) => handleSubmit(e)}>
                          {contactUsEmail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div className="mx-auto max-w-lg lg:max-w-none">
                  <Form id="contactForm" className="grid grid-cols-1 gap-y-6">
                    <div>
                      <label htmlFor="full-name" className="sr-only">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Name"
                        required="required"
                      />
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Email"
                        required="required"
                      />
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                    </div>

                    <Listbox value={selected} onChange={setSelected}>
                      {({ open }) => (
                        <>
                          <Listbox.Label className="sr-only">
                            Change published status
                          </Listbox.Label>
                          <div className="relative">
                            <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                              <div className="inline-flex divide-x divide-indigo-600 rounded-md shadow-sm">
                                <div className="inline-flex items-center rounded-l-md border border-transparent bg-indigo-500 py-2 pl-3 pr-4 text-white shadow-sm">
                                  <p className="ml-2.5 text-sm font-medium">
                                    {selected.title}
                                  </p>
                                </div>
                                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-500 p-2 text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                                  <span className="sr-only">
                                    Change published status
                                  </span>
                                  <ChevronDownIcon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                </Listbox.Button>
                              </div>
                            </div>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {publishingOptions.map((option) => (
                                  <Listbox.Option
                                    key={option.title}
                                    onClick={() =>
                                      setFeedbackType(option.title)
                                    }
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-500"
                                          : "text-gray-900",
                                        "cursor-default select-none p-4 text-sm"
                                      )
                                    }
                                    value={option}
                                  >
                                    {({ selected, active }) => (
                                      <div className="flex flex-col">
                                        <div className="flex justify-between">
                                          <p
                                            className={
                                              selected
                                                ? "font-semibold"
                                                : "font-normal"
                                            }
                                          >
                                            {option.title}
                                          </p>
                                          {selected ? (
                                            <span
                                              className={
                                                active
                                                  ? "text-white"
                                                  : "text-indigo-500"
                                              }
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </div>
                                        <p
                                          className={classNames(
                                            active
                                              ? "text-indigo-200"
                                              : "text-gray-500",
                                            "mt-2"
                                          )}
                                        >
                                          {option.description}
                                        </p>
                                      </div>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>

                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <Field
                        as={CustomInputComponent}
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Message"
                        required="required"
                      />
                      {errors.message && touched.message ? (
                        <div>{errors.message}</div>
                      ) : null}
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Submit
                      </button>
                      <br />
                      <br />
                      <br />
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <SubmitSuccess open={open} setOpen={setOpen} />
      <Transition.Root show={openError} as={Fragment}>
        <Dialog
          E
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenError}
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
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Upload Failed
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Try again.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpenError(false)}
                      ref={cancelButtonRef}
                    >
                      Close
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
