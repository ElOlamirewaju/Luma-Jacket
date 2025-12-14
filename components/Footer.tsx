export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} LumaSmart. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-white transition" href="/shop">Shop</a>
          <a className="hover:text-white transition" href="/product/lumasmart-jacket">Jacket</a>
          <a className="hover:text-white transition" href="/#tech">Tech</a>
        </div>
      </div>
    </footer>
  );
}
