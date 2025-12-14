import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
