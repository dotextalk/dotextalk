import Hero from "@/components/Hero";
import Architect from "@/components/Architect";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">

      <div className="dt-bg-glow pointer-events-none fixed inset-0 -z-10" />

      <Hero />

      <Architect />

      <Services />

      <Works />

      <Contact />

    </main>
  );
}