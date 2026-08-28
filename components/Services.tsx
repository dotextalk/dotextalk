import Link from "next/link";

const services = [
  {
    number: "01",
    slug: "web-architecture",
    title: "Web Architecture",
    description:
      "Scalable, high-performance websites and digital platforms built around your business goals.",
  },
  {
    number: "02",
    slug: "seo-ai-visibility",
    title: "SEO & AI Visibility",
    description:
      "Technical SEO and AI-focused content architecture designed to improve how your brand is discovered.",
  },
  {
    number: "03",
    slug: "digital-solutions",
    title: "Digital Solutions",
    description:
      "Custom digital systems that connect your business, customers, data and workflows.",
  },
  {
    number: "04",
    slug: "growth-strategy",
    title: "Growth Strategy",
    description:
      "Data-driven digital strategies that turn online presence into measurable business growth.",
  },
];

export default function Services() {
  return (
    <section
      id="expertise"
      className="bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            What we do
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Digital systems built
            <span className="text-blue-500"> to perform.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            From architecture to visibility, we build digital experiences
            designed for performance, scalability and long-term growth.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={`/services/${service.slug}`}
              className="group block bg-zinc-950 p-8 transition duration-300 hover:bg-zinc-900 md:p-10"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-500">
                  {service.number}
                </span>

                <span className="text-2xl text-zinc-600 transition group-hover:text-blue-500">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-semibold md:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-zinc-400">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}