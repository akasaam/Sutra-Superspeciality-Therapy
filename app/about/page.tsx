import { Heart, Users, Star, Shield, Smile } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Child-Centered Care",
      description:
        "We put children and families at the heart of everything we do, ensuring care that's gentle, understanding, and age-appropriate.",
    },
    {
      icon: Smile,
      title: "Joyful Healing",
      description:
        "We believe healing should be a positive experience, making healthcare fun and engaging for children.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "Our facilities are designed with safety and comfort in mind, creating a welcoming space for children and families.",
    },
    {
      icon: Users,
      title: "Family Partnership",
      description: "We work closely with families, involving parents and caregivers in every step of the care journey.",
    },
  ]

  return (
    <div className="bg-white/80">
      {/* Hero Section for Desktop */}
      <div className="hidden lg:block bg-white/60 py-16">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-sutra-blue" />
              <span className="font-sans text-sutra-blue font-medium">About Us</span>
            </div>
            <h1 className="font-sans text-sutra-dark text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
              About Sutra.care
            </h1>
            <p className="font-sans text-sutra-gray text-xl leading-relaxed">
              Empowering families on their journey to holistic well-being through accessible, integrated, and
              personalized healthcare solutions designed especially for children and families.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1576267423445-b2f8b1a1043e?w=600&h=400&fit=crop"
            alt="Healthcare team with children"
            className="w-full h-96 object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* Mission */}
      <section className="px-4 py-5 lg:py-12 bg-white/80">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Our Mission
          </h2>
          <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            To empower families on their journey to holistic well-being by providing accessible, integrated, and
            personalized healthcare solutions that make children feel safe, comfortable, and cared for.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="px-4 py-5 lg:py-12 bg-white/60">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Our Vision
          </h2>
          <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            To be the leading provider of family-centered healthcare, recognized for our innovative approach,
            exceptional patient care, and positive impact on children's health and development in our community.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-5 lg:py-12 bg-white/80">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Our Values
          </h2>
          <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3 lg:pb-8">
            Compassion, Integrity, Excellence, Innovation, Collaboration, Child-Centricity, Accessibility, Empowerment,
            Continuous Improvement, and Family Engagement.
          </p>
        </div>
      </section>

      {/* Why Choose Sutra */}
      <section className="px-4 py-5 lg:py-12 bg-white/60">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8 lg:text-center">
            Why Choose Sutra for Your Family?
          </h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/90 backdrop-blur px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 mb-2 lg:mb-4 rounded-2xl hover:shadow-md transition-all duration-300 border border-sutra-border/50"
              >
                <div className="text-sutra-dark flex items-center justify-center rounded-2xl bg-sutra-light shrink-0 size-12 lg:size-16">
                  <value.icon size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-sans text-sutra-dark text-base lg:text-lg font-medium leading-normal line-clamp-1">
                    {value.title}
                  </p>
                  <p className="font-sans text-sutra-gray text-sm lg:text-base font-normal leading-normal line-clamp-2">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="px-4 py-5 lg:py-12 bg-white/80">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="font-sans text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Our History
          </h2>
          <p className="font-sans text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Founded in 2018, Sutra.care has grown from a small family clinic to a leading healthcare provider, serving
            thousands of families with our innovative and compassionate approach to pediatric and family care.
          </p>
        </div>
      </section>
    </div>
  )
}
