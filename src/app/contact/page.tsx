import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";


export const metadata: Metadata = {
  title: "Contact",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(952) 555-0123",
    href: "tel:+19525550123",
  },
  {
    icon: Mail,
    label: "Email",
    value: "maddy@maddycanaday.com",
    href: "mailto:maddy@maddycanaday.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "4999 France Ave S, Edina, MN 55410",
    href: null,
  },
];

const officeHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { days: "Sunday", hours: "By Appointment" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-terracotta-light mb-4">
            Reach Out Anytime
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">
            Let&apos;s Connect
          </h1>
          <div className="w-16 h-0.5 bg-terracotta mx-auto mt-6" />
          <p className="font-sans text-white/70 mt-6 max-w-xl mx-auto leading-relaxed">
            Whether you have a question about the Twin Cities market, want to
            schedule a showing, or are ready to start your real estate journey,
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <div className="bg-white p-8 md:p-12 shadow-sm">
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                Send a Message
              </h2>
              <p className="font-sans text-sm text-charcoal-light mb-8">
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </p>
              <ContactForm />
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-10">
              {/* Contact Details */}
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={20} className="text-sage-dark" />
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wider text-charcoal-light mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-sans text-charcoal hover:text-terracotta transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-sans text-charcoal">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-4 flex items-center gap-3">
                  <Clock size={20} className="text-terracotta" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule) => (
                    <div
                      key={schedule.days}
                      className="flex justify-between font-sans text-sm"
                    >
                      <span className="text-charcoal font-medium">
                        {schedule.days}
                      </span>
                      <span className="text-charcoal-light">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Follow Along
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-terracotta transition-colors duration-300"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-sage/20 aspect-[16/10] flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-sage-dark mx-auto mb-3"
                  />
                  <p className="font-sans text-sage-dark text-sm uppercase tracking-wider">
                    Map Coming Soon
                  </p>
                  <p className="font-sans text-sage-dark/70 text-xs mt-1">
                    4999 France Ave S, Edina, MN 55410
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
