import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = ["Mental Health", "Physical Therapy", "Nutrition", "General Wellness"]

  const featuredServices = [
    {
      title: "Therapy Sessions",
      description: "Individual and group therapy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      href: "/services/therapy",
    },
    {
      title: "Physical Therapy",
      description: "Rehabilitation and pain management",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services/physiotherapy",
    },
    {
      title: "Nutrition Counseling",
      description: "Personalized diet plans",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      href: "/services/nutrition",
    },
    {
      title: "Wellness Coaching",
      description: "Holistic health guidance",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      href: "/services/wellness",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4 lg:p-0">
          <div
            className="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl lg:rounded-none items-start justify-end px-4 pb-10 @[480px]:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="flex flex-col gap-2 text-left lg:gap-6">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Your health, our priority
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                Find the right care for your needs. We offer a wide range of services to support your well-being.
              </h2>
              <Link href="/contact" className="lg:mt-6">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 lg:h-14 lg:px-8 bg-sutra-blue text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base lg:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-blue-600 transition-colors">
                  <span className="truncate">Explore Services</span>
                </button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
                alt="Medical services"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
            Service Categories
          </h2>
          <div className="flex gap-3 overflow-x-auto lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="flex h-8 lg:h-12 shrink-0 lg:shrink items-center justify-center gap-x-2 rounded-xl bg-white border border-sutra-border pl-4 pr-4 lg:pl-6 lg:pr-6 hover:bg-sutra-blue hover:text-white transition-colors cursor-pointer"
              >
                <p className="text-sutra-dark text-sm lg:text-base font-medium leading-normal">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
            Featured Services
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 lg:grid-cols-4 lg:gap-6">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="flex flex-1 gap-3 rounded-lg border border-sutra-border bg-white p-4 lg:p-6 flex-col hover:shadow-md transition-shadow"
              >
                <div
                  className="bg-center bg-cover rounded-lg w-full h-24 lg:h-32 shrink-0"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-sutra-dark text-base lg:text-lg font-bold leading-tight">{service.title}</h2>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 py-3 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <Link href="/contact">
            <button className="flex min-w-[84px] max-w-[480px] lg:max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 lg:h-14 lg:px-8 flex-1 lg:flex-none bg-sutra-blue text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] w-full lg:w-auto hover:bg-blue-600 transition-colors">
              <span className="truncate">Contact Us</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
