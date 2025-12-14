"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LUMASMART_JACKET } from "@/lib/products";

type TouchPoint = {
  id: string;
  title: string;
  desc: string;
  position: { x: number; y: number };
};

const touchPoints: TouchPoint[] = [
  { id: "lumbar", title: "Lumbar halo", desc: "Adaptive rear illumination that brightens when you slow down and softens when you accelerate.", position: { x: 54, y: 64 } },
  { id: "chest", title: "Sealed front channel", desc: "Hydrophobic, mag-sealed zipper channel with hidden reflective piping.", position: { x: 52, y: 42 } },
  { id: "shoulder", title: "Shoulder flex mesh", desc: "Graphene-infused mesh across the yoke for articulation without bulk.", position: { x: 38, y: 24 } },
  { id: "pocket", title: "Battery bay", desc: "Low-profile battery + NFC tap pocket integrated along the right seam.", position: { x: 35, y: 74 } },
  { id: "cuff", title: "Touch cuffs", desc: "Micro-piping LEDs that wake with a tap for signaling.", position: { x: 70, y: 82 } },
];

const fastFacts = [
  { label: "Runtime (mock)", value: "8h adaptive" },
  { label: "Water resistance", value: "Storm-ready" },
  { label: "Modes", value: "Ride, Walk, Stealth" },
  { label: "Touchpoints", value: "5 mapped zones" },
];

export default function TechPage() {
  const [activeId, setActiveId] = useState<string>(touchPoints[0].id);
  const active = useMemo(() => touchPoints.find((t) => t.id === activeId) ?? touchPoints[0], [activeId]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10 md:space-y-14">
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-10 shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(120,150,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 70% 30%, rgba(20,20,24,0.3), transparent 55%)" }} />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <div>
            <p className="text-sm text-white/60">Tech</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">Touch to reveal the build.</h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              A standalone tech page with interactive hotspots. Tap or hover over the jacket to expose hidden engineering details,
              including the new Black prototype angles.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {fastFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{fact.label}</p>
                  <p className="mt-1 text-sm font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/product/lumasmart-jacket"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
                View jacket
              </Link>
              <Link href="/shop"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:bg-white/5 transition">
                Shop
              </Link>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-black/30 p-4">
            <div className="relative h-[420px] md:h-[540px] rounded-[20px] overflow-hidden border border-white/10 bg-black/40">
              <Image src="/products/Black Prototype/back.png" alt="Black prototype tech map" fill className="object-contain" priority />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />

              {touchPoints.map((point) => (
                <button
                  key={point.id}
                  onMouseEnter={() => setActiveId(point.id)}
                  onFocus={() => setActiveId(point.id)}
                  onClick={() => setActiveId(point.id)}
                  className={`absolute h-10 w-10 -ml-5 -mt-5 rounded-full border ${active.id === point.id ? "border-white bg-white/20" : "border-white/40 bg-white/10 hover:bg-white/20"} transition`}
                  style={{ left: `${point.position.x}%`, top: `${point.position.y}%`, boxShadow: active.id === point.id ? `0 0 0 6px rgba(255,255,255,0.08)` : undefined }}
                  aria-label={point.title}
                >
                  <span className="absolute inset-0 rounded-full bg-white/25 blur-md" />
                  <span className="relative block h-full w-full rounded-full border border-white/40" />
                </button>
              ))}

              <div className="absolute inset-x-4 bottom-4">
                <AnimatePresence mode="wait">
                  <motion.div key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        <p className="text-xs text-white/60">Touchpoint</p>
                      </div>
                      <p className="text-xs text-white/60">Interactive</p>
                    </div>
                    <p className="mt-2 text-sm font-semibold">{active.title}</p>
                    <p className="text-sm text-white/65 leading-relaxed">{active.desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-3 text-xs text-white/50">Using the Black prototype layer—swap in higher-res hero shots as you upload them.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm text-white/60">Hardware-like UI</p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Calm motion, product-first.</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Every interaction is contained—hover states, cart drawer, variant switches, and touch hotspots respond without leaving the page.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {LUMASMART_JACKET.variants.slice(0, 3).map((variant) => (
              <span key={variant.name} className="flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: variant.accentHex }} />
                {variant.name}
              </span>
            ))}
            <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#0A0A0C" }} />
              Black Prototype
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
