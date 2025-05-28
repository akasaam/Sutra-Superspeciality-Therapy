"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Heart, Calendar, Menu, X, User, Info, Users, MessageCircle, Phone } from "lucide-react"

export function MobileNavigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/services", icon: Heart, label: "Services" },
    { href: "/contact", icon: Calendar, label: "Book" },
  ]

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Info },
    { href: "/services", label: "Services", icon: Heart },
    { href: "/team", label: "Our Team", icon: Users },
    { href: "/testimonials", label: "Testimonials", icon: MessageCircle },
    { href: "/contact", label: "Contact Us", icon: Phone },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex gap-2 border-t border-sutra-border/50 bg-white/95 backdrop-blur px-4 pb-3 pt-2 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-1 flex-col items-center justify-end gap-1 ${
                  isActive ? "text-sutra-blue" : "text-sutra-gray"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex h-8 items-center justify-center">
                  <Icon size={24} fill={isActive ? "currentColor" : "none"} />
                </div>
                <p className="font-sans text-xs font-medium leading-normal tracking-[0.015em]">{item.label}</p>
              </Link>
            )
          })}

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-1 flex-col items-center justify-end gap-1 text-sutra-gray"
          >
            <div className="flex h-8 items-center justify-center">
              <Menu size={24} />
            </div>
            <p className="font-sans text-xs font-medium leading-normal tracking-[0.015em]">Menu</p>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - 2 Grid Layout */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex items-end">
          <div className="bg-white/95 backdrop-blur w-full max-h-[70vh] rounded-t-3xl flex flex-col border-t border-sutra-border/50">
            <div className="flex flex-col p-4 space-y-4 flex-1 overflow-y-auto">
              <h3 className="font-sans text-lg font-bold text-sutra-dark text-center mb-4">Menu</h3>

              {/* 2 Grid Layout for Menu Items */}
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  const isActive =
                    pathname === item.href || (item.href === "/services" && pathname.startsWith("/services"))

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-sutra-blue text-white border-sutra-blue shadow-lg"
                          : "bg-white/80 text-sutra-dark border-sutra-border/50 hover:bg-sutra-light hover:border-sutra-blue/50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={24} className="mb-2" />
                      <span className="font-sans text-sm font-medium text-center">{item.label}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Profile Section */}
              <div className="mt-4 p-4 bg-sutra-light/80 rounded-2xl border border-sutra-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-sutra-blue to-blue-600 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sutra-dark">Welcome to Sutra</p>
                    <p className="font-sans text-sm text-sutra-gray">Your family's health partner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close button at bottom */}
            <div className="p-4 border-t border-sutra-border/50">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sutra-light rounded-2xl text-sutra-dark font-sans font-medium hover:bg-sutra-accent transition-colors"
              >
                <X size={20} />
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
