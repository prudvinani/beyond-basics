"use client";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useMemo, useRef, useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { MarqueeDemo } from "../ReallScrolling";

import image1 from "@/public/ScrollingVideos/good1.jpg";
import image2 from "@/public/ScrollingVideos/good2.jpg";
import image3 from "@/public/ScrollingVideos/good3.jpg";
import image4 from "@/public/ScrollingVideos/moregood2.jpg";
import image5 from "@/public/ScrollingVideos/good4.jpg";

export type Movie = {
  poster: string | StaticImageData;
  name: string;
};

export const movies = [
  { poster: image1, name: "Harsha" },
  { poster: image2, name: "Harsha" },
  { poster: image3, name: "Harsha" },
  { poster: image4, name: "Harsha" },
  { poster: image5, name: "Harsha" },
];

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

  const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maximumScale * 1.1, maximumScale, 1]);
  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(scrollYProgress, [0.64, 0.66], [-20, 0]);
  const posterTranslateXRight = useTransform(scrollYProgress, [0.64, 0.66], [20, 0]);

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">("inactive");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % movies.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselVariant === "active") {
        nextImage();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselVariant]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <div>
      <motion.div
      
        variants={{
          inactive: { opacity: 1 },
          active: { opacity: 1 },
          
        }}
        animate={carouselVariant}
        className="bg-black -mt-5"
      >
        <div ref={carouselWrapperRef} className="overflow-clip mt-[-100vh] h-[300vh]">
          <div className="h-screen flex items-center sticky top-0">
            <div className="relative flex mb-5 gap-5 left-1/2 -translate-x-1/2">
              <motion.div
                style={{ opacity: posterOpacity, x: posterTranslateXLeft }}
                className="w-[60vw] aspect-video shrink-0 rounded-2xl"
              >
                <Image
                  src={movies[(currentImageIndex - 1 + movies.length) % movies.length].poster}
                  alt={`Image ${(currentImageIndex - 1 + movies.length) % movies.length + 1}`}
                  className="h-full w-full object-cover rounded-2xl"
                  width={800}
                  height={450}
                  priority
                />
              </motion.div>
              <motion.div style={{ scale }} className="w-[60vw] shrink-0 rounded-2xl relative">
                <Image
                  src={movies[currentImageIndex].poster}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover rounded-3xl"
                  width={800}
                  height={450}
                  priority
                />
                
                {carouselVariant === "active" && (
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button 
                      onClick={prevImage}
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      →
                    </button>
                  </div>
                )}
                
                {carouselVariant === "active" && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {movies.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? "bg-white" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
              <motion.div
                style={{ opacity: posterOpacity, x: posterTranslateXRight }}
                className="w-[60vw] shrink-0 rounded-2xl"
              >
                <Image
                  src={movies[(currentImageIndex + 1) % movies.length].poster}
                  alt={`Image ${(currentImageIndex + 1) % movies.length + 1}`}
                  className="h-full w-full object-cover rounded-3xl"
                  width={800}
                  height={450}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <MarqueeDemo />
    </div>
  );
};