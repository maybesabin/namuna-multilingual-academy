import React from "react";
import Image from "next/image";
import image from "../../../public/hero-image.jpg";

export default function contact() {
  return (
    <div className="relative text-white">
      <Image
        className="w-full h-[30svh] object-cover brightness-40"
        src={image}
        alt="Namuna Multilingual Academy"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          We're here to answer your questions and help you learn more about Us.
          Reach out to us anytime!
        </p>
      </div>
    </div>
  );
}
