import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Melinda Jean Myers Solutions - Performance Campaigns That Convert",
  description:
    "We deliver B2B promotional campaigns built to drive measurable sales and ROI. Chicago-based marketing campaign agency specializing in performance-based promotional campaigns.",
  keywords:
    "performance campaigns, conversion optimization, ROI marketing, promotional campaigns, B2B sales tools, Chicago marketing agency",
  authors: [{ name: "Melinda Jean Myers Solutions" }],
  openGraph: {
    title: "Melinda Jean Myers Solutions - Performance Campaigns That Convert",
    description: "We deliver B2B promotional campaigns built to drive measurable sales and ROI.",
    url: "https://melindajeanmyers.com",
    siteName: "Melinda Jean Myers Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melinda Jean Myers Solutions - Performance Campaigns That Convert",
    description: "We deliver B2B promotional campaigns built to drive measurable sales and ROI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Melinda Jean Myers Solutions",
              url: "https://melindajeanmyers.com",
              logo: "https://melindajeanmyers.com/logo.png",
              description:
                "Chicago-based marketing campaign agency specializing in performance-based promotional campaigns that drive measurable ROI.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chicago",
                addressRegion: "IL",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
