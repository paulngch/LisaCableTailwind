import React from "react";
import { Formik, Field, Form } from "formik";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
            //   alert(JSON.stringify(values, null, 2));
            alert("Fields Submitted")
            }
        }
          >
            <Form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label for="email-address" className="sr-only">
                    Email address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="Email address"
                    type="email"
                    className="relative block w-full appearance-none rounded-none
                  rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                  placeholder-gray-500 focus:z-10 focus:border-indigo-500
                  focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label for="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    //   xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  Sign in
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
