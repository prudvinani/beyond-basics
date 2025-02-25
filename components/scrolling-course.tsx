// ScrollingCourses.tsx
"use client"

import { useRef, useEffect } from "react"
import {
  Linkedin,
  FileText,
  Code,
  Codepen as Javascript,
  Database,
  Shield,
  Wifi,
  Network,
  Smartphone,
  DatabaseIcon,
  Search,
  GitBranch,
  Rocket,
  LineChart,
} from "lucide-react"
import { IconBaseProps } from "react-icons"

// Type definitions
type CourseItem = {
  title: string
  icon: React.ComponentType<IconBaseProps>
}

// Course data
const row1: CourseItem[] = [
  { title: "LinkedIn Optimization", icon: Linkedin },
  { title: "Resume Building", icon: FileText },
  { title: "Web Development", icon: Code },
  { title: "Advanced Javascript", icon: Javascript },
  { title: "Data Structures & Algorithms", icon: Database },
]

const row2: CourseItem[] = [
  { title: "Cybersecurity Essentials", icon: Shield },
  { title: "IoT Applications", icon: Wifi },
  { title: "Blockchain Basics", icon: Network },
  { title: "Mobile App Development", icon: Smartphone },
  { title: "Database", icon: DatabaseIcon },
]

const row3: CourseItem[] = [
  { title: "SEO & Digital Marketing", icon: Search },
  { title: "Agile Methodologies", icon: GitBranch },
  { title: "Entrepreneurship & Startup Basics", icon: Rocket },
  { title: "Financial Literacy for Tech", icon: LineChart },
]

// Course Item Component
const CourseItem = ({ title, icon: Icon }: CourseItem) => {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-6 sm:py-3 shrink-0">
      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 sm:size-10">
        <Icon className="size-4 text-primary sm:size-6" />
      </div>
      <span className="whitespace-nowrap text-sm font-medium sm:text-lg">{title}</span>
    </div>
  )
}

// Infinite Scroll Row Component
interface InfiniteScrollRowProps {
  children: React.ReactNode
  direction: "left" | "right"
  speed?: number
}

const InfiniteScrollRow = ({ 
  children, 
  direction, 
  speed = 30 
}: InfiniteScrollRowProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !contentRef.current) return
    
    // Create a duplicate of the content for seamless scrolling
    const content = contentRef.current
    const duplicate = content.cloneNode(true)
    scrollerRef.current.appendChild(duplicate)
    
    const scrollWidth = content.offsetWidth
    
    // Set initial positions based on direction
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
      const position = (elapsed * speed) / 100 % scrollWidth
      
      if (direction === "left") {
        scrollerRef.current.scrollLeft = scrollWidth - position
      } else {
        scrollerRef.current.scrollLeft = position
      }
      
      // Reset scroll position when we've scrolled the width of the content
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
      <div 
        ref={scrollerRef} 
        className="flex overflow-x-hidden whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        <div 
          ref={contentRef} 
          className="flex gap-1 py-1 pr-4"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// Main Component
export default function ScrollingCourses() {
  // Duplicate items to ensure enough content for scrolling
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