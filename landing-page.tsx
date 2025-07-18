"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback, useRef } from "react"
import AnimatedCounter from "./components/ui/animated-counter"

// Video Auto-Play Component
function AutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch((error) => {
              console.log("Auto-play failed:", error)
            })
          } else {
            // Video is out of view, pause it
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      controls
      loop
      playsInline
      poster="/images/hero-background.png"
      preload="metadata"
    >
      <source src="/videos/success_story.mp4" type="video/mp4" />
      <source src="/videos/success_story.webm" type="video/webm" />
      <source src="/videos/success_story.mov" type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  )
}
import HowItWorksCarousel from "./components/how-it-works-carousel"
import TrustedPartners from "./components/trusted-partners"
import TestimonialSection from "./components/testimonial-section"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [layersAnimated, setLayersAnimated] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  const [countersActive, setCountersActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Animation sequence on page load
    const timer1 = setTimeout(() => {
      setLayersAnimated(true)
    }, 300)

    const timer2 = setTimeout(() => {
      setTextVisible(true)
    }, 1200)

    const timer3 = setTimeout(() => {
      setCountersActive(true)
    }, 1800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'pt-6 px-6' 
          : 'pt-0 px-0'
      }`}>
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl border border-[#d9d9d9] rounded-full shadow-xl mx-auto max-w-5xl' 
            : 'bg-white/95 backdrop-blur-sm border-b border-[#d9d9d9]'
        }`}>
          <div className="container mx-auto px-8 sm:px-10 lg:px-16">
            <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
              isScrolled ? 'h-16' : 'h-24'
            }`}>
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image src="/images/thropic-logo.png" alt="Thropic Games" width={44} height={44} className="h-11 w-11 object-contain transition-all duration-300 ease-in-out" />
                <span className={`font-bold text-gray-900 transition-all duration-400 ease-in-out ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>Thropic Games</span>
              </div>

              {/* Centered CTA Button - Desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <Link href="/create-game">
                  <button className={`relative font-bold text-white bg-[#EB9190] rounded-full overflow-hidden group transition-all duration-400 ease-in-out hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#8CD1F0] hover:scale-105 hover:-translate-y-0.5 ${
                    isScrolled ? 'px-7 py-2.5 text-base' : 'px-10 py-4 text-lg'
                  }`}>
                    <span className="relative z-10 transition-all duration-200 ease-in-out">Create a Game</span>
                    {/* Snake border animation */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                      <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#EB9190] via-[#8CD1F0] via-[#5B2E48] to-[#8CD1F0] animate-spin-slow"></div>
                      <div className="absolute inset-[2px] rounded-full bg-[#EB9190]"></div>
                    </div>
                  </button>
                </Link>
              </div>

              {/* Navigation - Desktop */}
              <nav className="hidden md:flex items-center space-x-10">
                <Link href="/about" className={`text-gray-700 hover:text-[#8CD1F0] transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8CD1F0] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  About
                </Link>
                <Link href="#how-it-works" className={`text-gray-700 hover:text-[#EB9190] transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EB9190] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  How It Works
                </Link>
                <Link href="/contact" className={`text-gray-700 hover:text-[#8CD1F0] transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8CD1F0] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  Contact
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-3 rounded-md text-gray-600 hover:text-[#ff999a] hover:bg-[#d9d9d9]/20 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-3"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7 transition-transform duration-200 ease-in-out" />
                ) : (
                  <Menu className="h-7 w-7 transition-transform duration-200 ease-in-out" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-[#d9d9d9] mt-4 animate-in slide-in-from-top-4 duration-400 ease-in-out">
                <div className="px-6 py-8 space-y-6">
                  {/* Mobile CTA Button */}
                  <div className="flex justify-center mb-8">
                    <Link href="/create-game">
                      <button className="relative px-10 py-4 font-bold text-white bg-[#EB9190] rounded-full overflow-hidden group transition-all duration-400 ease-in-out hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#8CD1F0] text-lg hover:scale-105 hover:-translate-y-0.5">
                        <span className="relative z-10">Create a Game</span>
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                            <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#EB9190] via-[#8CD1F0] via-[#5B2E48] to-[#8CD1F0] animate-spin-slow"></div>
                            <div className="absolute inset-[2px] rounded-full bg-[#EB9190]"></div>
                          </div>
                      </button>
                    </Link>
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-6 text-center">
                    <Link 
                      href="/about" 
                      className="text-gray-700 hover:text-[#8CD1F0] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="#how-it-works" 
                      className="text-gray-700 hover:text-[#EB9190] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-gray-700 hover:text-[#8CD1F0] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Layered Background */}
        <div className="absolute inset-0">
          {/* Davy's gray layer - covers from top to bottom of stats section */}
          <div 
            className={`absolute left-0 right-0 bg-[#d9d9d9] rounded-b-[100px] transition-transform duration-1000 ease-out ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "100%" }}
          ></div>
          
          {/* Baby blue layer - covers from top to end of stats section */}
          <div 
            className={`absolute left-0 right-0 bg-[#8CD1F0] rounded-b-[100px] transition-transform duration-1000 ease-out delay-200 ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "85%" }}
          ></div>
          
          {/* Coral layer - covers from top to end of subtitle */}
          <div 
            className={`absolute left-0 right-0 bg-[#FF999A] rounded-b-[100px] transition-transform duration-1000 ease-out delay-500 ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "70%" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Headline */}
          <div className={`mb-8 mt-0 transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <div className="text-gray-900 mb-3">Play Games.</div>
              <div className="text-[#8CD1F0] mb-3">
  Raise Funds.
</div>

              <div className="text-gray-900">Drive Impact.</div>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`mt-20 text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium mb-6 max-w-4xl mx-auto leading-relaxed transition-opacity duration-1000 delay-300 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
  A fundraising platform designed for nonprofits and powered by play.
</p>



          {/* Stats Section
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-opacity duration-1000 delay-500 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-gray-600 mb-2">
                $<AnimatedCounter target={100} suffix="K+" isActive={countersActive} duration={2500} />
              </div>
              <div className="text-gray-600 font-medium">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-gray-600 mb-2">
                <AnimatedCounter target={25} suffix="+" isActive={countersActive} duration={2000} />
              </div>
              <div className="text-gray-600 font-medium">Campaigns Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-gray-600 mb-2">
                <AnimatedCounter target={30} suffix="K+" isActive={countersActive} duration={1800} />
              </div>
              <div className="text-gray-600 font-medium">Players Engaged</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Reduced space after hero */}
      <div className="h-2 bg-white"></div>

      {/* How It Works Section */}
      <HowItWorksCarousel />

      {/* Trusted Partners Section */}
      <TrustedPartners />

      {/* Space between sections */}
      <div className="h-32 bg-white"></div>

      {/* Success Stories Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Real People, Real Results
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                See how gaming transforms fundraising success
              </p>
            </div>

            {/* Single Story Container */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group flex justify-center">
                {/* Portrait container with proper aspect ratio - smaller size */}
                <div className="relative w-full max-w-xs aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-br from-[#8CD1F0] to-[#FF999A] p-1">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden bg-black">
                    <AutoPlayVideo />
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

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-white"></div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="flex items-center justify-center space-x-4 mb-8">
              
              <span className="text-4xl md:text-5xl font-black text-white">Thropic Games</span>
            </div> */}
            {/* <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
              A fundraising platform designed for nonprofits and powered by play.
            </p> */}
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Quick Links */}
            <div className="relative">
              <div className="absolute -inset-3 bg-[#FF7073] rounded-3xl rotate-2 opacity-15"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 min-h-[300px] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-lg text-gray-600 hover:text-[#6DC5EE] font-medium transition-colors duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#how-it-works" className="text-lg text-gray-600 hover:text-[#FF7073] font-medium transition-colors duration-300">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="#behind-the-vision" className="text-lg text-gray-600 hover:text-[#6DC5EE] font-medium transition-colors duration-300">
                      Behind the Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="#terms" className="text-lg text-gray-600 hover:text-[#FF7073] font-medium transition-colors duration-300">
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="relative">
              <div className="absolute -inset-3 bg-[#6DC5EE] rounded-3xl -rotate-1 opacity-15"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 min-h-[300px] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Contact</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="text-lg font-medium">info@thropicgames.com</li>
                  {/* <li className="text-lg font-medium">kyle@thropicgames.com</li> */}
                </ul>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="relative">
              <div className="absolute -inset-3 bg-[#FF7073] rounded-3xl rotate-1 opacity-15"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-200 min-h-[300px] flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Connect</h3>
                
                {/* Social Icons */}
                <div className="flex space-x-6 mb-auto">
                  <Facebook className="h-8 w-8 text-gray-500 hover:text-[#6DC5EE] cursor-pointer transition-colors duration-300" />
                  {/* X (Twitter) Logo */}
                  <svg className="h-8 w-8 text-gray-500 hover:text-[#FF7073] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <Instagram className="h-8 w-8 text-gray-500 hover:text-[#6DC5EE] cursor-pointer transition-colors duration-300" />
                  {/* TikTok Logo */}
                  <svg className="h-8 w-8 text-gray-500 hover:text-[#FF7073] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <Linkedin className="h-8 w-8 text-gray-500 hover:text-[#6DC5EE] cursor-pointer transition-colors duration-300" />
                </div>

                {/* CTA Button */}
                <Link href="/create-game">
                  <button className="relative w-full px-8 py-4 font-black text-lg text-white bg-[#6DC5EE] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl hover:scale-105 mt-8">
                    <span className="relative z-10">Get Started</span>
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#6DC5EE] via-[#FF7073] to-[#6DC5EE] animate-spin-slow"></div>
                      <div className="absolute inset-[2px] rounded-full bg-[#6DC5EE]"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center pt-8">
            <p className="text-lg text-gray-600 font-medium">
              &copy; {new Date().getFullYear()} Thropic Games. All rights reserved.
            </p>
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
      </footer>
    </div>
  )
}
