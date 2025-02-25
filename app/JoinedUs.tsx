import { Search, Star, Eye, Heart, Globe, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function WhyJoinUs() {
  const features = [
    {
      icon: Search,
      iconBg: "bg-[#9333EA]",
      title: "Career-Boosting Insights",
      description: "Gain knowledge that enhances your career prospects and keeps you competitive.",
    },
    {
      icon: Star,
      iconBg: "bg-[#437C78]",
      title: "Tailored Learning Paths",
      description: "Follow structured courses designed to meet your unique learning needs and goals.",
    },
    {
      icon: Eye,
      iconBg: "bg-[#2563EB]",
      title: "Stay ahead of the curve",
      description: "Learn the latest industry trends and emerging technologies to stay relevant.",
    },
    {
      icon: Heart,
      iconBg: "bg-[#76B947]",
      title: "Engaging Community",
      description: "Connect with peers, mentors, and professionals for guidance and motivation.",
    },
    {
      icon: Globe,
      iconBg: "bg-[#FFC107]",
      title: "Real-World Applications",
      description: "Apply what you learn through practical projects and real-life scenarios.",
    },
    {
      icon: Users,
      iconBg: "bg-[#22C55E]",
      title: "Industry Curriculum",
      description: "Access up-to-date content curated by experts to match industry standards.",
    },
  ]

  return (
    <div className="bg-black min-h-screen py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl  mx-auto">
        <h2 className="md:text-4xl text-2xl font-bold text-center text-white mb-12">Why Should You Join Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white rounded-3xl py-3 border-none relative">
              <div className={`absolute -top-5 left-10 ${feature.iconBg} rounded-full p-3 text-white`}>
                <feature.icon className="w-6 h-6" />
              </div>
             <div className="py-6 max-w-sm">
             <CardHeader className="">
                <h3 className="text-xl  text-center font-sans font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center font-sans text-lg leading-6 -mt-5 md:mx-6">{feature.description}</p>
              </CardContent>
             </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

