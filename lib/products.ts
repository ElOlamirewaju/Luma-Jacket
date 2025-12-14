export type VariantImages = {
  front: string;
  back: string;
  right?: string;
  detail?: string;
  hero?: string;
};

export type ProductVariant = {
  name: string;
  accentHex: string;
  images: VariantImages;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  variants: ProductVariant[];
  sizes: string[];
};

export const LUMASMART_JACKET: Product = {
  id: "lumasmart-jacket",
  slug: "lumasmart-jacket",
  name: "LumaSmart Jacket",
  tagline: "Adaptive illumination. Quiet engineering.",
  price: 399,
  sizes: ["XS", "S", "M", "L", "XL"],
  variants: [
    { name: "Midnight Teal", accentHex: "#1BA6A6", images: { front: "/products/Midnight Teal/front.png", back: "/products/Midnight Teal/back.png" } },
    { name: "Graphite Grey", accentHex: "#B7BDC8", images: { front: "/products/Graphite Grey/front.png", back: "/products/Graphite Grey/back.png" } },
    { name: "Arctic White", accentHex: "#EDEFF3", images: { front: "/products/Arctic White/front.png", back: "/products/Arctic White/back.png" } },
    { name: "Crimson Red", accentHex: "#B0122E", images: { front: "/products/Crimson Red/front.png", back: "/products/Crimson Red/back.png" } },
    { name: "Limited Edition Signal Orange", accentHex: "#FF6A1A", images: { front: "/products/Limited Edition Signal Orange/front.png", back: "/products/Limited Edition Signal Orange/back.png" } },
    {
      name: "Black Prototype",
      accentHex: "#0A0A0C",
      images: {
        front: "/products/Black Prototype/front.png",
        back: "/products/Black Prototype/back.png",
        right: "/products/Black Prototype/right.png",
        detail: "/products/Black Prototype/detail.png",
        hero: "/products/Black Prototype/hero.png",
      },
    },
  ],
};

export const PRODUCTS: Product[] = [LUMASMART_JACKET];
