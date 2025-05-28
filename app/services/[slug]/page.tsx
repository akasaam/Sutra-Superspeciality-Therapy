import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle, Award, ArrowRight, Phone, Calendar } from "lucide-react"

// This would typically come from a database or CMS
const serviceData: Record<string, any> = {
  physiotherapy: {
    title: "Physiotherapy",
    category: "Rehabilitation Services",
    description:
      "Our physiotherapy services combine evidence-based treatment techniques with personalized care plans to help you recover from injuries, manage pain, and improve your overall physical function.",
    overview:
      "Physiotherapy at Sutra.care focuses on restoring movement and function when someone is affected by injury, illness, or disability. Our experienced physiotherapists use a variety of treatment approaches including manual therapy, exercise therapy, and advanced modalities to help patients achieve their rehabilitation goals.",
    benefits: [
      "Personalized Treatment Plans",
      "Advanced Therapeutic Modalities",
      "Experienced Licensed Physiotherapists",
      "State-of-the-Art Equipment",
      "Comprehensive Assessment and Monitoring",
      "Home Exercise Programs",
      "Pain Management Techniques",
      "Functional Movement Training",
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "Comprehensive evaluation of your condition, medical history, and functional limitations.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Development of a personalized treatment plan based on your specific needs and goals.",
      },
      {
        step: 3,
        title: "Active Treatment",
        description: "Implementation of therapeutic interventions including manual therapy and exercises.",
      },
      {
        step: 4,
        title: "Progress Monitoring",
        description: "Regular assessment of progress and adjustment of treatment plan as needed.",
      },
      {
        step: 5,
        title: "Discharge Planning",
        description: "Transition to independent management with home exercise programs and prevention strategies.",
      },
    ],
    equipment: [
      "Ultrasound Therapy Units",
      "Electrical Stimulation Devices",
      "Exercise Equipment and Weights",
      "Balance Training Systems",
      "Hydrotherapy Facilities",
      "Laser Therapy Equipment",
    ],
    faqs: [
      {
        question: "How long does a typical physiotherapy session last?",
        answer:
          "A typical physiotherapy session lasts 45-60 minutes, depending on your specific treatment needs and the complexity of your condition.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "The number of sessions varies based on your condition, severity, and individual response to treatment. Most patients see improvement within 4-6 sessions, with complete programs ranging from 6-12 sessions.",
      },
      {
        question: "Do I need a doctor's referral for physiotherapy?",
        answer:
          "While a doctor's referral is not always required, we recommend consulting with your physician first, especially for complex conditions or post-surgical rehabilitation.",
      },
      {
        question: "What should I wear to my physiotherapy appointment?",
        answer:
          "Wear comfortable, loose-fitting clothing that allows easy movement. Athletic wear or clothes that can be easily adjusted to access the treatment area are ideal.",
      },
    ],
    relatedServices: [
      { name: "Occupational Therapy", slug: "occupational-therapy" },
      { name: "Sports Rehabilitation", slug: "sports-rehabilitation" },
      { name: "Physiotherapy at Home", slug: "physiotherapy-at-home" },
    ],
  },
  // Add more services here...
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceData[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sutra-blue/10 to-sutra-green/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm text-sutra-blue font-medium mb-4">{service.category}</div>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-sutra-text mb-6">
              {service.title} Services at Sutra
            </h1>
            <p className="text-xl lg:text-2xl text-sutra-text/80">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-8">Service Overview</h2>
            <p className="text-lg text-sutra-text/80 leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-sutra-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-12 text-center">
              Why Choose Sutra for Your {service.title}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-sutra-green flex-shrink-0 mt-1" />
                  <span className="text-sutra-text/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-12 text-center">
              Our Process: Step-by-Step
            </h2>
            <div className="space-y-8">
              {service.process.map((step: any, index: number) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-sutra-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-sutra-text mb-2">{step.title}</h3>
                    <p className="text-sutra-text/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment/Technology Section */}
      {service.equipment && (
        <section className="py-16 lg:py-24 bg-sutra-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-12 text-center">
                Advanced Equipment & Technology
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.equipment.map((item: string, index: number) => (
                  <Card key={index} className="p-4">
                    <CardContent className="pt-4">
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-sutra-green" />
                        <span className="text-sutra-text font-medium">{item}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-sutra-text">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sutra-text/80">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 lg:py-24 bg-sutra-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-sutra-text mb-12 text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedServices.map((relatedService: any, index: number) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-sutra-text mb-4">{relatedService.name}</h3>
                    <Link href={`/services/${relatedService.slug}`}>
                      <Button
                        variant="ghost"
                        className="w-full text-sutra-blue hover:text-sutra-green group-hover:bg-sutra-green group-hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-sutra-blue to-sutra-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your {service.title} Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your consultation today and take the first step towards recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sutra-blue hover:bg-gray-100 px-8 py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Book My {service.title} Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-sutra-blue px-8 py-3"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +91-98765-43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
