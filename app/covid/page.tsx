import Link from "next/link"
import { Calendar, Check, ChevronRight, Shield } from "lucide-react"

export default function CovidVaccinationPage() {
  const vaccinationCenters = [
    {
      name: "Sutra Main Center",
      address: "123 Healthcare Avenue, Siliguri",
      timings: "Mon-Sat: 9 AM - 5 PM",
      vaccines: ["Covishield", "Covaxin", "Sputnik V"],
    },
    {
      name: "Sutra North Branch",
      address: "45 Medical Road, Darjeeling",
      timings: "Mon-Fri: 10 AM - 4 PM",
      vaccines: ["Covishield", "Covaxin"],
    },
    {
      name: "Sutra East Branch",
      address: "78 Wellness Street, Jalpaiguri",
      timings: "Mon-Sat: 9 AM - 3 PM",
      vaccines: ["Covishield", "Covaxin"],
    },
  ]

  const faqs = [
    {
      question: "Is COVID-19 vaccination available for children?",
      answer:
        "Yes, COVID-19 vaccination is available for children aged 12 and above. Please bring a valid ID proof and birth certificate for children's vaccination.",
    },
    {
      question: "Do I need to register in advance for vaccination?",
      answer:
        "While walk-ins are accepted, we recommend pre-registration through our online portal or by calling our helpline to reduce waiting time.",
    },
    {
      question: "What documents should I bring for vaccination?",
      answer:
        "Please bring a government-issued photo ID (Aadhaar Card, PAN Card, Passport, etc.) and your vaccination certificate if you're coming for a second dose or booster.",
    },
    {
      question: "Are booster doses available?",
      answer:
        "Yes, booster doses are available for eligible individuals who have completed their primary vaccination series at least 6 months ago.",
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:p-4 lg:p-0">
          <div
            className="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl lg:rounded-none items-center justify-center p-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1615631648086-325025c9e51e?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center lg:text-left lg:gap-6">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                COVID-19 Vaccination
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                Protecting our community through safe and effective vaccination. Schedule your COVID-19 vaccination at
                any of our centers.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#book-vaccination">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 lg:h-14 lg:px-8 bg-sutra-blue text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                    <span className="truncate">Book Vaccination</span>
                  </button>
                </Link>
                <Link href="#vaccination-centers">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 lg:h-14 lg:px-8 bg-white/20 backdrop-blur text-white border border-white/30 text-base lg:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white/30 transition-colors">
                    <span className="truncate">Find Centers</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1618961734760-466979ce35b0?w=600&h=400&fit=crop"
                alt="COVID-19 Vaccination"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vaccination Information */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Vaccination Information
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Sutra.care is proud to offer COVID-19 vaccination services to help protect our community. Our vaccination
            program follows all guidelines set by the Ministry of Health and Family Welfare, Government of India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-xl border border-sutra-border">
              <div className="flex items-center mb-3">
                <Shield className="h-6 w-6 text-sutra-blue mr-2" />
                <h3 className="font-medium text-lg">Safe</h3>
              </div>
              <p className="text-sutra-gray text-sm">
                All vaccines administered at our centers are approved by regulatory authorities and have undergone
                rigorous testing.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sutra-border">
              <div className="flex items-center mb-3">
                <Check className="h-6 w-6 text-sutra-blue mr-2" />
                <h3 className="font-medium text-lg">Effective</h3>
              </div>
              <p className="text-sutra-gray text-sm">
                COVID-19 vaccines significantly reduce the risk of severe illness, hospitalization, and death from
                COVID-19.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sutra-border">
              <div className="flex items-center mb-3">
                <Calendar className="h-6 w-6 text-sutra-blue mr-2" />
                <h3 className="font-medium text-lg">Convenient</h3>
              </div>
              <p className="text-sutra-gray text-sm">
                Multiple vaccination centers with flexible timings to accommodate your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Centers */}
      <section id="vaccination-centers" className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Vaccination Centers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaccinationCenters.map((center, index) => (
              <div key={index} className="bg-sutra-light p-6 rounded-xl border border-sutra-border">
                <h3 className="font-bold text-lg mb-2 text-sutra-dark">{center.name}</h3>
                <p className="text-sutra-gray text-sm mb-2">{center.address}</p>
                <p className="text-sutra-gray text-sm mb-4">{center.timings}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2 text-sutra-dark">Available Vaccines:</h4>
                  <ul className="space-y-1">
                    {center.vaccines.map((vaccine, i) => (
                      <li key={i} className="flex items-center text-sm text-sutra-gray">
                        <ChevronRight className="h-4 w-4 text-sutra-blue mr-1" />
                        {vaccine}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="#book-vaccination">
                  <button className="w-full bg-sutra-blue text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    Book at this Center
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-vaccination" className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Book Your Vaccination
          </h2>
          <div className="bg-white p-6 rounded-xl border border-sutra-border">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Age</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Preferred Center</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue">
                    <option value="">Select a center</option>
                    {vaccinationCenters.map((center, index) => (
                      <option key={index} value={center.name}>
                        {center.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Preferred Vaccine</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue">
                    <option value="">Select a vaccine</option>
                    <option value="Covishield">Covishield</option>
                    <option value="Covaxin">Covaxin</option>
                    <option value="Sputnik V">Sputnik V</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Dose</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue">
                    <option value="">Select dose</option>
                    <option value="First Dose">First Dose</option>
                    <option value="Second Dose">Second Dose</option>
                    <option value="Booster">Booster</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-sutra-dark mb-1">Any Medical Conditions</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                  rows={3}
                  placeholder="Please mention any medical conditions or allergies"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" />
                <label htmlFor="consent" className="text-sm text-sutra-gray">
                  I consent to receive the COVID-19 vaccine and have read the information provided.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-sutra-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Book Vaccination
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-sutra-light p-4 rounded-lg border border-sutra-border">
                <summary className="font-medium text-sutra-dark cursor-pointer">{faq.question}</summary>
                <p className="mt-2 text-sutra-gray text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-4xl lg:mx-auto text-center">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
            Need More Information?
          </h2>
          <p className="text-sutra-dark text-base lg:text-lg font-normal leading-normal pb-3">
            Contact our helpline for any queries related to COVID-19 vaccination.
          </p>
          <div className="mt-4">
            <Link href="tel:+919876543210">
              <button className="bg-sutra-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Call Helpline: +91-98765-43210
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
