"use client";

import { useState } from "react";

export default function LetsTalkButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Let's Talk assistant"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full px-1 py-1 text-white transition-all duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
      >
        <span className="text-sm font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-blue-400">
          LET&apos;S TALK
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-500/70 bg-black/80 shadow-[0_0_28px_rgba(37,99,235,0.28)] backdrop-blur-md transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-[0_0_34px_rgba(37,99,235,0.42)] sm:h-16 sm:w-16">
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10 text-blue-500 sm:h-11 sm:w-11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 27c0-9 5.6-15 12-15s12 6 12 15v6c0 8-5.5 14-12 14s-12-6-12-14v-6Z" />
            <path d="M20.5 25.5c2.3-6.2 7.2-9.7 13.1-9.7 4.6 0 7.8 1.7 10.1 5.1" />
            <path d="M22 21c3.2-4.1 7.4-6.3 12.2-6.3" />
            <path d="M24 31h.1M40 31h.1" strokeWidth="3.2" />
            <path d="M28 39c2.4 1.9 5.6 1.9 8 0" />
            <path d="M13 28v7c0 3.4 2.1 6.2 5.1 7.2M51 28v7c0 3.4-2.1 6.2-5.1 7.2" />
            <path d="M24 48c-5.3 2.3-8.5 5.3-10.1 9M40 48c5.3 2.3 8.5 5.3 10.1 9" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/50 p-4 backdrop-blur-[2px] sm:p-8">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lets-talk-title"
            className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-500">
                  DOTEX.TALK
                </p>
                <h2 id="lets-talk-title" className="mt-1 text-lg font-semibold text-white">
                  Let&apos;s Talk
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Let's Talk assistant"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
              >
                <span aria-hidden="true" className="text-xl leading-none">×</span>
              </button>
            </div>

            <div className="px-5 py-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/40 text-blue-500">
                  <svg viewBox="0 0 64 64" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 27c0-9 5.6-15 12-15s12 6 12 15v6c0 8-5.5 14-12 14s-12-6-12-14v-6Z" />
                    <path d="M22 21c3.2-4.1 7.4-6.3 12.2-6.3" />
                    <path d="M24 31h.1M40 31h.1" strokeWidth="3.2" />
                    <path d="M28 39c2.4 1.9 5.6 1.9 8 0" />
                  </svg>
                </span>
                <p className="pt-1 text-sm leading-6 text-zinc-300">
                  Hello! Tell us what you&apos;re looking to build, improve or grow. Our smart assistant will help guide you to the right solution.
                </p>
              </div>

              <div className="mt-6 grid gap-2">
                {[
                  "I need a website",
                  "I need SEO / AI visibility",
                  "I need a digital solution",
                  "I want to grow my business",
                ].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
