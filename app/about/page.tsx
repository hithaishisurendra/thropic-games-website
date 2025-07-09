"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Users, Zap, Target, Heart, Trophy, Play } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setHeroVisible(true)
    
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/thropic-logo.png"
                  alt="Thropic Games Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-gray-900">Thropic Games</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#A4DBF4] transition-all duration-300 font-semibold">
                Home
              </Link>
              <Link href="/about" className="text-[#FF7073] font-semibold">
                About
              </Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-[#A4DBF4] transition-all duration-300 font-semibold">
                How It Works
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#FF7073] transition-all duration-300 font-semibold">
                Contact
              </Link>
            </nav>

            <Link href="/" className="bg-[#A4DBF4] text-white px-6 py-3 rounded-full font-bold hover:bg-[#8BC5E8] transition-all duration-300 hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-32 px-6 md:px-12 relative">
          {/* Background with overlapping card layers */}
          <div className="absolute inset-0">
            {/* Base background */}
            <div className="absolute inset-0 bg-white"></div>
            
            {/* Overlapping background cards */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] -rotate-1 opacity-100"></div>
            <div className="absolute top-12 left-8 right-8 bottom-12 bg-[#FF7073] rounded-[60px] rotate-1 opacity-100"></div>
            <div className="absolute top-24 left-16 right-16 bottom-24 bg-[#A4DBF4] rounded-[60px] -rotate-1 opacity-100"></div>
            <div className="absolute top-36 left-24 right-24 bottom-24 bg-white rounded-[60px] shadow-2xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            {/* Header */}
            <div className="text-center">
              <div className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
                  Gaming for Good™
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-5xl mx-auto leading-relaxed mb-12">
                  Building the future tools for nonprofits to grow their communities through the power of play.
                </p>
                <div className="inline-flex items-center space-x-3 bg-[#A4DBF4] text-white px-8 py-4 rounded-full font-bold text-lg">
                  {/* <Heart className="h-6 w-6" /> */}
                  <span>Game for Good!</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section ref={sectionRef} className="py-32 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-white"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                  Our Mission
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                >
                  <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                    <p className="text-xl">
                      We help nonprofits attract and engage the next generation of donors by turning charitable giving 
                      into interactive games during the biggest moments of the year.
                    </p>
                    <p>
                      Our approach provides measurable impact through increased donations, consumer loyalty, and 
                      first-party data capture—all while aligning with your supporters' values.
                    </p>
                    <p className="font-semibold text-[#FF7073] text-xl">
                      There's a massive generational shift in consumer values. Don't miss out. 
                      Come change the game with us!
                    </p>
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="relative">
                    {/* Decorative background layers */}
                    <div className="absolute -inset-4 bg-[#A4DBF4] rounded-3xl rotate-2 opacity-15"></div>
                    <div className="absolute -inset-2 bg-[#FF7073] rounded-3xl -rotate-1 opacity-20"></div>
                    
                    {/* Stats container */}
                    <div className="relative bg-white p-12 rounded-3xl shadow-xl border border-gray-200">
                      <div className="text-center space-y-8">
                        <div>
                          <div className="text-6xl font-black text-[#A4DBF4] mb-3">$10M</div>
                          <div className="text-gray-600 font-medium text-lg">Goal for year one</div>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-8">
                          <div className="text-3xl font-black text-[#FF7073] mb-3">World's Largest</div>
                          <div className="text-gray-600 font-medium">Network of gaming donors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-32 px-6 md:px-12 relative">
          {/* Background with overlapping card layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] rotate-1 opacity-100"></div>
            <div className="absolute top-12 left-8 right-8 bottom-8 bg-[#A4DBF4] rounded-[60px] -rotate-1 opacity-100"></div>
            <div className="absolute top-24 left-16 right-16 bottom-12 bg-[#FF7073] rounded-[60px] rotate-1 opacity-100"></div>
            <div className="absolute top-36 left-24 right-24 bottom-20 bg-white rounded-[60px] shadow-2xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                See It In Action
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Watch how we're revolutionizing fundraising through the power of gaming.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {/* Video Container - Placeholder for now */}
              <div className="relative">
                <div className="absolute -inset-4 bg-[#A4DBF4] rounded-3xl rotate-1 opacity-15"></div>
                <div className="absolute -inset-2 bg-[#FF7073] rounded-3xl -rotate-1 opacity-20"></div>
                
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Video placeholder - replace with actual video embed */}
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A4DBF4]/20 to-[#FF7073]/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-[#A4DBF4] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-12 w-12 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4">
                        Watch Our Story
                      </h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Discover how Thropic is changing the future of charitable fundraising
                      </p>
                    </div>
                  </div>
                  
                  {/* Replace this div with your video embed like:
                  <iframe 
                    className="aspect-video w-full"
                    src="YOUR_VIDEO_URL" 
                    title="Thropic Games Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Wins Section - Simplified */}
        <section className="py-32 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-white"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                Everyone Wins
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Our platform creates value for every participant.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* The Nonprofit */}
              <div className="relative group text-center">
                <div className="absolute -inset-3 bg-[#A4DBF4] rounded-3xl rotate-2 opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-[#A4DBF4] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">The Nonprofit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    New ways to engage donors and raise funds with innovative gaming experiences.
                  </p>
                </div>
              </div>

              {/* The Donor */}
              <div className="relative group text-center">
                <div className="absolute -inset-3 bg-[#FF7073] rounded-3xl -rotate-1 opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">The Donor</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fun gaming experiences while supporting meaningful causes you care about.
                  </p>
                </div>
              </div>

              {/* The Creator */}
              <div className="relative group text-center">
                <div className="absolute -inset-3 bg-[#A4DBF4] rounded-3xl rotate-1 opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-[#A4DBF4] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">The Creator</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Easy game creation tools with tax benefits and community engagement.
                  </p>
                </div>
              </div>

              {/* Thropic */}
              <div className="relative group text-center">
                <div className="absolute -inset-3 bg-[#FF7073] rounded-3xl -rotate-2 opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-gray-200 h-full">
                  <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mb-6 mx-auto">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">Thropic</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Small fee per donation. The rest goes directly to charity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features - Simplified */}
        <section className="py-32 px-6 md:px-12 relative">
          {/* Background with overlapping card layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] -rotate-1 opacity-100"></div>
            <div className="absolute top-12 left-8 right-8 bottom-8 bg-[#FF7073] rounded-[60px] rotate-1 opacity-100"></div>
            <div className="absolute top-24 left-16 right-16 bottom-12 bg-[#A4DBF4] rounded-[60px] -rotate-1 opacity-100"></div>
            <div className="absolute top-36 left-24 right-24 bottom-20 bg-white rounded-[60px] shadow-2xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                Why Choose Thropic?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#A4DBF4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Engage GenZ</h3>
                <p className="text-gray-600">Attract the next generation of purpose-driven donors.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Data Insights</h3>
                <p className="text-gray-600">Understand donor behavior with actionable analytics.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#A4DBF4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Zero Cost</h3>
                <p className="text-gray-600">No upfront fees. Only small transaction costs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">AI Powered</h3>
                <p className="text-gray-600">Automated campaigns that work while you sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-white"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                Ready to Change the Game?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-medium mb-16 leading-relaxed">
                Join the revolution in nonprofit fundraising. Let's create games for good together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-[#A4DBF4] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#8BC5E8] transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/#how-it-works" 
                  className="bg-white text-[#FF7073] px-12 py-5 rounded-full font-black text-xl border-2 border-[#FF7073] hover:bg-[#FF7073] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 