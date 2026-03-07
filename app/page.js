import About from "@/components/homepage/About";
import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import HowItWorks from "@/components/homepage/HowItWorks";
import InteriorInspiration from "@/components/homepage/InteriorInspiration";

import ServicesStackSection from "@/components/homepage/Services";
import React from "react";

export default function page() {
  return (
    <main>
      <Hero />
      <About/>
      <ServicesStackSection/>
      <InteriorInspiration/>
      <HowItWorks/>
      
      <CTA/>
    </main>
  );
}
