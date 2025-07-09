"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface SuccessStory {
  id: number
  title: string
  image: string
  stats: string[]
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Jurassic World × Thropic",
    image: "/placeholder.svg?height=240&width=400",
    stats: ["$58k raised", "+112% engagement"],
  },
  {
    id: 2,
    title: "Local Food Bank Challenge",
    image: "/placeholder.svg?height=240&width=400",
    stats: ["$42k raised", "+89% new donors"],
  },
  {
    id: 3,
    title: "Wildlife Conservation Game",
    image: "/placeholder.svg?height=240&width=400",
    stats: ["$73k raised", "+156% reach"],
  },
  {
    id: 4,
    title: "Youth Sports Fundraiser",
    image: "/placeholder.svg?height=240&width=400",
    stats: ["$35k raised", "+94% participation"],
  },
]

export default function SuccessStoriesGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: "#f8f9fb" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real campaigns making real impact through the power of gaming
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-xl group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{story.title}</h3>

                {/* Stats */}
                <div className="space-y-2 mb-6">
                  {story.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#eb9190] to-[#8cd1f0] rounded-full"></div>
                      <span className="text-gray-700 font-semibold">{stat}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold px-0 transition-all duration-200 hover:translate-x-1"
                >
                  See Details →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
