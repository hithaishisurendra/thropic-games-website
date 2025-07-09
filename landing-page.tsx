"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

// Animated Counter Component
function AnimatedCounter({ 
  target, 
  suffix = "", 
  isActive, 
  duration = 2000 
}: { 
  target: number
  suffix?: string
  isActive: boolean
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(target * easeOut))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }
    
    requestAnimationFrame(animate)
  }, [target, isActive, duration])

  return <>{count}{suffix}</>
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'pt-6 px-6' 
          : 'pt-0 px-0'
      }`}>
        <div className={`transition-all duration-700 ease-out ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-lg border border-[#d9d9d9] rounded-full shadow-xl mx-auto max-w-5xl' 
            : 'bg-white/95 backdrop-blur-sm border-b border-[#d9d9d9]'
        }`}>
          <div className="container mx-auto px-8 sm:px-10 lg:px-16">
            <div className={`flex items-center justify-between transition-all duration-700 ease-out ${
              isScrolled ? 'h-16' : 'h-24'
            }`}>
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image src="/images/thropic-logo.png" alt="Thropic Games" width={44} height={44} className="h-11 w-11" />
                <span className={`font-bold text-gray-900 transition-all duration-500 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>Thropic Games</span>
              </div>

              {/* Centered CTA Button - Desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <button className={`relative font-bold text-gray-800 bg-[#ff999a] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#9ebbff] hover:scale-105 ${
                  isScrolled ? 'px-7 py-2.5 text-base' : 'px-10 py-4 text-lg'
                }`}>
                  <span className="relative z-10">Create a Game</span>
                  {/* Snake border animation */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#ff999a] via-[#9ebbff] via-[#f1bbff] to-[#9ebbff] animate-spin-slow"></div>
                    <div className="absolute inset-[2px] rounded-full bg-[#ff999a]"></div>
                  </div>
                </button>
              </div>

              {/* Navigation - Desktop */}
              <nav className="hidden md:flex items-center space-x-10">
                <Link href="#about" className={`text-gray-700 hover:text-[#9ebbff] transition-all duration-300 font-semibold hover:scale-105 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  About
                </Link>
                <Link href="#how-it-works" className={`text-gray-700 hover:text-[#ff999a] transition-all duration-300 font-semibold hover:scale-105 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  How It Works
                </Link>
                <Link href="#contact" className={`text-gray-700 hover:text-[#9ebbff] transition-all duration-300 font-semibold hover:scale-105 ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  Contact
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-3 rounded-md text-gray-600 hover:text-[#ff999a] hover:bg-[#d9d9d9]/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-[#d9d9d9] mt-4">
                <div className="px-6 py-8 space-y-6">
                  {/* Mobile CTA Button */}
                  <div className="flex justify-center mb-8">
                    <button className="relative px-10 py-4 font-bold text-gray-800 bg-[#ff999a] rounded-full overflow-hidden group transition-all duration-300 hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#9ebbff] text-lg">
                      <span className="relative z-10">Create a Game</span>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#ff999a] via-[#9ebbff] via-[#f1bbff] to-[#9ebbff] animate-spin-slow"></div>
                        <div className="absolute inset-[2px] rounded-full bg-[#ff999a]"></div>
                      </div>
                    </button>
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-6 text-center">
                    <Link 
                      href="#about" 
                      className="text-gray-700 hover:text-[#9ebbff] transition-colors font-semibold py-3 text-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="#how-it-works" 
                      className="text-gray-700 hover:text-[#ff999a] transition-colors font-semibold py-3 text-xl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link 
                      href="#contact" 
                      className="text-gray-700 hover:text-[#9ebbff] transition-colors font-semibold py-3 text-xl"
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
          {/* Grey layer - covers from top to bottom of stats section */}
          <div 
            className={`absolute left-0 right-0 bg-gray-400 rounded-b-[100px] transition-transform duration-1000 ease-out ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "100%" }}
          ></div>
          
          {/* Blue layer - covers from top to end of stats section */}
          <div 
            className={`absolute left-0 right-0 bg-[#9ebbff] rounded-b-[100px] transition-transform duration-1000 ease-out delay-200 ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "90%" }}
          ></div>
          
          {/* Pink layer - covers from top to end of subtitle */}
          <div 
            className={`absolute left-0 right-0 bg-[#ff999a] rounded-b-[100px] transition-transform duration-1000 ease-out delay-500 ${
              layersAnimated ? 'translate-y-0' : '-translate-y-full'
            }`} 
            style={{ height: "80%" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Main Headline */}
          <div className={`mb-12 transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <div className="text-gray-900 mb-3">Play Games.</div>
              <div className="bg-gradient-to-r from-[#ff999a] to-[#9ebbff] bg-clip-text text-transparent mb-3">
                Raise Funds.
              </div>
              <div className="text-gray-900">Drive Impact.</div>
            </h1>
          </div>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium mb-20 max-w-4xl mx-auto leading-relaxed transition-opacity duration-1000 delay-300 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            A fundraising platform designed for nonprofits and powered by play.
          </p>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-opacity duration-1000 delay-500 ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-600 mb-2">
                $<AnimatedCounter target={2.5} suffix="M+" isActive={countersActive} duration={2500} />
              </div>
              <div className="text-gray-600 font-medium">Funds Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-600 mb-2">
                <AnimatedCounter target={500} suffix="+" isActive={countersActive} duration={2000} />
              </div>
              <div className="text-gray-600 font-medium">Campaigns Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-gray-600 mb-2">
                <AnimatedCounter target={50} suffix="K+" isActive={countersActive} duration={1800} />
              </div>
              <div className="text-gray-600 font-medium">Players Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* White space after hero */}
      <div className="h-16 bg-white"></div>

      {/* Trusted Partners Section - Moved right after hero */}
      <TrustedPartners />

      {/* How It Works Section */}
      <HowItWorksCarousel />

      {/* Success Stories Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background with overlapping card layers */}
        <div className="absolute inset-0">
          {/* Base background */}
          <div className="absolute inset-0" style={{ backgroundColor: "#f8f9fb" }}></div>
          
          {/* Overlapping background cards */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] -rotate-1 opacity-100"></div>
          <div className="absolute top-12 left-8 right-8 bottom-12 bg-[#124559] rounded-[60px] rotate-1 opacity-100"></div>
          <div className="absolute top-24 left-16 right-16 bottom-24 bg-[#eb9190] rounded-[60px] -rotate-1 opacity-100"></div>
          <div className="absolute top-36 left-24 right-24 bottom-36 bg-white rounded-[60px] shadow-2xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Real campaigns making real impact through the power of gaming
            </p>
          </div>

          {/* Grid Container - Large left + 2 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Large Story Card (Left) */}
            <div className="relative group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden h-[500px] transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Jurassic World Campaign"
                  fill
                  className="object-cover transition-transform duration-500"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl md:text-4xl font-black mb-6">
                      Jurassic World × Thropic
                    </h3>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-[#c7ff99]">
                        $58k raised
                      </div>
                      <div className="text-xl font-semibold text-[#ff999a]">
                        +112% engagement increase
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - 2 Stacked Cards */}
            <div className="grid grid-rows-2 gap-8">
              {/* Card 2 (Top Right) */}
              <div className="relative group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden h-[230px] transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/placeholder.svg?height=230&width=400"
                    alt="Food Bank Challenge"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl md:text-2xl font-black mb-4">
                        Local Food Bank Challenge
                      </h3>
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-[#9ebbff]">
                          $42k raised
                        </div>
                        <div className="text-base font-semibold text-[#ff999a]">
                          +89% new donors
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 (Bottom Right) */}
              <div className="relative group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden h-[230px] transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/placeholder.svg?height=230&width=400"
                    alt="Wildlife Conservation"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl md:text-2xl font-black mb-4">
                        Wildlife Conservation Game
                      </h3>
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-[#c7ff99]">
                          $73k raised
                        </div>
                        <div className="text-base font-semibold text-[#ffe678]">
                          +156% reach increase
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <button className="relative px-12 py-6 font-black text-xl text-gray-800 bg-[#ff999a] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl border-2 border-[#d9d9d9] hover:border-[#9ebbff] hover:scale-105">
              <span className="relative z-10">See All Success Stories</span>
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#ff999a] via-[#c7ff99] via-[#9ebbff] to-[#ffe678] animate-spin-slow"></div>
                <div className="absolute inset-[2px] rounded-full bg-[#ff999a]"></div>
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

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background with overlapping card layers */}
        <div className="absolute inset-0">
          {/* Base background */}
          <div className="absolute inset-0 bg-white"></div>
          
          {/* Overlapping background cards */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#ff999a] rounded-[60px] rotate-2 opacity-20"></div>
          <div className="absolute top-12 left-8 right-8 bottom-12 bg-[#c7ff99] rounded-[60px] -rotate-1 opacity-25"></div>
          <div className="absolute top-24 left-16 right-16 bottom-24 bg-[#9ebbff] rounded-[60px] rotate-1 opacity-30"></div>
          <div className="absolute top-36 left-24 right-24 bottom-36 bg-white rounded-[60px] shadow-2xl"></div>
        </div>

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
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#c7ff99] rounded-3xl rotate-2 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-300 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="#about" className="text-lg text-gray-600 hover:text-[#c7ff99] font-medium transition-colors duration-300">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#how-it-works" className="text-lg text-gray-600 hover:text-[#ff999a] font-medium transition-colors duration-300">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link href="#pricing" className="text-lg text-gray-600 hover:text-[#9ebbff] font-medium transition-colors duration-300">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#support" className="text-lg text-gray-600 hover:text-[#ffe678] font-medium transition-colors duration-300">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#ff999a] rounded-3xl -rotate-2 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-300 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Contact</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="text-lg font-medium">kyle@thropicgames.com</li>
                  <li className="text-lg font-medium">1-800-THROPIC</li>
                  <li className="text-lg font-medium">123 Innovation St</li>
                  <li className="text-lg font-medium">Tech City, TC 12345</li>
                </ul>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-[#9ebbff] rounded-3xl rotate-1 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-300 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Connect</h3>
                
                {/* Social Icons */}
                <div className="flex space-x-6 mb-8">
                  <Facebook className="h-8 w-8 text-gray-500 hover:text-[#c7ff99] cursor-pointer transition-colors duration-300" />
                  {/* X (Twitter) Logo */}
                  <svg className="h-8 w-8 text-gray-500 hover:text-[#ff999a] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <Instagram className="h-8 w-8 text-gray-500 hover:text-[#9ebbff] cursor-pointer transition-colors duration-300" />
                  {/* TikTok Logo */}
                  <svg className="h-8 w-8 text-gray-500 hover:text-[#ffe678] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <Linkedin className="h-8 w-8 text-gray-500 hover:text-[#c7ff99] cursor-pointer transition-colors duration-300" />
                </div>

                {/* CTA Button */}
                <button className="relative w-full px-8 py-4 font-black text-lg text-gray-900 bg-[#c7ff99] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl hover:scale-105">
                  <span className="relative z-10">Get Started</span>
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#c7ff99] via-[#9ebbff] via-[#ff999a] to-[#ffe678] animate-spin-slow"></div>
                    <div className="absolute inset-[2px] rounded-full bg-[#c7ff99]"></div>
                  </div>
                </button>
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
