import Link from "next/link";
import { Button } from "@/components/ui/button";

function Navigation() {
  return (
    <header className="w-full bg-[#0165FC] px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="rounded-lg p-2 flex items-center justify-center">
            <p className="text-white font-bold text-xl">BB</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link
            href="/courses"
            className="text-white hover:text-white/90 text-base font-medium"
          >
            Courses
          </Link>
          <Link
            href="/mentors"
            className="text-white hover:text-white/90 text-base font-medium"
          >
            Mentors
          </Link>
          <Link
            href="/pricing"
            className="text-white hover:text-white/90 text-base font-medium"
          >
            Pricing
          </Link>
          <Button
            variant="secondary"
            className="bg-white text-black rounded-xl hover:bg-white/90 w-[189px] py-5 px-4 font-medium text-base"
          >
            Join the Community
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
