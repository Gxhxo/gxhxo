import { Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = {
  title: "Novedades — DigitalStore",
  description: "Los últimos productos añadidos al catálogo.",
};

export default function NovedadesPage() {
  const latest = [...products].reverse();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-amber-950/40 via-panel to-panel px-6 py-10 sm:px-10 sm:py-12">
        <div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Recién llegado
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Novedades
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
            Lo último publicado por nuestros creadores, de más reciente a más
            antiguo.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Últimos añadidos
          </h2>
          <span className="text-xs text-zinc-500">
            {latest.length} productos
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {latest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
