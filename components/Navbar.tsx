"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/architect", label: "ARCHITECT" },
  { href: "/expertise", label: "EXPERTISE" },
  { href: "/works", label: "WORKS" },
  { href: "/referral", label: "REFER & EARN", accent: true },
];

const services = [
  { href: "/services/web-architecture", label: "WEB ARCHITECTURE" },
  { href: "/services/seo-ai-visibility", label: "SEO & AI VISIBILITY" },
  { href: "/services/digital-solutions", label: "DIGITAL SOLUTIONS" },
  { href: "/services/growth-strategy", label: "GROWTH STRATEGY" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-[70] text-lg font-bold tracking-tight text-white transition-colors duration-300 hover:text-blue-500"
        >
          DOTEX
          <span className="text-blue-500">.</span>
          TALK
        </Link>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="site-navigation-drawer"
          onClick={() => setOpen((value) => !value)}
          className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-current transition-all duration-300 ${
                open ? "top-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      <aside
        id="site-navigation-drawer"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(88vw,500px)] flex-col border-l border-white/10 bg-zinc-950/95 px-7 pb-8 pt-28 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          <div className="mb-10 border-b border-white/10 pb-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Navigation
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
              Digital development, web architecture and growth systems.
            </p>
          </div>

          <div className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="group border-b border-white/10 py-4 text-2xl font-medium tracking-tight text-zinc-200 transition-colors duration-300 hover:text-white sm:text-3xl"
            >
              HOME
            </Link>

            {links.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group border-b border-white/10 py-4 text-2xl font-medium tracking-tight text-zinc-200 transition-colors duration-300 hover:text-white sm:text-3xl"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-submenu"
                onClick={() => setServicesOpen((value) => !value)}
                className="flex w-full items-center justify-between py-4 text-left text-2xl font-medium tracking-tight text-zinc-200 transition-colors duration-300 hover:text-white sm:text-3xl"
              >
                <span>SERVICES</span>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm transition-transform duration-300 ${
                    servicesOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                id="services-submenu"
                className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                  servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-4 pl-1">
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMenu}
                        className="group flex items-center gap-4 py-3 text-sm font-medium tracking-wide text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-white"
                        style={{ transitionDelay: servicesOpen ? `${index * 45}ms` : "0ms" }}
                      >
                        <span className="text-[10px] text-blue-500">0{index + 1}</span>
                        <span>{service.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`group border-b border-white/10 py-4 text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-3xl ${
                  link.accent ? "text-blue-400 hover:text-blue-300" : "text-zinc-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-8 inline-flex items-center justify-between rounded-full bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:pr-5"
            >
              <span>LET'S BUILD</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          DOTEX.TALK · Digital Development & Solutions
        </div>
      </aside>

      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          #site-navigation-drawer,
          #site-navigation-drawer *,
          header button,
          header button * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </header>
  );
}
