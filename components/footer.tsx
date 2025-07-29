import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#303063] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Melinda Jean Myers Solutions</h3>
            <p className="text-gray-300 mb-4">
              High-impact marketing execution for B2B brands. We deliver performance campaigns that drive measurable
              ROI.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>Chicago, IL</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Mail size={16} />
              <span>contact@melindajeanmyers.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/lead-generation"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  Lead Generation
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/platforms/lead-management/chat-bot"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  Chat Bot
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/psa-suite/pricing"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  PSA Suite
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/solutions/use-case-navigator/recommendations"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://salescentri.com/resources/case-studies"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/resources/whitepapers-ebooks"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  Whitepapers
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/user-guide"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  User Guide
                </a>
              </li>
              <li>
                <a
                  href="https://salescentri.com/docs/api-reference"
                  className="text-gray-300 hover:text-[#93f49a] transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 Melinda Jean Myers Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-[#93f49a] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-[#93f49a] transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://salescentri.com?utm_source=melindajeanmyers.com&utm_medium=footer&utm_campaign=partner_network"
              className="text-gray-300 hover:text-[#93f49a] transition-colors"
            >
              Powered by Sales Intelligence Platform
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
