import AnimatedText from "./animation"
import { outfit } from "./fonts"
import Navigation from "../Navigation"

export default function MainCodeofAnimation() {
  return (
    <div>
      <div
      className={` bg-[#0066FF] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 ${outfit.variable}`}
    >
      <Navigation/>
  
      <main className="text-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8  md:pt-36">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h1 className="text-4xl sm:text-5xl tracking-tighter md:text-6xl lg:text-7xl font-bold text-white font-outfit">No</h1>
            <AnimatedText text="Boring Lectures"  />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-tight font-semibold text-amber-500 -mt-6  font-outfit">
          Learn What Colleges Doesn't teach
        </h2>

        <div className="space-y-3 sm:space-y-4 leading-6 mt-6 text-white/90 text-base sm:text-lg md:text-xl font-outfit">
          <p className="max-w-2xl mx-auto -mb-3">
            No textbooks, just real experience `&apos reshape your career path in 6 months.
          </p>
          <p className="max-w-2xl mx-auto -mt-6">Learn by doing. Master in-demand industry skills weekly!</p>
        </div>

        <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 md:mb-44  bg-white rounded-full text-gray-800 font-medium text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg font-outfit">
          Join the Community
        </button>
      </main>
 




      
    </div>



  <section  className="bg-[#09d85f] font-sans tracking-tight text-white -mt-36 flex justify-between py-16 px-10 mx-32 items-center rounded-3xl">
  <div>
  <p className="text-4xl font-sans tracking-tight">Struggling to stay ahead </p>
  <p className="text-4xl mt-1"> with the <span className="font-semibold">skills of tomorrow?</span></p>
  </div>
    <p className="text-2xl font-inter  ">We bring you carefully curated&rsquo in-demand topics <br/> every week, ensuring youre always learning  <br/> what matters most&rsquo From Al and automation to <br/> the latest in design&rsquo tech&rsquo and business, we help  <br/> you future-prof your skills.</p>
    </section>




        <section className="bg-[#966fd6] text-white flex justify-between py-16 px-10 mx-32 mt-7 items-center rounded-xl ">
    <div>
    <p className="font-inter text-4xl tracking-tight">Not sure where to </p>
      <p className="font-inter text-4xl font-semibold tracking-tight">start or how to explore</p>
      <p className="font-inter text-4xl font-semibold"> opportunities?</p>
    </div>
      <p  className="text-2xl font-sans tracking-tight ">We guide you with step-by-step structured <br/>learning, hands-on tasks, and expert mentorship <br/> so you gain practical experience. Plus&rsquo you'll be <br/> part of a supportive community that helps you <br/> discover new opportunities and grow with <br/>
      confidence.
      </p>
      </section> 



      <section className="bg-[#427977] text-white flex justify-between py-16 px-10 mx-32 mt-7 items-center rounded-xl">
  <div>
<p  className="font-inter text-[34px] font-sans tracking-tight ">Missing a roadmap to <span  className="font-inter text-4xl font-semibold">learn,</span>  </p>
  <p className="font-inter text-4xl font-semibold tracking-tight"> grow, and earn consistently?  </p>
  </div>
    <p className="text-2xl font-inter font-sans tracking-tight ">Every week, you'll master a new topic with <br/> practical exercises to build real expertise. Our <br/> structured approach ensures you stay on track<br/> while gaining the skills needed to unlock new <br/> career opportunities, freelance gigs, or <br/> entrepreneurial ventures.</p>
      </section> 



    </div>
    
  )
}

