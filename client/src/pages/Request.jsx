import React from "react";
import RequestForm from "../components/request/RequestForm";

export default function Request() {
  return (
    <div class="flex flex-col justify-center items-center pt-5">
      <div class=" text-4xl py-5 my-2">Request Form</div>
      <div>
        <RequestForm />
      </div>
    </div>
  );
}
