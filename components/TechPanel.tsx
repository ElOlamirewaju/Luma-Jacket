"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const bullets = [
  { k: "Adaptive lighting", v: "Neutral-white LEDs tuned for visibility without noise." },
  { k: "Variant system", v: "Six colorways plus prototype layers; consistent presentation and quick switching." },
  { k: "Frontend checkout", v: "Cart + mock checkout for portfolio demonstration." },
];

export default function TechPanel() {
  return (
    <section id="tech" className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <p className="text-sm text-white/60">Tech</p>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Designed to disappear.</h3>
        <p className="mt-3 text-white/70 max-w-2xl">
          Motion is subtle—never distracting. The experience stays calm, precise, and product-first.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {bullets.map((b) => (
            <div key={b.k} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-medium">{b.k}</p>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-white/65">Hotspot-driven details live on the standalone tech page.</p>
          <Link href="/tech" className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:bg-white/5 transition">
            Open tech page
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
