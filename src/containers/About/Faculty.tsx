import React from "react";
import Image from "next/image";

export default function Faculty() {
  const administrator = [
    {
      position: "Principal",
      name: "Principal Name",
      experience: "Ed.D in Education Leadership, 20+ years in experience",
      img: "/profile",
    },
    {
      position: "Vice Principal",
      name: "Vice Principal Name",
      experience: "Ed.D in Education Leadership, 20+ years in experience",
      img: "/profile",
    },
    {
      position: "Founder",
      name: "Founder Name",
      experience: "Ed.D in Education Leadership, 20+ years in experience",
      img: "/profile",
    },
  ];

  return (
    <div className="w-full text-center bg-blue-100 p-2 py-10">
      <div className="container flex flex-col gap-y-10 mx-auto px-4 sm:w-full">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl text-blue-900">Meet Out Faculty</p>
          <p className="p-2">
            Founded in XXXX, Namuna Mulitlingual Academy has been a comerstone
            of educational excellence in our community for nearly four decades.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 gap-y-7">
          {administrator.map((member) => (
            <div
              className="flex flex-col gap-y-5 items-center text-center grow border border-blue-300 rounded-lg p-10 bg-white"
              key={member.name}
            >
              <Image
                src={member.img}
                alt={member.name + "image"}
                width={600}
                height={600}
                className="bg-neutral-300 size-30 rounded-full"
              ></Image>
              <div>
                <div className="text-2xl font-semibold text-blue-900">
                  {member.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {member.position}
                </div>
              </div>
              <div className="text-neutral-600">{member.experience}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
