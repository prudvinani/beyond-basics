"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative inline-block">
      <h1 className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold text-white font-outfit tracking-tighter">{text}</h1>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] sm:h-[4px] md:h-[5px] lg:h-[6px] bg-green-400"
        initial={{ scaleX: 0 }}
        animate={animate ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        style={{ originX: 0 }}
      />
    </div>
  )
}

