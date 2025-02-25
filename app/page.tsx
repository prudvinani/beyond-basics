
  import { Introduction } from "./Introduction";
  import WhyJoinUs, {} from "./JoinedUs";
import Footer from "@/components/Footer";
import BeyondSection from "@/components/BeyondSection";
import HeroSection from "@/components/hero-section";
import ScrollingCourses from "@/components/scrolling-course";
import SocialMedia from "@/components/SocialMedia";
import JoinCommunityButton from "@/components/JoinCommunityButton";
import MainCodeofAnimation from "@/components/Animation/mainCode";
import { VideoCarousel } from "./VideoSector";


  export default function Home() {
    return (
    <div >
   {/* <div className="bg-[#0165fc] text-white flex justify-between items-center px-6 pt-5 ">
          <p className="text-2xl  font-semibold font-inter">beyond</p>
          <div className="flex text-lg items-center space-x-4 font-inter font-semibold ">
            <p>Courses</p>
            <p>Mentors</p>
            <p>Pricing</p>
<p>            <button className="px-4 py-2 rounded-xl   text-black bg-white hover:bg-gray-100 transition duration-200">Join the Community
</button></p>
          </div>

        </div> */}


{/* <div className="text-center bg-[#0165fc] font-inter pb-16 pt-24 md:pb-32 md:pt-36">
  <p className="text-white text-4xl md:text-6xl font-bold font-inter leading-tight">
    No Boring lectures
  </p>
  <p className="text-[#ffbf00] text-4xl md:text-6xl font-bold pt-2 font-outfit leading-tight">
    Learn What Colleges Don't Teach
  </p>
  <p className="text-white text-lg md:text-xl pt-4 leading-relaxed">
    No textbooks, just real experience - reshape your career path in 6 months
  </p>
  <p className="text-white text-lg md:text-xl leading-relaxed">
    Learn by doing. Master in-demand industry skills weekly!
  </p>
  <button className="px-4 py-2 font-outfit rounded-xl mt-3 mb-12 md:mb-20 text-black bg-white hover:bg-gray-100 transition duration-200">
    Join the Community
  </button>
</div> */}



  <div>
    

{/* 
  <div  className="bg-[#09d85f] text-white -mt-36 flex justify-between py-16 px-10 mx-32 items-center rounded-3xl">
  <div>
  <p className="text-4xl font-inter tracking-wide">Struggling to stay ahead </p>
  <p className="text-4xl mt-1"> with the <span className="font-semibold">skills of tomorrow?</span></p>
  </div>
    <p className="text-2xl font-inter  ">We bring you carefully curated, in-demand topics <br/> every week, ensuring you're always learning  <br/> what matters most. From Al and automation to <br/> the latest in design, tech, and business, we help  <br/> you future-prof your skills.</p>
    </div> */}




  
  </div>

<MainCodeofAnimation/>
{/* <FeatureSections/> */}
{/* 


  <p className="text-center font-inter text-4xl  mt-10">Your Premium Space to </p>
  <p className="text-center font-inter text-4xl">Learn, Connect, and Excel</p> */}
  <HeroSection />


 <SocialMedia/>


  {/* <InfiniteScroll/> */}
  <VideoCarousel/>
  <JoinCommunityButton/>

  <WhyJoinUs/>
      <Introduction/>
<BeyondSection/>
<ScrollingCourses />

  <Footer/>





    </div>
    );
  }
