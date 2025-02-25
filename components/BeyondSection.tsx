export default function BeyondSection() {
    return (
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-[#FAFCFB]">
        {/* Laptop View (Default) */}
        <div className="hidden md:block">
          <h2 className="text-[28px] md:text-[32px] tracking-tight font-semibold text-[#101828] leading-tight">
            Ready to Go Beyond the Basics?
          </h2>
          <p className="mt-4 text-[16px] md:text-[24px] text-[#475467]">
          Don&apos;t get left behind! Join now and stay ahead in the game
          </p>
          <p className="text-[16px] md:text-[24px] text-[#475467]">
          The opportunity to level up is here—are you in?
          </p>
          <button className="mt-6 px-6 py-3 bg-[#1570EF] text-white font-medium text-[20px] rounded-xl shadow-md transition">
            Join the Community
          </button>
        </div>
  
        {/* Mobile View */}
        <div className="block md:hidden">
          <h2 className="text-[24px] font-semibold text-[#101828] leading-snug">
            Ready to Go Beyond the Basics?
          </h2>
          <p className="mt-3 text-[14px] text-[#475467]">
            Join a community of forward-thinkers mastering the skills colleges skip. Unlock your potential with hands-on
            challenges&#44; expert mentors&#44 and the freedom to build what truly excites you.
          </p>
          <button className="mt-5 px-5 py-2 bg-[#1570EF] text-white font-medium text-[16px] rounded-lg shadow-md transition">
            Join the Community
          </button>
        </div>
      </section>
    );
  }
  