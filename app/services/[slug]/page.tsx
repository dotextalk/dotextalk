import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
  Search,
  Code2,
  Layers3,
  Gauge,
  Database,
  Smartphone,
  BarChart3,
  Bot,
  Workflow,
  Target,
  LineChart,
  ShieldCheck,
} from "lucide-react";

const services = {
  "web-architecture": {
    number: "01",
    title: "Web Architecture",
    label: "HIGH-PERFORMANCE DIGITAL PLATFORMS",
    description: "We design and build scalable websites and digital platforms that are fast, reliable and aligned with your business goals.",
    icon: Globe,
    features: [
      { title: "Next.js websites", description: "Modern, scalable websites built for performance, SEO and long-term growth.", icon: Globe },
      { title: "Business websites", description: "Professional digital platforms designed around your business and customers.", icon: Target },
      { title: "Web applications", description: "Custom web applications that connect users, data and business workflows.", icon: Code2 },
      { title: "Performance optimization", description: "Faster loading, better Core Web Vitals and a smoother user experience.", icon: Gauge },
      { title: "Responsive architecture", description: "Interfaces engineered to work consistently across desktop, tablet and mobile.", icon: Smartphone },
      { title: "Scalable frontend systems", description: "Structured frontend systems that can evolve as your business grows.", icon: Layers3 },
    ],
    technologies: ["Next.js", "React", "TypeScript", "APIs", "SEO", "Analytics"],
  },
  "seo-ai-visibility": {
    number: "02",
    title: "SEO & AI Visibility",
    label: "SEARCH + AI DISCOVERY",
    description: "We structure websites and content so your brand can be discovered through search engines and emerging AI-driven discovery systems.",
    icon: Search,
    features: [
      { title: "Technical SEO", description: "Strong technical foundations that make your website easier for search engines to understand.", icon: Search },
      { title: "AI search visibility", description: "Content and website structures designed for modern AI-powered discovery.", icon: Bot },
      { title: "Content architecture", description: "Clear information structures that connect your pages, topics and business goals.", icon: Layers3 },
      { title: "Search optimization", description: "On-page optimization focused on relevance, discoverability and sustainable growth.", icon: Target },
      { title: "Analytics & tracking", description: "Measurement systems that help understand where visitors come from and what they do.", icon: BarChart3 },
      { title: "Performance SEO", description: "Fast, accessible and technically sound experiences that support search visibility.", icon: Gauge },
    ],
    technologies: ["Technical SEO", "Structured Data", "AI Search", "Content", "Analytics", "Search Console"],
  },
  "digital-solutions": {
    number: "03",
    title: "Digital Solutions",
    label: "CONNECTED DIGITAL SYSTEMS",
    description: "We build custom digital systems that connect your business, customers, data and everyday workflows.",
    icon: Code2,
    features: [
      { title: "Custom web applications", description: "Purpose-built applications designed around the way your organization actually works.", icon: Code2 },
      { title: "Business dashboards", description: "Centralized dashboards that turn operational data into useful information.", icon: BarChart3 },
      { title: "API integrations", description: "Connect websites, applications and external platforms through reliable integrations.", icon: Workflow },
      { title: "Digital workflows", description: "Simplify repetitive processes with connected digital workflows.", icon: Workflow },
      { title: "Database systems", description: "Structured data systems designed for reliability, scalability and maintainability.", icon: Database },
      { title: "Automation", description: "Reduce manual work by connecting systems and automating routine operations.", icon: Gauge },
    ],
    technologies: ["Next.js", "React", "TypeScript", "APIs", "Databases", "Automation"],
  },
  "growth-strategy": {
    number: "04",
    title: "Growth Strategy",
    label: "DIGITAL GROWTH SYSTEMS",
    description: "We combine technology, data and digital strategy to turn your online presence into measurable business growth.",
    icon: Layers3,
    features: [
      { title: "Digital strategy", description: "A practical digital roadmap aligned with your business objectives.", icon: Target },
      { title: "Conversion optimization", description: "Improve the journey from visitor to customer with better digital experiences.", icon: LineChart },
      { title: "Analytics", description: "Understand what is working through meaningful data and performance signals.", icon: BarChart3 },
      { title: "Growth planning", description: "Identify opportunities for sustainable digital expansion.", icon: Layers3 },
      { title: "Customer journeys", description: "Design clearer experiences across the different stages of customer interaction.", icon: Smartphone },
      { title: "Performance tracking", description: "Measure digital performance and use the data to continuously improve.", icon: Gauge },
    ],
    technologies: ["Strategy", "Analytics", "Conversion", "SEO", "Customer Journey", "Performance"],
  },
};

