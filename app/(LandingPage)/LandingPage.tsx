"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProgressCircle from "@/app/(LandingPage)/ProgressBar";
import NoBoring from "@/app/(LandingPage)/NoBoring";
import LinkedinCard from "@/public/linkedinlanding.svg";
import CalendarCard from "@/public/Calender.svg";
import { useState } from "react";
import Navigation from "@/app/(LandingPage)/Navigation";
import Image from "next/image";
import { SectionofLanding } from "./SectionofLanding";

export default function LandingPage() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-[#0165FC]">
        <Navigation />
        <div className="min-h-screen">
          <main className="relative overflow-hidden min-h-screen w-full px-4 sm:px-8">
            {/* Progress Card - Top left on desktop, top center on mobile */}
            <motion.div
              className="absolute top-[8vh] -left-[15vw] md:top-[15vh] md:left-[30vw] lg:top-[15vh] lg:left-[5vw]"
              animate={{
                x: isHovering ? 20 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 10 }}
                transition={{ duration: 0.5 }}
                className="transform hover:rotate-0 transition-transform duration-300"
              >
                <Card className="p-2 sm:p-3 md:p-3 w-[30vw] sm:w-[25vw] md:w-[17vw] max-w-[250px] border-2 border-white h-auto bg-white rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-[30%] sm:w-[35%] md:w-[40%]">
                      <ProgressCircle percentage={76} />
                    </div>
                    <p className="mt-1 sm:mt-2 text-[14px] sm:text-base md:text-[20px] font-medium ">
                      You&apos;re almost <br /> reached!
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Set Reminder Button - Top right on desktop, overlapping card on mobile */}
            <motion.div
              className="absolute top-[10vh] -right-[1vw] md:top-[15vh] md:right-[10vw] lg:top-[15vh] lg:right-[10vw] z-10"
              animate={{
                x: isHovering ? -20 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: -10 }}
                transition={{ duration: 0.5 }}
                className="transform hover:rotate-0 transition-transform duration-300"
              >
                <Button
                  variant="secondary"
                  className="rounded-full w-[120px] sm:w-[150px] md:w-[182px] py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg text-white bg-[#a066ff] hover:bg-[#a066ff]"
                >
                  Set Reminder
                </Button>
              </motion.div>
            </motion.div>

            {/* LinkedIn Card - Bottom left on desktop, bottom left on mobile */}
            <motion.div
              className="absolute bottom-[50vh] -left-[8vw] md:bottom-[15vh] md:left-0 lg:bottom-[30vh] lg:left-0"
              animate={{
                x: isHovering ? 20 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ x: -100, opacity: 0, rotate: 20 }}
                animate={{ x: 0, opacity: 1, rotate: -15 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="transform hover:rotate-0 transition-transform duration-300"
              >
                <Image 
                  src={LinkedinCard} 
                  alt="LinkedIn card" 
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
                />
              </motion.div>
            </motion.div>

            {/* Calendar Card - Bottom right on desktop, bottom right on mobile */}
            <motion.div
              className="absolute bottom-[50vh] -right-[8vw] md:bottom-[15vh] md:right-0 lg:bottom-[30vh] lg:right-10vw"
              animate={{
                x: isHovering ? -20 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ x: 100, opacity: 0, rotate: -10 }}
                animate={{ x: 0, opacity: 1, rotate: 15 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="transform hover:rotate-0 transition-transform duration-300"
              >
                <Image 
                  src={CalendarCard} 
                  alt="Calendar widget" 
                  className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[220px]"
                />
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="text-center max-w-5xl mx-auto pt-[20vh] sm:pt-[30vh] md:pt-[25vh] px-4"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* NoBoring Component - Scale based on screen size */}
              <div className="flex justify-center">
                <div className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%]">
                  <NoBoring />
                </div>
              </div>
              
              {/* Main headline */}
              <h2 className="text-[20px] sm:text-[28px] md:text-[40px] lg:text-[53px] font-bold text-[#FFBF00] font-outfit md:-mt-5 ">
                Learn What Colleges Doesn&apos;t teach
              </h2>
              
              {/* Subtext - Scale based on screen size */}
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl   tracking-wide font-outfit max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
                No textbooks, just real experience – reshape your career path in 6 months.
                <br className="hidden sm:block" /> Learn by doing. Master in-demand industry skills weekly!
              </p>

              {/* CTA Button - Scale based on screen size */}
              <button className="text-sm sm:text-base md:text-lg lg:text-xl font-outfit font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center bg-white text-black px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-3xl">
                Join the Community
              </button>
            </motion.div>
          </main>
        </div>
       
      </div>
      <SectionofLanding/>
    </div>
  );
}