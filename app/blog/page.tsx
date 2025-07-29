import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, Download, FileText, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - Marketing Insights & Tips | Melindajeanmyers Solutions",
  description:
    "Read our latest insights on ROI campaigns, A/B testing, automation, and B2B marketing strategies that drive results.",
}

export default function BlogPage() {
  const posts = [
    {
      title: "10 Proven Strategies to Maximize ROI in B2B Promotional Campaigns",
      excerpt:
        "Discover the data-driven tactics that top-performing B2B companies use to achieve 300%+ ROI on their promotional campaigns.",
      author: "Melinda Jean Myers",
      date: "January 15, 2024",
      category: "ROI Optimization",
      readTime: "8 min read",
      slug: "maximize-roi-b2b-campaigns",
    },
    {
      title: "The Complete Guide to A/B Testing Your Marketing Campaigns",
      excerpt:
        "Learn how to design, execute, and analyze A/B tests that provide actionable insights for campaign optimization.",
      author: "Marketing Team",
      date: "January 10, 2024",
      category: "A/B Testing",
      readTime: "12 min read",
      slug: "complete-guide-ab-testing",
    },
    {
      title: "Marketing Automation: From Setup to Scale",
      excerpt:
        "A comprehensive walkthrough of implementing marketing automation that grows with your business and delivers consistent results.",
      author: "Automation Specialists",
      date: "January 5, 2024",
      category: "Automation",
      readTime: "15 min read",
      slug: "marketing-automation-guide",
    },
    {
      title: "Seasonal Campaign Planning: Q1 2024 Strategies",
      excerpt:
        "Get ahead of the competition with our seasonal campaign templates and strategies for maximum impact in Q1.",
      author: "Campaign Strategists",
      date: "December 28, 2023",
      category: "Seasonal Marketing",
      readTime: "10 min read",
      slug: "q1-2024-seasonal-strategies",
    },
    {
      title: "Lead Quality vs. Lead Quantity: Finding the Right Balance",
      excerpt:
        "Explore the metrics that matter most and learn how to optimize your lead generation for quality prospects that convert.",
      author: "Lead Generation Team",
      date: "December 20, 2023",
      category: "Lead Generation",
      readTime: "7 min read",
      slug: "lead-quality-vs-quantity",
    },
    {
      title: "CRM Integration Best Practices for Campaign Success",
      excerpt:
        "Maximize your campaign effectiveness by properly integrating your promotional campaigns with your CRM system.",
      author: "Integration Specialists",
      date: "December 15, 2023",
      category: "CRM Integration",
      readTime: "9 min read",
      slug: "crm-integration-best-practices",
    },
  ]

  const categories = ["All", "ROI Optimization", "A/B Testing", "Automation", "Lead Generation", "CRM Integration"]

  return (
    <div className="pt-16">
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#303063]">Marketing</span>
              <br />
              <span className="gradient-text">Insights & Tips</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights on ROI campaigns, A/B testing, automation, and proven B2B
              marketing strategies that drive measurable results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  index === 0 ? "bg-[#3396a3] text-white" : "bg-white text-gray-700 hover:bg-[#3396a3] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-[#93f49a]/20 text-[#51441b] px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#303063] hover:text-[#3396a3] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#3396a3] hover:text-[#303063] font-semibold inline-flex items-center transition-colors"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-[#303063]">Stay Updated</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest marketing insights, campaign strategies, and industry trends delivered to your inbox.
                </p>
                <form className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3396a3] focus:border-transparent"
                  />
                  <button type="submit" className="cta-button whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#303063]">Popular Resources</h4>
                <div className="space-y-3">
                  <a
                    href="https://salescentri.com/resources/whitepapers-ebooks"
                    className="flex items-center text-gray-700 hover:text-[#3396a3] transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Download Free Guides
                  </a>
                  <a
                    href="https://salescentri.com/resources/case-studies"
                    className="flex items-center text-gray-700 hover:text-[#3396a3] transition-colors"
                  >
                    <FileText size={16} className="mr-2" />
                    View Case Studies
                  </a>
                  <a
                    href="https://salescentri.com/blog/product-updates"
                    className="flex items-center text-gray-700 hover:text-[#3396a3] transition-colors"
                  >
                    <TrendingUp size={16} className="mr-2" />
                    Product Updates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
