

export default function BeyondSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pb-10 bg-[#FAFCFB]">
      <div className="">
        <h3 className="w-full max-w-[1184px] mx-auto text-center text-xl md:text-[40px] leading-[50px] font-medium text-black font-outfit">
          Ready to Go Beyond the Basics?
        </h3>
        <p className="md:mt-4 md:block hidden mt-2 text-[12px] md:text-[24px] text-[#475467] font-outfit">
          Don&apos;t get left behind! Join now and stay ahead in the game
        </p>
        <p className="text-[12px]  md:block hidden md:text-[24px] text-[#475467] font-outfit">
          The opportunity to level up is here—are you in?
        </p>
     <p className="md:hidden block font-outfit">Join a community of forward-thinkers mastering the skills colleges skip. Unlock your potential with hands - on challenges, expect mentors and the freedom to build waht truly excites you.</p>
        <button className=" mt-4 md:mt-6 shadow-md px-4 md:px-8 py-2 md:py-4 bg-[#0165FC] rounded-2xl text-center">
          <span
            style={{ color: "#FCFFFC", fontFamily: "Outfit" }}
            className="text-xl font-medium text-center"
          >
            Join the Community
          </span>
        </button>
      </div>
    </section>
  );
}
