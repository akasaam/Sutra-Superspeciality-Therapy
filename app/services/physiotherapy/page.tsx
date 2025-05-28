import Link from "next/link"

export default function PhysiotherapyPage() {
  const relatedServices = [
    {
      title: "Massage Therapy",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      href: "/services/massage",
    },
    {
      title: "Acupuncture",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      href: "/services/acupuncture",
    },
    {
      title: "Chiropractic Care",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      href: "/services/chiropractic",
    },
  ]

  const faqs = [
    {
      question: "What conditions can physiotherapy treat?",
      answer:
        "Physiotherapy can treat a wide range of conditions including musculoskeletal injuries, neurological conditions, chronic pain, and post-surgical rehabilitation.",
    },
    {
      question: "How long does a physiotherapy session last?",
      answer:
        "A typical physiotherapy session lasts 45-60 minutes, depending on your specific treatment needs and the complexity of your condition.",
    },
    {
      question: "Is physiotherapy covered by insurance?",
      answer:
        "Most insurance plans cover physiotherapy services. We recommend checking with your insurance provider for specific coverage details.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3 lg:p-0">
          <div
            className="w-full bg-center bg-cover flex flex-col justify-center items-center overflow-hidden @[480px]:rounded-xl lg:rounded-none min-h-[218px] lg:min-h-[400px]"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop")`,
            }}
          />
        </div>
      </div>

      {/* Overview */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Overview
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Physiotherapy is a healthcare profession that helps individuals recover from injuries, manage chronic pain,
            and improve their overall physical function. It involves a range of techniques, including exercise, manual
            therapy, and education, to address musculoskeletal and neurological conditions.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Benefits
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Physiotherapy offers numerous benefits, such as pain reduction, improved mobility, increased strength, and
            enhanced balance. It can also help prevent future injuries and promote overall well-being.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Process
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            The physiotherapy process typically begins with an assessment to identify the underlying cause of the
            problem. Based on the assessment, a personalized treatment plan is developed, which may include exercises,
            manual therapy, and other techniques. Regular follow-up sessions are conducted to monitor progress and
            adjust the treatment plan as needed.
          </p>
        </div>
      </section>

      {/* Equipment Used */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Equipment Used
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Physiotherapists use a variety of equipment to aid in treatment, including exercise machines, ultrasound
            devices, and electrical stimulation units. The specific equipment used will depend on the individual's
            condition and treatment goals.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            FAQs
          </h2>
          <div className="flex flex-col space-y-2 lg:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="flex flex-col border border-sutra-border rounded-xl p-4 lg:p-6 group bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                  <p className="text-sutra-dark text-sm lg:text-base font-medium leading-normal">{faq.question}</p>
                  <div className="text-sutra-dark group-open:rotate-180 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                  </div>
                </summary>
                <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal pb-2 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
            Related Services
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
            <div className="flex items-stretch gap-3 p-1 lg:contents">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 lg:min-w-0 bg-white border border-sutra-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className="w-full h-32 bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${service.image}")` }}
                  />
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">{service.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="px-4 py-3 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <Link href="/contact">
            <button className="flex min-w-[84px] max-w-[480px] lg:max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 lg:h-14 lg:px-8 flex-1 lg:flex-none bg-sutra-blue text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] w-full lg:w-auto hover:bg-blue-600 transition-colors">
              <span className="truncate">Book Now</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
