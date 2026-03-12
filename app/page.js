import About from "@/components/homepage/About";
import About1 from "@/components/homepage/About1";
import CTA from "@/components/homepage/CTA";
import CTA2 from "@/components/homepage/CTA2";
import Hero from "@/components/homepage/Hero";
import Hero1 from "@/components/homepage/Hero1";
import HowItWorks from "@/components/homepage/HowItWorks";
import InteriorInspiration from "@/components/homepage/Projects";

import ServicesStackSection from "@/components/homepage/Services";
import Service2 from "@/components/homepage/Servuce2";
import React from "react";

export default function page() {
  return (
    <main>
      <Hero />
      <Hero1/>
      {/* <About/> */}
      <About1/>
      <ServicesStackSection/>
      <Service2/>
      <InteriorInspiration/>
      <HowItWorks/>
      
      <CTA/>
      <CTA2/>
    </main>
  );
}
