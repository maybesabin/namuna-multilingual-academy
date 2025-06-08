"use client";
import React, { useState } from "react";

export default function form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
  }

  return (
    <div className="flex justify-center grow flex-wrap">
      <div>
        <div>
          <h3 className="text-3xl font-bold text-blue-900 my-6">
            Send Us a Message
          </h3>
          <div className="border rounded-lg text-blue-900 border-blue-200 p-2">
            <form onSubmit={handleSubmit}>
              <div className="flex grow flex-wrap">
                <div className="flex flex-col m-2 grow">
                  <label htmlFor="name" className="px-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col m-2 grow">
                  <label htmlFor="Email" className="px-2 ">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    id="Email"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex grow flex-wrap">
                <div className="flex flex-col m-2">
                  <label htmlFor="phone" className="px-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col m-2 grow">
                  <label htmlFor="inquiry" className="px-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    className="border w-full border-blue-200 p-2 m-1 rounded-lg"
                  >
                    <option value="admission">Admission</option>
                    <option value="academics">Academic</option>
                    <option value="enrollment">Current Student/parent</option>
                    <option value="employment">Employment</option>
                    <option value="general">General Information</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col m-2">
                <label htmlFor="subject" className="px-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="border focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 outline-none"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label htmlFor="Message" className="px-2">
                  Message *
                </label>
                <textarea
                  id="Message"
                  required
                  placeholder="Please provide details about your inquiry.."
                  className="border h-50 focus:border-blue-500 rounded-lg p-2 border-blue-200 m-1 align-top outline-none"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <input
                type="submit"
                value="Send Message"
                className="w-full flex justify-center items-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg mx-1 my-3 outline-none cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
