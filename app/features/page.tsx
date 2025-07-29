import type { Metadata } from "next"
import { Zap, Target, BarChart3, Brain, Calendar, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Features - Promotional Campaign Capabilities | Melindajeanmyers Solutions",
  description:
    "Discover our comprehensive promotional campaign capabilities including multichannel automation, AI-driven targeting, and seasonal campaign management.",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: <Zap className="text-[#93f49a]" size={48} />,
      title: "Multichannel Promo Automation",
      description:
        "Automate your promotional campaigns across email, social media, web, and mobile channels. Our platform ensures consistent messaging and optimal timing for maximum impact.",
      benefits: [
        "Cross-platform synchronization",
        "Automated scheduling",
        "Real-time optimization",
        "Performance tracking",
      ],
    },
    {
      icon: <Brain className="text-[#3396a3]" size={48} />,
      title: "AI-Driven Targeting & Analytics",
      description:
        "Leverage machine learning algorithms to identify your ideal customers and predict campaign performance. Our AI continuously learns and optimizes for better results.",
      benefits: ["Predictive analytics", "Audience segmentation", "Behavioral targeting", "Performance forecasting"],
    },
    {
      icon: <Calendar className="text-[#a162f0]" size={48} />,
      title: "Seasonal + Product Launch Campaigns",
      description:
        "Specialized campaign templates and strategies for seasonal promotions, product launches, and time-sensitive offers that drive urgency and conversions.",
      benefits: ["Pre-built templates", "Launch sequences", "Seasonal optimization", "Urgency tactics"],
    },
    {
      icon: <Target className="text-[#51441b]" size={48} />,
      title: "Precision Targeting",
      description:
        "Advanced targeting capabilities that help you reach the right audience at the right time with personalized messaging that resonates.",
      benefits: ["Demographic targeting", "Behavioral triggers", "Geographic segmentation", "Custom audiences"],
    },
    {
      icon: <BarChart3 className="text-[#3396a3]" size={48} />,
      title: "Advanced Analytics",
      description:
        "Comprehensive reporting and analytics that provide deep insights into campaign performance, ROI, and optimization opportunities.",
      benefits: ["Real-time dashboards", "ROI tracking", "Conversion analytics", "Custom reports"],
    },
    {
      icon: <Shield className="text-[#93f49a]" size={48} />,
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2 compliance, data encryption, and privacy controls to protect your sensitive campaign data.",
      benefits: ["SOC 2 compliance", "Data encryption", "Access controls", "Privacy protection"],
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Promotional Campaigns</span>
              <br />
              <span className="text-[#303063]">Capabilities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our comprehensive suite of tools and services designed to maximize your campaign performance, drive
              qualified leads, and deliver measurable ROI for your B2B marketing initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#303063]">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#93f49a] rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-8 text-[#303063]">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="cta-button">
                Explore Lead Generation
              </a>
              <a href="https://salescentri.com/platforms/lead-management/chat-bot" className="cta-button">
                Try Chat Bot
              </a>
              <a href="https://salescentri.com/solutions/psa-suite/pricing" className="cta-button">
                View PSA Suite
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
