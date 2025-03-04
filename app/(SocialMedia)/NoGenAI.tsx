"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import cursor from "@/public/SocialMedia/cursor.png";
// import tensorflow from "@/public/SocialMedia/tensorflow.png";
// import thunder from "@/public/SocialMedia/thunder.png";
// import framer from "@/public/SocialMedia/cursor.png";
import cusror from "@/public/SocialMedia/cursor.svg"
import pytouch from "@/public/SocialMedia/pytouch.svg"
import tensorflow from "@/public/SocialMedia/tensorflow1.png"
import thunder from "@/public/SocialMedia/thunder.svg"
import framer from '@/public/SocialMedia/framer1.svg'
import v0 from "@/public/SocialMedia/v0.svg"


const NoGen = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const images = [
    { id: 1, src: cusror, alt: "cursro" },
    { id: 2, src: pytouch, alt: "pytouch" },
    { id: 3, src: tensorflow, alt: "TensorFlow" },
    { id: 4, src: thunder, alt: "thunder" },
    { id: 5, src: framer, alt: "framer" },
    { id: 6, src: v0, alt: "v0" },
  ];
  
  return (
    <div className=" rounded-2xl  md:p-8">
      <div className="flex flex-col h-full">

        <h2 className="text-[31px] font-bold mb-2 text-white">Gen-AI</h2>
              <p className="text-sm md:text-xl text-white">Explore cutting-edge AI trends and tools today.</p>
    
        
        <div 
          className="mt-10 relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            className="flex gap-2"
            style={{
              transform: isHovering ? 'translateX(-100%)' : 'translateX(0)',
              transition: isHovering ? 'transform 8s linear' : 'none',
              width: 'fit-content'
            }}
          >
            {images.map((image) => (
              <div key={image.id} className="flex-none ">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={48}
                  height={40}
                  className="rounded-xl"
                />
              </div>
            ))}
            
            {images.map((image) => (
              <div key={`dup-${image.id}`} className="flex-none  w-12 h-10">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={64}
                  height={40}
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoGen;