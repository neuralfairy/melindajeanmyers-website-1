import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Melindajeanmyers Solutions",
  description:
    "Find answers to common questions about our promotional campaigns, CRM integration, lead qualification, and more.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What types of promotional campaigns do you specialize in?",
      answer:
        "We specialize in B2B promotional campaigns including email marketing, social media campaigns, content marketing, lead generation campaigns, product launch sequences, seasonal promotions, and multichannel automation. Our campaigns are designed to drive measurable ROI and qualified leads for B2B companies.",
    },
    {
      question: "How do you integrate with existing CRM systems?",
      answer:
        "We offer seamless integration with popular CRM platforms including Salesforce, HubSpot, Pipedrive, and many others. Our integration process includes data mapping, lead scoring setup, automated workflows, and real-time synchronization to ensure your campaigns work perfectly with your existing sales processes.",
    },
    {
      question: "What is your approach to lead qualification?",
      answer:
        "Our lead qualification process uses a combination of behavioral scoring, demographic data, engagement metrics, and AI-driven analysis. We implement BANT (Budget, Authority, Need, Timeline) criteria along with custom scoring models tailored to your specific business requirements to ensure you receive only high-quality, sales-ready leads.",
    },
    {
      question: "How do you measure campaign ROI?",
      answer:
        "We track comprehensive metrics including cost per lead, conversion rates, customer acquisition cost, lifetime value, revenue attribution, and overall ROI. Our advanced analytics dashboard provides real-time reporting with detailed insights into campaign performance, allowing for continuous optimization and improvement.",
    },
    {
      question: "What is included in your campaign automation?",
      answer:
        "Our automation includes email sequences, social media posting, lead nurturing workflows, behavioral triggers, personalized content delivery, A/B testing automation, and cross-channel campaign coordination. Everything is designed to run seamlessly while you focus on closing deals.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients see initial results within 2-4 weeks of campaign launch, with significant improvements typically visible within 6-8 weeks. However, timeline can vary based on campaign complexity, target audience, and industry. We provide weekly progress reports to keep you informed throughout the process.",
    },
    {
      question: "Do you provide campaign strategy and planning?",
      answer:
        "Yes, we provide comprehensive campaign strategy including market research, audience analysis, competitive analysis, messaging development, channel selection, and detailed campaign planning. Our strategic approach ensures your campaigns are built on solid foundations for maximum effectiveness.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer multiple support channels including dedicated account management, email support, live chat, phone support, and regular strategy sessions. Our Professional and Enterprise plans include priority support with faster response times and dedicated account managers.",
    },
    {
      question: "Can you handle seasonal and product launch campaigns?",
      answer:
        "We specialize in time-sensitive campaigns including seasonal promotions, product launches, event marketing, and limited-time offers. Our team has extensive experience creating urgency-driven campaigns that maximize conversions during critical business periods.",
    },
    {
      question: "What makes your agency different from others?",
      answer:
        "Our focus on measurable ROI, data-driven decision making, and B2B expertise sets us apart. We combine advanced technology with human insight, provide transparent reporting, and work as an extension of your team. Our Chicago-based team brings local market knowledge with global best practices.",
    },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#303063]">Frequently Asked</span>
              <br />
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our promotional campaigns, CRM integration, lead qualification, and
              how we help B2B companies achieve measurable results.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0">
                  <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                    <span className="text-lg font-semibold text-[#303063] pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#303063]">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our team is here to help with any questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://salescentri.com/contact/support-request/live-chat" className="cta-button">
                  Start Live Chat
                </a>
                <a
                  href="https://salescentri.com/get-started/contact"
                  className="bg-white border-2 border-[#3396a3] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#3396a3] hover:text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
