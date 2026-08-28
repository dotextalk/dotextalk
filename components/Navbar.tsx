"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/architect", label: "ARCHITECT" },
  { href: "/expertise", label: "EXPERTISE" },
  { href: "/services", label: "SERVICES" },
  { href: "/works", label: "WORKS" },
  { href: "/referral", label: "REFER & EARN" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-tight text-white transition hover:text-blue-500"
        >
          DOTEX
          <span className="text-blue-500">.</span>
          TALK
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition hover:text-white ${
                link.href === "/referral" ? "text-blue-400 hover:text-blue-300" : "text-zinc-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            CONTACT
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm font-medium ${
                  link.href === "/referral" ? "text-blue-400" : "text-zinc-300"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}