import React from 'react'
import mainresume from "@/public/MainResume.svg";
import resume from "@/public/resume.png";
import Image from 'next/image';
const ResumeCard = () => {
  return (
    <div>
          <div className="bg-[#FFBF00] rounded-2xl p-6 md:p-8 flex flex-col md:col-span-4 md:row-span-2">
          <h2 className="text-[31px] font-bold text-[#5C3F00]">Career Ready</h2>

          <div className="flex-grow flex items-center justify-center my-6">
            <Image
              src={mainresume}
              alt="do"
              width={205}
              height={300}
              className="relative hover:ml-5"
            />
            <Image
              src={resume}
              alt="Resume templates"
              width={230}
              height={300}
              className="object-contain absolute ml-10 mt-3 hover:mr-6"
            />
          </div>
          <p className="text-lg mt-auto text-[#5C3F00]">
            Ace your resume and interviews to land <br /> your dream job.
          </p>
        </div>
    </div>
  )
}

export default ResumeCard