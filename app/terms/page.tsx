import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Melindajeanmyers Solutions",
  description: "Terms of Service for Melindajeanmyers Solutions. Read our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#303063]">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#303063] mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily use our services for personal, non-commercial transitory viewing
              only.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high availability of our services but cannot guarantee uninterrupted access at all
              times.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Melindajeanmyers Solutions be liable for any damages arising out of the use or inability
              to use our services.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Contact Information</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact us at legal@melindajeanmyers.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
