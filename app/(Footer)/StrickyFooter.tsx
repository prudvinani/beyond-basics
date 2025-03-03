"use client"
import React, { useRef, useEffect, useState } from 'react';
import { StickyBottomFooter } from '@/app/(Footer)/FooterData';

export default function Footer() {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(310);
  
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const height = entry.contentRect.height;
          const minHeight = window.innerWidth >= 768 ? 410 : 310;
          setContentHeight(Math.max(height, minHeight));
        }
      });
      
      resizeObserver.observe(contentRef.current);
      
      return () => {
        if (contentRef.current) {
          resizeObserver.unobserve(contentRef.current);
        }
      };
    }
  }, []);

  return (
    <div
      className="relative"
      style={{
        height: `${contentHeight}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
      }}
    >
      <div className="relative" style={{ 
        height: `calc(100vh + ${contentHeight}px)`,
        top: "-100vh" 
      }}>
        <div 
          ref={contentRef}
          className="sticky" 
          style={{ 
            minHeight: window.innerWidth >= 768 ? "410px" : "330px",
            top: `calc(100vh - ${contentHeight}px)`
          }}
        >
          <StickyBottomFooter />
        </div>
      </div>
    </div>
  );
}





// import React from 'react'

// import { StickyBottomFooter } from '@/app/(Footer)/FooterData';

// export default function Footer() {
//   return (
//     //h- 410
//     // 350

//     <div 
//         className='relative h-[410px]'
//         style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//     >
//         <div className='relative  h-[calc(100vh+410px)] -top-[100vh]'>
//             <div className='h-[410px] sticky top-[calc(100vh-410px)]'>
//                <StickyBottomFooter/>
//             </div>
//         </div>
//     </div>
//   )
// }


