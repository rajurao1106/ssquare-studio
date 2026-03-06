import Image from "next/image";
import React from "react";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bodoni",
});

export default function Hero() {
  return (
    <div className=" flex justify-center items-center">
      <div className=" relative w-full overflow-hidden ">
        {/* <button className="absolute left-0 bottom-0 bg-[#8FAF9A] text-white py-4 rounded-lg px-20 max-lg:px-[55px] ">
          Contact Us
        </button> */}
        <section className="h-screen">
          <Image
            src="https://media.designcafe.com/wp-content/uploads/2021/07/12180311/interior-designers-hyderabad.jpg"
            alt="Modern Architecture"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 flex h-screen justify-center items-center">
            <div className=" max-w-4xl flex justify-center items-center flex-col text-center px-6 md:px-16">
              <h1 className="text-4xl  md:text-7xl font-[Bodoni_Moda] text-white leading-tight">
                Designing Spaces <br/>
                That <span className="italic text-[#E3C77A]">Inspire & Endure</span>
              </h1>

              <p className="mt-4 max-w-xl  text-white text-base md:text-lg">
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
