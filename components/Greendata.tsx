export default function FeatureSections() {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-2 space-y-2">
        <section className="bg-[#7ABE2A] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl  tracking-tight font-bold text-white leading-tight">
              Struggling to stay ahead with the skills of tomorrow?
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              We bring you carefully curated, in-demand topics every week, ensuring you're always learning what matters
              most. From AI and automation to the latest in design, tech, and business, we help you future-proof your
              skills.
            </p>
          </div>
        </section>
  
        <section className="bg-[#966FD6] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl tracking-tight font-bold text-white leading-tight">
              Not sure where to start or how to explore opportunities?
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              We guide you with step-by-step structured learning, hands-on tasks, and expert mentorship so you gain
              practical experience. Plus, you'll be part of a supportive community that helps you discover new
              opportunities and grow with confidence.
            </p>
          </div>
        </section>
      </div>
    )
  }
  
  