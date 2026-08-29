import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-[20%] top-[45%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="max-w-5xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">CONTACT</span>
              <span className="h-px w-12 bg-blue-500/60" />
            </div>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Let&apos;s build
              <span className="block text-blue-500">something useful.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              Have a website, digital project or business idea in mind? Tell me what you are working on and let&apos;s explore how DOTEX.TALK can help.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Get in touch</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Start with a
                <span className="block text-zinc-500">conversation.</span>
              </h2>
              <p className="mt-7 max-w-md text-lg leading-8 text-zinc-400">
                You don&apos;t need to have everything figured out. Share what you need, and we can work through the details together.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="https://wa.me/918157814355?text=Hi%20DOTEX.TALK%2C%20I%20would%20like%20to%20discuss%20a%20digital%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border border-white/10 p-5 transition hover:border-blue-500/40 hover:bg-blue-500/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"><MessageCircle size={21} strokeWidth={1.7} /></div>
                  <div className="flex-1"><p className="text-xs uppercase tracking-[0.2em] text-zinc-600">WhatsApp</p><p className="mt-1 text-sm font-medium text-zinc-300">+91 81578 14355</p></div>
                  <ArrowUpRight size={18} className="text-zinc-600 transition group-hover:text-blue-500" />
                </a>

                <a
                  href="mailto:hello@dotextalk.com"
                  className="group flex items-center gap-5 border border-white/10 p-5 transition hover:border-blue-500/40 hover:bg-blue-500/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"><Mail size={21} strokeWidth={1.7} /></div>
                  <div className="flex-1"><p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Email</p><p className="mt-1 text-sm font-medium text-zinc-300">hello@dotextalk.com</p></div>
                  <ArrowUpRight size={18} className="text-zinc-600 transition group-hover:text-blue-500" />
                </a>

                <div className="flex items-center gap-5 border border-white/10 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"><MapPin size={21} strokeWidth={1.7} /></div>
                  <p className="text-sm font-medium text-zinc-300">Morayur, Malappuram<span className="block text-zinc-500">Kerala, India</span></p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 bg-zinc-950 p-7 sm:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">Project enquiry</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight">Tell me about your project.</h2>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Share your requirements through the form below. Your enquiry will be sent securely to the DOTEX.TALK team.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <ContactForm />
              </div>

              <p className="mt-6 text-center text-xs leading-5 text-zinc-600">
                By contacting DOTEX.TALK, you acknowledge our{" "}
                <Link href="/privacy" className="text-zinc-500 underline underline-offset-4 transition hover:text-blue-500">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/terms" className="text-zinc-500 underline underline-offset-4 transition hover:text-blue-500">Terms &amp; Policies</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Know someone?</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Refer a project and earn up to ₹5,000.</h2>
            </div>
            <Link href="/referral" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold transition hover:border-blue-500/50 hover:text-blue-500">
              Refer &amp; Earn <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="relative overflow-hidden border border-white/10 bg-zinc-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">DOTEX.TALK</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                Good projects start with<span className="text-blue-500"> a good conversation.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
