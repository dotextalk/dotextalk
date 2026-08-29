import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dotextalk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DOTEX.TALK | Digital Development & Solutions",
    template: "%s | DOTEX.TALK",
  },
  description:
    "DOTEX.TALK is a digital development and solutions studio based in Malappuram, Kerala, building websites, digital solutions and growth systems for businesses and organizations.",
  applicationName: "DOTEX.TALK",
  authors: [{ name: "Arshad Sabu P" }],
  creator: "Arshad Sabu P",
  publisher: "DOTEX.TALK",
  keywords: [
    "web development Malappuram",
    "website development Kerala",
    "digital solutions Malappuram",
    "web architecture",
    "SEO and AI visibility",
    "digital development Kerala",
    "DOTEX.TALK",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "DOTEX.TALK",
    title: "DOTEX.TALK | Digital Development & Solutions",
    description:
      "Digital development, web architecture and practical digital solutions from Malappuram, Kerala.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOTEX.TALK | Digital Development & Solutions",
    description:
      "Digital development, web architecture and practical digital solutions from Malappuram, Kerala.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-black text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
