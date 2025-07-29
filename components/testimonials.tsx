"use client"

import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "Marketing Director",
      content:
        "Melindajeanmyers Solutions transformed our B2B campaigns. We saw a 300% increase in qualified leads within the first quarter.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      role: "CEO",
      content:
        "The ROI on our promotional campaigns has never been better. Their data-driven approach delivers consistent results.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Scale Ventures",
      role: "VP of Marketing",
      content:
        "Professional, results-oriented, and incredibly knowledgeable. They understand B2B marketing like no other agency.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#303063] cyber-text" data-text="What Our">
              What Our
            </span>
            <br />
            <span className="gradient-text cyber-text" data-text="Clients Say">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders say about our performance campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="holographic-card neon-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up futuristic-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="text-[#3396a3] mb-4" size={32} />
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <div>
                <h4 className="font-bold text-[#303063]">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-[#3396a3] font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
