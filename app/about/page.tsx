"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { TrendingUp, Users, Zap, Target, Heart, Trophy, Play, ChevronLeft, ChevronRight, X } from 'lucide-react'

interface Article {
  id: number
  title: string
  author: string
  date: string
  summary: string
  keyInsights: string[]
  fullContent: React.ReactNode
}

const articles: Article[] = [
  {
    id: 1,
    title: "A Data Point We Can't Unsee (and Keeps Going Up)",
    author: "Kyle Christensen",
    date: "March 21, 2025",
    summary: "The $11.9 trillion generational wealth transfer is here, but younger donors expect interactive, engaging experiences. Learn how gaming strategies from Robinhood, TikTok, and Bitcoin can revolutionize nonprofit fundraising.",
    keyInsights: [
      "$11.9 trillion wealth transfer to nonprofits over next decade",
      "Generational shift from traditional to digital-first engagement",
      "Gaming tactics proven successful across finance, social media, and crypto",
      "Strategic opportunity to modernize nonprofit fundraising"
    ],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          There's a data point that nonprofit leaders can't unsee once they hear it. And unfortunately, it keeps going up every year.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
          <p className="text-lg font-semibold text-blue-800">
            $11.9 trillion will transfer to nonprofits over the next decade
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Source: Philanthropic Forecasting Initiative
          </p>
        </div>

        <p>
          But here's the challenge: the people inheriting and donating this wealth don't engage with causes the same way their predecessors did. They're digital natives who expect interactive, engaging experiences in every aspect of their lives.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Learning from Digital Pioneers</h3>
        
        <p>
          Look at how other industries successfully captured this generation's attention:
        </p>

        <div className="bg-pink-50 border-l-4 border-pink-400 p-4 my-6">
          <p className="text-lg font-semibold text-pink-800">
            Robinhood: Made investing feel like a game
          </p>
          <p className="text-pink-600 text-sm mt-1">
            Result: 23+ million users, average age 31
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
          <p className="text-lg font-semibold text-green-800">
            TikTok & YouTube: Gamified content creation
          </p>
          <p className="text-green-600 text-sm mt-1">
            Result: Billions of engaged users creating and consuming content daily
          </p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-6">
          <p className="text-lg font-semibold text-purple-800">
            Bitcoin: Made investing social and competitive
          </p>
          <p className="text-purple-600 text-sm mt-1">
            Result: $1+ trillion market cap driven by community engagement
          </p>
        </div>

        <p>
          The pattern is clear: when you make participation interactive, social, and engaging, people don't just participate—they become advocates.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Nonprofit Opportunity</h3>
        
        <p>
          Traditional fundraising methods—galas, direct mail, phone calls—are becoming less effective with younger donors. They want to:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Understand the impact of their donation immediately</li>
          <li>Engage with causes in fun, interactive ways</li>
          <li>Share their involvement with their network</li>
          <li>Feel part of a community working toward common goals</li>
        </ul>

        <p>
          At Thropic Games, we're bringing these proven engagement strategies to nonprofit fundraising. Our charity challenges combine the excitement of prediction games with meaningful charitable giving, creating experiences that donors actually want to participate in and share.
        </p>

        <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border border-gray-200 mt-8">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            The Result? Nonprofits using our platform see:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>200%+ increase in donor engagement</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>50%+ more first-time donors</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Higher average donation amounts</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Increased social media sharing and viral growth</li>
          </ul>
        </div>

        <p className="mt-6">
          The $11.9 trillion is coming. The question isn't whether nonprofits will receive this generational wealth transfer—it's which organizations will be ready to engage these donors in the ways they expect and deserve.
        </p>

        <p className="font-semibold text-gray-900">
          The future of fundraising isn't just digital—it's interactive, engaging, and built around community. And that future is available today.
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "How to: Putting Together Good Marketing Plan for Your Charity Challenge",
    author: "Kyle Christensen",
    date: "December 20, 2024",
    summary: "A comprehensive 5-step marketing framework to turn your charity challenge into a successful fundraising event. Includes proven email templates, social media strategies, and post-campaign communication.",
    keyInsights: [
      "5-step email marketing framework for charity challenges",
      "Proven subject lines and messaging templates",
      "Social media integration strategies",
      "Post-campaign thank you and impact communication"
    ],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          A well-thought-out marketing plan is key to turning your charity challenge into a successful fundraising event. By creating a clear roadmap for engaging your donors, you can maximize participation, raise significant funds, and strengthen connections with your community.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Intro Email: Setting the Stage</h3>
        <p>Start by introducing your donors to the charity challenge, your partnership with Thropic, and what they can expect leading up to the event.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-semibold mb-2">Subject Line: "Get Ready to Play for a Cause!"</p>
          <div className="text-sm space-y-2">
            <p><strong>Body:</strong></p>
            <p>Hi [First Name],</p>
            <p>We're thrilled to announce a special opportunity to support [Nonprofit Name]! We've teamed up with Thropic Games to create an exciting [Game Name] Charity Challenge, where you can have fun while making a difference.</p>
            <p><strong>Here's what's coming up:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>What it is:</strong> A chance to predict winners, compete, and contribute to our mission.</li>
              <li><strong>Our goal:</strong> Raise $[Amount] to [specific mission or project].</li>
              <li><strong>How it works:</strong> Make your picks, donate, and track your progress on our leaderboard.</li>
            </ul>
            <p>Stay tuned for more updates on how to join the challenge. Together, we can make an incredible impact!</p>
            <p>Warmly,<br/>[Nonprofit Name]</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Kickoff Announcement: Launching the Challenge</h3>
        <p>When the charity challenge begins, send a kickoff email and share the news across your social media channels.</p>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-semibold mb-2">Email Subject Line: "The [Game Name] Charity Challenge is Live!"</p>
          <div className="text-sm space-y-2">
            <p>Hi [First Name],</p>
            <p>The wait is over! The [Game Name] Charity Challenge is officially live, and we'd love for you to join. Here's how you can get started:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Visit the Challenge Page:</strong> [Link to landing page]</li>
              <li><strong>Make Your Picks:</strong> Answer a few fun questions.</li>
              <li><strong>Donate:</strong> Support [Nonprofit Name] with your entry.</li>
            </ul>
            <p>[CTA Button: Join the Challenge]</p>
            <p><strong>Why this is important</strong> – We want to make a fun, engaging way for all donors to participate in our cause without breaking the bank. Let's make this campaign unforgettable and hit our goal of $[Amount] together!</p>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
          <p className="font-semibold mb-2 text-blue-800">Social Media Post:</p>
          <p className="text-sm text-blue-700">🎉 The [Game Name] Charity Challenge is here! Make your picks, donate, and support [Nonprofit Name]. Let's raise $[Amount] together!<br/>👉 [Link to landing page]</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Countdown Email: One Week to Go</h3>
        <p>Build excitement a week before the challenge starts by highlighting how simple and impactful it is to participate.</p>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-semibold mb-2">Subject Line: "1 Week Until the [Game Name] Challenge!"</p>
          <div className="text-sm space-y-2">
            <p>Hi [First Name],</p>
            <p>We're just one week away from kicking off the [Game Name] Charity Challenge! Here's why you don't want to miss out:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>It's Easy:</strong> Make your predictions in just a few clicks.</li>
              <li><strong>It's Impactful:</strong> Every dollar goes directly to [specific mission or project].</li>
              <li><strong>It's Fun:</strong> Compete with friends and family to see who knows best!</li>
            </ul>
            <p>[CTA Button: Get Ready to Play]</p>
            <p>Mark your calendar for [start date], and stay tuned for updates. Let's make an impact together!</p>
            <p>Cheers,<br/>[Nonprofit Name]</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Final Push: 24 Hours to Go</h3>
        <p>Send a last-minute reminder to drive participation just before the event starts.</p>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-semibold mb-2">Subject Line: "Last Chance to Join the [Game Name] Challenge!"</p>
          <div className="text-sm space-y-2">
            <p>Hi [First Name],</p>
            <p>It's almost time! The [Game Name] Charity Challenge kicks off tomorrow (or today)! Don't miss your chance to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Play and Predict:</strong> Answer fun questions about [event or topic].</li>
              <li><strong>Support [Nonprofit Name]:</strong> Your donation directly benefits [specific mission].</li>
              <li><strong>Win Bragging Rights (and prizes!):</strong> Top participants will be featured on our leaderboard.</li>
            </ul>
            <p>[CTA Button: Join Now]</p>
            <p>Let's make this campaign unforgettable. Together, we can reach our goal of $[Amount]!</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Thank You Email: Celebrating Success</h3>
        <p>After the campaign ends, thank your donors and share the results to maintain engagement and inspire future participation.</p>

        <div className="bg-gray-50 p-4 rounded-lg border">
          <p className="font-semibold mb-2">Subject Line: "Thank You for Making an Impact!"</p>
          <div className="text-sm space-y-2">
            <p>Hi [First Name],</p>
            <p>You did it! Thanks to your incredible support, the [Game Name] Charity Challenge raised $[total amount]! Here's how your contributions will make a difference:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>[Specific impact bullet 1]</li>
              <li>[Specific impact bullet 2]</li>
            </ul>
            <p><strong>Follow Along:</strong> Check out the leaderboard to see who came out on top and celebrate the amazing effort by our community: [Link to leaderboard]</p>
            <p>Thank you for being part of this journey and making [Nonprofit Name]'s mission possible. Stay tuned for more ways to make an impact!</p>
            <p>With gratitude,<br/>[Nonprofit Name]</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Conclusion</h3>
        <p>
          Creating a good marketing plan for your charity challenge is all about preparation, communication, and engagement. By crafting compelling emails, leveraging social media, and focusing on donor impact, you can ensure your campaign is a resounding success. With the right strategy in place, you'll not only hit your fundraising goals but also strengthen relationships with your community.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Let's Not Call It Gambling or Betting…Please.",
    author: "Kyle Christensen",
    date: "December 13, 2024",
    summary: "Setting the record straight on how Thropic Games differs from gambling and sports betting. We're building games of skill focused on donor engagement, with responsible gaming features and transparent charitable impact.",
    keyInsights: [
      "Clear distinction between charity challenges and sports betting",
      "Games of skill vs. games of chance - knowledge-based competition",
      "Responsible gaming features: entry limits, fixed donations, transparent rules",
      "Building the largest community for philanthropic gaming"
    ],
    fullContent: (
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg font-medium text-gray-900">
          How Thropic Games is Responsibly Building the Future of Charitable Fundraising
        </p>
        
        <p>
          In our early days at Thropic Games, we have seen the growth of charities using our product – from the number of players entering our charity challenges to the amount of money raised more than doubling every time there is a big event. Whether it was the start of the NFL season, to some Thanksgiving day fun, to a gender reveal, and currently 'tis the season of college football playoff philanthropy.
        </p>

        <p>
          But with each instance, there is always a moment where someone associates what we are building with gambling or sports betting. So, let's make it clear why this is not sports betting or gambling.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">There Is No House</h3>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
          <p className="text-lg font-semibold text-red-800">
            We do not act as the house. We are a software company.
          </p>
          <p className="text-red-600 text-sm mt-1">
            We build charity challenges for donor engagement, not profit from losses
          </p>
        </div>

        <p>
          We build the charity challenges so that your donors can engage with you and their fellow donors. In the games and software we build, the players compete against one another for the best score. That best score is determined by their knowledge of the questions in the contest, and the person with the most knowledge almost always wins.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Games of Skill, Not Chance</h3>
        
        <p>
          This is why our games are games of skill or fantasy-related. They feature questions that test how much you know about all the elements that could give you the best shot at winning — health, weather, statistics, strategy, historical facts, and the list goes on. Just like chess, the more you know about the game and your opponent, the better you do.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Responsible Gaming Features</h3>
        
        <p>
          We've also put steps in place, both through the technology and the game dynamics, to allow people to responsibly play. With a sports book, you are allowed to gamble as much as you want (to a point), on whatever you want, to try and win a multiple on your wager. High risk, high reward. Our challenges don't allow this.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Entry Limits</h4>
            <p className="text-sm text-green-700">Most entries range from $10-$20, preventing excessive spending</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Participation Caps</h4>
            <p className="text-sm text-blue-700">Unable to enter more than 3% of total entries</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Direct Impact</h4>
            <p className="text-sm text-purple-700">Nearly all donations go directly to the nonprofit</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">Fixed Rules</h4>
            <p className="text-sm text-orange-700">Questions, prizes, and charity amounts are predetermined</p>
          </div>
        </div>

        <p>
          There is little risk unless your personal situation doesn't allow for the donation amount. Additionally, our questions, the prize, and the amount going to charity are fixed. The players can't change this, and they know it — but they still want to play because it's going to a cause they care deeply about.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Mission: Games for Good</h3>
        
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border border-gray-200 mt-8">
          <p className="text-lg font-semibold text-gray-900 mb-3">
            philan-Thropic Games
          </p>
          <p className="text-gray-700">
            It is literally in our name — because we are working to build the largest community of people who want to help do good through a little friendly competition. So, get in the game!
          </p>
        </div>

        <p className="mt-6">
          We hope this was helpful as you learn more about Thropic Games. Know that our mission at the end of the day is to create Games for Good.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Learn More</h3>
        
        <p>
          If you're ready to explore how Thropic Games can help your nonprofit double donations and engage more donors, we'd love to hear from you. Our team is here to walk you through how our platform works, answer your questions, and help you get started. Reach out today to learn more about setting up your first charity challenge and join the growing community of nonprofits using Thropic Games to drive impact.
        </p>
        
        <p className="font-semibold">
          Let's work together to make a bigger difference! 
          <a href="mailto:info@thropicgames.com" className="text-blue-600 hover:text-blue-800 ml-1">
            info@thropicgames.com
          </a>
        </p>
      </div>
    )
  }
]

