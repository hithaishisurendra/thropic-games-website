"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Step {
  id: number
  emoji: string
  stepNumber: string
  title: string
  description: string
  image: string
}

const steps: Step[] = [
  {
    id: 1,
    emoji: "🎮",
    stepNumber: "1. Game On",
    title: "Game On",
    description: "Your nonprofit whips up a fun, custom game to rally the troops.",
    image: "/images/Step1.png",
  },
  {
    id: 2,
    emoji: "📬",
    stepNumber: "2. Send It Out",
    title: "Send It Out",
    description: "Blast the game to your supporters — email, social, carrier pigeon, whatever works.",
    image: "/images/Step2.png",
  },
  {
    id: 3,
    emoji: "💥",
    stepNumber: "3. Play, Donate, Win!",
    title: "Play, Donate, Win!",
    description: "Players jump in, rack up points, donate to your cause, and battle for glory. Top scorers take home cool stuff. You raise money. Everyone Wins!",
    image: "/images/Step3.png",
  },
]

export default function HowItWorksCarousel() {
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
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: "#f8f9fb" }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Three simple steps to turn gaming into fundraising success
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Step Card with layered backgrounds */}
              <div className="relative">
                {/* Decorative background layers */}
                <div className="absolute -inset-3 bg-[#d9d9d9] rounded-3xl rotate-2 opacity-100 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="absolute -inset-2 bg-[#8CD1F0] rounded-3xl -rotate-1 opacity-100 group-hover:-rotate-2 transition-transform duration-300"></div>
                <div className="absolute -inset-1 bg-[#694F5D] rounded-3xl rotate-1 opacity-100 group-hover:rotate-2 transition-transform duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  {/* Step Number and Emoji */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{step.emoji}</div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                      {step.stepNumber}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="flex justify-center mb-8">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={`${step.stepNumber} - ${step.title}`}
                        width={240}
                        height={480}
                        className="rounded-2xl shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="relative px-12 py-6 font-black text-xl text-gray-800 bg-[#c7ff99] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#9ebbff] hover:scale-105">
            <span className="relative z-10">Get Started Today!</span>
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#c7ff99] via-[#9ebbff] via-[#ff999a] to-[#ffe678] animate-spin-slow"></div>
              <div className="absolute inset-[2px] rounded-full bg-[#c7ff99]"></div>
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
