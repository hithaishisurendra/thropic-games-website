"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
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
              <Link href="/about" className="text-gray-700 hover:text-[#FF7073] transition-all duration-300 font-semibold">
                About
              </Link>
              <Link href="/#how-it-works" className="text-gray-700 hover:text-[#A4DBF4] transition-all duration-300 font-semibold">
                How It Works
              </Link>
              <Link href="/contact" className="text-[#FF7073] font-semibold">
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
        <section ref={sectionRef} className="py-24 px-6 md:px-12 relative">
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
            {/* Content inside white box */}
            <div className="px-8 md:px-16 py-16">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
                Get In Touch
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                Ready to transform your fundraising? Let's start the conversation.
              </p>
            </div>

            {/* Contact Content */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                  Let's Connect
                </h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  We're here to help you revolutionize your fundraising efforts. Whether you have questions about our platform, 
                  want to schedule a demo, or need support, our team is ready to assist you.
                </p>

                {/* Contact Details */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FF7073] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">kyle@thropicgames.com</p>
                      <p className="text-gray-600">info@thropicgames.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A4DBF4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600">1800thropic</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A4DBF4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-xl font-black text-gray-900 mb-6">Follow Us</h3>
                  <div className="flex space-x-6">
                    <Facebook className="h-8 w-8 text-gray-500 hover:text-[#A4DBF4] cursor-pointer transition-colors duration-300" />
                    <svg className="h-8 w-8 text-gray-500 hover:text-[#FF7073] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <Instagram className="h-8 w-8 text-gray-500 hover:text-[#A4DBF4] cursor-pointer transition-colors duration-300" />
                    <svg className="h-8 w-8 text-gray-500 hover:text-[#FF7073] cursor-pointer transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                    </svg>
                    <Linkedin className="h-8 w-8 text-gray-500 hover:text-[#A4DBF4] cursor-pointer transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
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
                  
                  {/* Form container */}
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                      Send Us a Message
                    </h2>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Organization</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your organization name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300">
                          <option>General Inquiry</option>
                          <option>Demo Request</option>
                          <option>Partnership</option>
                          <option>Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300 resize-none"
                          placeholder="Tell us about your fundraising goals and how we can help..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-[#A4DBF4] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#8BC5E8] transition-all duration-300 hover:scale-105"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 md:px-12 relative">
          <div className="absolute inset-0 bg-white"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-black text-gray-900 mb-3">How quickly can we get started?</h3>
                <p className="text-gray-600">Most organizations can launch their first gaming campaign within 1-2 weeks. We'll guide you through setup, customization, and launch.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-black text-gray-900 mb-3">What kind of support do you provide?</h3>
                <p className="text-gray-600">We offer comprehensive support including campaign strategy, technical assistance, and ongoing optimization to maximize your fundraising results.</p>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-black text-gray-900 mb-3">Can you customize games for our organization?</h3>
                <p className="text-gray-600">Absolutely! We specialize in creating custom gaming experiences that align with your mission, brand, and fundraising goals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 