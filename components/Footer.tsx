import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}
          <div>

            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
            >
              DOTEX
              <span className="text-blue-500">.</span>
              TALK
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">
              Digital development, design and practical digital solutions
              for businesses, organizations and ideas worth building.
            </p>

            <Link
              href="/referral"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-blue-500"
            >
              Refer a project
              <ArrowUpRight size={16} />
            </Link>

          </div>


          {/* EXPLORE */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">

              <Link
                href="/architect"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Architect
              </Link>

              <Link
                href="/expertise"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Expertise
              </Link>

              <Link
                href="/services"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/works"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Works
              </Link>

              <Link
                href="/referral"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Refer & Earn
              </Link>

              <Link
                href="/contact"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
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

              <Link
                href="/terms"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Terms & Policies
              </Link>

              <Link
                href="/privacy"
                className="w-fit text-sm text-zinc-500 transition hover:text-white"
              >
                Privacy Policy
              </Link>

            </nav>

          </div>

        </div>


        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />


        {/* BOTTOM */}
        <div className="flex flex-col gap-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} DOTEX.TALK. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Digital development &amp; design</span>
          </div>

        </div>

      </div>

    </footer>
  );
}