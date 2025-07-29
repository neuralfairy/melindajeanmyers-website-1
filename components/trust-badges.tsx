"use client"

import { Shield, Award, CheckCircle, Users } from "lucide-react"

export function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="text-[#3396a3]" size={24} />,
      title: "ISO 27001 Certified",
      description: "Security & Privacy",
    },
    {
      icon: <Award className="text-[#93f49a]" size={24} />,
      title: "Google Partner",
      description: "Certified Excellence",
    },
    {
      icon: <CheckCircle className="text-[#a162f0]" size={24} />,
      title: "SOC 2 Compliant",
      description: "Data Protection",
    },
    {
      icon: <Users className="text-[#51441b]" size={24} />,
      title: "500+ Clients",
      description: "Trusted Worldwide",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-center mb-2">{badge.icon}</div>
              <h3 className="font-semibold text-[#303063] mb-1">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
