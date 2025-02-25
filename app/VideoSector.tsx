"use client";
import Image from "next/image";
import goodone from "@/public/goodone.png";
import mongo2 from "@/public/mongodb2.png";
import { useWindowSize } from "react-use";
import { randomMovieSet1, randomMoviesSet2 } from "./movies";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useMemo, useRef, useState } from "react";

export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  { poster: "/goodone.png", name: "Harsha" },
  { poster: "/mongo.png", name: "Harsha" },
  { poster: "/mongo2.png", name: "Harsha" },
];

const SmallVideoCarousel = ({ movies }: { movies: any[] }) => {
  return (
    <div className="overflow-hidden">
      <div className="animate-carousel-move flex gap-3 relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div key={index} className="w-[23vw] aspect-video shrink-0">
            <Image
              className="h-full w-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
              width={200}
              height={200}
            />
          </div>
        ))}
        {/* Duplicate the items for seamless looping */}
        {movies.map((movie, index) => (
          <div
            key={`duplicate-${index}`}
            className="w-[23vw] aspect-video shrink-0"
          >
            <Image
              className="h-full w-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const { width, height } = useWindowSize();
  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);
  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  const [carouselVariant,setCarouselVariant]=useState<"inactive" | "active" >("inactive")
  useMotionValueEvent(scrollYProgress,"change",(progress)=>{
    if(progress >= 0.67){
        setCarouselVariant("active")
    }else{
        setCarouselVariant("inactive")
    }
  })
  return (
    <motion.div animate={carouselVariant} className="bg-black pb-8">
      <div
        ref={carouselWrapperRef}
        className="overflow-clip mt-[-100vh] h-[300vh]"
      >
        <div className="  h-screen flex items-center sticky top-0">
          <div className="relative flex mb-5 gap-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
              className="w-[60vw] aspect-video shrink-0 rounded-2xl"
            >
              <img
                src={goodone.src}
                alt="good"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="w-[60vw] shrink-0 rounded-2xl"
            >
              <img
                src={goodone.src}
                alt="good"
                className="h-full w-full object-cover"
              />
              <div>

              </div>
            </motion.div>
            <motion.div
              style={{ opacity: posterOpacity, x: posterTranslateXRight }}
              className="w-[60vw] shrink-0 rounded-2xl"
            >
              <img
                src={mongo2.src}
                alt="good"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div variants={{
        active :{opacity:1,y:0},
        inactive:{opacity:0,y:20}
    
    
    }}
    transition={{duration:0.4}}
        className=" -mt-[calc((100vh-(60vw*(16/9))/2)] md:-mt-[calc(100vh-(60vw*(16/11)/2))]  space-y-3">
            
        <SmallVideoCarousel movies={randomMovieSet1} />
        <div className="[--duration:80s] [--carousel-offset:-32px]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};
