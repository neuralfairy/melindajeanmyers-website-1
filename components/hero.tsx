"use client"

import { ArrowRight, Calculator, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="particle-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="matrix-rain">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random().toString(36).charAt(0)).join("")}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 hero-gradient opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text cyber-text" data-text="Performance Campaigns">
              Performance Campaigns
            </span>
            <br />
            <span className="text-[#303063] cyber-text" data-text="That Convert">
              That Convert
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We deliver B2B promotional campaigns built to drive measurable sales and ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://salescentri.com/get-started/free-trial"
              className="cta-button inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="bg-white border-2 border-[#3396a3] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#3396a3] hover:text-white inline-flex items-center justify-center"
            >
              Book Demo
            </a>
          </div>

          <div className="holographic-card neon-border rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto scan-line">
            <h3 className="text-2xl font-bold mb-6 text-[#303063]">Featured Tool</h3>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Calculator className="text-[#3396a3]" size={32} />
              <span className="text-xl font-semibold">ROI Calculator</span>
            </div>
            <p className="text-gray-600 mb-6">
              Calculate your potential return on investment with our advanced campaign analytics tool.
            </p>
            <a
              href="https://salescentri.com/solutions/use-case-navigator/recommendations"
              className="cta-button inline-flex items-center"
            >
              Try ROI Calculator
              <TrendingUp className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#3396a3] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#3396a3] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
