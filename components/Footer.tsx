import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dotextalk/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dotextalk/",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dotextalk01/",
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              DOTEX
              <span className="text-blue-500">.</span>
              TALK
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              Digital development, design and practical digital solutions
              for businesses, organizations and ideas worth building.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/referral"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-blue-500"
              >
                Refer a project
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="https://wa.me/918157813455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-green-400"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:border-blue-500/50 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}

              <a
                href="https://www.trustpilot.com/review/dotextalk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-xs font-semibold text-zinc-500 transition hover:text-white"
              >
                Trustpilot
              </a>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/architect" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Architect
              </Link>
              <Link href="/expertise" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Expertise
              </Link>
              <Link href="/services" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Services
              </Link>
              <Link href="/works" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Works
              </Link>
              <Link href="/referral" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Refer & Earn
              </Link>
              <Link href="/contact" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          {/* INFORMATION */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Information
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/terms" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Terms & Policies
              </Link>
              <Link href="/privacy" className="w-fit text-sm text-zinc-500 transition hover:text-white">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DOTEX.TALK. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span>Digital development &amp; design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
