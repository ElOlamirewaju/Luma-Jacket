import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import VariantStrip from "@/components/VariantStrip";
import TechPanel from "@/components/TechPanel";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Section
        eyebrow="Designed for motion"
        title="Quiet engineering, visible when it matters."
        desc="A monochrome silhouette with adaptive illumination. Built to feel effortless—like hardware designed to disappear."
      />
      <VariantStrip />
      <TechPanel />
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/60">Ready to explore variants?</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Choose a colorway.</h3>
            <p className="mt-2 text-white/70 max-w-xl">
              Six finishes—including the new Black Prototype—tuned for contrast, visibility, and understated presence.
            </p>
          </div>
          <Link href="/shop" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
            Shop now
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
