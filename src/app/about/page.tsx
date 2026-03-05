import type { Metadata } from "next";

import {
  Award,
  Building2,
  Users,
  BadgeCheck,
  UtensilsCrossed,
  Mountain,
  Heart,
  Dog,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Maddy",
};

const credentials = [
  {
    icon: BadgeCheck,
    title: "Licensed Realtor",
    description:
      "Licensed real estate professional in the state of Minnesota with a commitment to ethical practice and client advocacy.",
  },
  {
    icon: Building2,
    title: "Keller Williams",
    description:
      "Proud agent at Keller Williams Realty Integrity Edina, the world's largest real estate franchise by agent count and closed sales volume.",
  },
  {
    icon: Users,
    title: "Minneapolis Area Realtors",
    description:
      "Active member of the Minneapolis Area Realtors with access to the latest market data and professional development.",
  },
  {
    icon: Award,
    title: "Certified Negotiation Expert",
    description:
      "CNE designation ensuring top-tier negotiation skills that protect your interests and maximize your outcome in every transaction.",
  },
];

const hobbies = [
  {
    icon: UtensilsCrossed,
    title: "Twin Cities Food Scene",
    description:
      "From Jucy Lucy burgers to craft breweries, I love exploring the Twin Cities' incredible restaurant scene. Ask me for my favorite spots in any neighborhood.",
  },
  {
    icon: Mountain,
    title: "Hiking & Outdoors",
    description:
      "Theodore Wirth Park, the Chain of Lakes, and the Minnesota Valley Trail are my go-to spots for weekend hikes and reconnecting with nature.",
  },
  {
    icon: Heart,
    title: "Community Volunteering",
    description:
      "I believe in giving back to the community that has given me so much. I volunteer regularly with Habitat for Humanity and local food banks.",
  },
  {
    icon: Dog,
    title: "Rescue Dog Mom",
    description:
      "My two rescue pups, Dolly and Cash, are my constant companions. You might spot us at the Minnehaha Dog Park on weekends.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cream">
        <div className="w-full h-[60vh] min-h-[400px] bg-sage/20 relative">
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-0">
              <div className="bg-white p-8 md:p-12 inline-block translate-y-12 shadow-lg">
                <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-3">
                  Get to Know Me
                </p>
                <h1 className="font-serif text-5xl md:text-6xl text-charcoal">
                  About Maddy
                </h1>
                <div className="w-16 h-0.5 bg-terracotta mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Headshot Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-sage/30 aspect-[3/4] w-full max-w-md flex items-center justify-center">
                <span className="font-sans text-sage-dark text-sm uppercase tracking-wider">
                  Photo Coming Soon
                </span>
              </div>
            </div>

            {/* Story Text */}
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Maddy Canaday
              </h2>
              <p className="font-sans text-sm uppercase tracking-widest text-terracotta mb-8">
                Twin Cities Realtor &bull; Keller Williams Realty Integrity
              </p>
              <div className="space-y-6 font-sans text-charcoal-light leading-relaxed">
                <p>
                  Growing up in the Twin Cities, I watched this vibrant metro area
                  evolve into one of the most exciting places to live in the
                  Midwest. That front-row seat to the Twin Cities&apos; growth gave
                  me a deep understanding of its neighborhoods, its people, and the
                  stories behind every street and storefront.
                </p>
                <p>
                  My passion for real estate started early. I was always the friend
                  who helped everyone find their apartment, who knew which
                  neighborhoods were up-and-coming, and who couldn&apos;t resist
                  peeking into open houses on weekends. When I finally made it
                  official and earned my real estate license, it felt less like
                  starting a career and more like coming home.
                </p>
                <p>
                  What drives me every day is helping families and individuals find
                  more than just a house. I help them find a home &mdash; a place
                  where they&apos;ll build memories, put down roots, and truly belong.
                  Whether you&apos;re a first-time buyer navigating the process for
                  the very first time, a growing family searching for the perfect
                  school district, or an investor looking for your next opportunity,
                  I bring the same level of dedication, market expertise, and genuine
                  care to every client relationship.
                </p>
                <p>
                  I believe that buying or selling a home should be an exciting
                  experience, not a stressful one. My approach is built on
                  transparency, communication, and an unwavering commitment to your
                  best interests. When you work with me, you get a partner who will
                  be honest, responsive, and fiercely in your corner from our first
                  conversation through closing day and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Credentials & Affiliations"
            subtitle="Professional Background"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 text-center group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-terracotta/10 transition-colors duration-300">
                  <item.icon
                    size={28}
                    className="text-sage-dark group-hover:text-terracotta transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Real Estate Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Beyond Real Estate"
            subtitle="Life Outside the Office"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="group">
                <div className="w-14 h-14 rounded-full bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta/20 transition-colors duration-300">
                  <hobby.icon size={24} className="text-terracotta" />
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">
                  {hobby.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Let's Work Together"
            subtitle="Ready to Get Started?"
            light
          />
          <p className="font-sans text-white/70 mt-8 mb-10 leading-relaxed max-w-xl mx-auto">
            Whether you&apos;re buying your first home, selling a cherished
            property, or exploring investment opportunities, I&apos;d love to
            hear from you. Let&apos;s start a conversation about your real
            estate goals.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
