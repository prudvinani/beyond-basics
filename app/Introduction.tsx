
import Image from "next/image"
import harshverse from "@/public/harsha.png"
import { Camera, Code2, Users, Youtube } from "lucide-react"
export const Introduction=()=>{
    return <div>
        <div className="min-h-screen  flex items-center justify-center ">
      <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-105">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <Image
            src={harshverse}
            alt="Profile"
            className="w-full h-96 object-cover cursor-pointer"
          
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h1 className="text-4xl font-bold text-white mb-2">Harsha Vardhan</h1>
            <p className="text-gray-200 text-lg">Building the future of tech</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full flex items-center gap-2">
              <Code2 size={18} />
              Software Engineer
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full flex items-center gap-2">
              <Users size={18} />
              Founder
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full flex items-center gap-2">
              <Youtube size={18} />
              Youtuber
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2">
              <Camera size={18} />
              Influencer
            </span>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Passionate about creating innovative solutions and sharing knowledge with the community. 
            Specializing in full-stack development and emerging technologies.
          </p>
          
        
        </div>
      </div>
    </div>
    </div>
}