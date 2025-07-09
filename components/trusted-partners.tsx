"use client"

import { useState } from "react"
import Image from "next/image"

const partnerLogos = [
  { id: 1, src: "/images/logo1.jpg", alt: "Partner 1" },
  { id: 2, src: "/images/logo2.png", alt: "Partner 2" },
  { id: 3, src: "/images/logo3.jpg", alt: "Partner 3" },
  { id: 4, src: "/images/logo4.png", alt: "Partner 4" },
  { id: 5, src: "/images/logo5.png", alt: "Partner 5" },
  { id: 6, src: "/images/logo6.png", alt: "Partner 6" },
  { id: 7, src: "/images/logo7.png", alt: "Partner 7" },
  { id: 8, src: "/images/logo8.png", alt: "Partner 8" },
  { id: 9, src: "/images/logo9.png", alt: "Partner 9" },
  { id: 10, src: "/images/logo10.jpeg", alt: "Partner 10" },
]

export default function TrustedPartners() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background with overlapping card layers */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Overlapping background cards */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] rotate-2 opacity-100"></div>
        <div className="absolute top-12 left-8 right-8 bottom-12 bg-[#c7ff99] rounded-[60px] -rotate-1 opacity-100"></div>
        <div className="absolute top-24 left-16 right-16 bottom-24 bg-[#ff999a] rounded-[60px] rotate-1 opacity-100"></div>
        <div className="absolute top-36 left-24 right-24 bottom-36 bg-white rounded-[60px] shadow-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Trusted by leading nonprofits and partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of organizations already making an impact through gamified fundraising
          </p>
        </div>

        {/* Single Rectangular Logo Carousel */}
        <div className="mb-20 relative">
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-16 animate-scroll-fast">
              {/* First set of logos */}
              {partnerLogos.map((logo) => (
                <div
                  key={`first-${logo.id}`}
                  className="group min-w-[200px] h-[120px] flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={180}
                    height={100}
                    className="object-contain max-h-[100px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((logo) => (
                <div
                  key={`second-${logo.id}`}
                  className="group min-w-[200px] h-[120px] flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={180}
                    height={100}
                    className="object-contain max-h-[100px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-fast {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
