"use client"

import { useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

// Import images
import LinkedinImage from "@/public/InifiniteScorllingBottomFooter/linkedin.png"
import ResumeBuilding from "@/public/InifiniteScorllingBottomFooter/human-resources.png"
import WebDeveloment from "@/public/InifiniteScorllingBottomFooter/reactjs-ar21.svg"
import AdvancedJavascript from "@/public/InifiniteScorllingBottomFooter/js.png"
import Cybersecurity from "@/public/InifiniteScorllingBottomFooter/hacker.png"
import IoT from "@/public/InifiniteScorllingBottomFooter/iot.png"
import BlockChain from "@/public/InifiniteScorllingBottomFooter/blockchain.png"
import Mobile from "@/public/InifiniteScorllingBottomFooter/development.png"
import Database from "@/public/InifiniteScorllingBottomFooter/database.png"
import Search from "@/public/InifiniteScorllingBottomFooter/seo.png"
import Agile from "@/public/InifiniteScorllingBottomFooter/cycle.png"
import Entrepreneurship from "@/public/InifiniteScorllingBottomFooter/shuttle.png"
import Financial from "@/public/InifiniteScorllingBottomFooter/growth.png"
import DataStructureandAlgo from "@/public/InifiniteScorllingBottomFooter/hierarchical.png"


interface CourseItem {
  title: string
  icon: StaticImageData
}

const row1: CourseItem[] = [
  { title: "LinkedIn Optimization", icon: LinkedinImage },
  { title: "Resume Building", icon: ResumeBuilding },
  { title: "Web Development", icon: WebDeveloment },
  { title: "Advanced Javascript", icon: AdvancedJavascript },
  { title: "Data Structures & Algorithms", icon: DataStructureandAlgo },
]

const row2: CourseItem[] = [
  { title: "Cybersecurity Essentials", icon: Cybersecurity },
  { title: "IoT Applications", icon: IoT },
  { title: "Blockchain Basics", icon: BlockChain },
  { title: "Mobile App Development", icon: Mobile },
  { title: "Database", icon: Database },
]

const row3: CourseItem[] = [
  { title: "SEO & Digital Marketing", icon: Search },
  { title: "Agile Methodologies", icon: Agile },
  { title: "Entrepreneurship & Startup Basics", icon: Entrepreneurship },
  { title: "Financial Literacy for Tech", icon: Financial },
]

const CourseItem = ({ title, icon }: CourseItem) => {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-white px-2 py-2 sm:gap-3 sm:px-6 sm:py-3 shrink-0">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 sm:size-10">
        <Image src={icon} alt={title} className="size-4 sm:size-8" />
      </div>
      <span className="whitespace-nowrap text-sm font-semibold font-outfit sm:text-2xl">{title}</span>
    </div>
  )
}

interface InfiniteScrollRowProps {
  children: React.ReactNode
  direction: "left" | "right"
  speed?: number
}

const InfiniteScrollRow = ({ children, direction, speed = 30 }: InfiniteScrollRowProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current) return

    const content = contentRef.current
    const duplicate = content.cloneNode(true)
    scrollerRef.current.appendChild(duplicate)

    const scrollWidth = content.offsetWidth

    if (direction === "right") {
      scrollerRef.current.scrollLeft = 0
    } else {
      scrollerRef.current.scrollLeft = scrollWidth
    }

    let animationId: number
    let startTime: number

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      if (!scrollerRef.current) return

      const elapsed = timestamp - startTime
      const position = ((elapsed * speed) / 100) % scrollWidth

      if (direction === "left") {
        scrollerRef.current.scrollLeft = scrollWidth - position
      } else {
        scrollerRef.current.scrollLeft = position
      }

      if (direction === "left" && scrollerRef.current.scrollLeft <= 0) {
        scrollerRef.current.scrollLeft = scrollWidth
      } else if (direction === "right" && scrollerRef.current.scrollLeft >= scrollWidth) {
        scrollerRef.current.scrollLeft = 0
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [direction, speed])

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollerRef} className="flex overflow-x-hidden " style={{ scrollbarWidth: "none" }}>
        <div ref={contentRef} className="flex gap-1 py-1 pr-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ScrollingCourses() {
  const duplicatedRow1 = [...row1, ...row1, ...row1]
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2]
  const duplicatedRow3 = [...row3, ...row3, ...row3]

  return (
    <div className="flex flex-col gap-1">
      <InfiniteScrollRow direction="right" speed={5}>
        {duplicatedRow1.map((course, index) => (
          <CourseItem key={`row1-${index}`} {...course} />
        ))}
      </InfiniteScrollRow>
      <InfiniteScrollRow direction="left" speed={5}>
        {duplicatedRow2.map((course, index) => (
          <CourseItem key={`row2-${index}`} {...course} />
        ))}
      </InfiniteScrollRow>
      <InfiniteScrollRow direction="right" speed={5}>
        {duplicatedRow3.map((course, index) => (
          <CourseItem key={`row3-${index}`} {...course} />
        ))}
      </InfiniteScrollRow>
    </div>
  )
}
