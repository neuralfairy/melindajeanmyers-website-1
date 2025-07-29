import { Hero } from "@/components/hero"
import { Features } from "@/components/features-preview"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta-section"
import { TrustBadges } from "@/components/trust-badges"

export default function HomePage() {
  return (
    <div className="pt-16">
      <Hero />
      <TrustBadges />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}
