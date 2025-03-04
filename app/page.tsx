// import Footer from "@/components/Footer";
import BeyondSection from "@/app/(Footer)/BeyondSection";
import ScrollingCourses from "@/app/(Footer)/ScrollingCourse";
import LandingPage from "@/app/(LandingPage)/LandingPage";
import { VideoCarousel } from "./(VideoCarousel)/VideoSector";
import PricingSection from "./(Pricing)/PricingSection";
import Course from "./(CourseStructure)/CourseSections";
import { JoinUsSection } from "./(WhyJoinus)/WhyJoiningUs";
import { SocialMedia } from "@/app/(SocialMedia)/SocialMedia";
import Introductionof3 from "./Introduction/Introductionof3";

import StickyFooter from "./(Footer)/StrickyFooter";


import { FAQ } from "./(FQA)/fqa";

export default function Home() {
  return (
    <div className="scroll-smooth">
    <LandingPage />

    <SocialMedia />
    
    <div id="courses">
      <Course />
    </div>
    <VideoCarousel />

    <JoinUsSection />

    <div id="pricing">
      <PricingSection />
    </div>

 

    <div id="about">
      <Introductionof3 />
    </div>
  <FAQ/>

    <BeyondSection />
    <ScrollingCourses />

    <StickyFooter />
  </div>
  );
}
