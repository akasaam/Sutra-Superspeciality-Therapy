"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"

export function CacheConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("sutra-cache-consent")
    if (!consent) {
      // Show after loading screen
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("sutra-cache-consent", "accepted")
    setIsVisible(false)
    // Simple localStorage caching instead of ServiceWorker
    localStorage.setItem("sutra-cache-enabled", "true")
  }

  const handleDecline = () => {
    localStorage.setItem("sutra-cache-consent", "declined")
    localStorage.setItem("sutra-cache-enabled", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 lg:left-auto lg:right-4 lg:max-w-md">
      <div className="bg-white border border-sutra-border rounded-2xl shadow-lg p-4">
        <div className="flex items-start gap-3">
          <Cookie className="h-6 w-6 text-sutra-blue flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-sans font-semibold text-sutra-dark mb-2">Improve Your Experience</h3>
            <p className="font-sans text-sm text-sutra-gray mb-4">
              We'd like to store some data locally to make Sutra load faster for your next visit. This helps provide a
              better experience for you and your family.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-sutra-blue text-white px-4 py-2 rounded-xl font-sans font-medium text-sm hover:bg-blue-600 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-sutra-light text-sutra-dark px-4 py-2 rounded-xl font-sans font-medium text-sm hover:bg-sutra-accent transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
          <button onClick={handleDecline} className="text-sutra-gray hover:text-sutra-dark transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
