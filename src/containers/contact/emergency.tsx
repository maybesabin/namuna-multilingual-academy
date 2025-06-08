import React from "react";
import { Phone, Mail } from "lucide-react";

export default function emergency() {
  return (
    <div className="flex w-full justify-center grow mx-auto px-4 bg-red-200 p-6">
      <div className="text-center">
        <h4 className="text-2xl font-bold text-red-800 mb-4">
          Emergency Contact
        </h4>
        <p className="text-red-700 mb-4">
          For school emergencies or urgent matters outside office hours:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-600" />
            <span className="font-bold text-red-800">
              (555) 123-HELP (4357)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-red-600" />
            <span className="font-bold text-red-800">
              emergency@riversideacademy.edu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
