"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: "limited",
    badge: "Limited edition",
    title: "Signal Orange",
    subtitle: "High-visibility release for the launch drop.",
    accent: "#FF6A1A",
    image: "/products/Limited Edition Signal Orange/front.png",
  },
  {
    id: "graphite",
    badge: "Original design",
    title: "Graphite Grey",
    subtitle: "Matte hardware feel with soft illumination.",
    accent: "#B7BDC8",
    image: "/products/Graphite Grey/front.png",
  },
  {
    id: "white",
    badge: "Clean monochrome",
    title: "Arctic / Graphite White",
    subtitle: "Studio-white finish with crisp contrast trims.",
    accent: "#EDEFF3",
    image: "/products/Arctic White/front.png",
  },
  {
    id: "black",
    badge: "Prototype",
    title: "Black Type",
    subtitle: "Stealth build—original silhouette, muted glow.",
    accent: "#0A0A0C",
    image: "/products/Black Prototype/hero.png",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 6200);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,220,255,0.12),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(120,190,255,0.10),transparent_50%)]" />
      <div className="absolute inset-x-0 top-10 h-48 blur-3xl opacity-60" style={{ background: `radial-gradient(120% 80% at 50% 40%, ${slide.accent}25, transparent 50%)` }} />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-sm text-white/70">
              LumaSmart Jacket • Frontend Store Concept
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }} className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
              A store that feels like hardware.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              Carousel the hero image between Signal Orange, Graphite White, and the Black prototype to preview the drop before shopping.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/product/lumasmart-jacket"
                className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition text-center">
                View jacket
              </Link>
              <Link href="/shop"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/85 hover:bg-white/5 transition text-center">
                Shop
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-10 md:mt-12 rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: slide.accent }} />
                  <p className="text-sm text-white/75">{slide.badge}</p>
                </div>
                <p className="text-xs text-white/50">Slide {active + 1} / {slides.length}</p>
              </div>
              <p className="mt-2 text-lg font-semibold">{slide.title}</p>
              <p className="text-white/65">{slide.subtitle}</p>

              <div className="mt-4 flex gap-2">
                {slides.map((s, i) => (
                  <button key={s.id} onClick={() => setActive(i)}
                    className={`flex-1 rounded-2xl border border-white/10 px-3 py-2 text-left text-sm transition ${i === active ? "bg-white/10" : "bg-black/20 hover:bg-white/5"}`}>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: s.accent }} />
                      <span className="text-white/70">{s.title}</span>
                    </div>
                    <p className="mt-1 text-xs text-white/50 truncate">{s.subtitle}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute -left-24 -right-10 -top-10 -bottom-6 bg-[radial-gradient(circle_at_30%_20%,rgba(140,170,220,0.08),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(80,120,200,0.08),transparent_45%)] blur-3xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-3 md:p-4 shadow-soft">
              <div className="relative h-[360px] md:h-[520px] overflow-hidden rounded-[22px] border border-white/10 bg-black/30">
                <div className="absolute inset-0" style={{ background: `radial-gradient(60% 70% at 50% 35%, ${slide.accent}0f, transparent 60%)` }} />
                <AnimatePresence mode="wait">
                  <motion.div key={slide.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={`${slide.title} hero`}
                      fill
                      priority={active === 0}
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/60">{slide.badge}</p>
                    <p className="text-sm font-semibold">{slide.title}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {slides.map((s, i) => (
                      <span key={s.id}
                        className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-white" : "w-3 bg-white/40"}`}
                        style={i === active ? { boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 0 12px ${slide.accent}40` } : {}}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
