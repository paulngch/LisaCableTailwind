import { useState, useEffect } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import axios from "axios";

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const tempContact = [
  {
    _id: "63cf6f98d478e5a001a6971c",
    name: "Ellie",
    email: "ellie@gmail.com",
    feedback: "Request",
    message: "Hello this a request for sky-blue cable",
  },
];

export default function AdminContact() {
  const [contactList, setContactList] = useState([]);
  const fetchContactList = async () => {
    try {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/contactform`
      );
      if (response) {
        setContactList(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchContactList();
  }, []);

  return (
    <>
      <div className="bg-slate-400 p-6">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {contactList.map((contact) => (
            <li
              key={contact._id}
              className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
            >
              <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {contact.name}
                    </h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {contact.feedback}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {contact.message}
                  </p>
                </div>
                {/* <img
                  className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={person.imageUrl}
                  alt=""
                /> */}
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${contact.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">Email</span>
                    </a>
                  </div>
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      // href={`tel:${person.telephone}`}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <PhoneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">ARCHIVE</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
