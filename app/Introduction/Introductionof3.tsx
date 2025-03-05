"use client"

import { useRef } from "react"
import Image from "next/image"
import vassant from "@/public/Introduction/vasant.png"
import nihar from "@/public/Introduction/nihar.png"
import harsha from "@/public/Introduction/harsha.png"
import { motion, useScroll, useTransform } from "framer-motion"

const Introductionof3 = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // Create scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })


  const leftCardX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-110%"])
  const rightCardX = useTransform(scrollYProgress, [0, 0.5], ["0%", "110%"])

  const sideCardsOpacity = useTransform(scrollYProgress, [0, 0.05, 0.6], [0, 0.8, 1])

  const leftZIndex = useTransform(scrollYProgress, [0, 0.5], [5, 10])
  const rightZIndex = useTransform(scrollYProgress, [0, 0.5], [5, 10])
  const centerZIndex = useTransform(scrollYProgress, [0, 0.5], [20, 15])

  return (
    <div className="bg-white min-h-screen  px-4 hidden md:block">
      <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold text-center md:pt-[100px] ">About us</h1>

      <div
        ref={containerRef}
        className="hidden md:flex max-w-5xl mx-auto relative justify-center items-center h-[700px]"
      >
        <div className="relative w-full max-w-[800px] h-[600px] flex items-center justify-center">
          {/* Left Card - Vasantha */}
          <motion.div
            style={{
              x: leftCardX,
              opacity: sideCardsOpacity,
              zIndex: leftZIndex,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              rotateY: "-5deg",
            }}
            className="absolute bg-[#4B88FB] rounded-3xl p-6 w-[280px] lg:w-[320px] transform hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={vassant || "/placeholder.svg"}
              alt="Vasantha Kumar"
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">Vasantha Kumar</h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">Founder</button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">
                Software Engineer
              </button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">Educator</button>
              <button className="text-white bg-[#4B88FB] rounded-3xl border-2 border-white px-4 py-2">CTO</button>
            </div>
          </motion.div>

          {/* Center Card - Harsha */}
          <motion.div
            style={{
              zIndex: centerZIndex,
            }}
            className="absolute bg-[#9747FF] rounded-3xl p-6 w-[280px] lg:w-[320px] transform hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={harsha || "/placeholder.svg"}
              alt="Harsha Vardhan"
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">Harsha Vardhan</h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Founder</button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">
                Software Engineer
              </button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">
                Influencer
              </button>
              <button className="text-white bg-[#9747FF] rounded-3xl border-2 border-white px-4 py-2">Youtuber</button>
            </div>
          </motion.div>

          {/* Right Card - Nihar */}
          <motion.div
            style={{
              x: rightCardX,
              opacity: sideCardsOpacity,
              zIndex: rightZIndex,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              rotateY: "5deg",
            }}
            className="absolute bg-[#427977] rounded-3xl p-6 w-[280px] lg:w-[320px] transform hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={nihar || "/placeholder.svg"}
              alt="Dodagatta Nihar"
              className="w-full h-[300px] object-cover rounded-2xl mb-6"
            />
            <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4">Dodagatta Nihar</h2>
            <div className="flex flex-wrap gap-2">
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">
                Community Founder
              </button>
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">
                Influencer
              </button>
              <button className="text-white bg-[#427977] rounded-3xl border-2 border-white px-4 py-2">Youtuber</button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile version - uncomment if needed */}
      <div className="md:hidden max-w-md mx-auto space-y-8">
        {[
          { image: harsha, name: "Harsha Vardhan", color: "#9747FF" },
          { image: vassant, name: "Vasantha Kumar", color: "#4B88FB" },
          { image: nihar, name: "Dodagatta Nihar", color: "#427977" },
        ].map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-3xl p-4 sm:p-6 w-full transform hover:shadow-xl"
            style={{ backgroundColor: person.color }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <Image
                src={person.image || "/placeholder.svg"}
                alt={person.name}
                className="w-full sm:w-40 h-full sm:h-40 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-white text-2xl font-semibold mb-3">{person.name}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Introductionof3

