"use client"

import { motion } from "framer-motion"

export default function NoBoring() {
  return (
    <div className="flex justify-center items-center h-20 relative ">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }} 
        transition={{ duration: 0.5, delay: 1 }}
        className="flex items-center md:pb-2 justify-center space-x-1" 
      >
        <motion.span className=" text-[30px]  md:text-[69px] font-bold tracking-tight text-white  ">No</motion.span>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "auto" }}
          transition={{ duration: 1, delay: 1.5 }}
          className=" whitespace-nowrap"
        >
          <motion.span className="text-[30px] md:text-[69px] font-bold text-white">
            {"Boring Lectures".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.5 + index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute"
      >
        <svg width="780" height="60" viewBox="0 0 400 60">
          <motion.line
            x1="0"
            y1="35"
            x2="500"
            y2="35"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  )
}