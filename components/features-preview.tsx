"use client"

import { Zap, Brain, Calendar } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="text-[#93f49a]" size={32} />,
      title: "Multichannel Promo Automation",
      description: "Automate your promotional campaigns across multiple channels for maximum reach and efficiency.",
    },
    {
      icon: <Brain className="text-[#3396a3]" size={32} />,
      title: "AI-Driven Targeting & Analytics",
      description: "Leverage artificial intelligence to target the right audience and analyze campaign performance.",
    },
    {
      icon: <Calendar className="text-[#a162f0]" size={32} />,
      title: "Seasonal + Product Launch Campaigns",
      description: "Specialized campaigns for seasonal promotions and product launches that drive results.",
    },
  ]

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text cyber-text" data-text="Promotional Campaigns">
              Promotional Campaigns
            </span>
            <br />
            <span className="text-[#303063] cyber-text" data-text="Capabilities">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools and services designed to maximize your campaign performance and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="holographic-card neon-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-float futuristic-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#303063]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="cta-button">
              Lead Generation
            </a>
            <a href="https://salescentri.com/platforms/lead-management/chat-bot" className="cta-button">
              Chat Bot
            </a>
            <a href="https://salescentri.com/solutions/psa-suite/pricing" className="cta-button">
              PSA Suite
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
