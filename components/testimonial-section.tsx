"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            What Our Partners Say
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Real feedback from nonprofits transforming their fundraising
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Image */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Decorative background layers */}
                  <div className="absolute -inset-4 bg-[#c7ff99] rounded-3xl rotate-3 opacity-40 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute -inset-2 bg-[#ff999a] rounded-3xl -rotate-2 opacity-50 group-hover:-rotate-4 transition-transform duration-300"></div>
                  
                  {/* Image container */}
                  <div className="relative bg-white p-3 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=400&width=320"
                      alt="Sarah Martinez"
                      width={320}
                      height={400}
                      className="rounded-2xl object-cover w-80 h-96"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonial */}
              <div className="order-1 lg:order-2">
                {/* Quote Icon */}
                <div className="text-6xl text-[#9ebbff] mb-8 font-black">"</div>

                {/* Quote */}
                <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed mb-8">
                  Thropic Games completely transformed our fundraising approach. What used to be a struggle to engage
                  donors became an <span className="text-[#ff999a]">exciting community event</span>. We raised more in one week than we typically do in three
                  months, and our supporters are already asking when the <span className="text-[#c7ff99]">next game</span> will be!
                </blockquote>

                {/* Attribution */}
                <div className="relative">
                  {/* Accent line */}
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c7ff99] via-[#ff999a] to-[#9ebbff] rounded-full"></div>
                  
                  <div className="pl-8">
                    <p className="text-xl md:text-2xl font-black text-gray-900 mb-2">Sarah Martinez</p>
                    <p className="text-lg md:text-xl text-gray-600 font-medium">Development Director</p>
                    <p className="text-base md:text-lg text-[#9ebbff] font-semibold">Ocean Conservation Alliance</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-[#c7ff99] mb-2">3x</div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">Faster Fundraising</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-[#ff999a] mb-2">+250%</div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">Donor Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="relative px-12 py-6 font-black text-xl text-gray-800 bg-[#9ebbff] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#c7ff99] hover:scale-105">
            <span className="relative z-10">Join Our Success Stories</span>
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#9ebbff] via-[#f1bbff] via-[#ff999a] to-[#c7ff99] animate-spin-slow"></div>
              <div className="absolute inset-[2px] rounded-full bg-[#9ebbff]"></div>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
