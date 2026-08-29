import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building modern, responsive and performance-focused websites and digital platforms.",
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Designing clean digital experiences that balance visual quality, usability and business goals.",
  },
  {
    number: "03",
    title: "E-Governance",
    description:
      "Experience working with digital systems, workflows and technology in the e-governance environment.",
  },
  {
    number: "04",
    title: "Digital Systems",
    description:
      "Connecting websites, applications, data and workflows into practical digital solutions.",
  },
];

const principles = [
  "Performance matters",
  "Design should have a purpose",
  "Systems should be built to scale",
  "Technology should solve real problems",
];

export default function ArchitectPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(0,120,255,0.16),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <Link
            href="/"
            className="mb-16 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
          >
            <ArrowDownRight size={16} />
            Back to home
          </Link>

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                  ARCHITECT
                </span>

                <span className="h-px w-12 bg-blue-500/60" />
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Building digital
                <span className="block text-blue-500">
                  systems with purpose.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                I&apos;m the person behind DOTEX.TALK — working across web
                development, web design and digital systems to create
                practical experiences built for performance and growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  4+ Years Experience
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  Web Development
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  Web Design
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                  E-Governance
                </span>
              </div>

              <Link
                href="/works"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                View my work
                <ArrowUpRight size={18} />
              </Link>
            </div>

            {/* PHOTO */}
            <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
              <div className="absolute -inset-6 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden border border-white/10 bg-zinc-950">
                <Image
                  src="/images/architect.webp"
                  alt="DOTEX.TALK Architect"
                  width={700}
                  height={850}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/70 p-5 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                    ARSHAD SABU P
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    Digital development &amp; design
                  </p>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 hidden h-20 w-20 border border-blue-500/30 bg-black/80 p-4 sm:block">
                <div className="flex h-full items-center justify-center text-blue-500">
                  <ArrowUpRight size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              The approach
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology is only useful when it solves something.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              My work sits at the intersection of design, development and
              real-world digital requirements.
            </p>

            <p>
              With more than four years of experience in web development and
              web design, I focus on creating websites and digital experiences
              that are not only visually strong, but also fast, usable and
              built around a clear purpose.
            </p>

            <p>
              My experience in e-governance has also shaped the way I think
              about digital systems — understanding users, workflows,
              information and the practical requirements behind the interface.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                What I work with
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                From interface to system.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              My experience covers the layers between a user&apos;s first
              interaction with a website and the digital systems working
              behind it.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group border-b border-r border-white/10 p-8 transition hover:bg-zinc-950 lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-500">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="text-zinc-600 transition group-hover:text-blue-500"
                  />
                </div>

                <h3 className="mt-14 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                How I think
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight sm:text-6xl">
                Good digital work goes beyond appearance.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                A successful digital product should look right, work properly
                and create measurable value. The technology, design and
                business objective all need to work together.
              </p>
            </div>

            <div className="border border-white/10">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.5}
                    className="shrink-0 text-blue-500"
                  />

                  <span className="text-lg text-zinc-300">
                    {principle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden border border-white/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Let&apos;s build
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Have something worth building?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Whether you need a website, digital platform or a better
                digital system, let&apos;s discuss what you&apos;re trying to
                achieve.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
