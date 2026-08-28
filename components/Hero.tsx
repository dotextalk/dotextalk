export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32"
    >
      <div className="relative z-10 w-full max-w-4xl">

        {/* Small badge */}
        <div className="inline-block px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          Web Architect | MCA | AI-DRIVEN GROWTH
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-8">
          Extending
          <br />
          <span className="text-blue-500">The Dot.</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-lg leading-relaxed mb-10 font-light">
          Engineering digital infrastructures that dominate search engines
          and AI response engines like ChatGPT.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <a
            href="#expertise"
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-[10px] tracking-widest uppercase transition hover:bg-blue-500 hover:text-white"
          >
            Explore Services
          </a>

          <a
            href="#works"
            className="w-full sm:w-auto border border-white/10 text-white px-10 py-4 rounded-full font-bold text-[10px] tracking-widest uppercase transition hover:bg-white/10"
          >
            Case Studies
          </a>

        </div>
      </div>
    </section>
  );
}