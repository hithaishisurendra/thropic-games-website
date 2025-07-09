"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface SuccessStory {
  id: number
  title: string
  image: string
  metrics: [string, string]
  buttonText: string
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Jurassic World × Thropic",
    image: "/placeholder.svg?height=300&width=400",
    metrics: ["+112% donor engagement", "$58k raised in 7 days"],
    buttonText: "See Details →",
  },
  {
    id: 2,
    title: "Local Food Bank Challenge",
    image: "/placeholder.svg?height=300&width=400",
    metrics: ["+89% new donors acquired", "$42k raised in 5 days"],
    buttonText: "See Details →",
  },
  {
    id: 3,
    title: "Wildlife Conservation Game",
    image: "/placeholder.svg?height=300&width=400",
    metrics: ["+156% social media reach", "$73k raised in 10 days"],
    buttonText: "See Details →",
  },
]

export default function SuccessStoriesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
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

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].clientWidth
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      })
      setCurrentSlide(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].clientWidth
      const scrollLeft = carouselRef.current.scrollLeft
      const newSlide = Math.round(scrollLeft / slideWidth)
      setCurrentSlide(newSlide)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-gradient-to-r from-blue-50 via-blue-25 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real campaigns making real impact through the power of gaming
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {successStories.map((story, index) => (
              <div
                key={story.id}
                className={`flex-none w-full max-w-4xl bg-white rounded-3xl shadow-xl p-10 snap-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={300}
                      className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{story.title}</h3>

                    {/* Metrics */}
                    <div className="space-y-3">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#eb9190] to-[#8cd1f0] rounded-full"></div>
                          <span className="text-lg font-semibold text-gray-700">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ghost Button */}
                    <div className="pt-4">
                      <Button
                        variant="ghost"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold text-lg px-0 transition-all duration-200 hover:scale-105"
                      >
                        {story.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-[#eb9190] to-[#8cd1f0] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all duration-200 hover:scale-105 z-10"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSlide(Math.min(successStories.length - 1, currentSlide + 1))}
              disabled={currentSlide === successStories.length - 1}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all duration-200 hover:scale-105 z-10"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
