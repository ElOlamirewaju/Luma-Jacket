"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCartStore } from "@/lib/cartStore";

export default function Navbar() {
  const open = useCartStore((s) => s.open);
  const count = useCartStore((s) => s.items.reduce((sum, it) => sum + it.qty, 0));

  return (
    <motion.header initial={{ y: -14, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }} className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-black/35 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/85" />
            <span className="font-semibold tracking-tight">LumaSmart</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/shop" className="hover:text-white transition">Shop</Link>
            <Link href="/product/lumasmart-jacket" className="hover:text-white transition">Jacket</Link>
            <Link href="/tech" className="hover:text-white transition">Tech</Link>
          </nav>

          <button onClick={open}
            className="text-sm rounded-full px-4 py-2 bg-white text-black hover:bg-white/90 transition flex items-center gap-2"
            aria-label="Open cart">
            Cart
            <span className="text-xs rounded-full bg-black/10 px-2 py-0.5">{count}</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
