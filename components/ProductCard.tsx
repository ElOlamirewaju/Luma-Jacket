import Link from "next/link";
import { Product } from "@/lib/products";
import { formatUSD } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
      <p className="text-sm text-white/60">{product.tagline}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h2>
      <p className="mt-2 text-white/70">{formatUSD(product.price)}</p>
      <Link href={`/product/${product.slug}`}
        className="mt-6 inline-flex rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition">
        View details
      </Link>
    </div>
  );
}
