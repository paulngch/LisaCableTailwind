import { useState, useEffect } from "react";
import { useParams, useNavigate, Link as NavLink } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import SubmitSuccess from "../components/forms/SubmitSuccess";

//Format of formData
// {
// id
// name
// email
// feedback
// message
// active
// status
// adminComments
// archive
//}
export default function ContactIds() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const CustomInputComponent = (props) => {
    const childProps = { ...props };
    delete childProps.value;
    return <textarea {...childProps} />;
  };
  const { id } = useParams();
  const [formData, setFormData] = useState({});
  const [activeState, setActiveState] = useState();
  //==================
  //Fetching contactForm with _id = id
  const fetchContactForm = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/contactform/${id}`
      );
      console.log(response.data);
      // console.log(response.data.active)
      setActiveState(response.data.active);
      setFormData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchContactForm();
  }, [open,activeState]);

  return (
    <>
      <Formik
        initialValues={{
          active: activeState,
          adminComments: formData.adminComments,
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            console.log(values);
            const res = await axios.put(
              `${import.meta.env.VITE_BASE_URL}/api/contactform/${id}`,
              values
            );

            setOpen(true);
            console.log("PUT SUCCESS");

            // const res = await axios.post(
            //   `${import.meta.env.VITE_BASE_URL}/api/requestform`,
            //   values
            // );
            // resetForm();
            // return setOpen(true);
          } catch (error) {
            return console.log(error.message);
          }
        }}
      >
        <div className="p-10">
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Contact Form
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  {`ID: ${formData._id}`}
                </p>

                <div className=" ml-4 mt-4 inline-flex items-center rounded border border-transparent bg-red-100 px-2.5 py-1.5 text-xs font-medium text-black-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {formData.feedback}
                </div>
                {formData.active ? (
                  <div className=" ml-4 mt-4 inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Active
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Requestor Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Person who sent the request/feedback.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    {/* <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div> */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          defaultValue={formData.name}
                          disabled
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div> */}

                  <div className="sm:col-span-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={formData.email}
                          disabled
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    disabled
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 sm:text-sm"
                    defaultValue={formData.message}
                  />
                </div>
              </div>

              <div className="pt-8">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Admin Comments
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Commentary or updates.
                  </p>
                </div>

                <label className="block text-sm font-medium text-orange-700">
                  <>
                    Active
                    <Field type="checkbox" name="active" className="m-6" />
                  </>
                </label>

                <div className="mt-6">
                  <div className="sm:col-span-6 mt-4">
                    <label
                      htmlFor="adminComments"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comments
                    </label>
                    <div className="mt-1">
                      <Field
                        as={CustomInputComponent}
                        id="adminComments"
                        name="adminComments"
                        rows={3}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={formData.adminComments}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <a
                  href={`/admin/contact/${formData._id}`}
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Refresh
                </a>
                <NavLink
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  to={`/admin/contact/`}
                >
                  Back
                </NavLink>
                {/* <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button> */}
                <button
                  href={`${import.meta.env.VITE_BASE_URL}/api/contactform`}
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
      <SubmitSuccess open={open} setOpen={setOpen} />
    </>
  );
}
