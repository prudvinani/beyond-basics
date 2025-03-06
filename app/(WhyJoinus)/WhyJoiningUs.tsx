
import search from "@/public/whyjoin/search.gif"
import global from "@/public/whyjoin/global.gif"
import heart from "@/public/whyjoin/heart.gif"
import eye from "@/public/whyjoin/eye.gif"
import start from "@/public/whyjoin/start.gif"
import student from "@/public/whyjoin/student.gif"
import Image from "next/image"

export  function JoinUsSection() {
  return (
    <div className="bg-[#12100e] min-h-screen py-16 px-6  font-outfit">
      <div className="max-w-[1200px]  mx-auto">
      <h1 className="text-[#fcfffc] text-3xl md:text-[48px] text-center mb-24 md:mt-12  ">
  Why Should You Join Us?
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[24px] px-10 pt-10 relative md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#966fd6] rounded-full p-2 w-[64px] h-[64px] flex items-center justify-center">
            <Image src={search} alt="search"/>
            </div>
            <h2 className="text-[#12100e] text-[20px] md:text-[24px] font-medium mb-1 font-outfit  tracking-normal  ">Career-Boosting Insights</h2>
            <p className="text-[#12100e] text-[18px] font-thin leading-6  ">
              Gain knowledge that enhances your career prospects and keeps you competitive.
            </p>
          </div>

          <div className="bg-white rounded-[24px] mt-8 md:mt-0 px-12 pt-10 relative md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#427977] rounded-full p-3 w-[64px] h-[64px] flex items-center justify-center">
              <div className="text-[#ffbf00]">
              <Image src={start} alt="search"/>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[20px] md:text-[24px] font-medium mb-1">Tailored Learning Paths</h2>
            <p className="text-[#12100e] text-[18px] leading-6  ">
              Follow structured courses designed to meet your unique learning needs and goals.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-12 pt-10 mt-8 md:mt-0  relative h-[210px]  md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#0165fc] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
            <Image src={eye} alt="search"/>            </div>
            <h2 className="text-[#12100e] text-[20px] md:text-[24px] font-medium mb-1">Stay ahead of the curve</h2>
            <p className="text-[#12100e] text-[18px]  leading-6   ">
              Learn the latest industry trends and emerging technologies to stay relevant.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-12 pt-10 mt-8 relative h-[210px] md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#7abe2a] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
              <div className="text-white">
              <Image src={heart} alt="search"/>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[20px] md:text-[24px] font-medium mb-3">Engaging Community</h2>
            <p className="text-[#12100e] text-[18px] leading-6 ">
              Connect with peers, mentors, and professionals for guidance and motivation.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-10 pt-10 mt-8 relative  md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#ffbf00] rounded-full p-3 w-[64px] h-[64px]  flex items-center justify-center">
            <Image src={global} alt="search"/>
            </div>
            <h2 className="text-[#12100e] text-[18px] md:text-[24px] font-medium mb-1">Real-World Applications</h2>
            <p className="text-[#12100e] text-[18px] leading-6   ">
              Apply what you learn through practical projects and real-life scenarios.
            </p>
          </div>

          <div className="bg-white rounded-[24px] mt-8 px-12 pt-10 relative h-[210px] md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#09d85f] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
              <div className="text-white w-8 h-8">
              <Image src={student} alt="search"/>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[20px] md:text-[24px] font-medium mb-1">Industry Curriculum</h2>
            <p className="text-[#12100e] text-[18px]  leading-6      ">
              Access up-to-date content curated by experts to match industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

