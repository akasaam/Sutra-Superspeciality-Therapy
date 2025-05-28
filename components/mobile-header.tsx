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
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-sutra-border lg:relative lg:border-0 lg:shadow-sm">
      {/* Mobile Header */}
      <div className="flex items-center bg-white/95 backdrop-blur p-4 pb-2 justify-between lg:hidden">
        {showBackButton ? (
          <Link href="/" className="text-sutra-dark flex size-12 shrink-0 items-center">
            <ArrowLeft size={24} />
          </Link>
        ) : (
          <div className="size-12" />
        )}

        <h2
          className={`text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center ${
            isHomePage ? "font-sans text-sutra-blue text-2xl" : "font-sans text-sutra-dark"
          }`}
        >
          {getPageTitle()}
        </h2>

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

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between p-6 bg-white/95 backdrop-blur">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sutra-blue to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-sans text-lg font-bold">S</span>
          </div>
          <span className="font-sans text-3xl font-bold text-sutra-blue">Sutra.care</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link href="/" className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium">
            About Us
          </Link>
          <Link
            href="/services"
            className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium"
          >
            Services
          </Link>
          <Link href="/team" className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium">
            Our Team
          </Link>
          <Link
            href="/testimonials"
            className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sutra-dark hover:text-sutra-blue transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>

        <Link href="/contact">
          <button className="relative bg-gradient-to-r from-sutra-blue to-blue-600 text-white px-8 py-3 rounded-2xl font-sans font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
            <Sparkles className="h-4 w-4 inline mr-2" />
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  )
}
