import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";


export const metadata: Metadata = {
  title: "Contact",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(651) 325-8483",
    href: "tel:+16513258483",
  },
  {
    icon: Mail,
    label: "Email",
    value: "madelinecanaday@kw.com",
    href: "mailto:madelinecanaday@kw.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "7401 Metro Blvd Suite 350, Edina, MN 55439",
    href: null,
  },
];

const officeHours = [
  { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { days: "Sunday", hours: "By Appointment" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maddy.canaday/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/maddycanaday" },
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

              {/* Google Map */}
              <div className="aspect-[16/10] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.5!2d-93.3530!3d44.8630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a4a8b8e8c8d%3A0x1!2s7401+Metro+Blvd+Suite+350%2C+Edina%2C+MN+55439!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Keller Williams Realty Integrity - 7401 Metro Blvd Suite 350, Edina, MN 55439"
                  className="w-full h-full"
                /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
