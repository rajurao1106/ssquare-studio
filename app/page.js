import About from "@/components/homepage/About";
import About1 from "@/components/homepage/About1";
import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import Hero1 from "@/components/homepage/Hero1";
import HowItWorks from "@/components/homepage/HowItWorks";
import InteriorInspiration from "@/components/homepage/InteriorInspiration";

import ServicesStackSection from "@/components/homepage/Services";
import React from "react";

export default function page() {
  return (
    <main>
      <Hero />
      <Hero1/>
      {/* <About/> */}
      <About1/>
      <ServicesStackSection/>
      <InteriorInspiration/>
      <HowItWorks/>
      
      <CTA/>
    </main>
  );
}
