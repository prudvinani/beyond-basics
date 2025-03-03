"use client";

import React from "react";
import Image from "next/image";
import vassant from "@/public/Introduction/vasant.png";
import nihar from "@/public/Introduction/nihar.png";
import harsha from "@/public/Introduction/harsha.png";
import { motion } from "framer-motion";

const Introductionof3 = () => {
  return (
    <div className="bg-black min-h-screen py-12 sm:py-20 px-4 hidden md:block">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-20">
        About Us
      </h1>

      {/* Desktop version - visible on md screens and up */}
      <div className="hidden md:flex max-w-5xl mx-auto relative justify-center items-center">
        <div className="relative w-full max-w-[800px] h-[600px] flex items-center justify-center">
          <motion.div
            initial={{ x: "50%", opacity: 0, zIndex: 10 }}
            whileInView={{ x: "-110%", opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "linear",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute bg-[#4B88FB] rounded-3xl p-6 w-[280px] lg:w-[320px] transform hover:shadow-2xl cursor-pointer"
            style={{ transformStyle: "preserve-3d", perspective: "1000px", rotateY: "-5deg" }}
          >
            <Image
              src={vassant}
              alt="Vasantha Kumar"
              className="w-full h-[240px] lg:h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Vasantha Kumar
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">Founder</button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">Software Engineer</button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">Educator</button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">CTO</button>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute bg-[#9747FF] rounded-3xl p-6 w-[280px] lg:w-[320px] z-30 transform hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={harsha}
              alt="Harsha Vardhan"
              className="w-full h-[240px] lg:h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Harsha Vardhan
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Founder</button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Software Engineer</button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Influencer</button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Youtube</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "-50%", opacity: 0, zIndex: 10 }}
            whileInView={{ x: "110%", opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: "linear",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute bg-[#427977] rounded-3xl p-6 w-[280px] lg:w-[320px] transform hover:shadow-2xl cursor-pointer"
            style={{ transformStyle: "preserve-3d", perspective: "1000px", rotateY: "5deg" }}
          >
            <Image
              src={nihar}
              alt="Dodagatta Nihar"
              className="w-full h-[270px] lg:h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">
              Dodagatta Nihar
            </h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">Community Founder</button>
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">Influencer</button>
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">Youtube</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile version - uncomment if needed */}
      <div className="md:hidden max-w-md mx-auto space-y-8">
        {[harsha, vassant, nihar].map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2.5,
              ease: "linear",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-[#9747FF] rounded-3xl p-4 sm:p-6 w-full transform hover:shadow-xl"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <Image
                src={person}
                alt={`Image ${index + 1}`}
                className="w-full sm:w-40 h-full sm:h-40 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-white text-2xl font-semibold mb-3">
                  {index === 0 ? "Harsha Vardhan" : index === 1 ? "Vasantha Kumar" : "Dodagatta Nihar"}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Introductionof3;