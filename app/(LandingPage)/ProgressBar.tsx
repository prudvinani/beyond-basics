"use client"

import { motion } from "framer-motion"

interface ProgressCircleProps {
  percentage: number
}

export default function ProgressCircle({ percentage }: ProgressCircleProps) {
  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-10 h-10 md:w-16 md:h-16 ml-2 mt-3 mr-3 flex  flex-col items-center cursor-pointer">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-[#FFBF00]"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-black"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          style={{
            strokeDasharray: circumference,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-semibold">{percentage}%</span>
      </div>
    </div>
  )
}

