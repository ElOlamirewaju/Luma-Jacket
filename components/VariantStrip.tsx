"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { LUMASMART_JACKET } from "@/lib/products";

export default function VariantStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 md:pb-20">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/60">Colorways</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">Six finishes + the new prototype.</h3>
          </div>
          <Link href="/product/lumasmart-jacket"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/85 hover:bg-white/5 transition">
            View all
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {LUMASMART_JACKET.variants.map((v) => (
            <div key={v.name}
              className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/80 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: v.accentHex }} />
              {v.name}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
