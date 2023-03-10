import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { UserAuth } from "../../context/AuthContext";

const materials = [
  {
    name: "Sleeving",
    href: "#",
  },
  {
    name: "Connector",
    href: "#",
  },
  {
    name: "TechFlex",
    href: "#",
  },
  {
    name: "Heat-Shrink",
    href: "#",
  },
];
const callsToAction = [
  { name: "Contact Us", href: "/pages/contact", icon: ChatBubbleBottomCenterIcon },
];
const info = [
  {
    name: "Charity",
    description: "Find out what we have been up to recently.",
    href: "/pages/charity",
  },
  {
    name: "Contact Us",
    description: "Reach out for more questions/feedback.",
    href: "/pages/contact",
  },
  {
    name: "About Us",
    description: "Know our story and how we came to be.",
    href: "/pages/about",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarTwo() {
  const [user, setUser] = UserAuth();

  const handleLogout = () => {
    // setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    setUser({
      data: null,
      error: null,
      loading: false,
    });
    navigate("/");
  };

  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Lisa Works</span>
                {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="/LisaWorksLogo.png"
                  alt=""
                /> */}
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <a
                href="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>

             

              <a
                href="/pages/album"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Album
              </a>
              <a
                href="/pages/request"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Requests
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      )}
                    >
                      <span>Info</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {info.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                               
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>

            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              {!user.data && (
                <a
                  href="/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
              )}
              {user.data && (
                <a
                  onClick={handleLogout}
                  href="/"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign Out
                </a>
              )}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="/LisaWorksLogo.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="/pages/album"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Album
                  </a>

                  <a
                    href="/pages/request"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Requests
                  </a>
                  {info.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <a
                      href="/login"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
