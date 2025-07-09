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
    <section ref={sectionRef} className="py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          {/* <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Real feedback from nonprofits transforming their fundraising
          </p> */}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Image */}
              <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative group">
                  {/* Decorative background layers */}
                  <div className="absolute -inset-4 bg-[#6DC5EE] rounded-3xl rotate-3 opacity-40 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="absolute -inset-2 bg-[#FF7073] rounded-3xl -rotate-2 opacity-50 group-hover:-rotate-4 transition-transform duration-300"></div>
                  
                  {/* Image container */}
                  <div className="relative bg-white p-3 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src="/placeholder.svg?height=300&width=240"
                      alt="Karena Ries"
                      width={240}
                      height={300}
                      className="rounded-2xl object-cover w-60 h-72"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonial */}
              <div className="order-1 lg:order-2">
                {/* Quote Icon */}
                <div className="text-6xl text-[#6DC5EE] mb-8 font-black">"</div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                  Partnering with Thropic Games brought an entirely new energy to our fundraising. The <span className="text-[#FF7073]">'Gaming for Good' challenge</span> had players of all ages participating — online and in person. It was fun, mobile-friendly, and incredibly effective. We saw a <span className="text-[#6DC5EE]">surge in engagement</span> and donations we hadn't seen in years.
                </blockquote>

                {/* Attribution */}
                <div className="relative">
                  {/* Accent line */}
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6DC5EE] via-[#FF7073] to-[#6DC5EE] rounded-full"></div>
                  
                  <div className="pl-8">
                    <p className="text-lg md:text-xl font-black text-gray-900 mb-1">Karena Ries</p>
                    <p className="text-base md:text-lg text-gray-600 font-medium">Community Relations & Marketing Manager</p>
                    <p className="text-sm md:text-base text-[#6DC5EE] font-semibold">Principal Charity Classic</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
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
