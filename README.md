# LumaSmart Store (Frontend Only) — Portfolio Website

Apple-inspired, frontend-only e-commerce concept for **LumaSmart Jacket** with **variant selection** (5 colorways) and a **mock checkout flow** (no backend).

## ✅ What this project demonstrates
- Premium product UI (Apple-style layout, spacing, typography)
- Framer Motion micro-interactions + page transitions
- Variant selection (colorways), size selection, quantity, cart drawer
- Frontend-only “checkout” (order summary + contact/shipping form; stored locally)

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Zustand (cart state)

---

## 1) Add your product images (required)

Create these folders and add **front/back** images:

```
public/products/Midnight Teal/front.png
public/products/Midnight Teal/back.png

public/products/Graphite Grey/front.png
public/products/Graphite Grey/back.png

public/products/Arctic White/front.png
public/products/Arctic White/back.png

public/products/Crimson Red/front.png
public/products/Crimson Red/back.png

public/products/Limited Edition Signal Orange/front.png
public/products/Limited Edition Signal Orange/back.png
```

> Your folder names can include spaces. This repo is coded to match the product names above.

If you prefer JPG, update extensions in `lib/products.ts` (or rename to PNG).

---

## 2) Run locally

```bash
npm install
npm run dev
```

Open: http://localhost:3000

---

## Pages
- `/` — hero + overview
- `/shop` — product listing
- `/product/lumasmart-jacket` — product detail (variants, sizes, cart)
- `/checkout` — frontend-only checkout (no payment gateway)

---

## Deployment
Recommended: **Vercel**  
Import repo → Deploy.

---

## License
MIT © 2025
