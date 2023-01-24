import React from "react";
import RequestForm from "../components/forms/RequestForm";

export default function Request() {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <div className=" text-4xl py-5 my-2">Request Form</div>
      <div>
        <RequestForm />
      </div>
    </div>
  );
}
