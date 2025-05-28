import Link from "next/link"
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sutra-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-sutra-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl">Sutra.care</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing unified expert care through integrated healthcare solutions. Our mission is to deliver
              compassionate, evidence-based treatment for optimal patient outcomes.
            </p>
            <div className="flex items-start space-x-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <span>123 Healthcare Avenue, Siliguri, North Bengal, West Bengal 734001</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-white text-sm transition-colors">
                Our Team
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-white text-sm transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                Contact Us
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <div>
                  <Link href="tel:+91-9876543210" className="text-gray-300 hover:text-white text-sm transition-colors">
                    +91-98765-43210
                  </Link>
                  <br />
                  <Link href="tel:+91-9876543211" className="text-gray-300 hover:text-white text-sm transition-colors">
                    +91-98765-43211
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <div>
                  <Link
                    href="mailto:info@sutra.care"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    info@sutra.care
                  </Link>
                  <br />
                  <Link
                    href="mailto:appointments@sutra.care"
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    appointments@sutra.care
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Sutra.care. All rights reserved. |
            <span className="text-xs ml-1">
              For medical emergencies, please call 102 or visit the nearest emergency room.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
