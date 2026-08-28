import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Globe,
  LineChart,
  Megaphone,
  MousePointer2,
  Server,
  ShoppingCart,
  Smartphone,
  Code2,
  Database,
  Layers3,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Code2,
    title: "WordPress Development",
    description:
      "Business websites, landing pages and content-driven websites built around practical business requirements.",
  },
  {
    number: "02",
    icon: Globe,
    title: "Domain & Hosting",
    description:
      "Domain setup, hosting configuration, deployment and the essential infrastructure behind a reliable website.",
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Building and managing digital presence across social platforms with content and audience-focused strategies.",
  },
  {
    number: "04",
    icon: MousePointer2,
    title: "Google Business Profile",
    description:
      "Google Business Profile setup and optimization to help businesses improve their local search presence.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Google Analytics",
    description:
      "Understanding website traffic, user behaviour and important performance signals through analytics.",
  },
  {
    number: "06",
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Creating and managing advertising campaigns across Meta platforms with a focus on measurable results.",
  },
  {
    number: "07",
    icon: ShoppingCart,
    title: "Payment Integration",
    description:
      "Integrating online payment gateways into websites and digital platforms for secure customer transactions.",
  },
];

const technologies = [
  {
    name: "Next.js",
    icon: Layers3,
    description: "Modern React framework for high-performance web applications.",
  },
  {
    name: "React",
    icon: Code2,
    description: "Component-based development for modern interactive interfaces.",
  },
  {
    name: "Node.js",
    icon: Server,
    description: "Backend development and API-driven digital systems.",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    description: "Cross-platform application development for mobile experiences.",
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(0,120,255,0.16),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                  EXPERTISE
                </span>

                <span className="h-px w-12 bg-blue-500/60" />
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Digital skills that
                <span className="block text-blue-500">
                  make things work.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                From websites and hosting to marketing, analytics and payment
                integration, I work across the practical layers of a
                business&apos;s digital presence.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              Web Development
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              Digital Marketing
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              Analytics
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
              Business Systems
            </span>
          </div>
        </div>
      </section>

      {/* CURRENT EXPERTISE */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Current capabilities
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                The tools behind the work.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              These are the areas where I currently work with clients and
              businesses to build, manage and improve their digital presence.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative border-b border-r border-white/10 p-8 transition duration-300 hover:bg-zinc-950 lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-500">
                      {item.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-500 transition group-hover:border-blue-500/40 group-hover:text-blue-500">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-14 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-500 transition group-hover:text-blue-500">
                    Explore capability
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIGITAL SYSTEM */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                The bigger picture
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                From website
                <span className="block text-blue-500">
                  to digital system.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                A strong online presence is rarely just one website. The
                domain, infrastructure, visibility, advertising, analytics and
                customer journey all work together.
              </p>
            </div>

            <div className="border border-white/10">
              <div className="grid sm:grid-cols-2">
                <div className="border-b border-white/10 p-7 sm:border-r">
                  <Globe
                    size={22}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 text-xl font-semibold">
                    Build
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Domain, hosting, websites and digital platforms.
                  </p>
                </div>

                <div className="border-b border-white/10 p-7">
                  <Megaphone
                    size={22}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 text-xl font-semibold">
                    Reach
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Social media, Google presence and digital advertising.
                  </p>
                </div>

                <div className="p-7 sm:border-r">
                  <LineChart
                    size={22}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 text-xl font-semibold">
                    Measure
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Analytics, traffic, behaviour and performance.
                  </p>
                </div>

                <div className="p-7">
                  <ShoppingCart
                    size={22}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />

                  <h3 className="mt-8 text-xl font-semibold">
                    Convert
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Payment systems and better digital customer journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPANDING STACK */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Expanding the stack
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Building toward modern application development.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-zinc-400">
                I&apos;m continuing to deepen my capabilities in modern
                frameworks and application development, with a focus on
                building scalable digital products.
              </p>
            </div>

            <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.name}
                    className="group border-b border-r border-white/10 p-8 transition hover:bg-zinc-950 lg:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={25}
                        strokeWidth={1.5}
                        className="text-blue-500"
                      />

                      <ArrowUpRight
                        size={19}
                        className="text-zinc-600 transition group-hover:text-blue-500"
                      />
                    </div>

                    <h3 className="mt-12 text-3xl font-semibold">
                      {technology.name}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-500">
                      {technology.description}
                    </p>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      Developing expertise
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden border border-white/10 p-8 sm:p-12 lg:p-16">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Let&apos;s work together
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
                Have a digital problem to solve?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Tell me what you&apos;re trying to build, improve or grow.
                We&apos;ll find the right digital approach for it.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
                >
                  Explore services
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/works"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
                >
                  View works
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}