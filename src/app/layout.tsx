import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maddy Canaday | Twin Cities Real Estate Agent",
    template: "%s | Maddy Canaday Real Estate",
  },
  description:
    "Award-winning Twin Cities real estate agent Maddy Canaday helps you find your perfect home. Expert guidance for buyers and sellers in the Twin Cities metro area.",
  keywords: [
    "Twin Cities real estate",
    "Twin Cities homes for sale",
    "Twin Cities realtor",
    "Maddy Canaday",
    "Keller Williams Realty Integrity Edina",
    "buy home Twin Cities",
    "sell home Twin Cities",
    "Minnesota real estate",
  ],
  openGraph: {
    title: "Maddy Canaday | Twin Cities Real Estate Agent",
    description:
      "Award-winning Twin Cities real estate agent helping you find your perfect home.",
    url: "https://maddycanaday.com",
    siteName: "Maddy Canaday Real Estate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
