"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#0165FC] px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="rounded-lg p-2 flex items-center justify-center">
            <p className="text-white font-bold text-xl">BB</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#courses" className="text-white hover:text-white/90 text-base font-medium">
            Courses
          </Link>
          <Link href="#mentors" className="text-white hover:text-white/90 text-base font-medium">
            Mentors
          </Link>
          <Link href="#pricing" className="text-white hover:text-white/90 text-base font-medium">
            Pricing
          </Link>
          <Link href="#about" className="text-white hover:text-white/90 text-base font-medium">
            About Us
          </Link>
          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl hover:bg-white/90 w-[189px] py-5 px-4 font-medium text-base"
          >
            Join the Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="md:hidden absolute bg-[#0165FC] top-16 left-0 w-full py-6 flex flex-col items-center space-y-6 z-50"
          >
            <Link href="#courses" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Courses
            </Link>
            <Link href="#pricing" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="#about" className="text-white text-lg" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Button
              variant="secondary"
              className="bg-white text-black rounded-xl hover:bg-white/90 w-[189px] py-4 px-6 font-medium text-lg"
            >
              Join the Community
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navigation;
