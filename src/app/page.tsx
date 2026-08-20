import { Flame } from "lucide-react";
import Link from "next/link";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";
import { products } from "@/lib/products";

const featured = products.slice(0, 8);

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
      <Hero />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-8">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Flame className="h-4 w-4 text-orange-400" aria-hidden />
                Destacados
              </h2>
              <Link
                href="/tienda"
                className="text-xs font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>

        <Sidebar />
      </div>

      <TrustStrip />
      <Testimonials />
      <Faq />
    </main>
  );
}
