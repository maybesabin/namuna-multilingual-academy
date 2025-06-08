import React from "react";

export default function form() {
  return (
    <div>
      <div className="flex justify-center grow flex-wrap">
        <div>
          <h3 className="text-3xl font-bold text-blue-900 my-6">
            Send Us a Message
          </h3>
          <div className="border rounded-lg text-blue-900 border-blue-200 p-2">
            <form>
              <div className="flex grow flex-wrap">
                <div className="flex flex-col m-2">
                  <label htmlFor="name" className="px-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col m-2">
                  <label htmlFor="Email" className="px-2">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex grow flex-wrap">
                <div className="flex flex-col m-2 ">
                  <label htmlFor="phone" className="px-2">
                    Phone Number{" "}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                  />
                </div>
                <div className="flex flex-col m-2 flex-wrap grow">
                  <label htmlFor="inquiry" className="px-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    className="border border-blue-200 p-2 m-1 rounded-lg"
                  >
                    <option value="admission">Admission</option>
                    <option value="academics">Academic</option>
                    <option value="enrollment">Current Student/parent</option>
                    <option value="employment">Employment</option>
                    <option value="general">General Information</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="px-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                />
                <label htmlFor="Message" className="px-2">
                  Message *
                </label>
                <input
                  type="text"
                  id="Message"
                  required
                  placeholder="Please provide details about your inquiry.."
                  className="border h-50 focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1  outline-none"
                />
              </div>
            </form>
          </div>
        </div>
        <div>Contact Information</div>
      </div>
    </div>
  );
}
