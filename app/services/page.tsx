import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    "Clinical & Rehabilitation",
    "Prosthetics & Orthotics",
    "Hearing Aids",
    "Home Care Services",
  ]

  const clinicalServices = [
    {
      title: "Physiotherapy",
      description: "Treatment for musculoskeletal and neurological conditions",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services/physiotherapy",
    },
    {
      title: "Occupational Therapy",
      description: "Assistance in improving daily living and working skills",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      href: "/services/occupational-therapy",
    },
    {
      title: "Speech Therapy",
      description: "Support for speech, language, and communication disorders",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      href: "/services/speech-therapy",
    },
    {
      title: "Audiology Services",
      description: "Hearing assessments and solutions",
      image: "https://images.unsplash.com/photo-1594824475317-d3c0b8e8e8b8?w=400&h=300&fit=crop",
      href: "/services/audiology",
    },
    {
      title: "Chiropractic Therapy",
      description: "Spinal adjustments and musculoskeletal care",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      href: "/services/chiropractic",
    },
    {
      title: "Stroke Rehabilitation",
      description: "Post-stroke recovery programs",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      href: "/services/stroke-rehabilitation",
    },
    {
      title: "Pain Management",
      description: "Strategies to alleviate chronic and acute pain",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      href: "/services/pain-management",
    },
    {
      title: "Autism Therapy",
      description: "Interventions for individuals on the autism spectrum",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      href: "/services/autism-therapy",
    },
  ]

  const prostheticsServices = [
    {
      title: "Prosthetic Devices",
      description: "Transhumeral, Transradial, Transfemoral, Transtibial, and Robotic prostheses",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services/prosthetics",
    },
    {
      title: "Orthotic Devices",
      description: "KFO, AFO, KAFO, Spinal orthosis, and Ulcer healing orthosis",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      href: "/services/orthotics",
    },
    {
      title: "Medical Braces",
      description: "Comprehensive range of braces for various body parts",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      href: "/services/braces",
    },
    {
      title: "Medical Splints",
      description: "Specialized splints for injury recovery and support",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      href: "/services/splints",
    },
  ]

  const hearingServices = [
    {
      title: "Behind the Ear (BTE)",
      description: "Traditional and powerful hearing aid solution",
      image: "https://images.unsplash.com/photo-1594824475317-d3c0b8e8e8b8?w=400&h=300&fit=crop",
      href: "/services/hearing-aids/bte",
    },
    {
      title: "In the Canal (ITC)",
      description: "Discreet hearing aids that fit in the ear canal",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      href: "/services/hearing-aids/itc",
    },
    {
      title: "Receiver in Canal (RIC)",
      description: "Modern hearing aids with external receiver",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      href: "/services/hearing-aids/ric",
    },
    {
      title: "Completely In Canal (CIC)",
      description: "Nearly invisible hearing aids for mild hearing loss",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      href: "/services/hearing-aids/cic",
    },
  ]

  const homeServices = [
    {
      title: "Diagnostics at Home",
      description: "Sample collection for pathological tests with same-day reporting",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services/home-diagnostics",
    },
    {
      title: "Medical Equipment Rental",
      description: "Cardiac monitors, BiPAP, CPAP, oxygen concentrators, and more",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      href: "/services/equipment-rental",
    },
    {
      title: "Doctor Visits at Home",
      description: "Regular check-ups and treatment planning by skilled doctors",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      href: "/services/home-visits",
    },
    {
      title: "Home Nursing Care",
      description: "24x7 care including catheter and tube changes",
      image: "https://images.unsplash.com/photo-1594824475317-d3c0b8e8e8b8?w=400&h=300&fit=crop",
      href: "/services/home-nursing",
    },
    {
      title: "Physiotherapy at Home",
      description: "Rehabilitation services initiated at the patient's residence",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      href: "/services/home-physiotherapy",
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
                Comprehensive Healthcare Services
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                From clinical rehabilitation to home care, we provide integrated healthcare solutions for your complete
                well-being.
              </h2>
              <Link href="/contact" className="lg:mt-6">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 lg:h-14 lg:px-8 bg-sutra-blue text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base lg:text-lg @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-blue-600 transition-colors">
                  <span className="truncate">Book Consultation</span>
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
                <p className="text-sutra-dark text-sm lg:text-base font-medium leading-normal whitespace-nowrap">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical & Rehabilitation Services */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8 flex items-center">
            <span className="mr-2">🩺</span>
            Clinical & Rehabilitation Services
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 lg:grid-cols-4 lg:gap-6">
            {clinicalServices.map((service, index) => (
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
                  <h3 className="text-sutra-dark text-base lg:text-lg font-bold leading-tight">{service.title}</h3>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prosthetics & Orthotics */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8 flex items-center">
            <span className="mr-2">🦿</span>
            Prosthetics & Orthotics
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 lg:grid-cols-4 lg:gap-6">
            {prostheticsServices.map((service, index) => (
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
                  <h3 className="text-sutra-dark text-base lg:text-lg font-bold leading-tight">{service.title}</h3>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hearing Aids */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8 flex items-center">
            <span className="mr-2">🔊</span>
            Hearing Aids
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 lg:grid-cols-4 lg:gap-6">
            {hearingServices.map((service, index) => (
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
                  <h3 className="text-sutra-dark text-base lg:text-lg font-bold leading-tight">{service.title}</h3>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Home Care Services */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8 flex items-center">
            <span className="mr-2">🏠</span>
            Home Care Services
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 lg:grid-cols-4 lg:gap-6">
            {homeServices.map((service, index) => (
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
                  <h3 className="text-sutra-dark text-base lg:text-lg font-bold leading-tight">{service.title}</h3>
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
      <section className="px-4 py-3 lg:py-12 bg-white">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h3 className="text-sutra-dark text-xl lg:text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-sutra-gray mb-6">
            Contact us today to learn more about our comprehensive healthcare services.
          </p>
          <Link href="/contact">
            <button className="flex min-w-[84px] max-w-[480px] lg:max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 lg:h-14 lg:px-8 flex-1 lg:flex-none bg-sutra-blue text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] w-full lg:w-auto hover:bg-blue-600 transition-colors">
              <span className="truncate">Contact Us Today</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
