import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function contactus() {
  return (
    <div className="flex flex-col grow flex-wrap mx-3">
      <h3 className="text-3xl font-bold text-blue-900 my-5">
        Contact Information
      </h3>
      <div className="border border-blue-200 m-2 mx-2 w-full rounded-lg p-3">
        <div className="flex text-blue-900 m-3">
          <MapPin />
          <p className="mx-2 font-semibold text-xl">Main Campus</p>
        </div>
        <div className="flex text-blue-900 m-3">
          <MapPin />
          <div className="flex flex-col mx-2 text-blue-900">
            <p>Address</p>
            <p className="text-neutral-500">address,address</p>
          </div>
        </div>
        <div className="flex text-blue-900 m-3">
          <Phone />
          <div className="flex flex-col mx-2 text-blue-900">
            <p>Phone </p>
            <p className="text-neutral-500">(977)xxx-xxxx</p>
          </div>
        </div>

        <div className="flex text-blue-900 m-3">
          <Mail />
          <div className="flex flex-col mx-2 text-blue-900">
            <p>Email </p>
            <p className="text-neutral-500">example@gmail.com</p>
          </div>
        </div>
        <div className="flex text-blue-900 m-3">
          <Clock />
          <div className="flex flex-col mx-2 text-blue-900">
            <p>Office Hours </p>
            <p className="text-neutral-500">Sunday-Friday: 7:30AM - 4:00PM</p>
            <p className="text-neutral-500">Saturday: Closed</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-400 w-full grow mx-2 rounded-lg p-3 flex justify-center items-center h-44">
        Interactive map
      </div>
    </div>
  );
}
