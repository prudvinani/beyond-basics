import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <header className="w-full bg-[#0066FF] px-4 py-3">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
      
        <Link href="/" className="flex items-center">
        <p className="  text-white font-semibold md:text-3xl sm:text-sm">
                BB
              </p>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/courses" className="text-white hover:text-white/90 font-medium">
            Courses
          </Link>
          <Link href="/mentors" className="text-white hover:text-white/90 font-medium">
            Mentors
          </Link>
          <Link href="/pricing" className="text-white hover:text-white/90 font-medium">
            Pricing
          </Link>
          <Button variant="secondary" className="bg-white text-black rounded-xl hover:bg-white/90 font-medium px-6">
          Join the Community
        </Button>
        </div>

        {/* CTA Button */}
       
      </nav>
    </header>
  )
}

