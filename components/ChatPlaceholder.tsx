"use client";

import { MessageCircle } from "lucide-react";

export default function ChatPlaceholder() {
  return (
    <button
      type="button"
      aria-label="Let's Talk"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-200"
    >
      <MessageCircle size={17} strokeWidth={1.8} />
      Let&apos;s Talk
    </button>
  );
}
