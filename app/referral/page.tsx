import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Gift,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

const eligibleServices = [
  "Website development",
  "Web design",
  "E-commerce development",
  "Payment gateway integration",
  "Social media marketing",
  "Digital marketing",
  "Other agreed digital services",
];

const notEligible = [
  "Domain registration or renewal",
  "Hosting purchase or renewal",
  "Third-party charges",
  "Refunded, cancelled or unpaid work",
];

const steps = [
  {
    number: "01",
    title: "Refer",
    description:
      "Introduce a business, organization or individual who may need our digital services.",
  },
  {
    number: "02",
    title: "Register",
    description:
      "Submit the referral before the prospective client has already contacted DOTEX.TALK about the same requirement.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We discuss the requirement with the referred client and deliver the agreed digital services.",
  },
  {
    number: "04",
    title: "Earn",
    description:
      "Receive 5% recurring commission on eligible client payments for up to 12 months.",
  },
];

export default function ReferralPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-[20%] top-[45%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                  REFERRAL PROGRAM
                </span>
                <span className="h-px w-12 bg-blue-500/60" />
              </div>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Know someone
                <span className="block text-blue-500">who needs digital help?</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                Introduce them to DOTEX.TALK and earn a 5% recurring referral
                commission on eligible payments they make for up to 12 months.
              </p>

              <Link
                href="#refer"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Refer a project
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="border border-blue-500/20 bg-blue-500/5 p-8 sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500">
                  <Gift size={23} strokeWidth={1.5} />
                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.25em] text-zinc-500">
                  Recurring referral commission
                </p>

                <div className="mt-3 text-6xl font-bold tracking-tight">5%</div>

                <p className="mt-3 text-zinc-400">
                  on eligible payments actually received
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-500">Commission period</span>
                    <span className="text-lg font-semibold text-white">Up to 12 months</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-zinc-500">Minimum eligible work</span>
                    <span className="text-lg font-semibold text-white">₹5,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                How it works
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Simple.
                <span className="block text-zinc-500">Transparent.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              Refer someone who needs digital services, let us handle the
              project, and earn 5% recurring commission on eligible payments
              actually received from the referred client for up to 12 months.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="border-b border-r border-white/10 p-8 lg:p-10">
                <span className="text-sm font-semibold text-blue-500">{step.number}</span>
                <h3 className="mt-12 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 max-w-md leading-7 text-zinc-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION CALCULATION */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                How your commission works
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Earn every month.
                <span className="block text-blue-500">For up to 12 months.</span>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
                For recurring services, your commission is calculated separately
                for each successful client payment. If the client pays every
                month, you can earn every month during the 12-month commission period.
              </p>
            </div>

            <div className="border border-white/10 bg-zinc-950">
              <div className="border-b border-white/10 p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Example</p>
                <h3 className="mt-3 text-2xl font-semibold">₹12,000 monthly service</h3>
              </div>

              <div className="p-7">
                <div className="space-y-4">
                  <div className="flex justify-between gap-6">
                    <span className="text-zinc-500">Client monthly payment</span>
                    <span>₹12,000</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span className="text-zinc-500">Referral rate</span>
                    <span>5%</span>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Your monthly commission</span>
                    <span className="font-semibold text-blue-500">₹600</span>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <span className="text-zinc-500">12 paid months</span>
                    <span className="font-semibold">₹7,200 total</span>
                  </div>
                  <p className="mt-5 text-xs leading-6 text-zinc-600">
                    Commission is earned only on payments actually received. If
                    the client does not pay for a month, no commission is due for
                    that month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBLE WORK */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                  <CheckCircle2 size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Eligible work</h2>
              </div>
              <div className="mt-8 space-y-4">
                {eligibleServices.map((service) => (
                  <div key={service} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <CheckCircle2 size={17} className="shrink-0 text-blue-500" strokeWidth={1.7} />
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-500">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Not eligible</h2>
              </div>
              <div className="mt-8 space-y-4">
                {notEligible.map((item) => (
                  <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                    <span className="text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERMS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Referral terms</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">A few things to know.</h2>

            <div className="mt-12 space-y-0 border-t border-white/10">
              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Minimum value</h3>
                <p className="leading-7 text-zinc-500">The referred client must purchase eligible work with a minimum value of ₹5,000.</p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Commission</h3>
                <p className="leading-7 text-zinc-500">The referral commission is 5% of each eligible client payment actually received by DOTEX.TALK.</p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Recurring services</h3>
                <p className="leading-7 text-zinc-500">For monthly or other recurring services, the 5% commission may be earned on each eligible payment for up to 12 months from the client&apos;s first successful payment.</p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Payment condition</h3>
                <p className="leading-7 text-zinc-500">Commission is calculated only on actual payments received. No commission is due on invoices that remain unpaid.</p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Referral priority</h3>
                <p className="leading-7 text-zinc-500">The referral must be registered before the prospective client has already contacted DOTEX.TALK regarding the same requirement. The first valid registered referral will normally receive referral credit.</p>
              </div>

              <div className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[220px_1fr]">
                <h3 className="font-semibold text-white">Cancellations</h3>
                <p className="leading-7 text-zinc-500">No commission is payable on cancelled, refunded or unpaid work.</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Link href="/terms#referral" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-blue-500">
              View full referral terms
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* REFER FORM CTA */}
      <section id="refer">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden border border-white/10 bg-zinc-950 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Ready to refer?</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                  Help someone build
                  <span className="block text-blue-500">something better.</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                  Send us the details of someone who may benefit from our services. We&apos;ll take it from there.
                </p>
              </div>

              <div className="border border-white/10 bg-black p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-500">
                  <Users size={22} />
                </div>
                <h3 className="mt-7 text-2xl font-semibold">Refer a project</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Contact us with the referral details and we&apos;ll register the referral before moving forward.
                </p>
                <a
                  href="https://wa.me/918157814355?text=Hi%20DOTEX.TALK,%20I%20would%20like%20to%20refer%20a%20client."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  <MessageCircle size={18} />
                  Refer via WhatsApp
                  <ArrowUpRight size={17} />
                </a>
                <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
                  Referral details should be submitted before the prospective client contacts DOTEX.TALK about the same requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
