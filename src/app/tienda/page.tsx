"use client";

import { Store } from "lucide-react";
import { useMemo, useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function TiendaPage() {
  const [category, setCategory] = useState("todo");

  const filtered = useMemo(() => {
    if (category === "todo") return products;
    return products.filter((p) => p.category === category);
  }, [category]);

  const activeLabel =
    categories.find((c) => c.id === category)?.label ?? "Todo";

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-sky-950/40 via-panel to-panel px-6 py-10 sm:px-10">
        <div
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
            <Store className="h-3.5 w-3.5" aria-hidden />
            {products.length} productos
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Tienda
          </h1>
          <p className="mt-3 max-w-lg text-sm text-zinc-400">
            Explora todo el catálogo y filtra por la categoría que necesites.
          </p>
        </div>
      </section>

      <CategoryFilter onSelect={setCategory} />

      <section>
        <p className="mb-3 text-xs text-zinc-500">
          {filtered.length}{" "}
          {filtered.length === 1 ? "producto" : "productos"} en{" "}
          <span className="text-zinc-300">{activeLabel}</span>
        </p>
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-line/60 bg-panel/50 p-10 text-center text-sm text-zinc-500">
            No hay productos en esta categoría todavía.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
