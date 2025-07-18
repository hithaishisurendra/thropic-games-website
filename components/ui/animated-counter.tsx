"use client"
import { useState, useEffect } from "react"

export default function AnimatedCounter({ 
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