import type { Metadata } from "next"
import { MapPin, Users, Award, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Chicago Marketing Agency | Melindajeanmyers Solutions",
  description:
    "Learn about Melindajeanmyers Solutions, a Chicago-based marketing campaign agency specializing in high-impact B2B promotional campaigns.",
}

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="text-[#3396a3]" size={32} />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI for every campaign we execute.",
    },
    {
      icon: <Users className="text-[#93f49a]" size={32} />,
      title: "Client-Centric",
      description: "Your success is our success. We work as an extension of your team.",
    },
    {
      icon: <Award className="text-[#a162f0]" size={32} />,
      title: "Innovation",
      description: "We stay ahead of industry trends and leverage cutting-edge technology.",
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#303063]">About</span>
              <br />
              <span className="gradient-text">Melindajeanmyers Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are a Chicago-based marketing campaign agency specializing in high-impact marketing execution for B2B
              brands. Our mission is to deliver performance campaigns that drive measurable sales and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6 text-[#303063]">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Melindajeanmyers Solutions, we believe that every B2B company deserves marketing campaigns that not
                only look great but deliver real, measurable results. We combine data-driven strategies with creative
                execution to help our clients achieve their growth objectives.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced marketers, data analysts, and campaign specialists work together to create
                promotional campaigns that convert prospects into customers and drive sustainable business growth.
              </p>
              <div className="flex items-center text-[#3396a3] font-semibold">
                <MapPin className="mr-2" size={20} />
                Based in Chicago, IL
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#303063]">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#93f49a] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Proven track record with 500+ successful campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#3396a3] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Average 300% increase in qualified leads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#a162f0] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Industry-leading ROI optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#51441b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Dedicated account management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#303063]">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#303063]">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-[#303063]">Ready to Work Together?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/company/about-us/leadership-team" className="cta-button">
                Meet Our Leadership Team
              </a>
              <a
                href="https://salescentri.com/company/team-advisors/career-openings"
                className="bg-white border-2 border-[#3396a3] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#3396a3] hover:text-white"
              >
                View Career Openings
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
