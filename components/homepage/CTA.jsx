import React from "react";
import cta from "@/public/cta.png";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 border-b border-gray-100">
      <div className="flex flex-col lg:flex-row  rounded-3xl bg-[#f7f6f7] max-lg:py-10 items-center justify-between gap-12">
        <div className="max-w-md space-y-6 pl-10">
          <h2 className="text-3xl font-bold  text-gray-900 leading-tight">
            Stay inspired with our weekly updates
          </h2>
          {/* The Green Button Style from the image */}
          <button className="bg-[#8FAF9A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#a6b391] transition-colors">
            Explore More
          </button>
        </div>

        {/* Image Grid Representation */}
        <div className="w-[40rem] max-lg:w-[20rem] h-[18rem] max-lg:h-[10rem] ">
          <Image src={cta} alt="Interior" className="" />
        </div>
      </div>
    </div>
  );
}
