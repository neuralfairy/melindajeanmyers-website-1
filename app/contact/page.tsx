import type { Metadata } from "next"
import { MapPin, Mail, Phone, MessageCircle, Calendar, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Melindajeanmyers Solutions",
  description:
    "Contact Melindajeanmyers Solutions for your B2B promotional campaign needs. Based in Chicago, IL. Multiple ways to get in touch.",
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#303063]">Get in</span>
              <br />
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your B2B promotional campaigns? We're here to help you achieve measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-8 text-[#303063]">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <MapPin className="text-[#3396a3] mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#303063]">Office Location</h3>
                    <p className="text-gray-600">Chicago, IL</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="text-[#93f49a] mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#303063]">Email</h3>
                    <p className="text-gray-600">contact@melindajeanmyers.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-[#a162f0] mr-4" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#303063]">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#303063]">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://salescentri.com/get-started/calendly"
                    className="flex items-center justify-center p-4 border-2 border-[#3396a3] text-[#3396a3] rounded-lg hover:bg-[#3396a3] hover:text-white transition-all duration-300"
                  >
                    <Calendar className="mr-2" size={20} />
                    Book a Meeting
                  </a>

                  <a
                    href="https://salescentri.com/contact/support-request/live-chat"
                    className="flex items-center justify-center p-4 border-2 border-[#93f49a] text-[#93f49a] rounded-lg hover:bg-[#93f49a] hover:text-black transition-all duration-300"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Live Chat
                  </a>

                  <a
                    href="https://salescentri.com/contact/support-request/submit-ticket"
                    className="flex items-center justify-center p-4 border-2 border-[#a162f0] text-[#a162f0] rounded-lg hover:bg-[#a162f0] hover:text-white transition-all duration-300"
                  >
                    <FileText className="mr-2" size={20} />
                    Submit Ticket
                  </a>

                  <a
                    href="https://salescentri.com/get-started/free-trial"
                    className="cta-button flex items-center justify-center"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-[#303063]">Send us a Message</h3>

                <form action="https://salescentri.com/get-started/contact" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                      placeholder="Tell us about your promotional campaign needs..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full cta-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
