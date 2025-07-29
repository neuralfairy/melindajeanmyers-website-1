"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 neon-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold gradient-text cyber-text futuristic-glow"
              data-text="Melinda Jean Myers Solutions"
            >
              Melinda Jean Myers Solutions
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-[#3396a3] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="text-gray-900 hover:text-[#3396a3] transition-colors"
            >
              Book Demo
            </a>
            <a href="https://salescentri.com/get-started/free-trial" className="cta-button">
              Start Free Trial
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-[#3396a3]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              Home
            </Link>
            <Link href="/features" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              Features
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              Pricing
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              About
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              Blog
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:text-[#3396a3]">
              Contact
            </Link>
            <div className="px-3 py-2 space-y-2">
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="block w-full text-center py-2 border border-[#3396a3] text-[#3396a3] rounded-lg"
              >
                Book Demo
              </a>
              <a href="https://salescentri.com/get-started/free-trial" className="block w-full text-center cta-button">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
