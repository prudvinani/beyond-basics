"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { StaticImageData } from "next/image";

import image1 from "@/public/ScrollingVideos/good1.jpg";
import image2 from "@/public/ScrollingVideos/good2.jpg";
import image3 from "@/public/ScrollingVideos/good3.jpg";
import image4 from "@/public/ScrollingVideos/moregood2.jpg";
import image5 from "@/public/ScrollingVideos/good4.jpg";
import image6 from "@/public/ScrollingVideos/good5.jpg";
import image7 from "@/public/ScrollingVideos/good6.jpg";
import image8 from "@/public/ScrollingVideos/good7.jpg";
import image9 from "@/public/ScrollingVideos/good8.jpg";

const images: StaticImageData[] = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="relative h-40 w-72 rounded-xl overflow-hidden shadow-md">
      <Image src={src} alt="Scrolling Image" fill className="object-cover rounded-xl" />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center bg-[#12100e] justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((image, index) => (
          <ImageCard key={index} src={image} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-[#12100e]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-[#12100e]"></div>
    </div>
  );
}
