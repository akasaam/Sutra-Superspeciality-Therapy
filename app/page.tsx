"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, ThumbsUp, ThumbsDown, Heart, Shield, Users, ArrowLeft, ArrowRight } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Clinical & Rehabilitation",
      description: "Physiotherapy, occupational therapy, speech therapy, and specialized rehabilitation services.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services",
      buttonText: "Learn More",
    },
    {
      title: "Prosthetics & Orthotics",
      description: "Custom prosthetic devices, orthotic solutions, braces, and splints for enhanced mobility.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      href: "/services",
      buttonText: "Explore Options",
    },
    {
      title: "Home Care Services",
      description: "Comprehensive home healthcare including diagnostics, nursing, and medical equipment rental.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      href: "/services",
      buttonText: "Book Home Visit",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      timeAgo: "2 months ago",
      rating: 5,
      content:
        "The physiotherapy team at Sutra helped me recover completely after my knee surgery. Their home care services made the recovery process so much easier for my family.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      likes: 15,
      dislikes: 0,
    },
    {
      name: "Priya Sharma",
      timeAgo: "3 months ago",
      rating: 5,
      content:
        "My father needed a prosthetic leg, and Sutra provided excellent care and a perfectly fitted device. The occupational therapy sessions helped him regain his independence.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      likes: 22,
      dislikes: 0,
    },
  ]

  const statistics = [
    { number: "15,000+", label: "Patients Treated" },
    { number: "8,500+", label: "Rehabilitation Sessions" },
    { number: "2,200+", label: "Home Care Visits" },
    { number: "1,800+", label: "Prosthetic & Orthotic Devices" },
  ]

  const patientStories = [
    {
      title: "Stroke Recovery Success",
      description: "Treated by Dr. Anita Roy - Rehabilitation Team",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      content:
        "Mr. Ramesh underwent comprehensive stroke rehabilitation at Sutra. Through our integrated approach combining physiotherapy, occupational therapy, and speech therapy, he regained 90% of his motor functions within 6 months.",
    },
    {
      title: "Prosthetic Limb Success Story",
      description: "Treated by Dr. Rajesh Kumar - Prosthetics Team",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      content:
        "Mrs. Sunita received a custom transfemoral prosthetic device after an accident. Our team provided comprehensive training and support, enabling her to return to her teaching profession within 4 months.",
    },
  ]

  const infoSections = [
    {
      title: "SUTRA Newsletter",
      description:
        "Stay updated with the latest in rehabilitation medicine, prosthetics technology, and home care innovations through our monthly newsletter.",
    },
    {
      title: "Health Resources",
      description:
        "Access comprehensive guides on rehabilitation exercises, prosthetic care, and home healthcare tips.",
    },
    {
      title: "Patient Support",
      description:
        "24/7 support for all your healthcare queries. Our team is always ready to assist with appointments, equipment, and care guidance.",
    },
  ]

  const events = [
    {
      title: "SUTRA Rehabilitation Center in association with local NGOs started a noble initiative",
      hashtag: "#RehabilitationForAll",
      image: "https://images.unsplash.com/photo-1576267423445-b2f8b1a1043e?w=400&h=300&fit=crop",
    },
    {
      title: "FREE PROSTHETIC CAMP",
      subtitle: "COMMUNITY OUTREACH PROGRAM",
      date: "Date: Every 3rd Saturday",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
  ]

  const blogs = [
    {
      title: "Post-Stroke Rehabilitation - A Comprehensive Guide",
      description:
        "Stroke rehabilitation is crucial for recovery. Learn about the different therapies, timelines, and what to expect during the rehabilitation process...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
    {
      title: "Choosing the Right Prosthetic Device",
      description:
        "Understanding the different types of prosthetic devices available and how to choose the right one for your lifestyle and needs...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [storySlide, setStorySlide] = useState(0)
  const [eventSlide, setEventSlide] = useState(0)
  const [blogSlide, setBlogSlide] = useState(0)
  const heroImages = [
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=800&fit=crop",
  ]

  // Mobile view remains unchanged
  const mobileView = (
    <div className="lg:hidden bg-white/80">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(25, 147, 229, 0.1) 0%, rgba(25, 147, 229, 0.3) 100%), url("https://images.unsplash.com/photo-1576267423445-b2f8b1a1043e?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sutra-blue/10 to-transparent"></div>
            <div className="flex flex-col gap-2 text-left relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-sutra-blue" />
                <span className="font-sans text-sutra-blue font-medium">Comprehensive Healthcare</span>
              </div>
              <h1 className="font-sans text-sutra-dark text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Your Journey to Complete Recovery Starts Here
              </h1>
              <h2 className="font-sans text-sutra-gray text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                From clinical rehabilitation to home care, we provide integrated healthcare solutions for your complete
                well-being and recovery.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <button className="relative bg-gradient-to-r from-sutra-blue to-blue-600 text-white px-6 py-3 @[480px]:px-8 @[480px]:py-4 rounded-2xl font-sans font-bold text-sm @[480px]:text-base hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">Explore Services</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <section className="px-4 py-5 bg-white/60">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-sutra-blue" />
            <span className="font-sans text-sutra-blue font-medium">Our Approach</span>
          </div>
          <h2 className="font-sans text-sutra-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            Integrated Healthcare Solutions
          </h2>
          <p className="font-sans text-sutra-dark text-base font-normal leading-normal pb-3">
            At Sutra.care, we provide comprehensive rehabilitation services, advanced prosthetics & orthotics, and
            complete home care solutions to support your journey to recovery and independence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 py-5 bg-white/80">
        <div>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-sutra-blue" />
              <span className="font-sans text-sutra-blue font-medium">Our Services</span>
            </div>
            <h2 className="font-sans text-sutra-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
              Comprehensive Care for Complete Recovery
            </h2>
          </div>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch gap-3 p-1">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex h-full flex-1 flex-col gap-4 rounded-2xl min-w-60 bg-white/90 backdrop-blur border border-sutra-border/50 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="w-full h-32 bg-center bg-cover rounded-2xl"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <div>
                    <p className="font-sans text-sutra-dark text-base font-medium leading-normal">{service.title}</p>
                    <p className="font-sans text-sutra-gray text-sm font-normal leading-normal">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-5 bg-white/60">
        <div className="lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-sans text-sutra-dark text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
              Patient Success Stories
            </h2>
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden lg:grid lg:grid-cols-2 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col gap-3 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 lg:size-12"
                    style={{ backgroundImage: `url("${testimonial.avatar}")` }}
                  />
                  <div className="flex-1">
                    <p className="font-sans text-sutra-dark text-base lg:text-lg font-medium leading-normal">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sutra-gray text-sm font-normal leading-normal">
                      {testimonial.timeAgo}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-sutra-blue fill-current" />
                  ))}
                </div>
                <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal">
                  {testimonial.content}
                </p>
                <div className="flex gap-9 text-sutra-gray">
                  <button className="flex items-center gap-2">
                    <ThumbsUp size={20} />
                    <p className="font-sans text-inherit">{testimonial.likes}</p>
                  </button>
                  {testimonial.dislikes > 0 && (
                    <button className="flex items-center gap-2">
                      <ThumbsDown size={20} />
                      <p className="font-sans text-inherit">{testimonial.dislikes}</p>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-6 px-5 py-10 text-center bg-white/80 border-t border-sutra-border/50">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/about"
            className="font-sans text-sutra-gray text-base font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="font-sans text-sutra-gray text-base font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sutra-gray text-base font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="font-sans text-sutra-gray text-base font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="font-sans text-sutra-gray text-base font-normal leading-normal">
          © 2024 Sutra.care. All rights reserved.
        </p>
      </footer>
    </div>
  )

  // Desktop view based on BLK-MAX design with updated content
  const desktopView = (
    <div className="hidden lg:block">
      {/* Hero Section with Carousel and Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img
                src={heroImages[currentSlide] || "/placeholder.svg"}
                alt="Rehabilitation and physiotherapy services"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
                <div className="flex space-x-1">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/50"}`}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setCurrentSlide(i)}
                    ></button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button
                    className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
                    aria-label="Previous slide"
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
                  >
                    <ArrowLeft className="h-4 w-4 text-white" />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"
                    aria-label="Next slide"
                    onClick={() => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))}
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sutra-blue to-blue-600 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-secondary font-bold mb-2">Quick Booking</h2>
                <p className="text-blue-100 text-sm mb-6">Schedule your appointment in seconds</p>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                  </div>

                  <div>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all">
                      <option value="" className="text-gray-800">
                        Select Service
                      </option>
                      <option value="physiotherapy" className="text-gray-800">
                        Physiotherapy
                      </option>
                      <option value="prosthetics" className="text-gray-800">
                        Prosthetics & Orthotics
                      </option>
                      <option value="home-care" className="text-gray-800">
                        Home Care
                      </option>
                      <option value="consultation" className="text-gray-800">
                        General Consultation
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      className="px-3 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm"
                    />
                    <select className="px-3 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm">
                      <option value="" className="text-gray-800">
                        Time
                      </option>
                      <option value="09:00" className="text-gray-800">
                        9:00 AM
                      </option>
                      <option value="10:00" className="text-gray-800">
                        10:00 AM
                      </option>
                      <option value="11:00" className="text-gray-800">
                        11:00 AM
                      </option>
                      <option value="14:00" className="text-gray-800">
                        2:00 PM
                      </option>
                      <option value="15:00" className="text-gray-800">
                        3:00 PM
                      </option>
                      <option value="16:00" className="text-gray-800">
                        4:00 PM
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Book Appointment Now
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-blue-100 text-center">
                    Or call us directly: <span className="font-semibold">+91-98765-43210</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-1">Home Care Services</h3>
                <p className="text-xs text-gray-600 mb-2">24/7 nursing and rehabilitation at home</p>
                <Link href="/services">
                  <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-1">Prosthetics & Orthotics</h3>
                <p className="text-xs text-gray-600 mb-2">Custom devices for enhanced mobility</p>
                <Link href="/services">
                  <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-bold text-sutra-blue">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Stories */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Patient Success Stories</h2>
          <div className="grid grid-cols-2 gap-6">
            {patientStories.map((story, index) => (
              <div key={index} className="border rounded-lg overflow-hidden relative">
                <div className="p-6">
                  <div className="absolute top-4 right-4">
                    <img src="/images/sutra-logo.png" alt="Sutra.care" className="h-6" />
                  </div>
                  <div className="flex items-start mb-4">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">{story.content}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold">{story.title}</h3>
                      <p className="text-sm text-gray-600">{story.description}</p>
                    </div>
                    <Link href="/testimonials">
                      <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                        Read
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === storySlide ? "bg-sutra-blue" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setStorySlide(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Sections */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-6">
            {infoSections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{section.description}</p>
                <Link href="#">
                  <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Destination */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Leading Rehabilitation & Prosthetics Center</h2>
              <p className="text-gray-600 mb-4">
                Providing world-class rehabilitation services and advanced prosthetic solutions to patients across North
                Bengal and beyond.
              </p>
              <Link href="/about">
                <button className="bg-teal-500 text-white text-sm px-4 py-2 rounded-md hover:bg-teal-600 transition-colors mt-4">
                  Know More
                </button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop"
                alt="Rehabilitation team with patients"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">SUTRA Events & Community Outreach</h2>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{event.title}</h3>
                    {event.subtitle && <p className="text-sm text-gray-800 mb-1">{event.subtitle}</p>}
                    {event.date && <p className="text-xs text-gray-600 mb-2">{event.date}</p>}
                    {event.hashtag && <p className="text-sm text-sutra-blue mb-2">{event.hashtag}</p>}
                    <Link href="#">
                      <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
              onClick={() => setEventSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1))}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
              onClick={() => setEventSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1))}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-sutra-blue" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">SUTRA Health Resources</h2>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {blogs.map((blog, index) => (
                <div key={index} className="flex">
                  <div className="w-1/3">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-32 object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="w-2/3 bg-white p-4 rounded-r-lg border-t border-r border-b">
                    <h3 className="font-bold text-sm mb-1">{blog.title}</h3>
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{blog.description}</p>
                    <Link href="#">
                      <button className="bg-teal-500 text-white text-xs px-3 py-1 rounded-md hover:bg-teal-600 transition-colors">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
              onClick={() => setBlogSlide((prev) => (prev === 0 ? blogs.length - 1 : prev - 1))}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
              onClick={() => setBlogSlide((prev) => (prev === blogs.length - 1 ? 0 : prev + 1))}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 0 ? "bg-sutra-blue" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-sutra-blue">
              About Us
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-sutra-blue">
              Services
            </Link>
            <Link href="/team" className="text-gray-600 hover:text-sutra-blue">
              Doctors
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-sutra-blue">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-sutra-blue">
              Contact
            </Link>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">© 2024 Sutra.care. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )

  return (
    <>
      {mobileView}
      {desktopView}
    </>
  )
}
