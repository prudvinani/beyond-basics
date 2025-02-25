import React from 'react'

const SocialMedia = () => {
  const cards = [
    { title: "Career Ready", description: "Ace your resume and interviews to land your dream job", gradient: "from-[#ffbf00] to-[#ffda6a]", textColor: "text-[#5c3f00]", span: "md:row-span-2" },
    { title: "Social Connect", description: "Build your brand and network to shine online", gradient: "from-[#427977] to-[#5fa3a0]", textColor: "text-white", span: "lg:col-span-2" },
    { title: "Content Creator", description: "Master the art of creating engaging content", gradient: "from-[#12100e] to-[#2c2927]", textColor: "text-white" },
    { title: "No-Code Dev", description: "Design and launch websites effortlessly with no-code tools", gradient: "from-[#7abe2a] to-[#9ed85b]", textColor: "text-[#3f4e00]" },
    { title: "Tech Stacks", description: "Break down complex tech trends into clear insights", gradient: "from-[#0165fc] to-[#4d8ffd]", textColor: "text-white", span: "md:col-span-2" },
    { title: "Gen-AI", description: "Explore cutting-edge AI trends and tools today", gradient: "from-[#966fd6] to-[#b69ce4]", textColor: "text-white" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl  overflow-hidden ${card.span || ''}`}
          >
            <div className={`bg-gradient-to-br ${card.gradient} ${card.textColor} p-8 h-full flex flex-col justify-between`}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">{card.title}</h2>
              <p className="text-lg sm:text-xl font-medium leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialMedia
