"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4 lg:p-0">
          <div
            className="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl lg:rounded-none items-center justify-center p-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center lg:text-left lg:gap-6">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Get in Touch
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                We're here to help. Reach out to us with any questions or concerns, and our team will respond promptly.
              </h2>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop"
                alt="Contact us"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="flex flex-col">
                    <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal pb-2">Name</p>
                    <input
                      name="name"
                      placeholder="Your Name"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-sutra-dark focus:outline-0 focus:ring-0 border border-sutra-border bg-white focus:border-sutra-blue h-14 lg:h-16 placeholder:text-sutra-gray p-[15px] lg:p-[20px] text-base lg:text-lg font-normal leading-normal"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal pb-2">Phone</p>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Your Phone"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-sutra-dark focus:outline-0 focus:ring-0 border border-sutra-border bg-white focus:border-sutra-blue h-14 lg:h-16 placeholder:text-sutra-gray p-[15px] lg:p-[20px] text-base lg:text-lg font-normal leading-normal"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="flex flex-col">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal pb-2">Email</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-sutra-dark focus:outline-0 focus:ring-0 border border-sutra-border bg-white focus:border-sutra-blue h-14 lg:h-16 placeholder:text-sutra-gray p-[15px] lg:p-[20px] text-base lg:text-lg font-normal leading-normal"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal pb-2">Subject</p>
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-sutra-dark focus:outline-0 focus:ring-0 border border-sutra-border bg-white focus:border-sutra-blue h-14 lg:h-16 placeholder:text-sutra-gray p-[15px] lg:p-[20px] text-base lg:text-lg font-normal leading-normal"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <label className="flex flex-col">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal pb-2">Message</p>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-sutra-dark focus:outline-0 focus:ring-0 border border-sutra-border bg-white focus:border-sutra-blue min-h-36 lg:min-h-48 placeholder:text-sutra-gray p-[15px] lg:p-[20px] text-base lg:text-lg font-normal leading-normal"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 lg:h-14 px-5 lg:px-8 bg-sutra-blue text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] w-full hover:bg-blue-600 transition-colors"
              >
                <span className="truncate">Submit</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
              Contact Information
            </h3>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <Phone size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Phone</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    +91-98765-43210, +91-98765-43211
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <Mail size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Email</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    info@sutra.care, appointments@sutra.care
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <MapPin size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Address</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    123 Healthcare Avenue, Siliguri, North Bengal, West Bengal 734001
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <Clock size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Hours</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    Mon-Fri: 8 AM - 8 PM, Sat: 8 AM - 6 PM, Sun: 9 AM - 5 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <div className="w-full h-64 lg:h-96 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop"
              alt="Map location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto text-center">
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal">
            In case of emergency, please call 102 or go to the nearest emergency room.
          </p>
        </div>
      </section>
    </div>
  )
}
