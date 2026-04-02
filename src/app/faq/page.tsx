import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about buying, selling, and the Twin Cities real estate market. Get answers from experienced realtor Maddy Canaday.",
};

const buyerFaqs = [
  {
    question: "How do I know if I'm ready to buy a home?",
    answer:
      "A few key signs: you have stable income, minimal high-interest debt, enough saved for a down payment (typically 3-20% of the home price), and you plan to stay in the area for at least a few years. I always recommend getting pre-approved for a mortgage first — it gives you a clear picture of your budget and shows sellers you're serious.",
  },
  {
    question: "How much do I need for a down payment?",
    answer:
      "It depends on the loan type. Conventional loans typically require 5-20%, FHA loans as low as 3.5%, and VA loans may require 0% down. There are also Minnesota-specific programs like the Minnesota Housing Start Up program that offer down payment assistance for first-time buyers. We'll find the best option for your situation.",
  },
  {
    question: "What does the homebuying process look like step by step?",
    answer:
      "Here's the typical timeline: (1) Get pre-approved for a mortgage, (2) We define your must-haves and start searching, (3) Tour homes and find the one, (4) Submit an offer and negotiate, (5) Home inspection and appraisal, (6) Final loan approval and underwriting, (7) Closing day — you get the keys! The whole process usually takes 30-60 days from accepted offer to closing.",
  },
  {
    question: "Do I have to pay you as my buyer's agent?",
    answer:
      "In most Twin Cities transactions, the seller pays both the listing agent and buyer's agent commissions. That said, recent industry changes mean we'll discuss and sign a buyer representation agreement upfront so you know exactly what to expect. I'll walk you through everything transparently — no surprises.",
  },
  {
    question: "How competitive is the Twin Cities market right now?",
    answer:
      "The Twin Cities market varies by neighborhood and price point. Some areas like Edina and Linden Hills remain competitive with multiple offers, while others offer more negotiating room. I provide real-time market data for every neighborhood so you can make informed decisions. Check out my neighborhood guides for current trends.",
  },
  {
    question: "What should I look for during a home tour?",
    answer:
      "Beyond the obvious layout and finishes, pay attention to: the roof and foundation condition, water stains (signs of leaks), window quality, HVAC age, electrical panel capacity, water pressure, and the neighborhood at different times of day. I'll point out things you might miss and help you evaluate each home objectively.",
  },
];

const sellerFaqs = [
  {
    question: "How do I determine the right listing price?",
    answer:
      "I prepare a detailed Comparative Market Analysis (CMA) that looks at recent sales of similar homes in your area, current competition, market trends, and your home's unique features. Pricing correctly from the start is critical — overpricing leads to longer days on market, while strategic pricing can generate multiple offers.",
  },
  {
    question: "Do I need to stage my home before selling?",
    answer:
      "Staged homes sell faster and often for more money. At minimum, I recommend decluttering, deep cleaning, and depersonalizing. For vacant or dated homes, professional staging can make a significant difference. I work with talented local stagers and can advise on what level of staging makes sense for your property and budget.",
  },
  {
    question: "How long will it take to sell my home?",
    answer:
      "In the Twin Cities, well-priced homes in desirable neighborhoods can sell within days. On average, expect 2-4 weeks to receive an offer, plus 30-45 days to close. Factors that affect timing include price, condition, location, season, and market conditions. I'll give you a realistic timeline based on your specific situation.",
  },
  {
    question: "What repairs or updates should I make before listing?",
    answer:
      "Focus on high-impact, low-cost improvements: fresh neutral paint, updated light fixtures, clean landscaping, and fixing any obvious maintenance issues. I'll do a pre-listing walkthrough of your home and recommend specific updates that will give you the best return on investment — not everything needs to be renovated.",
  },
  {
    question: "What are the costs of selling a home?",
    answer:
      "Typical seller costs include agent commissions (usually 5-6% of the sale price), closing costs (1-3%), any negotiated repairs or credits, and prorated property taxes. I'll provide a detailed net proceeds estimate so you know exactly what to expect in your pocket after the sale.",
  },
  {
    question: "What happens if my home doesn't sell?",
    answer:
      "If a home isn't getting offers, we reassess. Usually it comes down to price, condition, or marketing. I monitor showing feedback and market data closely and will recommend adjustments proactively — whether that's a price reduction, additional staging, or refreshed marketing materials. My goal is to get your home sold, not just listed.",
  },
];

const generalFaqs = [
  {
    question: "What areas do you serve?",
    answer:
      "I specialize in the Twin Cities metro area including Minneapolis, St. Paul, Edina, Wayzata, Minnetonka, Plymouth, Linden Hills, Highland Park, Uptown, North Loop, St. Louis Park, and Eden Prairie. If you're looking at a specific area, just ask — I likely know it well or can connect you with someone who does.",
  },
  {
    question: "What makes you different from other agents?",
    answer:
      "I'm a Twin Cities native with deep local knowledge, a Certified Negotiation Expert (CNE), and I genuinely care about finding the right fit — not just closing a deal. I provide honest, data-driven advice, communicate proactively, and I'm available when you need me. My clients become long-term friends, and most of my business comes from referrals.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Absolutely. I work with investors at all levels — from first-time duplex buyers to seasoned multi-property investors. I can help you analyze cap rates, rental income potential, and identify neighborhoods with strong appreciation trends. The Twin Cities has excellent investment opportunities across multiple price points.",
  },
  {
    question: "I'm relocating to the Twin Cities. Can you help?",
    answer:
      "Relocation is one of my specialties. I offer virtual tours, detailed neighborhood guides, school information, and can coordinate everything remotely until you arrive. I'll help you understand the different communities, commute patterns, and lifestyle options so you find the right fit from day one.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just reach out! You can call, email, or fill out my contact form. We'll schedule a no-pressure consultation — whether that's a coffee chat, phone call, or video meeting — to discuss your goals, timeline, and any questions you have. There's no commitment required to start the conversation.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group border-b border-gray-200 last:border-b-0">
      <summary className="flex items-center justify-between cursor-pointer py-6 font-sans text-lg text-charcoal font-medium hover:text-terracotta transition-colors duration-300 list-none [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center text-terracotta transition-transform duration-300 group-open:rotate-45">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </summary>
      <p className="pb-6 font-sans text-charcoal-light leading-relaxed pr-8">
        {answer}
      </p>
    </details>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Your Questions Answered
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Frequently Asked Questions
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re buying your first home, selling, or just
            exploring — here are answers to the questions I hear most.
          </p>
        </div>
      </section>

      {/* Buyer FAQs */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              For Buyers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Buying a Home
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>
          <div className="bg-white p-8 md:p-12 shadow-sm">
            {buyerFaqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Seller FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              For Sellers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Selling Your Home
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>
          <div className="bg-cream p-8 md:p-12">
            {sellerFaqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* General FAQs */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              General
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Working With Maddy
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mt-6" />
          </div>
          <div className="bg-white p-8 md:p-12 shadow-sm">
            {generalFaqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Still Have Questions?
          </h2>
          <p className="font-sans text-lg text-white/80 mt-4 max-w-xl mx-auto">
            I&apos;m always happy to chat — no question is too small.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-cream"
            >
              Get in Touch
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-terracotta"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
