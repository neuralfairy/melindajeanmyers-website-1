import type { Metadata } from "next"
import { Check, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans - Transparent Pricing | Melindajeanmyers Solutions",
  description:
    "Choose from our Starter, Professional, or Enterprise plans. Transparent pricing with no hidden fees for B2B promotional campaigns.",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with promotional campaigns",
      features: [
        "Up to 5,000 contacts",
        "3 campaign channels",
        "Basic analytics",
        "Email support",
        "Campaign templates",
        "A/B testing (2 variants)",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies that need advanced features and automation",
      features: [
        "Up to 25,000 contacts",
        "Unlimited campaign channels",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom campaign templates",
        "Advanced A/B testing",
        "AI-driven optimization",
        "CRM integrations",
        "Lead scoring",
      ],
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex needs and high-volume campaigns",
      features: [
        "Unlimited contacts",
        "All campaign channels",
        "Custom analytics & reporting",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced security features",
        "SLA guarantees",
        "Custom training",
      ],
      cta: "Get Custom Quote",
      ctaLink: "https://salescentri.com/pricing/enterprise-custom",
      popular: false,
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#303063]">Transparent</span>
              <br />
              <span className="gradient-text">Pricing Plans</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up ${
                  plan.popular ? "ring-2 ring-[#3396a3] scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#3396a3] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="mr-1" size={16} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#303063] mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#3396a3]">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="text-[#93f49a] mr-3 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 block ${
                    plan.popular ? "cta-button" : "bg-gray-100 text-black hover:bg-[#3396a3] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://salescentri.com/pricing/plans-overview"
                className="cta-button inline-flex items-center justify-center"
              >
                View All Plans
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="https://salescentri.com/pricing"
                className="bg-white border-2 border-[#3396a3] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#3396a3] hover:text-white inline-flex items-center justify-center"
              >
                Get Detailed Pricing
              </a>
            </div>

            <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <p className="text-sm text-gray-500">
              Need a custom solution?{" "}
              <a href="https://salescentri.com/pricing/enterprise-custom" className="text-[#3396a3] hover:underline">
                Contact us for enterprise pricing
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
