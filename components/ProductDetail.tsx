"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product, VariantImages } from "@/lib/products";
import { formatUSD } from "@/lib/format";
import { useCartStore } from "@/lib/cartStore";

export default function ProductDetail({ product }: { product: Product }) {
  const [variantIdx, setVariantIdx] = useState(0);
  const [view, setView] = useState<keyof VariantImages>("front");
  const [size, setSize] = useState(product.sizes[2] ?? "M");
  const [qty, setQty] = useState(1);

  const variant = product.variants[variantIdx];
  const viewOrder: { id: keyof VariantImages; label: string }[] = [
    { id: "front", label: "Front" },
    { id: "back", label: "Back" },
    { id: "right", label: "Right" },
    { id: "detail", label: "Extreme close-up" },
    { id: "hero", label: "Hero shot" },
  ];
  const viewOptions = useMemo(
    () => viewOrder.filter((opt) => !!variant.images[opt.id]),
    [variant]
  );

  useEffect(() => {
    setView((prev) => (viewOptions.some((v) => v.id === prev) ? prev : viewOptions[0]?.id ?? "front"));
  }, [viewOptions]);

  const image = variant.images[view] ?? variant.images.front;

  const add = useCartStore((s) => s.add);

  const isLimited = variant.name.toLowerCase().includes("limited edition");
  const pillStyle = useMemo(
    () => ({ boxShadow: `0 0 0 1px rgba(255,255,255,0.10), 0 0 24px ${variant.accentHex}22` }),
    [variant.accentHex]
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <p className="text-sm text-white/60">Product</p>
      <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">{product.name}</h1>
      <p className="mt-4 text-white/70 max-w-2xl">{product.tagline}</p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: variant.accentHex }} />
              <p className="text-sm text-white/80">{variant.name}</p>
              {isLimited && (
                <span className="ml-2 text-xs rounded-full border border-white/10 bg-black/20 px-3 py-1" style={pillStyle}>
                  Limited
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {viewOptions.map((vOpt) => (
                <button
                  key={vOpt.id}
                  className={`text-xs rounded-full px-3 py-1 border border-white/10 ${view === vOpt.id ? "bg-white/10" : "bg-black/20"} hover:bg-white/10 transition`}
                  onClick={() => setView(vOpt.id)}
                >
                  {vOpt.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div key={image} initial={{ opacity: 0, y: 10, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-6 relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-black/20">
            <Image src={image} alt={`${product.name} ${variant.name} ${view}`} fill className="object-cover" />
          </motion.div>

          <p className="mt-4 text-xs text-white/50">
            Drop views in <code className="text-white/70">public/products/{variant.name}/front.png</code>, <code className="text-white/70">back.png</code>, <code className="text-white/70">right.png</code>, <code className="text-white/70">detail.png</code>, <code className="text-white/70">hero.png</code>.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-white/60">Price</p>
              <p className="mt-2 text-2xl font-semibold">{formatUSD(product.price)}</p>
            </div>
            <p className="text-sm text-white/60">Free returns (demo)</p>
          </div>

          <div className="mt-8">
            <p className="text-sm text-white/60">Color</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.variants.map((v, i) => (
                <button key={v.name} onClick={() => { setVariantIdx(i); setView("front"); }}
                  className={`rounded-full border border-white/10 px-4 py-2 text-sm flex items-center gap-2 hover:bg-white/5 transition ${i===variantIdx ? "bg-white/10" : "bg-black/20"}`}
                  aria-label={`Select ${v.name}`}>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: v.accentHex }} />
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-white/60">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)}
                  className={`rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition ${s===size ? "bg-white/10" : "bg-black/20"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <p className="text-sm text-white/60">Quantity</p>
            <div className="ml-auto flex items-center gap-2">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="h-9 w-9 rounded-full border border-white/10 bg-black/20 hover:bg-white/5 transition" aria-label="Decrease quantity">−</button>
              <span className="w-10 text-center text-sm text-white/80">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)}
                className="h-9 w-9 rounded-full border border-white/10 bg-black/20 hover:bg-white/5 transition" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <button
            onClick={() => add({ productId: product.id, productName: product.name, variantName: variant.name, size, qty, price: product.price, image: variant.images.front })}
            className="mt-10 w-full rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
          >
            Add to cart
          </button>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[{k:"Auto-dim LEDs",v:"Bright in dark, subtle in light."},{k:"Weather-ready",v:"Built for daily conditions."},{k:"Monochrome-first",v:"Designed to blend in."}].map((b) => (
              <div key={b.k} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm font-medium">{b.k}</p>
                <p className="mt-1 text-xs text-white/60">{b.v}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-white/50">Frontend-only ordering flow — intended for portfolio use.</p>
        </div>
      </div>
    </main>
  );
}
