import Image from "next/image";
import React from "react";
import { Bodoni_Moda } from "next/font/google";
import hero1 from "@/public/homepage/hero3.jpg";
import hero35 from "@/public/homepage/hero3.5.png";
import hero1_copy from "@/public/homepage/hero3_Copy.jpg";
import hero35_copy from "@/public/homepage/hero3.5_Copy.png";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
});

export default function Hero1() {
  return (
    <div className=" flex justify-center items-center">
      <div className=" relative w-full overflow-hidden ">
        {/* <button className="absolute left-0 bottom-0 bg-[#8FAF9A] text-white py-4 rounded-lg px-20 max-lg:px-[55px] ">
          Contact Us
        </button> */}
        <section className="h-screen">
          <Image
            src={hero1}
            alt="Modern Architecture"
            fill
            priority
            className="object-cover max-lg:hidden"
          />
          <Image
            src={hero35}
            alt="Modern Architecture"
            fill
            priority
            className="object-cover max-lg:hidden z-50"
          />
          <Image
            src={hero1_copy}
            alt="Modern Architecture"
            fill
            priority
            className="object-cover hidden max-lg:block"
          />
          <Image
            src={hero35_copy}
            alt="Modern Architecture"
            fill
            priority
            className="object-cover hidden max-lg:block z-20"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Content */}
          <div className="relative z-10 flex h-screen justify-center items-center">
            <div className=" max-w-5xl flex justify-center items-center flex-col  px-6 md:px-16">
              <h1 className="text-5xl text-center pb-50 font-bold md:text-7xl text-gray-800 font-[Bodoni_Moda]">
                Designing Spaces <br className="block max-lg:hidden" />
                That{" "}
                <span className="italic max-lg:text-3xl text-white">
                  Inspire & Endure
                </span>
              </h1>

              {/* <button className=" absolute bottom-0 left-0 rounded-tr-2xl bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-gray-200">
              Schedule a Free Consultation
            </button> */}
            </div>
          </div>
        </section>
        <div className="absolute backdrop-blur-md z-[50] bg-white/20 py-5 pl-8 pb-5 right-5 bottom-5 rounded-lg">
          <p className="mt-4 max-w-xl  mb-4 text-base md:text-lg">
            We transform visions into timeless architecture, blending innovative
            design with functional excellence.
          </p>
          <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3  transition-all duration-300 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
