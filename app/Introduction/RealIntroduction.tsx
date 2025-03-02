"use client"

import React from 'react'
import Image from 'next/image'
import vassant from "@/public/Introduction/vasant.png"
import nihar from "@/public/Introduction/nihar.png"
import harsha from "@/public/Introduction/harsha.png"
import { motion } from 'framer-motion'

const Introductionof3 = () => {
  return (
    <div className="bg-black min-h-screen py-20 px-4">
      <h1 className="text-white text-5xl font-bold text-center mb-20">About Us</h1>
      
      <div className="max-w-5xl mx-auto relative flex justify-center items-center">
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">
          {/* Left Card - Vasantha */}
          <motion.div 
            initial={{ x: "60%", opacity: 0, zIndex: 10 }}
            whileInView={{ x: "-110%", opacity: 1, zIndex: 20 }}
            transition={{ duration: 0.7, delay: 0.1}}
            viewport={{ once: false }}
            className="absolute  bg-[#4B88FB] rounded-3xl p-6 w-[320px]"
          >
            <Image 
              src={vassant} 
              alt="Vasantha Kumar" 
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-3xl font-semibold mb-4">Vasantha Kumar</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Founder</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Software Engineer</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Educator</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">CTO</span>
            </div>
          </motion.div>

          {/* Middle Card - Harsha */}
          <motion.div
            // initial={{ opacity: 0}}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="absolute bg-[#9747FF] rounded-3xl p-6 w-[320px] z-30"
          >
            <Image 
              src={harsha} 
              alt="Harsha Vardhan" 
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-3xl font-semibold mb-4">Harsha Vardhan</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Founder</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Software Engineer</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Influencer</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Youtuber</span>
            </div>
          </motion.div>

          {/* Right Card - Nihar */}
          <motion.div
            initial={{ x: "-50%", opacity: 0, zIndex: 10 }}
            whileInView={{ x: "110%", opacity: 1,  }}
            transition={{ duration: 0.7, delay:0.1 }}
            viewport={{ once: false }}
              className="absolute bg-[#427977] rounded-3xl p-6 w-[320px]"
            >
          
            <Image 
              src={nihar} 
              alt="Dodagatta Nihar" 
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-3xl font-semibold mb-4">Dodagatta Nihar</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Community Founder</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Influencer</span>
              <span className="bg-white/20 text-white px-4 py-2 rounded-full">Youtuber</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Introductionof3