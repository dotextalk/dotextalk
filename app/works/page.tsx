import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "HEALTHCARE / AYURVEDA",
    title: "Herbal House Ayurveda",
    description:
      "A digital presence for an Ayurvedic healthcare and wellness clinic in Sharjah, UAE.",
    tags: ["Healthcare", "Ayurveda", "Web Development"],
    image: "/images/works/herbal-house.webp",
    url: "https://herbalhouseayurveda.com/",
  },
  {
    number: "02",
    category: "ENVIRONMENTAL CONSULTANCY",
    title: "Aurature",
    description:
      "A corporate website for an environmental engineering and sustainability consultancy.",
    tags: ["Environment", "Consultancy", "Web Design"],
    image: "/images/works/aurature.webp",
    url: "https://aurature.in/",
  },
  {
    number: "03",
    category: "E-COMMERCE / SUSTAINABLE PRODUCTS",
    title: "Kerava",
    description:
      "An e-commerce platform focused on eco-friendly and sustainable products.",
    tags: ["E-Commerce", "Eco Products", "Digital Commerce"],
    image: "/images/works/kerava.webp",
    url: "https://kerava.in/",
  },
  {
    number: "04",
    category: "INDEPENDENT DIGITAL INITIATIVE",
    title: "Ask Panchayat",
    description:
      "An independent information platform focused on Panchayat-related activities and public information.",
    tags: ["Information", "Panchayat", "Independent Project"],
    image: "/images/works/ask-panchayat.webp",
    url: "https://askpanchayat.blogspot.com/",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute right-[-100px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute left-[30%] top-[40%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-3xl" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            {/* HERO TITLE */}

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="text-sm font-semibold tracking-[0.3em] text-blue-500">
                  WORKS
                </span>

                <span className="h-px w-12 bg-blue-500/60" />

              </div>

              <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">

                Selected

                <span className="block text-blue-500">
                  digital work.
                </span>

              </h1>

            </div>


            {/* HERO DESCRIPTION */}

            <p className="max-w-xl text-lg leading-8 text-zinc-400">

              A selection of websites, digital platforms and online
              experiences created across healthcare, environmental
              consultancy, e-commerce and public information.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PORTFOLIO PROJECTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

        {/* SECTION HEADER */}

        <div className="mb-20 flex items-end justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects that matter.
            </h2>

          </div>

          <span className="hidden text-sm uppercase tracking-[0.2em] text-zinc-600 md:block">
            04 Projects
          </span>

        </div>


        {/* PROJECT LIST */}

        <div className="space-y-32">


          {/* =================================================
              PROJECT 01 — HERBAL HOUSE
          ================================================= */}

          <article className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">

              <div className="relative aspect-[16/10] w-full">

                <Image
                  src="/images/works/herbal-house.webp"
                  alt="Herbal House Ayurveda website"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

              </div>

              {/* External link */}

              <a
                href="https://herbalhouseayurveda.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Herbal House Ayurveda"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
              >

                <ArrowUpRight size={20} strokeWidth={1.8} />

              </a>

            </div>


            {/* CONTENT */}

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="text-sm font-medium text-blue-500">
                  01
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                  HEALTHCARE / AYURVEDA
                </span>

              </div>


              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Herbal House Ayurveda
              </h3>


              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                A digital presence for an Ayurvedic healthcare and wellness
                clinic in Sharjah, UAE.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Healthcare
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Ayurveda
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Web Development
                </span>

              </div>


              <a
                href="https://herbalhouseayurveda.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-blue-500"
              >
                Visit project
                <ArrowUpRight size={17} />
              </a>

            </div>

          </article>


          {/* =================================================
              PROJECT 02 — AURATURE
          ================================================= */}

          <article className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 lg:order-2">

              <div className="relative aspect-[16/10] w-full">

                <Image
                  src="/images/works/aurature.webp"
                  alt="Aurature environmental consultancy website"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

              </div>

              <a
                href="https://aurature.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Aurature"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
              >

                <ArrowUpRight size={20} strokeWidth={1.8} />

              </a>

            </div>


            {/* CONTENT */}

            <div className="lg:order-1">

              <div className="mb-6 flex items-center gap-4">

                <span className="text-sm font-medium text-blue-500">
                  02
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                  ENVIRONMENTAL CONSULTANCY
                </span>

              </div>


              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Aurature
              </h3>


              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                A corporate website for an environmental engineering and
                sustainability consultancy.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Environment
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Consultancy
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Web Design
                </span>

              </div>


              <a
                href="https://aurature.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-blue-500"
              >
                Visit project
                <ArrowUpRight size={17} />
              </a>

            </div>

          </article>


          {/* =================================================
              PROJECT 03 — KERAVA
          ================================================= */}

          <article className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">

              <div className="relative aspect-[16/10] w-full">

                <Image
                  src="/images/works/kerava.webp"
                  alt="Kerava eco-friendly e-commerce website"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

              </div>

              <a
                href="https://kerava.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Kerava"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
              >

                <ArrowUpRight size={20} strokeWidth={1.8} />

              </a>

            </div>


            {/* CONTENT */}

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="text-sm font-medium text-blue-500">
                  03
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                  E-COMMERCE / SUSTAINABLE PRODUCTS
                </span>

              </div>


              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Kerava
              </h3>


              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                An e-commerce platform focused on eco-friendly and sustainable
                products.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  E-Commerce
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Eco Products
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Digital Commerce
                </span>

              </div>


              <a
                href="https://kerava.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-blue-500"
              >
                Visit project
                <ArrowUpRight size={17} />
              </a>

            </div>

          </article>


          {/* =================================================
              PROJECT 04 — ASK PANCHAYAT
          ================================================= */}

          <article className="group grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 lg:order-2">

              <div className="relative aspect-[16/10] w-full">

                <Image
                  src="/images/works/ask-panchayat.webp"
                  alt="Ask Panchayat information platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

              </div>

              <a
                href="https://askpanchayat.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ask Panchayat"
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:bg-blue-500"
              >

                <ArrowUpRight size={20} strokeWidth={1.8} />

              </a>

            </div>


            {/* CONTENT */}

            <div className="lg:order-1">

              <div className="mb-6 flex items-center gap-4">

                <span className="text-sm font-medium text-blue-500">
                  04
                </span>

                <span className="h-px w-10 bg-white/20" />

                <span className="text-xs font-medium tracking-[0.2em] text-zinc-500">
                  INDEPENDENT DIGITAL INITIATIVE
                </span>

              </div>


              <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Ask Panchayat
              </h3>


              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                An independent information platform focused on Panchayat-related
                activities and public information.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Information
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Panchayat
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
                  Independent Project
                </span>

              </div>


              <a
                href="https://askpanchayat.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-blue-500"
              >
                Visit project
                <ArrowUpRight size={17} />
              </a>

            </div>

          </article>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="border-y border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Across industries
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">

                Different problems.

                <span className="block text-blue-500">
                  Different solutions.
                </span>

              </h2>

            </div>


            <p className="max-w-xl text-lg leading-8 text-zinc-400">

              Every project has different users, objectives and constraints.
              The approach changes with the problem — the focus on creating
              useful digital experiences remains the same.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="relative overflow-hidden border border-white/10 bg-zinc-950 p-8 sm:p-12 lg:p-16">

            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                YOUR PROJECT COULD BE NEXT
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">

                Have something

                <span className="text-blue-500">
                  {" "}worth building?
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">

                Let&apos;s discuss your idea, business or digital challenge
                and find the right way to build it.

              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Contact DOTEXTALK
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}