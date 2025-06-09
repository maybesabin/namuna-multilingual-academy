import React from "react";
import Image from "next/image";
import image from "../../../public/hero-image.jpg";

export default function about() {
  return (
    <div className="flex relative w-full flex-col items-center">
      <Image
        className="w-full h-[30svh] object-cover brightness-50"
        src={image}
        alt="Namuna Multilingual Academy"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex text-center text-white font-bold text-4xl">
        ABOUT US
      </div>
    </div>
  );
}
