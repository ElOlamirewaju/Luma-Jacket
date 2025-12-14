"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { LUMASMART_JACKET, PRODUCTS } from "@/lib/products";
import { formatUSD } from "@/lib/format";

const perks = [
  { title: "Standalone shop", desc: "Own hero, imagery carousel, and variant palette without relying on the landing page." },
  { title: "Portfolio-ready", desc: "Frontend-only mock checkout—no backend dependencies or API keys required." },
  { title: "Interactive picks", desc: "Switch finishes, preview the prototype, and jump straight to detail or tech." },
];

export default function ShopPage() {
  const limitedIndex = Math.max(LUMASMART_JACKET.variants.findIndex((v) => v.name.toLowerCase().includes("limited")), 0);
  const [variantIdx, setVariantIdx] = useState(limitedIndex);
  const variant = LUMASMART_JACKET.variants[variantIdx];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-10 md:space-y-14">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-10 shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(120,150,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(120% 80% at 70% 30%, ${variant.accentHex}18, transparent 50%)` }} />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <p className="text-sm text-white/60">Shop</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">LumaSmart Store</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Standalone shopping surface with interactive colorways, quick cart, and a mock checkout built for portfolios.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {LUMASMART_JACKET.variants.map((v, i) => (
                <button key={v.name} onClick={() => setVariantIdx(i)}
                  className={`rounded-full border border-white/10 px-4 py-2 text-sm flex items-center gap-2 transition ${i === variantIdx ? "bg-white text-black" : "bg-black/30 hover:bg-white/5 text-white/80"}`}>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: v.accentHex }} />
                  {v.name}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {perks.map((p) => (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/product/lumasmart-jacket"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
                View jacket
              </Link>
              <Link href="/tech"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:bg-white/5 transition">
                Explore tech
              </Link>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-black/30 p-4">
            <div className="relative h-[320px] md:h-[420px] rounded-[20px] overflow-hidden border border-white/10 bg-black/40">
              <AnimatePresence mode="wait">
                <motion.div key={variant.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0">
                  <Image src={variant.images.front} alt={`${variant.name} front`} fill className="object-contain" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">Highlight</p>
                    <p className="text-sm font-semibold">{variant.name}</p>
                  </div>
                  <span className="text-[11px] rounded-full border border-white/15 bg-white/10 px-3 py-1">
                    {formatUSD(LUMASMART_JACKET.price)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white/60">Catalog</p>
            <h2 className="text-2xl font-semibold tracking-tight">Available now.</h2>
          </div>
          <p className="text-sm text-white/60">Mock checkout included</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="rounded-3xl border border-white/10 bg-white/5 p-1">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
