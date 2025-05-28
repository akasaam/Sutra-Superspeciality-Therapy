"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Check if user has seen loading screen before
    const hasSeenLoading = localStorage.getItem("sutra-loading-seen")

    if (hasSeenLoading) {
      setIsVisible(false)
      return
    }

    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(() => {
        setIsVisible(false)
        localStorage.setItem("sutra-loading-seen", "true")
      }, 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="h-20 w-20 rounded-full bg-sutra-blue/20 animate-pulse-slow mx-auto mb-4"></div>
            <Heart className="h-8 w-8 text-sutra-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
        </div>

        <h1 className="font-sans text-4xl font-bold text-sutra-blue mb-2">Sutra</h1>
        <p className="font-sans text-sutra-gray text-lg">Caring for your little ones</p>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-sutra-blue rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sutra-blue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-sutra-blue rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
