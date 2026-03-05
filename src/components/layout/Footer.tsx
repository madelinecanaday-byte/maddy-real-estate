import Link from "next/link";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/listings", label: "Listings" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/blog", label: "Blog" },
  { href: "/calculator", label: "Calculator" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/contact", label: "Buying" },
  { href: "/contact", label: "Selling" },
  { href: "/contact", label: "Relocation" },
  { href: "/contact", label: "Investment" },
];

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl tracking-wider text-white hover:text-terracotta-light transition-colors duration-300"
            >
              MADDY CANADAY
            </Link>
            <p className="font-sans text-white/60 text-sm mt-4 leading-relaxed">
              Helping you find your perfect home in the Twin Cities. Whether
              you&apos;re buying, selling, or investing, I&apos;m here to guide
              you every step of the way.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-terracotta-light transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-white/40 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-terracotta-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-white/40 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-sans text-sm text-white/70 hover:text-terracotta-light transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-widest text-white/40 mb-6">
              Contact
            </h3>
            <div className="space-y-4 font-sans text-sm text-white/70">
              <div>
                <p className="text-white/40 uppercase tracking-wider text-xs mb-1">
                  Phone
                </p>
                <a
                  href="tel:+19525551234"
                  className="hover:text-terracotta-light transition-colors duration-300"
                >
                  (952) 555-1234
                </a>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-wider text-xs mb-1">
                  Email
                </p>
                <a
                  href="mailto:maddy@maddycanaday.com"
                  className="hover:text-terracotta-light transition-colors duration-300"
                >
                  maddy@maddycanaday.com
                </a>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-wider text-xs mb-1">
                  Office
                </p>
                <p className="leading-relaxed">
                  4999 France Ave S
                  <br />
                  Edina, MN 55410
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Maddy Canaday. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-white/40">
            Powered by{" "}
            <span className="text-white/60">Keller Williams Realty Integrity</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