type ServiceSlug = keyof typeof services;
type Props = { params: Promise<{ slug: string }> };

type ServiceMetadata = { title: string; description: string };

const serviceMetadata: Record<ServiceSlug, ServiceMetadata> = {
  "web-architecture": {
    title: "Web Architecture & Development in Malappuram, Kerala | DOTEX.TALK",
    description: "High-performance Next.js websites, business websites and scalable web applications built by DOTEX.TALK in Malappuram, Kerala.",
  },
  "seo-ai-visibility": {
    title: "SEO & AI Visibility Services in Malappuram, Kerala | DOTEX.TALK",
    description: "Technical SEO, structured data, AI search visibility and analytics to help businesses in Malappuram and Kerala become easier to discover online.",
  },
  "digital-solutions": {
    title: "Digital Solutions & Web Applications in Kerala | DOTEX.TALK",
    description: "Custom web applications, dashboards, API integrations, databases and automation systems designed for businesses and organizations in Kerala.",
  },
  "growth-strategy": {
    title: "Digital Growth Strategy in Malappuram, Kerala | DOTEX.TALK",
    description: "Practical digital strategy, conversion optimization, analytics and growth planning to turn your online presence into measurable business growth.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metadata = serviceMetadata[slug as ServiceSlug];

  if (!metadata) {
    return {
      title: "Services | DOTEX.TALK",
      description: "Digital development, SEO, digital solutions and growth services from DOTEX.TALK.",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://dotextalk.com/services/${slug}`,
      siteName: "DOTEX.TALK",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Service not found</h1>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300">
            <ArrowLeft size={18} />
            Back to services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-[40%] top-[35%] h-[260px] w-[260px] rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <Link href="/services" className="mb-16 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">
            <ArrowLeft size={16} />
            All services
          </Link>

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-sm font-medium text-blue-500">{service.number}</span>
                <span className="h-px w-12 bg-blue-500/60" />
                <span className="text-xs font-semibold tracking-[0.25em] text-zinc-400">{service.label}</span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{service.title}</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">{service.description}</p>

              <Link href="/#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">
                Start a project
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative flex min-h-[360px] items-center justify-center">
              <div className="absolute h-80 w-80 rounded-full border border-blue-500/10" />
              <div className="absolute h-64 w-64 rounded-full border border-blue-500/15" />
              <div className="absolute h-48 w-48 rounded-full border border-blue-500/20" />
              <div className="absolute h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl border border-blue-500/30 bg-zinc-950 shadow-[0_0_60px_rgba(0,120,255,0.15)]">
                <Icon size={52} strokeWidth={1.3} className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">What we deliver</p>
            <h2 className="mt-5 max-w-md text-4xl font-bold tracking-tight sm:text-5xl">
              Built around<br />
              <span className="text-blue-500">your objectives.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
              Every solution is designed around your actual business requirements — not around technology for technology&apos;s sake.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2">
            {service.features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.title} className="group border-b border-r border-white/10 bg-zinc-950 p-7 transition duration-300 hover:bg-zinc-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5">
                    <FeatureIcon size={19} strokeWidth={1.6} className="text-blue-400" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Engineered for performance</p>
              <h2 className="mt-4 text-3xl font-bold">Technology with purpose.</h2>
            </div>
            <div className="flex max-w-2xl flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400 transition hover:border-blue-500/40 hover:text-white">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Our approach</p>
            <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
              Digital systems built <span className="text-blue-500">to last.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              We focus on creating digital foundations that remain useful as your organization, customers and requirements evolve.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <ShieldCheck size={22} strokeWidth={1.5} className="text-blue-400" />
              <h3 className="mt-5 font-semibold">Reliable</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Stable foundations designed for long-term use.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <Gauge size={22} strokeWidth={1.5} className="text-blue-400" />
              <h3 className="mt-5 font-semibold">Fast</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Performance is considered from the beginning.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <Layers3 size={22} strokeWidth={1.5} className="text-blue-400" />
              <h3 className="mt-5 font-semibold">Scalable</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Systems that can grow with your requirements.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
              <Target size={22} strokeWidth={1.5} className="text-blue-400" />
              <h3 className="mt-5 font-semibold">Purposeful</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">Technology selected around real objectives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden border border-white/10 bg-zinc-950 px-8 py-16 sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">Let&apos;s work together</p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Ready to build<br />something better?</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">Tell us what you are trying to build, improve or grow. We&apos;ll help you find the right approach.</p>
            <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400">
              Contact DOTEX TALK
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
