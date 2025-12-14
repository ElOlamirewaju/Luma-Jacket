import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "LumaSmart — Frontend Store",
  description: "Apple-style, frontend-only ordering experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white antialiased">
        <Navbar />
        <CartDrawer />
        {children}
      </body>
    </html>
  );
}
