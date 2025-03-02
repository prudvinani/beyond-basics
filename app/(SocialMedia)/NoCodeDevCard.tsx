"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

interface NoCodeDevCardProps {
  framer: StaticImageData;
  bubbleicon: StaticImageData;
  webflow: StaticImageData;
  Wixicon: StaticImageData;
}

const NoCodeDevCard: React.FC<NoCodeDevCardProps> = ({ framer, bubbleicon, webflow, Wixicon }) => {
  const [visibleCount, setVisibleCount] = useState(1);

  const logos = useMemo(
    () => [
      { src: framer, alt: "Framer logo" },
      { src: bubbleicon, alt: "Bubble icon" },
      { src: webflow, alt: "Webflow logo" },
      { src: Wixicon, alt: "Wixicon" }
    ],
    [framer, bubbleicon, webflow, Wixicon]
  );

  useEffect(() => {
    setVisibleCount(1);

    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev >= logos.length ? 1 : prev + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [logos]);

  return (
    <div className="bg-[#7ABE2A] rounded-2xl p-6 md:p-8 md:col-span-4">
      <div className="flex flex-col h-full">
        <div className="ml-auto">
          <h2 className="text-[31px] font-bold mb-2 text-[#3F4E00]">No-Code Dev</h2>
          <p className="text-sm md:text-xl text-[#3F4E00]">
            Design and launch websites effortlessly with no-code tools.
          </p>
        </div>

        <div className="flex mx-7 gap-4 mt-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                index < visibleCount ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Image src={logo.src} alt={logo.alt} width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoCodeDevCard;
