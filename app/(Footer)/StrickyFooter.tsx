import React from 'react'

import { StickyBottomFooter } from '@/app/(Footer)/FooterData';

export default function Footer() {
  return (
    <div 
        className='relative h-[200px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative  h-[calc(100vh+200px)] -top-[100vh]'>
            <div className='h-[200px] sticky top-[calc(100vh-200px)]'>
               <StickyBottomFooter/>
            </div>
        </div>
    </div>
  )
}
