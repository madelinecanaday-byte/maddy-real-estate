import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Home,
  DollarSign,
  Truck,
  ClipboardCheck,
  TrendingUp,
  Download,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Free downloadable checklists, guides, and resources for Twin Cities homebuyers and sellers. First-time buyer guides, moving checklists, and more.",
};

const guides = [
  {
    icon: Home,
    title: "First-Time Homebuyer Guide",
    description:
      "Everything you need to know about buying your first home in the Twin Cities — from pre-approval to closing day. Includes a timeline, budget worksheet, and must-ask questions.",
    category: "Buying",
    pages: 12,
  },
  {
    icon: DollarSign,
    title: "Home Seller's Prep Checklist",
    description:
      "A room-by-room checklist to get your home market-ready. Covers decluttering, repairs, staging tips, and curb appeal improvements that boost your sale price.",
    category: "Selling",
    pages: 8,
  },
  {
    icon: Truck,
    title: "Ultimate Moving Checklist",
    description:
      "A week-by-week moving timeline starting 8 weeks before your move. Covers everything from transferring utilities to updating your address and packing strategies.",
    category: "Moving",
    pages: 6,
  },
  {
    icon: ClipboardCheck,
    title: "Home Inspection Guide",
    description:
      "What to expect during a home inspection, what inspectors look for, red flags to watch out for, and how to negotiate repairs after the inspection report.",
    category: "Buying",
    pages: 10,
  },
  {
    icon: TrendingUp,
    title: "Twin Cities Market Report",
    description:
      "Quarterly market data for the Twin Cities metro — median prices, days on market, inventory levels, and neighborhood-by-neighborhood trends to inform your decisions.",
    category: "Market Data",
    pages: 15,
  },
  {
    icon: FileText,
    title: "Mortgage Options Breakdown",
    description:
      "A plain-English comparison of loan types: conventional, FHA, VA, USDA, and Minnesota-specific programs. Includes down payment requirements, pros/cons, and who each is best for.",
    category: "Financing",
    pages: 8,
  },
];

const quickTips = [
  {
    title: "5 Things Every Buyer Should Do Before House Hunting",
    tips: [
      "Check your credit score and fix any errors",
      "Get pre-approved (not just pre-qualified) for a mortgage",
      "Calculate your true monthly budget including taxes, insurance, and maintenance",
      "Make a must-have vs. nice-to-have list for your new home",
      "Research neighborhoods and drive through them at different times of day",
    ],
  },
  {
    title: "5 Mistakes Sellers Make (and How to Avoid Them)",
    tips: [
      "Overpricing based on emotion rather than market data",
      "Skipping professional photos — 95% of buyers start online",
      "Ignoring small repairs that signal neglect to buyers",
      "Being inflexible with showings — more access means more offers",
      "Taking negotiations personally instead of treating it as business",
    ],
  },
];

const localResources = [
  {
    title: "Minnesota Housing Finance Agency",
    description: "Down payment assistance and affordable loan programs for Minnesota buyers.",
    href: "https://www.mnhousing.gov",
  },
  {
    title: "City of Minneapolis Homebuyer Programs",
    description: "Grants and forgivable loans for purchasing homes in Minneapolis.",
    href: "https://www.minneapolismn.gov",
  },
  {
    title: "Hennepin County Property Tax Lookup",
    description: "Look up property tax records and assessments for Hennepin County properties.",
    href: "https://www.hennepin.us",
  },
  {
    title: "Ramsey County Property Records",
    description: "Access property records, tax information, and assessments in Ramsey County.",
    href: "https://www.ramseycounty.us",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Free Resources
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Guides & Checklists
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Helpful tools and guides to make your real estate journey smoother — whether you&apos;re buying, selling, or just getting started.
          </p>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              Downloadable Guides
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Free Resources for You
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <guide.icon size={22} className="text-sage-dark" />
                  </div>
                  <div>
                    <span className="font-sans text-xs uppercase tracking-wider text-terracotta">
                      {guide.category}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal mt-1">
                      {guide.title}
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed flex-1">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <span className="font-sans text-xs text-charcoal-light">
                    {guide.pages} pages
                  </span>
                  <button className="inline-flex items-center gap-2 font-sans text-sm text-terracotta hover:text-terracotta-dark transition-colors duration-300 font-medium uppercase tracking-wide">
                    <Download size={16} />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-sans text-sm text-charcoal-light">
              Want a personalized guide?{" "}
              <Link
                href="/contact"
                className="text-terracotta hover:text-terracotta-dark transition-colors duration-300 font-medium"
              >
                Reach out
              </Link>{" "}
              and I&apos;ll create one tailored to your situation.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              Quick Tips
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Top Advice at a Glance
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickTips.map((section) => (
              <div key={section.title} className="bg-cream p-8 md:p-10">
                <h3 className="font-serif text-xl text-charcoal mb-6">
                  {section.title}
                </h3>
                <ol className="space-y-4">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white font-sans text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </span>
                      <p className="font-sans text-sm text-charcoal-light leading-relaxed pt-1">
                        {tip}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              Local Resources
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Helpful Minnesota Links
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="flex-1">
                  <h3 className="font-sans text-base text-charcoal font-medium group-hover:text-terracotta transition-colors duration-300">
                    {resource.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-light mt-1 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-charcoal-light group-hover:text-terracotta transition-colors duration-300 flex-shrink-0 mt-1"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="font-sans text-lg text-white/80 mt-4 max-w-xl mx-auto">
            These guides are a great start — but nothing beats personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-cream"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-terracotta"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
