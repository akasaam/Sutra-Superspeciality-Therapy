"use client"

import { useState, useEffect } from "react"

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
          <img src="/images/sutra-logo.png" alt="Sutra.care" className="h-24 mx-auto animate-pulse-slow" />
        </div>

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
