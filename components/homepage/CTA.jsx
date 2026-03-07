import React from "react";
import cta2 from "@/public/homepage/cta4.jpg";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full ">
      {/* Background Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full relative">
        {/* Overlay - Moved inside the grid to cover everything */}
        <div className="bg-black/40 absolute inset-0 z-10" />

        {/* Image 1: Hidden on mobile, or you can keep both stacked */}
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Interior design 1"
          />
        </div>

        {/* Image 2 */}
        <div className="relative h-full w-full">
          <Image
            width={1000}
            height={1000}
            priority
            src={cta2}
            className="w-full h-full object-cover"
            alt="Interior design 2"
          />
        </div>

        {/* Floating Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold max-lg:font-extrabold mb-4 text-white font-[Bodoni_Moda] max-w-4xl leading-tight">
            Stay inspired with our <br className="hidden md:block" /> weekly
            updates
          </h1>
          <p className="mb-4 max-w-xl text-white max-lg:text-sm">
            Discover fresh ideas, design trends, and expert tips every week to
            keep your creativity flowing and your projects inspired.
          </p>
          <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 max-lg:px-4 py-4 max-lg:py-3 transition-all duration-300 shadow-xl text-sm md:text-base font-medium uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
