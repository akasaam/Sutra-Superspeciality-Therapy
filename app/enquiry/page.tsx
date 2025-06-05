import { Check, Clock, Mail, MessageSquare, Phone } from "lucide-react"

export default function QuickEnquiryPage() {
  const enquiryTypes = [
    "General Information",
    "Service Enquiry",
    "Appointment Booking",
    "Home Care Services",
    "Prosthetics & Orthotics",
    "Feedback",
    "Complaints",
    "Other",
  ]

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
                Quick Enquiry
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                Have a question? We're here to help. Fill out the form below and we'll get back to you as soon as
                possible.
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

      {/* Enquiry Form */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-6xl lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
              Send us your enquiry
            </h2>
            <form className="bg-white p-6 rounded-xl border border-sutra-border shadow-sm">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sutra-dark mb-1">Full Name*</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sutra-dark mb-1">Email*</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-sutra-dark mb-1">Phone Number*</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sutra-dark mb-1">Enquiry Type*</label>
                    <select
                      required
                      className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    >
                      <option value="">Select enquiry type</option>
                      {enquiryTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Subject*</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-sutra-dark mb-1">Message*</label>
                  <textarea
                    required
                    className="w-full px-4 py-2 rounded-lg border border-sutra-border focus:outline-none focus:ring-2 focus:ring-sutra-blue"
                    rows={5}
                    placeholder="Please provide details about your enquiry"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" id="consent" className="mr-2" />
                  <label htmlFor="consent" className="text-sm text-sutra-gray">
                    I consent to Sutra.care collecting and storing my data to respond to my enquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sutra-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0">
            <h3 className="text-sutra-dark text-[22px] lg:text-2xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6">
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
                    info@sutra.care, enquiry@sutra.care
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <Clock size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Response Time</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    We typically respond within 24 hours on business days
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 lg:px-6 min-h-[72px] lg:min-h-[100px] py-2 lg:py-4 rounded-lg border border-sutra-border">
                <div className="text-sutra-dark flex items-center justify-center rounded-lg bg-sutra-light shrink-0 size-12 lg:size-16">
                  <MessageSquare size={24} className="lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">Live Chat</p>
                  <p className="text-sutra-gray text-sm lg:text-base font-normal leading-normal">
                    Available Monday to Friday, 9 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-sutra-blue text-white p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Check className="h-6 w-6" />
                <h4 className="font-medium text-lg">Quick Response Guarantee</h4>
              </div>
              <p className="text-blue-100">
                We're committed to providing timely responses to all enquiries. If you don't hear back from us within 24
                hours on business days, your next consultation will be complimentary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-4xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-sutra-light p-4 rounded-lg border border-sutra-border">
              <summary className="font-medium text-sutra-dark cursor-pointer">
                How quickly will I receive a response to my enquiry?
              </summary>
              <p className="mt-2 text-sutra-gray text-sm">
                We aim to respond to all enquiries within 24 hours during business days. For urgent matters, we
                recommend calling our helpline directly.
              </p>
            </details>
            <details className="bg-sutra-light p-4 rounded-lg border border-sutra-border">
              <summary className="font-medium text-sutra-dark cursor-pointer">
                Can I book an appointment through this form?
              </summary>
              <p className="mt-2 text-sutra-gray text-sm">
                Yes, you can select "Appointment Booking" as your enquiry type and provide details about the service
                you're interested in. Our team will contact you to confirm your appointment.
              </p>
            </details>
            <details className="bg-sutra-light p-4 rounded-lg border border-sutra-border">
              <summary className="font-medium text-sutra-dark cursor-pointer">
                How do I enquire about home care services?
              </summary>
              <p className="mt-2 text-sutra-gray text-sm">
                Select "Home Care Services" as your enquiry type and provide details about the patient's needs and
                location. Our home care team will contact you with available options.
              </p>
            </details>
            <details className="bg-sutra-light p-4 rounded-lg border border-sutra-border">
              <summary className="font-medium text-sutra-dark cursor-pointer">
                Can I request a specific doctor or therapist?
              </summary>
              <p className="mt-2 text-sutra-gray text-sm">
                Yes, you can mention your preferred healthcare professional in the message field. We'll do our best to
                accommodate your request based on availability.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
