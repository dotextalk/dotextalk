"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        {/* LOGO */}
        <Link
  href="/"
  className="text-lg font-bold tracking-tight text-white transition hover:text-blue-500"
>
  DOTEX
  <span className="text-blue-500">.</span>
  TALK
</Link>


        {/* NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          {/* ARCHITECT */}
          <Link
            href="/architect"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            ARCHITECT
          </Link>


          {/* EXPERTISE */}
          <Link
            href="/expertise"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            EXPERTISE
          </Link>


          {/* SERVICES */}
          <Link
            href="/services"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            SERVICES
          </Link>


          {/* WORKS */}
          <Link
            href="/works"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            WORKS
          </Link>


          {/* REFERRAL PROGRAM */}
          <Link
            href="/referral"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            REFER & EARN
          </Link>


          {/* CONTACT */}
          <Link
            href="/contact"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            CONTACT
          </Link>

        </div>

      </nav>
    </header>
  );
}