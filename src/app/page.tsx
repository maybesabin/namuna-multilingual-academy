"use client"

import AboutUs from "@/containers/AboutUs";
import Hero from "@/containers/Hero";
import Notice from "@/containers/Notice";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start xl:gap-40 lg:gap-32 md:gap-24 gap-12">
      <Hero />
      <AboutUs />
      <Notice />
    </div >
  );
}
