import React from "react";
import Hero from "@/containers/contact/hero";
import Form from "@/containers/contact/form";
import Contactus from "@/containers/contact/contactus";
import Emergency from "@/containers/contact/emergency";

export default function Page() {
  return (
    <div className="flex flex-col flex-wrap grow gap-y-10">
      <Hero />
      <div className="flex justify-center">
        <div className="flex flex-wrap sm:container ">
          <Form />
          <Contactus />
        </div>
      </div>
      <Emergency />
    </div>
  );
}
