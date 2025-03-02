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

export default function Home() {
  return (
    <div>
      <LandingPage />

      <SocialMedia />
      <Course />
      <JoinUsSection />

      <PricingSection />

      <VideoCarousel />

      <Introductionof3 />

      <BeyondSection />
      <ScrollingCourses />

      <StickyFooter />
    </div>
  );
}
