"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    step: "1",
    title: "Residential Interior Solutions",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200", 
  },
  {
    step: "2",
    title: "Commercial & Office Interiors",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
  {
    step: "03",
    title: "Interior Design & 3D Visualization",
    desc: "Not sure where to start? Our experts provide professional guidance to kickstart your renovation journey.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
];

const ServiceCard = ({ service, index, progress, range, targetScale, isMobile }) => {
  // Mobile par bhi scaling effect subtle rakha hai
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    /* 1. 'sticky' aur 'top-0' ko hamesha rakha hai taaki mobile par bhi effect dikhe.
       2. 'h-screen' ensures ki card viewport ke saath move kare.
    */
    <div className="w-full flex items-start justify-center h-screen sticky top-0 px-4 md:px-0">
      <motion.div
        style={{
          scale,
          // Mobile par 'top' margin thoda kam rakha hai (20px vs 35px)
          top: `calc(10% + ${index * (isMobile ? 20 : 35)}px)`,
        }}
        className="relative w-full max-w-6xl bg-white  shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] md:min-h-[550px] border border-gray-100"
      >
        {/* Right Section (Image): Mobile par pehle dikhane ke liye order-1 */}
        <div className="flex-1 relative h-48 md:h-auto overflow-hidden order-1 md:order-2">
          <img
            src={service.image}
            alt={service.title}
            className="absolute max-lg:relative inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Left Section (Text Content): Mobile par baad mein order-2 */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-start order-2 md:order-1">
          <span className="text-5xl md:text-8xl font-light text-[#E3C77A] mb-2">
            {service.step}
          </span>
          
          <h3 className="text-xl font-[Bodoni_Moda]  md:text-4xl font-semibold text-[#333] leading-tight mb-4">
            {service.title}
          </h3>

          <p className="text-gray-500 mb-6 text-sm md:text-lg leading-relaxed max-w-md">
            {service.desc}
          </p>
          
          <button className="bg-[#8FAF9A] hover:bg-[#7a9985] text-white px-8 py-3 transition-all duration-300 shadow-lg text-sm md:text-base">
            Know More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesStackSection() {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl font-[Bodoni_Moda] md:text-6xl font-bold text-[#2D2D2D] leading-tight">
          How We <span className="text-[#E3C77A] italic">Simplify</span> Your <br className="hidden lg:block" /> 
          Enlightment Experience
        </h2>
      </div>

      {/* Cards Container */}
      <div className="pb-[10vh]">
        {services.map((service, i) => {
          // Cards ek ke upar ek stack hote waqt thode chhote honge
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <ServiceCard
              key={`p_${i}`}
              index={i}
              service={service}
              progress={scrollYProgress}
              // Is logic se har card apne turn par scale hoga
              range={[i * (1 / services.length), 1]}
              targetScale={targetScale}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
}