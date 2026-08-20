"use client";

import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/products";

export default function ProductActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
    >
      {added ? (
        <>
          <Check className="h-4 w-4" aria-hidden />
          Agregado
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" aria-hidden />
          Agregar al carrito
        </>
      )}
    </button>
  );
}
