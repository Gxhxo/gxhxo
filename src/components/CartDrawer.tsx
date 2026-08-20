"use client";

import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, close, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compra"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-line/60 bg-panel shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line/60 px-5 py-4">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <ShoppingBag className="h-4 w-4 text-violet-400" aria-hidden />
            Tu carrito
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar carrito"
            className="rounded-full p-1.5 text-zinc-400 hover:bg-panel-hover hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-zinc-500">
              Tu carrito está vacío.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 text-xl">
                    🧩
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="text-xs text-zinc-500">{product.price}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        aria-label={`Reducir cantidad de ${product.name}`}
                        className="rounded-full border border-line/60 p-1 text-zinc-300 hover:bg-panel-hover"
                      >
                        <Minus className="h-3 w-3" aria-hidden />
                      </button>
                      <span className="w-4 text-center text-xs text-zinc-300">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                        aria-label={`Aumentar cantidad de ${product.name}`}
                        className="rounded-full border border-line/60 p-1 text-zinc-300 hover:bg-panel-hover"
                      >
                        <Plus className="h-3 w-3" aria-hidden />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="ml-auto text-xs text-zinc-500 hover:text-red-400"
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-line/60 px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-zinc-400">Subtotal</span>
            <span className="font-semibold text-foreground">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            title="El pago aún no está conectado"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Finalizar compra
          </button>
          <p className="mt-2 text-center text-[11px] text-zinc-600">
            Próximamente: pago con tarjeta.
          </p>
        </div>
      </aside>
    </>
  );
}
