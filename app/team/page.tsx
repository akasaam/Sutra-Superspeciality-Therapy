export default function TeamPage() {
  const teamCategories = ["All", "Therapists", "Nutritionists", "Coaches"]

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "Chief Medical Officer",
      specialization: "Orthopedic Surgery",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Dr. Priya Sharma",
      title: "Head of Rehabilitation",
      specialization: "Physical Medicine",
      image: "https://images.unsplash.com/photo-1594824475317-d3c0b8e8e8b8?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Anita Roy",
      title: "Senior Physiotherapist",
      specialization: "Neurological Rehabilitation",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Suresh Gupta",
      title: "Sports Physiotherapist",
      specialization: "Sports Injury & Performance",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Meera Devi",
      title: "Senior Occupational Therapist",
      specialization: "Pediatric & Adult OT",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Ravi Thapa",
      title: "Speech Language Pathologist",
      specialization: "Communication Disorders",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face",
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&h=800&fit=crop")`,
            }}
          >
            <div className="flex flex-col gap-2 text-center lg:text-left lg:gap-6">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Meet Our Experts
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base lg:text-lg @[480px]:font-normal @[480px]:leading-normal opacity-90">
                Our team of experienced healthcare professionals is dedicated to providing you with the best possible
                care. We are committed to your well-being and are here to support you every step of the way.
              </h2>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop"
                alt="Healthcare team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Categories */}
      <section className="px-4 py-5 lg:py-12 bg-sutra-light">
        <div className="lg:max-w-6xl lg:mx-auto">
          <h2 className="text-sutra-dark text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 lg:pb-8">
            Our Team
          </h2>
          <div className="flex gap-3 flex-wrap lg:gap-4">
            {teamCategories.map((category, index) => (
              <div
                key={index}
                className="flex h-8 lg:h-12 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white border border-sutra-border pl-4 pr-4 lg:pl-6 lg:pr-6 hover:bg-sutra-blue hover:text-white transition-colors cursor-pointer"
              >
                <p className="text-sutra-dark text-sm lg:text-base font-medium leading-normal">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-4 py-5 lg:py-12 bg-white">
        <div className="lg:max-w-6xl lg:mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 text-center pb-3 bg-white border border-sutra-border p-4 lg:p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="px-4 lg:px-0">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full max-w-32 lg:max-w-48 mx-auto"
                    style={{ backgroundImage: `url("${member.image}")` }}
                  />
                </div>
                <div>
                  <p className="text-sutra-dark text-base lg:text-lg font-medium leading-normal">{member.name}</p>
                  <p className="text-sutra-blue text-sm lg:text-base font-normal leading-normal">{member.title}</p>
                  <p className="text-sutra-gray text-xs lg:text-sm font-normal leading-normal">
                    {member.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
