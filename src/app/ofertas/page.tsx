import { Percent } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Ofertas — DigitalStore",
  description: "Descuentos y promociones por tiempo limitado.",
};

export default function OfertasPage() {
  const deals = products.filter((p) => p.price !== "Gratis").slice(0, 8);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-rose-950/40 via-panel to-panel px-6 py-10 sm:px-10 sm:py-12">
        <div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-pink-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-300">
            <Percent className="h-3.5 w-3.5" aria-hidden />
            Tiempo limitado
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Ofertas
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
            Descuentos sobre productos seleccionados del catálogo. Las
            promociones cambian cada semana.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            En promoción
          </h2>
          <span className="text-xs text-zinc-500">
            {deals.length} productos
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