export default function AboutPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  // Hero and section visibility animations
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length)
  }

  const openArticle = (article: Article) => {
    setSelectedArticle(article)
  }

  const closeArticle = () => {
    setSelectedArticle(null)
  }

  const toggleArticle = (articleId: number) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId)
  }

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
            {/* Header inside white box */}
            <div className="text-center px-8 md:px-16 py-16">
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
            {/* Content inside white box */}
            <div className="px-8 md:px-16 py-16">
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
        <section className="py-32 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                Why Choose Thropic?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-[#A4DBF4] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Engage GenZ</h3>
                <p className="text-gray-600">Attract the next generation of purpose-driven donors.</p>
              </div>

              <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">Data Insights</h3>
                <p className="text-gray-600">Understand donor behavior with actionable analytics.</p>
              </div>

              <div className="text-center bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
                <div className="w-16 h-16 bg-[#FF7073] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">AI Powered</h3>
                <p className="text-gray-600">Automated campaigns that work while you sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Voice Section */}
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
            {/* Content inside white box */}
            <div className="px-8 md:px-16 py-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8">
                  Vision & Voice
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
                  Insights and perspectives from our leadership
                </p>
              </div>
              
              {/* Articles List */}
              <div className="max-w-4xl mx-auto space-y-6">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    {/* Article Header - Always Visible */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleArticle(article.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          <div className="text-sm text-gray-500 mb-3">
                            {article.author} • {article.date}
                          </div>
                          <p className="text-gray-700 leading-relaxed">
                            {article.summary}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                            article.id % 2 === 1 ? 'from-[#FF7073] to-[#FF7073]' : 'from-[#A4DBF4] to-[#A4DBF4]'
                          } flex items-center justify-center transition-transform duration-300 ${
                            expandedArticle === article.id ? 'rotate-180' : ''
                          }`}>
                            <ChevronRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedArticle === article.id && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="pt-6">
                          {article.fullContent}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Modal */}
        <Dialog open={!!selectedArticle} onOpenChange={closeArticle}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedArticle && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedArticle.title}
                      </DialogTitle>
                      <p className="text-sm text-gray-600">
                        By {selectedArticle.author} • {selectedArticle.date}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeArticle}
                      className="flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </DialogHeader>
                
                <div className="mt-6">
                  {selectedArticle.fullContent}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

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