"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    step: "1",
    title: "Custom Lighting Design",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200", 
  },
  {
    step: "2",
    title: "Sculptural Lighting",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
  {
    step: "3",
    title: "Design Consultation",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200",
  },
  {
    step: "4",
    title: "Process Lights",
    desc: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
  },
];

const ServiceCard = ({ service, index, progress, range, targetScale, isMobile }) => {
  // Mobile par scaling effect ko disable kar sakte hain ya bohot subtle rakh sakte hain
  const scale = useTransform(progress, range, [1, isMobile ? 1 : targetScale]);

  return (
    <div className={`w-full flex items-start justify-center ${isMobile ? "relative mb-10" : "h-screen sticky top-0"}`}>
      <motion.div
        style={{
          scale,
          // Desktop par cards stack honge, mobile par normal margin se kaam chalega
          top: isMobile ? "0px" : `calc(5% + ${index * 35}px)`,
        }}
        className="relative w-full max-w-6xl bg-white rounded-[30px] md:rounded-[40px] shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[450px] md:min-h-[550px] border border-gray-100 mx-4 md:mx-0"
      >
        {/* Left Section: Text Content */}
        <div className="flex-1 p-8 md:p-16 flex flex-col justify-center items-start order-2 md:order-1">
          <span className="text-6xl md:text-8xl font-light text-[#E3C77A] mb-2 md:mb-4">
            {service.step}
          </span>
          
          <h3 className="text-2xl md:text-4xl font-semibold text-[#333] leading-tight mb-4 md:mb-6">
            {service.title}
          </h3>

          <p className="text-gray-500 mb-4 text-sm md:text-lg leading-relaxed max-w-md">
            {service.desc}
          </p>
          <button className="bg-[#8FAF9A] hover:bg-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg">
            Know More
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
          <img
            src={service.image}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative bg-[#F8F6F3] pb-20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-6xl font-light text-[#2D2D2D] leading-tight">
          How We <span className="text-[#E3C77A] italic">Simplify</span> Your <br /> 
          Enlightment Experience
        </h2>
      </div>

      <div className="px-2 md:px-0">
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <ServiceCard
              key={`p_${i}`}
              index={i}
              service={service}
              progress={scrollYProgress}
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