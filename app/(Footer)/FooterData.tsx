import Link from 'next/link';
import React from 'react';

export const StickyBottomFooter = () => {
  return (
    <footer className="w-full py-6 sm:py-8 px-4 bg-black relative text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#09D85F]" viewBox="0 0 24 24" fill="#7C3AED">
              <rect width="24" height="24" rx="4"/>
            </svg>
            <span className="text-sm sm:text-[15px] text-white ">©  Beyond Basics, 2025. All rights reserved</span>
          </div>

          <div className="mb-4 sm:mb-6 text-sm sm:text-[15px] text-white text-center">
            built with <span className="text-red-500 mx-1">❤</span> by
            <Link href="#" className="text-white underline ml-1 hover:text-[#09D85F] transition-colors">
              Beyond Basics
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4  ">
            <Link href="#" className="text-sm sm:text-[15px] hover:underline cursor-pointer transition-colors">
            <p className='hover:underline cursor-pointer'>  Terms & Conditions</p>
            </Link>
            <Link href="#" className="text-sm sm:text-[15px] hover: cursor-pointer hover:underline transition-colors">
            <p className='hover:underline'>  Privacy Policy</p>
            </Link>
            <a href="#" className="text-sm sm:text-[15px] hover:underline cursor-pointer transition-colors">
              Contact us
            </a>
          </div>
          <p className="text-[#09D85F] font-bold md:-mt-6 text-[32px] sm:text-[64px] md:text-[96px] lg:text-[128px] xl:text-[176px]">
  Beyond Basics
</p>


        

          <div className="flex items-center gap-4 mt-6 sm:mt-8 sm:absolute sm:right-8 pb-8 ">
            
            <Link href="https://www.linkedin.com/company/codedale/" target='_blank' className="text-white transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          
            <Link href="https://www.instagram.com/beyondbasics.dev/" target='_blank' className=" transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
          
          </div>

        </div>
      </div>
       
    </footer>
  );
};

