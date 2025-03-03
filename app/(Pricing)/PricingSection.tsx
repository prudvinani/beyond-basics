"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "sixMonth">("monthly")

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-16 px-4 md:mb-[670px]">
     
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Pricing</h1>

      <p className="text-center max-w-2xl text-lg mb-12">
        Unlock resources, network with experts, and accelerate your journey whether you&apos;re just starting or ready
        to go pro!
      </p>

     
      <div className="inline-flex items-center bg-[#1a1a1a]  rounded-2xl p-1 mb-16">
        <button
          className={`px-6 py-3 rounded-2xl text-base font-medium transition-colors ${
            billingPeriod === "monthly" ? "bg-white text-black" : "text-white"
          }`}
          onClick={() => setBillingPeriod("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-3 rounded-2xl text-base font-medium transition-colors ${
            billingPeriod === "sixMonth" ? "bg-white text-black" : "text-white"
          }`}
          onClick={() => setBillingPeriod("sixMonth")}
        >
          6 month
        </button>
      </div>

      {/* Pricing Cards */}
      {billingPeriod === "monthly" ? (
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-2xl">
          {/* Monthly Basic Card */}
{/*  */}
          {/* inset-0 bg-[radial-gradient(circle,_#0165FC_0%,_rgba(1,101,252,0.5)_50%)] blur-[150px] */}
          <div className="rounded-3xl overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-b from-[#083d8e] to-[black] p-8 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
              <h2 className="text-2xl font-bold mb-4">Basic</h2>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">₹499</span>
                <span className="text-gray-300 ml-1">/monthly</span>
              </div>
              <p className="mt-4 text-sm text-gray-200">For learners looking for real-world  experience & networking.</p>
              <div className="mt-2 border-t border-gray-700 pt-3">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span>Everything in Free</span>
                  </div>
                  <div className="flex items-start">
                  <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hackathons</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span>Community Access & Networking Events</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span>Weekly Webinars & Doubt Clearing</span>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Internship & Job <br /> Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 md:mx-5">
              <button className="w-full py-3 rounded-3xl hover:bg-blue-500 bg-[#333333] text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

         
          <div className="rounded-3xl overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-b from-[#533e71] to-[#000000] p-8 relative">
              <div className="absolute top-4 right-4 bg-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">₹749</span>
                <span className="text-gray-300 ml-1">/monthly</span>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                For serious learners seeking <br /> mentorship & industry <br /> opportunities.
              </p>
              <div className="mt-2 border-t border-gray-700 pt-3">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                    <span>Everything in Basic</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white  mr-3 mt-0.5 flex-shrink-0" />
                    <span>Hands-on Workshops & Industry Expert Sessions</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white  mr-3 mt-0.5 flex-shrink-0" />
                    <span>One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white  mr-3 mt-0.5 flex-shrink-0" />
                    <span>Internship & Job Opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-white  mr-3 mt-0.5 flex-shrink-0" />
                    <span>Priority Support & Exclusive Community Events</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 md:mx-5 ">
              <button className="w-full py-3 hover:bg-purple-400 rounded-3xl  bg-[#333333] text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl">
          {/* 6 Month Basic Card */}
          <div className="rounded-3xl overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-b from-[#083d8e] to-[black] p-8 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
              <h2 className="text-2xl font-bold mb-4">Basic</h2>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">₹1999</span>
                <span className="text-gray-300 ml-1">/6month</span>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                For learners looking for  real-world experience & networking.
              </p>
              <div className="mt-3 border-t border-gray-700 pt-2">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Everything in Free</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Hackathons</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      Community Access & <br /> Networking Events
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      Weekly Webinars & Doubt <br /> Clearing
                    </span>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <X className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">
                      Internship & Job <br /> Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 md:mx-5">
              <button className="w-full py-3 rounded-3xl bg-[#333333] text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-800">
            {/*             <div className="bg-gradient-to-br from-[#533e71] to-[black] p-8 relative">
 */}
            <div className="bg-gradient-to-b from-[#533e71] to-[#000000] p-8 relative">
              <div className="absolute top-4 right-4 bg-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </div>
              <h2 className="text-2xl font-bold mb-4">Premium</h2>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold">₹2999</span>
                <span className="text-gray-300 ml-1">/6month</span>
              </div>
              <p className="mt-4 text-sm text-gray-200">
                For serious learners seeking <br /> mentorship & industry <br /> opportunities.
              </p>
              <div className="mt-3 border-t border-gray-700 pt-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Everything in Basic</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      Hands-on Workshops & <br /> Industry Expert Sessions
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Internship & Job Opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>
                      Priority Support & Exclusive <br /> Community Events
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 md:mx-5">
              <button className="w-full py-3 rounded-3xl bg-gray-600 text-white font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

