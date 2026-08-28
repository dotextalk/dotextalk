import {
  Globe,
  Search,
  Cpu,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Architecture",
    description:
      "Scalable, high-performance websites and digital platforms built around your business goals.",
    icon: Globe,
    features: [
      "Next.js websites",
      "Business websites",
      "Web applications",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    title: "SEO & AI Visibility",
    description:
      "Technical SEO and AI-focused content architecture designed to improve how your brand is discovered.",
    icon: Search,
    features: [
      "Technical SEO",
      "AI search visibility",
      "Content architecture",
      "Search optimization",
    ],
  },
  {
    number: "03",
    title: "Digital Solutions",
    description:
      "Custom digital systems that connect your business, customers, data and workflows.",
    icon: Cpu,
    features: [
      "Custom web systems",
      "Business dashboards",
      "Digital workflows",
      "API integrations",
    ],
  },
  {
    number: "04",
    title: "Growth Strategy",
    description:
      "Data-driven digital strategies that turn online presence into measurable business growth.",
    icon: TrendingUp,
    features: [
      "Digital strategy",
      "Conversion optimization",
      "Analytics",
      "Growth planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,120,255,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium tracking-widest text-blue-400">
              DOTEXTALK SERVICES
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
              Digital systems
              <br />
              <span className="text-blue-500">
                built for growth.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              From high-performance websites to AI visibility and
              digital infrastructure, we build systems designed to
              move your business forward.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-blue-500">
              WHAT WE DO
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Our expertise
            </h2>
          </div>

          <p className="max-w-md text-zinc-500">
            Strategy, technology and visibility working together
            as one digital ecosystem.
          </p>
        </div>


        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative bg-black p-8 transition-colors duration-300 hover:bg-zinc-950 lg:p-12"
              >

                {/* NUMBER */}
                <div className="flex items-start justify-between">

                  <span className="text-sm font-medium text-blue-500">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-blue-400"
                    />
                  </div>

                </div>


                {/* TITLE */}
                <h3 className="mt-12 text-3xl font-bold tracking-tight">
                  {service.title}
                </h3>


                {/* DESCRIPTION */}
                <p className="mt-5 max-w-lg leading-7 text-zinc-400">
                  {service.description}
                </p>


                {/* FEATURES */}
                <div className="mt-8 space-y-3">

                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-500"
                      />

                      <span>{feature}</span>
                    </div>
                  ))}

                </div>


                {/* ARROW */}
                <div className="mt-10 flex items-center gap-2 text-sm font-medium text-white">
                  Explore service

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

              </article>
            );
          })}

        </div>

      </section>


      {/* VISUAL SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">

        <div className="relative overflow-hidden border border-white/10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.2),transparent_55%)]" />

          <div className="relative grid min-h-[420px] items-center lg:grid-cols-2">

            <div className="p-8 lg:p-16">

              <p className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                ONE DIGITAL SYSTEM
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Technology should
                <br />
                <span className="text-blue-500">
                  work together.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-zinc-400">
                Your website, search presence, customer experience
                and digital workflows should not operate separately.
                We connect them into one scalable system.
              </p>

            </div>


            {/* DIGITAL VISUAL */}
            <div className="relative flex h-full min-h-[350px] items-center justify-center overflow-hidden">

              <div className="absolute h-72 w-72 rounded-full border border-blue-500/20" />
              <div className="absolute h-52 w-52 rounded-full border border-blue-500/30" />
              <div className="absolute h-32 w-32 rounded-full border border-blue-500/40" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/10 shadow-[0_0_80px_rgba(0,120,255,0.25)]">
                <Cpu
                  size={38}
                  className="text-blue-400"
                  strokeWidth={1.2}
                />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">

          <p className="text-sm font-semibold tracking-[0.3em] text-blue-500">
            HAVE A PROJECT?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build something
            <span className="text-blue-500"> meaningful.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-zinc-400">
            Tell us what you are trying to build, improve or grow.
            We&apos;ll help you identify the right digital solution.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-400">
            Start a conversation
            <ArrowUpRight size={18} />
          </button>

        </div>

      </section>

    </main>
  );
}