"use client";

import { Download, Gift, MessageSquare, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getComments, isUnlocked } from "@/lib/rewards";
import type { Product } from "@/lib/products";

export default function FreeList({ products }: { products: Product[] }) {
  return (
    <ul className="divide-y divide-line/50 overflow-hidden rounded-2xl border border-line/60 bg-panel/40">
      {products.map((product, i) => (
        <FreeRow key={product.id} product={product} index={i} />
      ))}
    </ul>
  );
}

function FreeRow({ product, index }: { product: Product; index: number }) {
  const { user } = useAuth();
  const [commentCount, setCommentCount] = useState<number | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setCommentCount(getComments(product.id).length);
    setUnlocked(isUnlocked(product.id, user?.name ?? "invitado"));
  }, [product.id, user]);

  return (
    <li className="group flex flex-col gap-4 p-4 transition-colors hover:bg-panel/70 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      <span className="hidden w-6 shrink-0 text-sm font-bold tabular-nums text-zinc-700 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>

      <Link
        href={`/gratis/${product.id}`}
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line/60 bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 text-2xl transition-transform duration-200 group-hover:scale-105"
      >
        <span aria-hidden>{product.emoji}</span>
      </Link>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/gratis/${product.id}`}
            className="text-sm font-semibold text-foreground transition-colors hover:text-emerald-300"
          >
            {product.name}
          </Link>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${product.badgeColor}`}
          >
            {product.badge}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-500">
          {product.description}
        </p>
        <div className="mt-2 flex items-center gap-4 text-[11px] text-zinc-600">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" aria-hidden />
            {commentCount ?? "—"}{" "}
            {commentCount === 1 ? "respuesta" : "respuestas"}
          </span>
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" aria-hidden />
            {product.downloads}
          </span>
          <span className="flex items-center gap-1 text-amber-500">
            <Star className="h-3 w-3 fill-current" aria-hidden />
            {product.rating}
          </span>
        </div>
      </div>

      <Link
        href={`/gratis/${product.id}`}
        className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
          unlocked
            ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"
            : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:brightness-110"
        }`}
      >
        {unlocked ? (
          <>
            <Download className="h-3.5 w-3.5" aria-hidden />
            Descargar
          </>
        ) : (
          <>
            <Gift className="h-3.5 w-3.5" aria-hidden />
            Obtener recompensa
          </>
        )}
      </Link>
    </li>
  );
}
