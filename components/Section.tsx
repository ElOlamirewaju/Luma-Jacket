"use client";
import { motion } from "framer-motion";

export default function Section({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-3xl">
        <p className="text-sm text-white/60">{eyebrow}</p>
        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 text-white/70 leading-relaxed">{desc}</p>
      </motion.div>
    </section>
  );
}
