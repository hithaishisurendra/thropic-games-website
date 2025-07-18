"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Check, Users, Heart, Zap, Trophy, Target, Globe, Calendar, DollarSign, School, Hospital, Leaf, Home, User, Mail, Phone, MapPin, Clock, X } from 'lucide-react'

interface FormData {
  // Step 1: Organization Type
  organizationType: string
  causeCategory: string
  audienceSize: string
  
  // Step 2: Game Customization
  gameType: string
  gameTheme: string
  fundraisingGoal: string
  timeline: string
  
  // Step 3: Contact & Launch
  firstName: string
  lastName: string
  email: string
  phone: string
  organizationName: string
  additionalDetails: string
}

const organizationTypes = [
  { id: 'nonprofit', title: 'Nonprofit Organization', description: 'Registered 501(c)(3) organization', icon: Heart },
  { id: 'school', title: 'School/Educational', description: 'Schools, universities, educational programs', icon: School },
  { id: 'sports', title: 'Sports Team/Club', description: 'Athletic teams, sports clubs, leagues', icon: Trophy },
  { id: 'community', title: 'Community Group', description: 'Local groups, clubs, associations', icon: Users },
  { id: 'other', title: 'Other', description: 'Other types of organizations or groups', icon: Globe }
]

const causeCategories = [
  { id: 'education', title: 'Education', icon: School, color: '#8CD1F0' },
  { id: 'health', title: 'Health & Medical', icon: Heart, color: '#FF7073' },
  { id: 'environment', title: 'Environment', icon: Leaf, color: '#A4DBF4' },
  { id: 'animals', title: 'Animal Welfare', icon: Heart, color: '#FF999A' },
  { id: 'community', title: 'Community Development', icon: Users, color: '#8CD1F0' },
  { id: 'sports', title: 'Sports & Recreation', icon: Trophy, color: '#FF7073' },
  { id: 'arts', title: 'Arts & Culture', icon: Target, color: '#A4DBF4' },
  { id: 'disaster', title: 'Disaster Relief', icon: Globe, color: '#FF999A' }
]

const gameTypes = [
  { id: 'sports-predictions', title: 'Sports Predictions', description: 'Predict game outcomes, scores, winners', icon: Trophy, popular: true },
  { id: 'trivia-challenge', title: 'Trivia Challenge', description: 'Knowledge-based questions and answers', icon: Zap, popular: false },
  { id: 'bracket-challenge', title: 'Bracket Challenge', description: 'Tournament-style elimination predictions', icon: Target, popular: true },
  { id: 'daily-picks', title: 'Daily Picks', description: 'Daily prediction challenges', icon: Calendar, popular: false },
  { id: 'custom-game', title: 'Custom Game', description: 'Work with us to create something unique', icon: Users, popular: false }
]

const audienceSizes = [
  { id: 'small', title: '1-1,000 people', description: 'Small, intimate group', icon: User },
  { id: 'medium', title: '1,000-10,000 people', description: 'Medium-sized community', icon: Users },
  { id: 'large', title: '10,000-50,000 people', description: 'Large organization or network', icon: Globe },
  { id: 'xlarge', title: '50K+ people', description: 'Very large audience reach', icon: Zap }
]

