import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/dotextalk/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dotextalk/" },
  { label: "Facebook", href: "https://www.facebook.com/dotextalk01/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              DOTEX<span className="text-blue-500">.</span>TALK
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              Digital development, design and practical digital solutions for businesses, organizations and ideas worth building.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/referral" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-blue-500">Refer a project <ArrowUpRight size={16} /></Link>
              <a href="https://wa.me/918157813455" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-green-400"><MessageCircle size={16} /> WhatsApp</a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-semibold text-zinc-500 transition hover:border-blue-500/50 hover:text-white">{label}</a>
              ))}
              <a href="https://www.trustpilot.com/review/dotextalk.com" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-semibold text-zinc-500 transition hover:border-blue-500/50 hover:text-white">Trustpilot</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Contact</p>
            <div className="mt-6 flex flex-col gap-4">
              <a href="mailto:info@dotextalk.com" className="inline-flex w-fit items-center gap-2 text-sm text-zinc-500 transition hover:text-white"><Mail size={16} /> info@dotextalk.com</a>
              <a href="https://wa.me/918157813455" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm text-zinc-500 transition hover:text-white"><MessageCircle size={16} /> +91 81578 14355</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Explore</p>
            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/architect" className="w-fit text-sm text-zinc-500 transition hover:text-white">Architect</Link>
              <Link href="/expertise" className="w-fit text-sm text-zinc-500 transition hover:text-white">Expertise</Link>
              <Link href="/services" className="w-fit text-sm text-zinc-500 transition hover:text-white">Services</Link>
              <Link href="/works" className="w-fit text-sm text-zinc-500 transition hover:text-white">Works</Link>
              <Link href="/referral" className="w-fit text-sm text-zinc-500 transition hover:text-white">Refer &amp; Earn</Link>
              <Link href="/contact" className="w-fit text-sm text-zinc-500 transition hover:text-white">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Information</p>
            <nav className="mt-6 flex flex-col gap-4">
              <Link href="/terms" className="w-fit text-sm text-zinc-500 transition hover:text-white">Terms &amp; Policies</Link>
              <Link href="/privacy" className="w-fit text-sm text-zinc-500 transition hover:text-white">Privacy Policy</Link>
            </nav>
          </div>
        </div>
        <div className="my-12 h-px bg-white/10" />
        <div className="flex flex-col gap-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DOTEX.TALK. All rights reserved.</p>
          <div className="flex items-center gap-2"><span>Digital development &amp; design</span></div>
        </div>
      </div>
    </footer>
  );
}
