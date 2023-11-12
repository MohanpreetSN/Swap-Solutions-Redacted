import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import ServiceSection from "./ServiceSection";
import TrustSection from "./TrustSection";
import MapSection from "./MapSection";
import ProjectSection from "./ProjectSection";
import TestimonialSection from "./TestimonialSection";


const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CtaSection />
      <AboutSection />
      <ProjectSection />
      <TestimonialSection testimonial_space="" />
      <TrustSection />
      <MapSection />
    </>
  );
};

export default HomeMain;
