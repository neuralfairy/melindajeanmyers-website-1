"use client"

import { ArrowRight, Download } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 gradient-bg scan-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white cyber-text"
            data-text="Ready to Transform Your Campaigns?"
          >
            Ready to Transform Your Campaigns?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of B2B companies that trust us to deliver performance campaigns that convert.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="bg-white text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-black inline-flex items-center justify-center"
            >
              Download Free Guide
              <Download className="ml-2" size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/resources/case-studies"
              className="text-white hover:text-[#93f49a] transition-colors underline"
            >
              View Case Studies
            </a>
            <a
              href="https://salescentri.com/contact/support-request/live-chat"
              className="text-white hover:text-[#93f49a] transition-colors underline"
            >
              Start Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
