import { Search, Eye, Globe } from "lucide-react"

export  function JoinUsSection() {
  return (
    <div className="bg-[#12100e] min-h-screen py-16 px-6  font-outfit">
      <div className="max-w-[1200px]  mx-auto">
      <h1 className="text-[#fcfffc] text-3xl md:text-[48px] text-center mb-24">
  Why Should You Join Us?
</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[24px] px-10 pt-10 relative md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#966fd6] rounded-full p-2 w-[64px] h-[64px] flex items-center justify-center">
              <Search className="text-white w-8 h-8" />
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-1 font-outfit  tracking-normal  ">Career-Boosting Insights</h2>
            <p className="text-[#12100e] text-[18px] font-thin leading-6  ">
              Gain knowledge that enhances your career prospects and keeps you competitive.
            </p>
          </div>

          <div className="bg-white rounded-[24px] mt-8 md:mt-0 px-12 pt-10 relative md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#427977] rounded-full p-3 w-[64px] h-[64px] flex items-center justify-center">
              <div className="text-[#ffbf00]">
                <svg width="36" height="36" className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="#ffbf00"
                    stroke="#ffbf00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-1">Tailored Learning Paths</h2>
            <p className="text-[#12100e] text-[18px] leading-6  ">
              Follow structured courses designed to meet your unique learning needs and goals.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-12 pt-10 mt-8 md:mt-0  relative h-[210px]  md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#0165fc] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
              <Eye className="text-white w-8 h-8" />
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-1">Stay ahead of the curve</h2>
            <p className="text-[#12100e] text-[18px]  leading-6   ">
              Learn the latest industry trends and emerging technologies to stay relevant.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-12 pt-10 mt-8 relative h-[210px] md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#7abe2a] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
              <div className="text-white">
                <svg width="36" height="36" className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 12.572L12 20L4.5 12.572C3.25 11.335 2.5 9.617 2.5 7.786C2.5 4.357 5.25 1.572 8.66 1.572C10.38 1.572 11.99 2.312 13 3.572C14.01 2.312 15.62 1.572 17.34 1.572C20.75 1.572 23.5 4.357 23.5 7.786C23.5 9.617 22.75 11.335 21.5 12.572H19.5Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-3">Engaging Community</h2>
            <p className="text-[#12100e] text-[18px] leading-6 ">
              Connect with peers, mentors, and professionals for guidance and motivation.
            </p>
          </div>

          <div className="bg-white rounded-[24px] px-10 pt-10 mt-8 relative  md:w-[350px] h-[210px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#ffbf00] rounded-full p-3 w-[64px] h-[64px]  flex items-center justify-center">
              <Globe className="text-white w-8 h-8" />
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-1">Real-World Applications</h2>
            <p className="text-[#12100e] text-[18px] leading-6   ">
              Apply what you learn through practical projects and real-life scenarios.
            </p>
          </div>

          <div className="bg-white rounded-[24px] mt-8 px-12 pt-10 relative h-[210px] md:w-[350px] shadow-sm">
            <div className="absolute -top-10 left-8 bg-[#09d85f] rounded-full p-3  w-[64px] h-[64px]  flex items-center justify-center">
              <div className="text-white w-8 h-8">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 3H8.5C9.9 3 11 4.1 11 5.5C11 6.9 9.9 8 8.5 8H2V3Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8H10.5C11.9 8 13 9.1 13 10.5C13 11.9 11.9 13 10.5 13H2V8Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 13H8.5C9.9 13 11 14.1 11 15.5C11 16.9 9.9 18 8.5 18H2V13Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3H22V18H16"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 21L16 16L21 21"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-[#12100e] text-[24px] font-medium mb-1">Industry Curriculum</h2>
            <p className="text-[#12100e] text-[18px]  leading-6      ">
              Access up-to-date content curated by experts to match industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

