"use client";

import { Download, Plus, Star } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const isFree = product.price === "Gratis";

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line/60 bg-panel/60 transition-all duration-200 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-panel hover:shadow-xl hover:shadow-violet-950/40">
      <Link
        href={`/tienda/${product.id}`}
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800/60 to-zinc-900/60"
      >
        <span
          className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${product.badgeColor}`}
        >
          {product.badge}
        </span>
        {isFree && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Free
          </span>
        )}
        <span
          className="text-4xl transition-transform duration-300 group-hover:scale-115"
          aria-hidden
        >
          {product.emoji}
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-3.5">
        <Link
          href={`/tienda/${product.id}`}
          className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-violet-300"
        >
          {product.name}
        </Link>
        <p className="text-xs text-zinc-500">{product.subtitle}</p>
        <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Download className="h-3.5 w-3.5" aria-hidden />
            {product.downloads}
          </span>
          <span className="flex items-center gap-1 text-amber-400">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden />
            {product.rating}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span
            className={`text-base font-bold ${
              isFree ? "text-emerald-400" : "text-foreground"
            }`}
          >
            {product.price}
          </span>
          <button
            type="button"
            onClick={() => addItem(product)}
            aria-label={`Agregar ${product.name} al carrito`}
            className="flex items-center gap-1 rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-medium text-zinc-300 transition-all hover:border-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 hover:text-white"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
