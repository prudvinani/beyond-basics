"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface InfiniteScrollRowProps {
  children: ReactNode
  direction: "left" | "right"
  speed?: "slow" | "normal"
}

export default function InfiniteScrollRow({ children, direction, speed = "normal" }: InfiniteScrollRowProps) {
  const duration = speed === "slow" ? 50 : 30
  const directionMultiplier = direction === "left" ? -1 : 1

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex  px-1 sm:gap-2 sm:px-2"
        animate={{
          x: directionMultiplier * -1000,
        }}
        initial={{
          x: 0,
        }}
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {children}
        {children} {/* Duplicate for seamless loop */}
      </motion.div>
    </div>
  )
}

