"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, Clock, Menu, X } from "lucide-react"

// Contact Form Component with Supabase Integration
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error status when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Combine first and last name
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim()
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          company: formData.company || null
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: 'General Inquiry',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
        Send Us a Message
      </h2>
      
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">✅ Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-semibold">❌ {errorMessage}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
              placeholder="Your last name"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Organization</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
            placeholder="Your organization name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Demo Request">Demo Request</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300 resize-none"
            placeholder="Tell us about your fundraising goals and how we can help..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 rounded-full font-black text-lg transition-all duration-300 hover:scale-105 ${
            isSubmitting 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-[#A4DBF4] text-white hover:bg-[#8BC5E8]'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  )
}

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
                <Image src="/images/thropic-logo.png" alt="Thropic Games" width={44} height={44} className="h-11 w-11 object-contain transition-all duration-300 ease-in-out group-hover:scale-110" />
                <span className={`font-bold text-gray-900 transition-all duration-400 ease-in-out group-hover:text-[#8CD1F0] ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}>Thropic Games</span>
              </Link>

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
                <Link href="/about" className={`text-gray-700 hover:text-[#FF7073] transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF7073] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  About
                </Link>
                <Link href="/#how-it-works" className={`text-gray-700 hover:text-[#EB9190] transition-all duration-300 ease-in-out font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#EB9190] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full ${
                  isScrolled ? 'text-base' : 'text-lg'
                }`}>
                  How It Works
                </Link>
                <Link href="/contact" className={`text-[#FF7073] font-semibold hover:scale-105 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF7073] transition-all duration-300 ease-in-out ${
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
                      <button className="relative px-8 py-4 font-black text-lg text-gray-800 bg-[#EB9190] rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl border-2 border-[#8CD1F0] hover:border-[#EB9190] hover:scale-105"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="relative z-10">Create a Game</span>
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#EB9190] via-[#8CD1F0] via-[#5B2E48] to-[#8CD1F0] animate-spin-slow"></div>
                          <div className="absolute inset-[2px] rounded-full bg-[#EB9190]"></div>
                        </div>
                      </button>
                    </Link>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="space-y-4">
                    <Link 
                      href="/about" 
                      className="text-gray-700 hover:text-[#FF7073] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <Link 
                      href="/#how-it-works" 
                      className="text-gray-700 hover:text-[#EB9190] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      How It Works
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-[#FF7073] transition-all duration-300 ease-in-out font-semibold py-3 text-xl hover:scale-105 hover:translate-x-2"
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

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section ref={sectionRef} className="py-24 px-6 md:px-12 relative">
          {/* Background with overlapping card layers */}
          <div className="absolute inset-0">
            {/* Base background */}
            <div className="absolute inset-0 bg-white"></div>
            
            {/* Overlapping background cards */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-[#d9d9d9] rounded-[60px] -rotate-1 opacity-100"></div> */}
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
                      {/* <p className="text-gray-600">kyle@thropicgames.com</p> */}
                      <p className="text-gray-600">info@thropicgames.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#A4DBF4] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 mb-2">Join Our Community</h3>
                      {/* <p className="text-gray-600">Discord: [placeholder-discord-link]</p> */}
                      <p className="text-gray-600">Discord coming soon!</p>
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
                    <ContactForm />
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
    </div>
  )
} 