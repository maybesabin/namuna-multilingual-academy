import React from "react";
import Image from "next/image";
import image from "../../../public/hero-image.jpg";

export default function contact({ text }: { text: string }) {
  return (
    <div className="relative text-white w-full">
      <Image
        height={600}
        width={600}
        className="w-full h-[30svh] object-cover brightness-40"
        src={image}
        alt="Namuna Multilingual Academy"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 text-center">
        <h2 className="sm:text-4xl text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="md:text-sm text-xs lg:max-w-xl">{text}</p>
      </div>
    </div>
  );
}
