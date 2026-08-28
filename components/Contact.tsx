export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-blue-500/20 bg-blue-500/5 px-8 py-16 text-center md:px-16 md:py-24">
          
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Start a conversation
            </p>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Let's discuss how we can turn your idea into a digital solution
              built for performance and growth.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/918157814355"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-blue-700"
              >
                WhatsApp
              </a>

              <a
                href="mailto:info@dotextalk.com"
                className="rounded-full border border-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}