const projects = [
  {
    number: "01",
    category: "Web Architecture",
    title: "Digital Infrastructure",
    description:
      "A scalable digital platform designed around performance, structure and long-term growth.",
  },
  {
    number: "02",
    category: "Business Systems",
    title: "Connected Workflows",
    description:
      "Digital tools that simplify operations and connect people, processes and information.",
  },
  {
    number: "03",
    category: "AI & SEO",
    title: "Search Visibility",
    description:
      "A technical content and SEO architecture built for modern search and AI discovery.",
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Selected Works
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Ideas into
              <span className="text-blue-500"> infrastructure.</span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400">
            A selection of digital projects focused on creating useful,
            scalable and high-performing experiences.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:border-blue-500/50 hover:bg-zinc-900 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="text-sm font-semibold text-blue-500">
                {project.number}
              </span>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {project.category}
                </p>

                <h3 className="text-2xl font-semibold md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  {project.description}
                </p>
              </div>

              <div className="text-3xl text-zinc-600 transition group-hover:text-blue-500">
                ↗
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}