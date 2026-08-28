export default function Architect() {
  return (
    <section
      id="architect"
      className="bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            The Architect
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Strategy before
            <span className="text-blue-500"> technology.</span>
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-lg leading-8 text-zinc-400">
            Dotextalk approaches digital projects from an architectural
            perspective. We don't simply build websites. We design digital
            systems that are structured to scale, perform and create measurable
            value.
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every decision — from information architecture and user experience
            to search visibility and technical infrastructure — is made with
            the bigger business objective in mind.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">01</p>
              <p className="mt-2 text-sm text-zinc-500">
                Think strategically
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">02</p>
              <p className="mt-2 text-sm text-zinc-500">
                Build intelligently
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">03</p>
              <p className="mt-2 text-sm text-zinc-500">
                Optimise continuously
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">04</p>
              <p className="mt-2 text-sm text-zinc-500">
                Scale confidently
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}