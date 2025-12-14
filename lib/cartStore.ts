import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  productName: string;
  variantName: string;
  size: string;
  qty: number;
  price: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: CartItem) => void;
  remove: (idx: number) => void;
  updateQty: (idx: number, qty: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (item) => set((s) => ({ items: [...s.items, item], isOpen: true })),
      remove: (idx) => set((s) => ({ items: s.items.filter((_, i) => i !== idx) })),
      updateQty: (idx, qty) =>
        set((s) => ({ items: s.items.map((it, i) => (i === idx ? { ...it, qty: Math.max(1, qty) } : it)) })),
      clear: () => set({ items: [] }),
    }),
    { name: "lumasmart_cart_v1" }
  )
);

export const cartTotal = (items: CartItem[]) => items.reduce((sum, it) => sum + it.price * it.qty, 0);
