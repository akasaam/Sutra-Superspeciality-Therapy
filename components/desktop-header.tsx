import Link from "next/link"
import { Phone } from "lucide-react"

export function DesktopHeader() {
  return (
    <div className="hidden lg:block">
      {/* Top bar with contact info */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/covid" className="text-sm text-gray-600 hover:text-sutra-blue">
              Covid-19 Vaccination
            </Link>
            <Link href="/enquiry" className="text-sm text-gray-600 hover:text-sutra-blue">
              Quick Enquiry
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">HELPLINE:</span>
            <Link href="tel:+919876543210" className="text-sm font-semibold bg-sutra-blue text-white px-3 py-1 rounded">
              <Phone className="h-3 w-3 inline mr-1" />
              +91-9876543210
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="/images/sutra-logo.png" alt="Sutra.care" className="h-12" />
            </Link>

            <nav className="flex items-center space-x-6">
              <Link href="/about" className="text-gray-700 hover:text-sutra-blue font-medium">
                About Us
              </Link>
              <div className="relative group">
                <Link href="/services" className="text-gray-700 hover:text-sutra-blue font-medium flex items-center">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              <div className="relative group">
                <Link href="/team" className="text-gray-700 hover:text-sutra-blue font-medium flex items-center">
                  Doctors
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              <Link href="/testimonials" className="text-gray-700 hover:text-sutra-blue font-medium">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-sutra-blue font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
