"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cartTotal, useCartStore } from "@/lib/cartStore";
import { formatUSD } from "@/lib/format";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const total = useMemo(() => cartTotal(items), [items]);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Order placed (demo).</h1>
        <p className="mt-4 text-white/70">
          This is a frontend-only project. No payments are processed.
        </p>
        <button
          onClick={() => { clear(); setSubmitted(false); }}
          className="mt-8 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
        >
          Back to store
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <p className="text-sm text-white/60">Checkout</p>
      <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">Review & submit</h1>
      <p className="mt-4 text-white/70 max-w-2xl">Frontend-only checkout concept. No payment gateway.</p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Email" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="First name" required />
              <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Last name" required />
            </div>
            <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Address" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="City" required />
              <input className="rounded-2xl bg-black/20 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Postal code" required />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
              disabled={items.length === 0}
              title={items.length === 0 ? "Add an item to cart first" : "Submit order (demo)"}
            >
              Submit order (demo) • {formatUSD(total)}
            </button>
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-6 space-y-4">
            {items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                  <Image src={it.image} alt={it.productName} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{it.productName}</p>
                  <p className="text-sm text-white/60">{it.variantName} • Size {it.size} • Qty {it.qty}</p>
                </div>
                <p className="text-sm text-white/80">{formatUSD(it.price * it.qty)}</p>
              </div>
            ))}
            {items.length === 0 && <p className="text-white/60">Your cart is empty.</p>}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 flex items-center justify-between">
            <p className="text-white/70">Total</p>
            <p className="text-lg font-semibold">{formatUSD(total)}</p>
          </div>

          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-3 text-xs text-white/50">
            Demo checkout only — no payments processed.
          </motion.p>
        </div>
      </div>
    </main>
  );
}
