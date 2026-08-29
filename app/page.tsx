import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Architect from "@/components/Architect";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Web Development & Digital Solutions in Malappuram, Kerala",
  description:
    "DOTEX.TALK is a digital development studio based in Malappuram, Kerala, building high-performance websites, web architecture, digital solutions and growth systems for businesses and organizations.",
  alternates: {
    canonical: "/",
  },
};

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
