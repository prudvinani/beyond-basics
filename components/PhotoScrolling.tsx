"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import goodone from "@/public/goodone.png"

import resume from "@/public/resume.png"

export default function InfiniteScroll() {
  return (
    <div className="flex flex-col gap-8 overflow-hidden bg-black">
      <div className="relative w-full overflow-hidden bg-slate-100 py-2">
        <motion.div
          animate={{
            x: [0, -1035], 
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-4 w-fit"
        >
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={goodone}
              alt="Engineering Roadmap"
              width={590} 
              height={345}
              className="rounded-lg object-cover"
            />
          ))}
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden bg-slate-100 py-1">
        <motion.div
          animate={{
            x: [-1035, 0], 
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-4 w-fit"
        >
          {[...Array(8)].map((_, i) => (
            <Image
              key={i}
              src={resume}
              alt="Engineering Roadmap"
              width={590} 
              height={345}
              className="rounded-lg object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

