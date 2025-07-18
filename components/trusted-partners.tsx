"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin } from "lucide-react"

const partnerLogos = [
  { id: 1, src: "/images/logo1.jpg", alt: "MPTF", link: "https://mptf.com/?gad_source=1&gad_campaignid=1399193914&gbraid=0AAAAAC_1JVRBODufsQ03O__lPZXu9Zyu1&gclid=CjwKCAjw4efDBhATEiwAaDBpbuTgEjxzzlsIlaWO3eodajTT_ZVkt0CJY0HuigsCvvGHto7jOV4ALBoC1OQQAvD_BwE" },
  { id: 2, src: "/images/logo2.png", alt: "UDC", link: "https://www.udc.edu/" },
  { id: 3, src: "/images/logo3.png", alt: "St. Jude", link: "https://www.stjude.org/" },
  { id: 4, src: "/images/logo4.png", alt: "Delta", link: "https://www.delta.com/" },
  { id: 5, src: "/images/logo5.png", alt: "Four Seasons", link: "https://www.fourseasons.com/" },
  { id: 6, src: "/images/logo6.png", alt: "Principal Charity Classic", link: "https://principalcharityclassic.com/" },
  { id: 7, src: "/images/logo7.png", alt: "Chapman Partnership", link: "https://chapmanpartnership.org/" },
  { id: 8, src: "/images/logo8.png", alt: "Epilepsy Foundation", link: "https://www.epilepsy.com/247-helpline?gad_source=1&gad_campaignid=288617173&gbraid=0AAAAADzJcpO5PpGs8eZ3tu7EukM8lZpkU&gclid=CjwKCAjw4efDBhATEiwAaDBpbl5sz30gQIm5cwpifWjyDk16YJjprg5uqlLxxlt0SK_IENgvoygELxoC1BIQAvD_BwE" },
  { id: 9, src: "/images/logo9.png", alt: "ZBT Foundation", link: "https://www.zbtfoundation.org/" },
  { id: 10, src: "/images/logo10.jpeg", alt: "Winspire", link: "https://www.winspireme.com/" },
  { id: 11, src: "/images/logo11.jpg", alt: "Lalo Spirits", link: "https://lalospirits.com/?srsltid=AfmBOoqj7EytoYWvbEMIrFZ-K5xNZ0FG_OUO-BwBN6OIgYu8gn-PRF2r" },
  { id: 12, isLinkedin: true, alt: "LinkedIn", link: "https://www.linkedin.com/company/thropictechnology/posts/?feedView=all" },
]

export default function TrustedPartners() {
  return (
    <section className="pt-24 pb-40 px-6 md:px-12 relative">
      {/* Background with overlapping card layers */}
      <div className="absolute inset-0">
        {/* Base background */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Overlapping background cards */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] rotate-2 opacity-100"></div> */}
        <div className="absolute top-12 left-8 right-8 bottom-12 bg-[#A4DBF4] rounded-[60px] -rotate-1 opacity-100"></div>
        <div className="absolute top-24 left-16 right-16 bottom-24 bg-[#6DC5EE] rounded-[60px] rotate-1 opacity-100"></div>
        <div className="absolute top-36 left-24 right-24 bottom-36 bg-white rounded-[60px] shadow-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Content inside white box */}
        <div className="relative max-w-6xl mx-auto pt-16 pb-4">
          {/* Heading inside white box */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Trusted by leading nonprofits and partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join organizations already making an impact through gamified fundraising
            </p>
          </div>

          {/* Single Rectangular Logo Carousel */}
          <div className="mb-20 relative">
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-16 animate-scroll-fast">
              {/* First set of logos */}
              {partnerLogos.map((logo) => (
                <a
                  key={`first-${logo.id}`}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-[200px] h-[120px] flex items-center justify-center cursor-pointer"
                >
                  {logo.isLinkedin ? (
                    <Linkedin className="h-20 w-20 text-gray-500 hover:text-[#6DC5EE] transition-colors duration-300" />
                  ) : (
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={180}
                      height={100}
                      className="object-contain max-h-[100px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((logo) => (
                <a
                  key={`second-${logo.id}`}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-[200px] h-[120px] flex items-center justify-center cursor-pointer"
                >
                  {logo.isLinkedin ? (
                    <Linkedin className="h-20 w-20 text-gray-500 hover:text-[#6DC5EE] transition-colors duration-300" />
                  ) : (
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={180}
                      height={100}
                      className="object-contain max-h-[100px] w-auto filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </a>
              ))}
            </div>
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
