import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="py-14 px-8 max-lg:px-4 pt-24 flex justify-center items-center">
      <div className=" relative w-full max-w-7xl rounded-2xl overflow-hidden ">
        <button className="absolute left-0 bottom-0 bg-[#8FAF9A] text-white py-4 rounded-lg px-20 max-lg:px-[55px] ">
          Contact Us
        </button>
        <section
          className="
        [clip-path:path('M_0,0_L_1280,0_L_1280,450_A_10,10_0,0,1_1270,460_L_250,460_A_10,10_0,0,1_240,450_L_240,410_A_10,10_0,0,0_230,400_L_10,400_A_10,10_0,0,1_0,390_Z')]
        max-lg:[clip-path:path('M_0,0_L_1280,0_L_1280,450_A_10,10_0,0,1_1270,460_L_200,460_A_10,10_0,0,1_193,450_L_193,410_A-10,10_0,0,0_183,400_L_10,400_A_10,10_0,0,1_0,390_Z')]"
        >
          <Image
            src="https://media.designcafe.com/wp-content/uploads/2021/07/12180311/interior-designers-hyderabad.jpg"
            alt="Modern Architecture"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 flex h-[460px] items-center">
            <div className=" max-w-3xl px-6 md:px-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Designing Spaces <br />
                That Inspire & Endure
              </h1>

              <p className="mt-4 max-w-xl text-gray-200 text-base md:text-lg">
                We transform visions into timeless architecture, blending
                innovative design with functional excellence.
              </p>

              {/* <button className=" absolute bottom-0 left-0 rounded-tr-2xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
              Schedule a Free Consultation
            </button> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
