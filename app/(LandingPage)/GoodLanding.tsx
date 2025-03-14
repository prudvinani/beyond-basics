"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProgressCircle from "@/app/(LandingPage)/ProgressBar";
// import CalendarWidget from "@/app/(LandingPage)/CalendarWidnets";
// import LinkedInCard from "@/app/(LandingPage)/LinkedinCard";
import NoBoring from "@/app/(LandingPage)/NoBoring";
import LinkedinCard from "@/public/linkedinlanding.svg"
import CalendarCard from "@/public/Calender.svg"
import { useState } from "react";
import Navigation from "@/app/(LandingPage)/Navigation";
import Image from "next/image";
import { SectionofLanding } from "./SectionofLanding";
// import { SectionofLanding } from "./SectionofLanding";
export default function LandingPage() {
  const [isHovering, setIsHovering] = useState(false);
  <Navigation />
  return (
    <div>
      <div className="min-h-screen  bg-[#0165FC]">
        <Navigation/>
      <div className="min-h-screen">
      <main className="relative overflow-hidden min-h-screen w-full px-4 sm:px-8">
       
        <motion.div
          className="absolute top-[10vh] sm:top-[10vh] right-[20vh] sm:left-0 px-4 sm:px-8 w-full sm:w-auto flex justify-center sm:justify-start"
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
            <Card className="p-3 sm:p-4 w-[200px] sm:w-[250px] border-2 border-white h-auto sm:h-[120px] bg-white rounded-xl shadow-lg">
              <div className="flex items-center">
                <ProgressCircle percentage={76} />
                <p className="mt-2 text-base sm:text-[20px] font-medium">
                  You&apos;re almost <br /> reached!
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
{/*  */}
        <motion.div
          className="absolute -left-[16vw] md:-left-[2vw]  md:bottom-[20vh] sm:bottom-[10vh]  "
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

            {/* <LinkedInCard /> */}
            <Image src={LinkedinCard} alt="" className="w-48 h-48 md:w-52 " />
          </motion.div>
        </motion.div>

        <motion.div
  className="absolute -right-10 top-20 sm:top-24 sm:right-4 z-10"
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
      className="rounded-full w-[150px] sm:w-[182px] py-4 sm:py-6 px-4 sm:px-8 text-base sm:text-lg text-white bg-[#a066ff] hover:bg-[#a066ff]"
    >
      Set Reminder
    </Button>
  </motion.div>
</motion.div>

        <motion.div
        // in the iphone xr i want this bottom-80 , and iphone se  bottom-40
className="absolute left-56 sm:-right-24 sm:bottom-56 bottom-40 w-full sm:w-auto flex justify-center sm:justify-end" 
         animate={{
            x: isHovering ? -20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: -10 }}
            animate={{ x: 0, opacity: 1, rotate: 15 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="transform hover:rotate-0 transition-transform duration-300 pt-4"
          >
            {/* <CalendarWidget /> */}
            <Image src={CalendarCard} alt="" className="h-48 w-48 md:w-64"/>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center max-w-5xl mx-auto mt-36 sm:mt-36 md:mt-48 px-4 "
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <NoBoring />
          <h2 className="text-[18px] sm:text-base  md:text-[53px]  md:pt-1 font-bold text-[#FFBF00]   font-outfit">
            Learn What Colleges Doesn&apos;t teach
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl pt-2 md:pt-6 tracking-wide  font-outfit">
            No textbooks, just real experience – reshape your career path in 6 months.
            <br className="hidden sm:block" /> Learn by doing. Master in-demand industry skills weekly!
          </p>

          <button className="text-lg sm:text-xl font-outfit font-semibold mt-7 md:mt-12 text-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-3xl">
            Join the Community
          </button>
        </motion.div>
      </main>
    </div>
      </div>



{/* 
      <div>
        
        <section className="bg-[#09d85f] font-outfit tracking-tight mx-5 -mt-28  text-white md:-mt-[90px] flex flex-col md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 rounded-3xl">
    <div className="text-center md:text-left">
      <p className="text-2xl md:text-4xl tracking-tight font-outfit">Struggling to stay ahead</p>
      <p className="text-2xl md:text-4xl mt-1">
        with the <span className="font-semibold">skills of tomorrow?</span>
      </p>
    </div>
    <p className="text-lg md:text-2xl tracking-wide font-inter max-w-[600px] text-center md:text-left mt-4 md:mt-0">
      We bring you carefully curated, in-demand topics every week, ensuring you&apos;re always learning 
      what matters most. From AI and automation to the latest in design, tech, and business,
      we help you future-proof your skills.
    </p>
  </section>
  
  <section className="bg-[#966fd6] tracking-wide font-outfit text-white flex flex-col mx-5 md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 mt-7 rounded-3xl">
    <div className="text-center md:text-left">
      <p className="font-inter text-3xl md:text-4xl tracking-tight">Not sure where to</p>
      <p className="font-inter text-3xl md:text-4xl font-semibold tracking-tight">start or how to explore</p>
      <p className="font-inter text-3xl md:text-4xl font-semibold">opportunities?</p>
    </div>
    <p className="text-lg md:text-2xl tracking-wide leading-relaxed max-w-[600px] font-sans text-center md:text-left mt-4 md:mt-0">
      We guide you with step-by-step structured learning, hands-on tasks, and expert mentorship 
      so you gain practical experience. Plus, you&apos;ll be part of a supportive community that helps you 
      discover new opportunities and grow with confidence.
    </p>
  </section>
  
  <section className="bg-[#427977] text-white flex flex-col mx-5 md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 mt-7 rounded-3xl">
    <div className="text-center md:text-left">
      <p className="font-inter text-3xl md:text-[34px] font-outfit tracking-tight">
        Missing a roadmap to <span className="font-outfit text-3xl md:text-4xl font-semibold">learn,</span>
      </p>
      <p className="font-inter text-3xl md:text-4xl font-outfit font-semibold tracking-tight">grow, and earn consistently?</p>
    </div>
    <p className="text-lg md:text-2xl font-inter  tracking-wide leading-relaxed max-w-[600px] text-center md:text-left mt-4 md:mt-0">
      Every week, you&apos;ll master a new topic with practical exercises to build real expertise. 
      Our structured approach ensures you stay on track while gaining the skills needed to unlock 
      new career opportunities, freelance gigs, or entrepreneurial ventures.
    </p>
  </section>
      </div> */}
  {/* <section 
        className="bg-[#09d85f]  md:h-[310px] font-outfit -mt-72 md:-mt-44 tracking-tight mx-5 text-white flex flex-col md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 rounded-3xl sticky md:static"
        style={{ top: "0px" }} // Mobile stacking effect
      >
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-4xl tracking-tight font-outfit">Struggling to stay ahead</p>
          <p className="text-2xl md:text-4xl mt-1">
            with the <span className="font-semibold">skills of tomorrow?</span>
          </p>
        </div>
        <p className="text-lg md:text-2xl tracking-wide font-inter max-w-[600px] text-center md:text-left mt-4 md:mt-0">
          We bring you carefully curated, in-demand topics every week, ensuring you&lsquo;re always learning 
          what matters most. From AI and automation to the latest in design, tech, and business
          we help you future-proof your skills.
        </p>
      </section> */}

<SectionofLanding/>
    </div>
  );
}
