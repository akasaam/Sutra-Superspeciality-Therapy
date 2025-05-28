import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Heart, Award } from "lucide-react"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Sutra transformed my recovery journey after my knee replacement surgery. The physiotherapy team was incredibly professional and caring. Within 8 weeks, I was walking without pain for the first time in years. The integrated approach really made the difference.",
      name: "Priya Sharma",
      age: 58,
      location: "Siliguri",
      condition: "Knee Replacement Recovery",
      service: "Physiotherapy",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
    },
    {
      id: 2,
      quote:
        "The home care services provided by Sutra allowed my father to recover comfortably at home after his stroke. The nurses were skilled, compassionate, and always available when we needed them. It gave our family peace of mind during a difficult time.",
      name: "Rajesh Kumar",
      age: 45,
      location: "Darjeeling",
      condition: "Post-Stroke Care",
      service: "Home Care",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
    },
    {
      id: 3,
      quote:
        "As a fellow healthcare professional, I was impressed by the diagnostic services at Sutra. The pathology reports were accurate and delivered promptly. The staff's attention to detail and patient care standards are exceptional.",
      name: "Dr. Anita Roy",
      age: 42,
      location: "Jalpaiguri",
      condition: "Health Screening",
      service: "Diagnostics",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: true,
    },
    {
      id: 4,
      quote:
        "My daughter's speech therapy sessions at Sutra have been life-changing. The therapist was patient, skilled, and made each session engaging. We've seen remarkable improvement in her communication skills over the past 6 months.",
      name: "Sunita Devi",
      age: 35,
      location: "Siliguri",
      condition: "Speech Delay",
      service: "Speech Therapy",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
    {
      id: 5,
      quote:
        "The occupational therapy program helped me regain independence after my accident. The therapists worked with me to adapt my daily routines and provided equipment that made a huge difference in my quality of life.",
      name: "Mohan Rai",
      age: 52,
      location: "Kalimpong",
      condition: "Accident Recovery",
      service: "Occupational Therapy",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
    {
      id: 6,
      quote:
        "Sutra's wellness program has completely changed my approach to health. The nutrition counseling and fitness training have helped me lose weight and feel more energetic than I have in years.",
      name: "Kavita Sharma",
      age: 41,
      location: "Siliguri",
      condition: "Weight Management",
      service: "Wellness Program",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
    {
      id: 7,
      quote:
        "The team at Sutra provided excellent care for my mother's diabetes management. The home visits, regular monitoring, and education helped us better manage her condition. Highly recommended!",
      name: "Amit Gupta",
      age: 38,
      location: "Darjeeling",
      condition: "Diabetes Management",
      service: "Home Care",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
    {
      id: 8,
      quote:
        "After my sports injury, I thought my cricket playing days were over. The sports rehabilitation program at Sutra not only got me back on the field but made me stronger than before. Amazing team!",
      name: "Rohit Thapa",
      age: 24,
      location: "Siliguri",
      condition: "Sports Injury",
      service: "Sports Rehabilitation",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
    {
      id: 9,
      quote:
        "The custom orthotics provided by Sutra have eliminated my chronic foot pain. The team took time to understand my needs and created a perfect solution. I can now walk and work without discomfort.",
      name: "Laxmi Pradhan",
      age: 47,
      location: "Jalpaiguri",
      condition: "Chronic Foot Pain",
      service: "Custom Orthotics",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      featured: false,
    },
  ]

  const stats = [
    { number: "98%", label: "Patient Satisfaction Rate" },
    { number: "5000+", label: "Patients Treated" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Would Recommend" },
  ]

  const featuredTestimonials = testimonials.filter((t) => t.featured)
  const regularTestimonials = testimonials.filter((t) => !t.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sutra-blue/10 to-sutra-green/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-sutra-text mb-6">
              Inspiring Journeys: Real Patient Success Stories
            </h1>
            <p className="text-xl lg:text-2xl text-sutra-text/80">
              Discover how Sutra.care has transformed lives through compassionate, expert healthcare. These are the
              voices of recovery, hope, and renewed vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Satisfaction Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-sutra-blue">{stat.number}</div>
                <p className="text-sutra-text/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 lg:py-24 bg-sutra-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-6">
              Featured Success Stories
            </h2>
            <p className="text-lg text-sutra-text/80 max-w-3xl mx-auto">
              These remarkable recovery journeys showcase the transformative power of integrated, compassionate
              healthcare delivered by our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative p-8 hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="absolute top-4 right-4">
                    <Award className="h-6 w-6 text-sutra-green" />
                  </div>

                  <Quote className="h-10 w-10 text-sutra-green mb-6" />

                  <p className="text-sutra-text/80 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sutra-text">{testimonial.name}</p>
                      <p className="text-sm text-sutra-text/60">
                        {testimonial.age} years, {testimonial.location}
                      </p>
                      <p className="text-sm text-sutra-blue font-medium">{testimonial.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sutra-green text-sutra-green" />
                      ))}
                    </div>
                    <span className="text-xs text-sutra-text/60 bg-sutra-accent px-2 py-1 rounded">
                      {testimonial.condition}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-6">
              More Patient Experiences
            </h2>
            <p className="text-lg text-sutra-text/80">
              Every patient's journey is unique. Here are more stories of recovery and hope from our Sutra family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-sutra-green mb-4" />

                  <p className="text-sutra-text/80 mb-6 italic">"{testimonial.quote}"</p>

                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sutra-text text-sm">{testimonial.name}</p>
                      <p className="text-xs text-sutra-text/60">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-sutra-green text-sutra-green" />
                      ))}
                    </div>
                    <span className="text-xs text-sutra-blue font-medium">{testimonial.service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 lg:py-24 bg-sutra-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-6">Video Testimonials</h2>
            <p className="text-lg text-sutra-text/80">
              Hear directly from our patients as they share their recovery journeys in their own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sutra-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">▶</span>
                    </div>
                    <p className="text-sutra-text/80 text-sm">
                      Video Testimonial {video}
                      <br />
                      Patient Recovery Story
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sutra-text mb-2">Recovery Journey - Patient {video}</h3>
                  <p className="text-sm text-sutra-text/70">
                    Watch this inspiring story of recovery and transformation.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sutra-blue to-sutra-green text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">Share Your Sutra Story</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Have you experienced the Sutra difference? We'd love to hear about your journey and share your story to
            inspire others on their path to recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sutra-blue hover:bg-gray-100 px-8 py-3">
              Share Your Experience
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sutra-blue px-8 py-3"
            >
              Submit a Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
