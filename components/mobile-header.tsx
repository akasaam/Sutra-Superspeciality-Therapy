"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Sparkles } from "lucide-react"

export function MobileHeader() {
  const pathname = usePathname()

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Sutra"
      case "/about":
        return "About Us"
      case "/services":
        return "Services"
      case "/team":
        return "Our Team"
      case "/testimonials":
        return "Testimonials"
      case "/contact":
        return "Contact Us"
      default:
        if (pathname.startsWith("/services/")) {
          return "Service Details"
        }
        return "Sutra"
    }
  }

  const showBackButton = pathname !== "/"
  const isHomePage = pathname === "/"

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-sutra-border lg:hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="flex items-center bg-white/95 backdrop-blur p-4 pb-2 justify-between">
        {showBackButton ? (
          <Link href="/" className="text-sutra-dark flex size-12 shrink-0 items-center">
            <ArrowLeft size={24} />
          </Link>
        ) : (
          <div className="size-12" />
        )}

        {isHomePage ? (
          <div className="flex-1 flex justify-center">
            <img src="/images/sutra-logo.png" alt="Sutra.care" className="h-8" />
          </div>
        ) : (
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-sans text-sutra-dark">
            {getPageTitle()}
          </h2>
        )}

        {isHomePage ? (
          <div className="flex w-12 items-center justify-end">
            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-sutra-blue to-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300" />
              Book
            </Link>
          </div>
        ) : (
          <div className="size-12" />
        )}
      </div>
    </div>
  )
}
