"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const services = [
  "Web Architecture",
  "SEO & AI Visibility",
  "Digital Solutions",
  "Growth Strategy",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not decided yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-blue-500/30 bg-blue-500/5 p-8 sm:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="mt-6 text-2xl font-bold">Enquiry sent successfully.</h3>
        <p className="mt-3 max-w-lg leading-7 text-zinc-400">
          Thank you. Your project details have been sent to the DOTEX.TALK team. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
        >
          Send another enquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" name="phone" placeholder="+91..." />
        <Field label="Company / Organization" name="company" placeholder="Company name" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField label="What do you need?" name="service" options={services} />
        <SelectField label="Budget" name="budget" options={budgets} placeholder="Select a range" />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Project details <span className="text-blue-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Tell us what you want to build, improve or grow..."
          className="mt-3 w-full resize-y border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/50"
        />
      </div>

      {/* Honeypot field for basic bot protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-300" role="alert">
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending enquiry...
            </>
          ) : (
            <>
              Send project enquiry
              <ArrowUpRight size={18} />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-zinc-600">
          Your details are used only to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/50"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder = "Select an option",
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500/50"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}
