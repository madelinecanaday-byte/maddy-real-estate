import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, Video, Home, Coffee } from "lucide-react";
import BookingForm from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Schedule a free consultation with Twin Cities realtor Maddy Canaday. Book a showing, buyer consultation, seller consultation, or virtual meeting.",
};

const meetingTypes = [
  {
    icon: Coffee,
    title: "Buyer Consultation",
    duration: "30 min",
    description:
      "Let's discuss your homebuying goals, budget, must-haves, and timeline. Perfect for first-time buyers or anyone starting their search.",
  },
  {
    icon: Home,
    title: "Seller Consultation",
    duration: "45 min",
    description:
      "I'll walk through your home, discuss pricing strategy, and create a plan to get your property sold for top dollar.",
  },
  {
    icon: Video,
    title: "Virtual Meeting",
    duration: "20 min",
    description:
      "Can't meet in person? Let's connect over video to discuss your real estate questions or go over listings together.",
  },
];

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Let&apos;s Meet
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Book a Consultation
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re buying, selling, or just have questions — I&apos;d love to meet. All consultations are free and no-pressure.
          </p>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm font-sans text-terracotta mb-3">
              Meeting Options
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Choose What Works for You
            </h2>
            <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meetingTypes.map((meeting) => (
              <div
                key={meeting.title}
                className="bg-white p-8 shadow-sm text-center"
              >
                <div className="w-14 h-14 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                  <meeting.icon size={24} className="text-sage-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-1">
                  {meeting.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-wider text-terracotta mb-4">
                  {meeting.duration}
                </p>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                  {meeting.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Form */}
            <div className="bg-cream p-8 md:p-12">
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                Schedule Your Meeting
              </h2>
              <p className="font-sans text-sm text-charcoal-light mb-8">
                Pick a date and time that works for you. I&apos;ll confirm within a few hours.
              </p>
              <BookingForm />
            </div>

            {/* Right - Info */}
            <div className="flex flex-col justify-center space-y-10">
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-sans text-sm font-medium text-terracotta">1</span>
                    </div>
                    <div>
                      <p className="font-sans text-charcoal font-medium">You book a time</p>
                      <p className="font-sans text-sm text-charcoal-light mt-1">
                        Choose your meeting type, preferred date, and time.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-sans text-sm font-medium text-terracotta">2</span>
                    </div>
                    <div>
                      <p className="font-sans text-charcoal font-medium">I confirm your booking</p>
                      <p className="font-sans text-sm text-charcoal-light mt-1">
                        You&apos;ll receive an email confirmation with meeting details.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-sans text-sm font-medium text-terracotta">3</span>
                    </div>
                    <div>
                      <p className="font-sans text-charcoal font-medium">We meet and make a plan</p>
                      <p className="font-sans text-sm text-charcoal-light mt-1">
                        No pressure, no obligation — just helpful, honest guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Prefer to Reach Out Directly?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+16513258483"
                    className="flex items-center gap-3 font-sans text-sm text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    <Phone size={16} className="text-terracotta" />
                    (651) 325-8483
                  </a>
                  <a
                    href="mailto:madelinecanaday@kw.com"
                    className="flex items-center gap-3 font-sans text-sm text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    <Mail size={16} className="text-terracotta" />
                    madelinecanaday@kw.com
                  </a>
                  <div className="flex items-center gap-3 font-sans text-sm text-charcoal-light">
                    <Clock size={16} className="text-terracotta" />
                    Mon-Fri 9am-6pm, Sat 10am-4pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Not Ready to Book Yet?
          </h2>
          <p className="font-sans text-lg text-white/80 mt-4 max-w-xl mx-auto">
            No problem — explore my resources or browse listings at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/listings"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-terracotta font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-cream"
            >
              Browse Listings
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-sans font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-terracotta"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
