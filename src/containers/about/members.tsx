import React from "react";
import Image from "next/image";

export default function contacts() {
  const members = [
    {
      name: "Principal Name",
      position: "Principal",
      number: "98xxxxxxxx",
      email: "example@gmail.com",
      image: "/principal.jpg",
    },
    {
      name: "VicePrincipal Name",
      position: "Vice Principal",
      number: "98xxxxxxxx",
      email: "example@gmail.com",
      image: "/principal.jpg",
    },
    {
      name: "Founder Name",
      position: "Founder",
      number: "98xxxxxxxx",
      email: "example@gmail.com",
      image: "/principal.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-2xl py-6">Our Team</div>
      <div className="flex grow flex-wrap gap-x-50 gap-y-10 justify-center">
        {members.map((item, idx) => (
          <div
            className="relative flex flex-col flex-wrap rounded-lg p-4"
            key={idx}
          >
            <Image
              width={400}
              height={600}
              className="h-92 rounded-xl"
              src={item.image}
              alt={item.name + "image"}
            />
            <div className=" w-full -left-0.5 rounded-lg bg-neutral-100">
              <div
                className="font-semibold text-lg rounded-lg bg-blue-600 p-3 text-white w-full"
                key={item.name}
              >
                {item.name}
              </div>
              <div
                className="px-3 text-blue-600 font-semibold"
                key={item.position}
              >
                {item.position}
              </div>
              <div className="px-3" key={item.number}>
                {item.number}
              </div>
              <div className="px-3" key={item.email}>
                {item.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