export default function CreateGamePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    organizationType: '',
    causeCategory: '',
    audienceSize: '',
    gameType: '',
    gameTheme: '',
    fundraisingGoal: '',
    timeline: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organizationName: '',
    additionalDetails: ''
  })

  const totalSteps = 8

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/create-game', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Could redirect to a success page or show success message
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Failed to submit request. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.organizationType
      case 2:
        return formData.causeCategory
      case 3:
        return formData.audienceSize
      case 4:
        return formData.gameType
      case 5:
        return formData.fundraisingGoal
      case 6:
        return formData.timeline
      case 7:
        return formData.firstName && formData.lastName && formData.email && formData.organizationName
      case 8:
        return formData.firstName && formData.lastName && formData.email && formData.organizationName
      default:
        return false
    }
  }

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

              {/* Exit Button */}
              <Link href="/" className={`text-gray-600 hover:text-[#FF7073] transition-all duration-300 font-semibold hover:scale-105 ${
                isScrolled ? 'text-base' : 'text-lg'
              }`}>
                Exit
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={`fixed left-0 right-0 z-40 bg-white border-b border-gray-200 transition-all duration-500 ease-in-out ${
        isScrolled ? 'top-24' : 'top-24'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-gray-900">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-sm text-gray-600">
              {currentStep === 1 && "What type of organization are you?"}
              {currentStep === 2 && "What cause do you support?"}
              {currentStep === 3 && "What's your audience size?"}
              {currentStep === 4 && "What type of game would you like?"}
              {currentStep === 5 && "What's your fundraising goal?"}
              {currentStep === 6 && "When would you like to launch?"}
              {currentStep === 7 && "Tell us how to reach you"}
              {currentStep === 8 && "Review and submit your request"}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#8CD1F0] h-2 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-44 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Step 1: Organization Type */}
          {currentStep === 1 && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  What type of organization are you?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Help us understand your organization type to customize your experience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizationTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <button
                      key={type.id}
                      onClick={() => updateFormData('organizationType', type.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left ${
                        formData.organizationType === type.id
                          ? 'border-[#A4DBF4] bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon className={`w-8 h-8 mb-4 ${
                        formData.organizationType === type.id ? 'text-[#A4DBF4]' : 'text-gray-600'
                      }`} />
                      <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Cause Category */}
          {currentStep === 2 && (
            <div className="space-y-10 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  What type of game would your community love the most?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  This helps us create the best experience for everyone!
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {causeCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => updateFormData('causeCategory', category.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center ${
                        formData.causeCategory === category.id
                          ? 'border-[#FF7073] bg-pink-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`} style={{ backgroundColor: category.color }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">{category.title}</h3>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 3: Audience Size */}
          {currentStep === 3 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  What's the size of your donor network?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  This helps us recommend the right game scale and features for your audience
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audienceSizes.map((size) => {
                  const Icon = size.icon
                  return (
                    <button
                      key={size.id}
                      onClick={() => updateFormData('audienceSize', size.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left ${
                        formData.audienceSize === size.id
                          ? 'border-[#A4DBF4] bg-blue-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <Icon className={`w-8 h-8 ${
                          formData.audienceSize === size.id ? 'text-[#A4DBF4]' : 'text-gray-600'
                        }`} />
                        <div>
                          <h3 className="font-bold text-gray-900">{size.title}</h3>
                          <p className="text-sm text-gray-600">{size.description}</p>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 4: Game Type */}
          {currentStep === 4 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  What type of game would you like to create?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose the game style that will best engage your donors
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameTypes.map((game) => {
                  const Icon = game.icon
                  return (
                    <button
                      key={game.id}
                      onClick={() => updateFormData('gameType', game.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left relative ${
                        formData.gameType === game.id
                          ? 'border-[#FF7073] bg-pink-50 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {game.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF7073] to-[#A4DBF4] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <Icon className={`w-8 h-8 mb-4 ${
                        formData.gameType === game.id ? 'text-[#FF7073]' : 'text-gray-600'
                      }`} />
                      <h3 className="font-bold text-gray-900 mb-2">{game.title}</h3>
                      <p className="text-sm text-gray-600">{game.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 5: Fundraising Goal */}
          {currentStep === 5 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  What's your fundraising goal?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  This helps us set up the right game mechanics and pricing strategy
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['$1k', '$10k', '$50k', 'a lot'].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => updateFormData('fundraisingGoal', goal)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center ${
                      formData.fundraisingGoal === goal
                        ? 'border-[#A4DBF4] bg-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <DollarSign className={`w-8 h-8 mx-auto mb-2 ${
                      formData.fundraisingGoal === goal ? 'text-[#A4DBF4]' : 'text-gray-600'
                    }`} />
                    <h3 className="font-bold text-gray-900">{goal}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Timeline */}
          {currentStep === 6 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  When would you like to launch?
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  This helps us plan the development timeline and launch strategy
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'asap', title: 'As soon as possible', desc: 'Launch within 1-2 weeks' },
                  { value: '1month', title: 'Within a month', desc: 'Plan and prepare for launch' },
                  { value: 'flexible', title: 'I\'m flexible', desc: 'Work with our schedule' }
                ].map((timeline) => (
                  <button
                    key={timeline.value}
                    onClick={() => updateFormData('timeline', timeline.value)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left ${
                      formData.timeline === timeline.value
                        ? 'border-[#FF7073] bg-pink-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Clock className={`w-8 h-8 mb-4 ${
                      formData.timeline === timeline.value ? 'text-[#FF7073]' : 'text-gray-600'
                    }`} />
                    <h3 className="font-bold text-gray-900 mb-2">{timeline.title}</h3>
                    <p className="text-sm text-gray-600">{timeline.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Contact Information */}
          {currentStep === 7 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Tell us how to reach you
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We'll use this information to contact you about your fundraising game
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your.email@organization.com"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Organization Name *</label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => updateFormData('organizationName', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Additional Details</h3>
                  <textarea
                    value={formData.additionalDetails}
                    onChange={(e) => updateFormData('additionalDetails', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7073] focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us more about your fundraising goals, special requirements, or any questions you have..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 8: Review & Submit */}
          {currentStep === 8 && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Review your request
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Almost done! Please review your information before submitting
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-8">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-black text-green-900 mb-2">Request Submitted Successfully!</h3>
                    <p className="text-green-700">Thank you! We'll contact you within 24 hours to discuss your fundraising game.</p>
                    <div className="mt-6">
                      <Link href="/" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors">
                        Return to Home
                      </Link>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-black text-red-900 mb-2">Submission Failed</h3>
                    <p className="text-red-700 mb-4">{errorMessage}</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}

                {/* Form (hidden when submitted successfully) */}
                {submitStatus !== 'success' && (
                  <>
                {/* Contact Information */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-3xl border border-gray-200">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="your.email@organization.com"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Organization Name *</label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => updateFormData('organizationName', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#A4DBF4] focus:border-transparent outline-none transition-all duration-300"
                      placeholder="Your organization name"
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="bg-gradient-to-r from-pink-50 to-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Additional Details</h3>
                  <textarea
                    value={formData.additionalDetails}
                    onChange={(e) => updateFormData('additionalDetails', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF7073] focus:border-transparent outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us more about your fundraising goals, special requirements, or any questions you have..."
                  />
                </div>

                {/* Summary Box */}
                <div className="bg-gradient-to-r from-[#A4DBF4]/10 to-[#FF7073]/10 p-8 rounded-3xl border border-gray-200">
                  <h3 className="text-xl font-black text-gray-900 mb-4">Your Game Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Organization Type:</span>
                      <span className="font-semibold capitalize">{formData.organizationType.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cause Category:</span>
                      <span className="font-semibold capitalize">{formData.causeCategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Audience Size:</span>
                      <span className="font-semibold">
                        {audienceSizes.find(a => a.id === formData.audienceSize)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Game Type:</span>
                      <span className="font-semibold">
                        {gameTypes.find(g => g.id === formData.gameType)?.title}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fundraising Goal:</span>
                      <span className="font-semibold">{formData.fundraisingGoal}</span>
                    </div>
                  </div>
                </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`relative flex items-center space-x-2 px-8 py-4 rounded-full font-black text-lg overflow-hidden group transition-all duration-500 ${
                  canProceed()
                    ? 'text-gray-800 bg-[#8CD1F0] hover:shadow-xl border-2 border-[#FF999A] hover:border-[#8CD1F0] hover:scale-105'
                    : 'bg-gray-300 cursor-not-allowed text-gray-500 border-2 border-gray-300'
                }`}
              >
                <span className="relative z-10">Continue</span>
                <ArrowRight className="w-5 h-5 relative z-10" />
                {canProceed() && (
                  <>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#8CD1F0] via-[#FF999A] via-[#8CD1F0] to-[#FF999A] animate-spin-slow"></div>
                      <div className="absolute inset-[2px] rounded-full bg-[#8CD1F0]"></div>
                    </div>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`relative flex items-center space-x-2 px-8 py-4 rounded-full font-black text-lg overflow-hidden group transition-all duration-500 ${
                  canProceed() && !isSubmitting
                    ? 'text-gray-800 bg-[#8CD1F0] hover:shadow-xl border-2 border-[#FF999A] hover:border-[#8CD1F0] hover:scale-105'
                    : 'bg-gray-300 cursor-not-allowed text-gray-500 border-2 border-gray-300'
                }`}
              >
                <Check className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                {canProceed() && !isSubmitting && (
                  <>
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-full border-2 bg-gradient-to-r from-[#8CD1F0] via-[#FF999A] via-[#8CD1F0] to-[#FF999A] animate-spin-slow"></div>
                      <div className="absolute inset-[2px] rounded-full bg-[#8CD1F0]"></div>
                    </div>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
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