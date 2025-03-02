import Link from 'next/link';
import React from 'react';

export const StickyBottomFooter = () => {
  return (
    <footer className="w-full py-6 sm:py-8 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#7C3AED">
              <rect width="24" height="24" rx="4"/>
            </svg>
            <span className="text-sm sm:text-[15px] text-gray-500">©  Beyond Basics, 2025. All rights reserved</span>
          </div>

          <div className="mb-4 sm:mb-6 text-sm sm:text-[15px] text-gray-600 text-center">
            built with <span className="text-red-500 mx-1">❤</span> by
            <Link href="#" className="text-gray-900 underline ml-1 hover:text-purple-600 transition-colors">
              Beyond Basics
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            <Link href="#" className="text-sm sm:text-[15px] hover:underline text-gray-500 hover:text-gray-900 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm sm:text-[15px] hover:underline text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="text-sm sm:text-[15px] hover:underline text-gray-500 hover:text-gray-900 transition-colors">
              Contact us
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              
        
              
             
            </div>

           
          </div>

          <div className="flex items-center gap-4 mt-6 sm:mt-8 sm:absolute sm:right-8 ">
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.5c0-5.3-4.7-9.5-10-9.5s-10 4.2-10 9.5c0 1.8.5 3.5 1.5 5l-1.5 3 3.8-1.5c1.7 1 3.7 1.5 5.7 1.5 5.8 0 10.5-4.2 10.5-9.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
       
    </footer>
  );
};

