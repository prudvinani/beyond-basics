

import React from 'react'

import { StickyBottomFooter } from '@/app/(Footer)/FooterData';

export default function Footer() {
  return (
    //h- 410
    // 350

    <div 
        className='relative h-[350px] md:h-[410px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative  h-[calc(100vh+410px)] -top-[100vh]'>
            <div className='h-[410px] sticky top-[calc(100vh-410px)]'>
               <StickyBottomFooter/>
            </div>
        </div>
    </div>
  )
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


