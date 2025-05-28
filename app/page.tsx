import Link from "next/link"
import { Star, ThumbsUp, ThumbsDown, Heart, Shield, Users } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Pediatric Care",
      description: "Specialized healthcare services designed specifically for children and adolescents.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      href: "/services/pediatric",
    },
    {
      title: "Family Wellness",
      description: "Comprehensive health programs for the whole family, promoting healthy lifestyles.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
      href: "/services/family-wellness",
    },
    {
      title: "Child Development",
      description: "Supporting healthy growth and development through specialized therapy and care.",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      href: "/services/child-development",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      timeAgo: "2 months ago",
      rating: 5,
      content:
        "Sutra.care has been amazing for our family. The pediatric team is so gentle with my daughter, and she actually looks forward to her visits!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      likes: 12,
      dislikes: 0,
    },
    {
      name: "Michael Chen",
      timeAgo: "3 months ago",
      rating: 5,
      content:
        "The family wellness program has helped us create healthier habits. My kids love the interactive sessions and educational activities.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      likes: 18,
      dislikes: 0,
    },
  ]

  return (
    <div className="bg-white/80">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4 lg:p-0">
          <div
            className="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl lg:rounded-none items-start justify-end px-4 pb-10 @[480px]:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(25, 147, 229, 0.1) 0%, rgba(25, 147, 229, 0.3) 100%), url("https://images.unsplash.com/photo-1576267423445-b2f8b1a1043e?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sutra-blue/10 to-transparent"></div>
            <div className="flex flex-col gap-2 text-left lg:gap-6 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-6 w-6 text-sutra-blue" />
                <span className="font-sans text-sutra-blue font-medium">Caring for Families</span>
              </div>
              <h1 className="font-sans text-sutra-dark text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Your Journey to Holistic Wellness Starts Here
              </h1>
              <h2 className="font-sans text-sutra-gray text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal">
                Discover a new approach to healthcare that integrates mind, body, and spirit for a balanced and
                fulfilling life for you and your family.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 lg:mt-6">
                <Link href="/services">
                  <button className="relative bg-gradient-to-r from-sutra-blue to-blue-600 text-white px-6 py-3 @[480px]:px-8 @[480px]:py-4 lg:px-10 lg:py-4 rounded-2xl font-sans font-bold text-sm @[480px]:text-base lg:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative">Explore Services</span>
                  </button>
                </Link>
                <Link href="/contact" className="hidden lg:block">
                  <button className="relative border-2 border-sutra-blue text-sutra-blue px-10 py-4 rounded-2xl font-sans font-bold text-lg hover:bg-sutra-blue hover:text-white transition-all duration-300 transform hover:scale-105">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Healthcare for families"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <section className="px-4 py-5 lg:py-12 bg-white/60">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:max-w-6xl lg:mx-auto">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-sutra-blue" />
              <span className="font-sans text-sutra-blue font-medium">Our Approach</span>
            </div>
            <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
              Family-Centered Care
            </h2>
            <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
              At Sutra.care, we believe in treating the whole family, not just individual symptoms. Our expert team
              combines traditional wisdom with modern science to create personalized care plans that address your unique
              needs and goals.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1576267423445-b2f8b1a1043e?w=600&h=400&fit=crop"
              alt="Family healthcare approach"
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 py-5 lg:py-12 bg-white/80">
        <div className="lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-sutra-blue" />
              <span className="font-sans text-sutra-blue font-medium">Our Services</span>
            </div>
            <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
              Comprehensive Care for Every Family Member
            </h2>
          </div>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
            <div className="flex items-stretch gap-3 p-1 lg:contents">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex h-full flex-1 flex-col gap-4 rounded-2xl min-w-60 lg:min-w-0 bg-white/90 backdrop-blur border border-sutra-border/50 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="w-full h-32 bg-center bg-cover rounded-2xl"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <div>
                    <p className="font-sans text-sutra-dark text-base lg:text-lg font-medium leading-normal">
                      {service.title}
                    </p>
                    <p className="font-sans text-sutra-gray text-sm lg:text-base font-normal leading-normal">
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
      <section className="px-4 py-5 lg:py-12 bg-white/60">
        <div className="lg:max-w-6xl lg:mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
              What Families Say About Us
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
      <footer className="flex flex-col gap-6 px-5 py-10 text-center bg-white/80 border-t border-sutra-border/50 lg:py-16">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          <Link
            href="/about"
            className="font-sans text-sutra-gray text-base lg:text-lg font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="font-sans text-sutra-gray text-base lg:text-lg font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sutra-gray text-base lg:text-lg font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="font-sans text-sutra-gray text-base lg:text-lg font-normal leading-normal min-w-40 hover:text-sutra-blue transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="font-sans text-sutra-gray text-base lg:text-lg font-normal leading-normal">
          © 2024 Sutra.care. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
