import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Melindajeanmyers Solutions",
  description:
    "Privacy Policy for Melindajeanmyers Solutions. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#303063]">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#303063] mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions,
              and communicate with you.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-[#303063] mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at privacy@melindajeanmyers.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
