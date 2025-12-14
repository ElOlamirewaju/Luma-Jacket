"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cartTotal, useCartStore } from "@/lib/cartStore";
import { formatUSD } from "@/lib/format";

export default function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.close);
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const updateQty = useCartStore((s) => s.updateQty);
  const total = cartTotal(items);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-black/60 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} onClick={close} />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] z-50 border-l border-white/10 bg-[#0b0b0d]/95 backdrop-blur-xl"
            initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <p className="font-semibold">Cart</p>
              <button onClick={close} className="text-white/70 hover:text-white transition">Close</button>
            </div>

            <div className="p-5 space-y-4 overflow-auto h-[calc(100%-170px)]">
              {items.length === 0 && <p className="text-white/60">Your cart is empty.</p>}
              {items.map((it, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/10 bg-black/20">
                    <Image src={it.image} alt={it.productName} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{it.productName}</p>
                    <p className="text-xs text-white/60">{it.variantName} • Size {it.size}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(idx, it.qty - 1)}
                        className="h-7 w-7 rounded-full border border-white/10 hover:bg-white/5 transition" aria-label="Decrease quantity">−</button>
                      <span className="text-xs text-white/80 w-6 text-center">{it.qty}</span>
                      <button onClick={() => updateQty(idx, it.qty + 1)}
                        className="h-7 w-7 rounded-full border border-white/10 hover:bg-white/5 transition" aria-label="Increase quantity">+</button>
                      <button onClick={() => remove(idx)} className="ml-auto text-xs text-white/60 hover:text-white transition">Remove</button>
                    </div>
                  </div>
                  <p className="text-xs text-white/80">{formatUSD(it.price * it.qty)}</p>
                </div>
              ))}
            </div>

            <div className="p-5 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Total</span>
                <span className="font-semibold">{formatUSD(total)}</span>
              </div>
              <Link href="/checkout" onClick={close}
                className="mt-4 block text-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition">
                Continue to checkout
              </Link>
              <p className="mt-2 text-xs text-white/50 text-center">Frontend demo only</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
