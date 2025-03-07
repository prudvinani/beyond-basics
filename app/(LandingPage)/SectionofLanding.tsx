import React from 'react';

export const SectionofLanding = () => {
  return (
    <div className="flex flex-col  md:gap-y-14 lg:gap-y-16 -mt-[10vh] sm:-mt-20 md:-mt-28">
      
      {/** Section 1 */}
      <section 
        className="bg-[#09d85f]  md:h-[310px] font-outfit tracking-tight mx-5 text-white flex flex-col md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 rounded-3xl sticky md:static"
        style={{ top: "0px" }} // Mobile stacking effect
      >
        <div className="text-center md:text-left">
          <p className="text-2xl md:text-4xl tracking-tight font-outfit">Struggling to stay ahead</p>
          <p className="text-2xl md:text-4xl mt-1">
            with the <span className="font-semibold">skills of tomorrow?</span>
          </p>
        </div>
        <p className="text-lg md:text-2xl tracking-wide font-inter max-w-[600px] text-center md:text-left mt-4 md:mt-0">
          We bring you carefully curated, in-demand topics every week, ensuring you&lsquo;re always learning 
          what matters most. From AI and automation to the latest in design, tech, and business
          we help you future-proof your skills.
        </p>
      </section>

      {/** Section 2 */}
      <section 
        className="bg-[#966fd6]  md:h-[340px] tracking-wide font-outfit text-white flex flex-col mx-5 md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 rounded-3xl sticky md:static"
        style={{ top: "50px" }} // Mobile stacking effect
      >
        <div className="text-center md:text-left">
          <p className="font-inter text-3xl md:text-4xl tracking-tight">Not sure where to</p>
          <p className="font-inter text-3xl md:text-4xl font-semibold tracking-tight">start or how to explore</p>
          <p className="font-inter text-3xl md:text-4xl font-semibold">opportunities?</p>
        </div>
        <p className="text-lg md:text-2xl tracking-wide leading-relaxed max-w-[600px] font-sans text-center md:text-left mt-4 md:mt-0">
          We guide you with step-by-step structured learning hands-on tasks, and expert mentorship 
          so you gain practical experience. Plus you&lsquo;ll be part of a supportive community that helps you 
          discover new opportunities and grow with confidence.
        </p>
      </section>

      {/** Section 3 */}
      <section  
        className="bg-[#427977]  md:h-[340px] text-white flex flex-col mx-5 md:flex-row justify-between items-center md:items-start py-16 px-6 md:px-10 md:mx-32 rounded-3xl sticky md:static"
        style={{ top: "100px" }} // Mobile stacking effect
      >
        <div className="text-center md:text-left">
          <p className="font-inter text-3xl md:text-[34px] font-outfit tracking-tight">
            Missing a roadmap to <span className="font-outfit text-3xl md:text-4xl font-semibold">learn,</span>
          </p>
            <p className="font-inter text-3xl md:text-4xl font-outfit font-semibold tracking-tight">grow, and earn consistently?</p>
        </div>
        <p className="text-lg md:text-2xl font-inter tracking-wide leading-relaxed max-w-[600px] text-center md:text-left mt-4 md:mt-0">
          Every week, you&lsquo;ll master a new topic with practical exercises to build real expertise. 
          Our structured approach ensures you stay on track while gaining the skills needed to unlock 
          new career opportunities, freelance gigs, or entrepreneurial ventures.
        </p>
      </section>

    </div>
  );
};
