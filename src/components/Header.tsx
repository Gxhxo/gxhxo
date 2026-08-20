"use client";

import {
  Bell,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Search,
  ShoppingCart,
  Store,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Ofertas", href: "/ofertas" },
  { label: "Gratis", href: "/gratis" },
  { label: "Novedades", href: "/novedades" },
];

export default function Header() {
  const pathname = usePathname();
  const { count, open } = useCart();
  const { user, openDialog, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:gap-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
            <Store className="h-4.5 w-4.5 text-white" aria-hidden />
          </span>
          <span className="text-base font-bold tracking-tight text-foreground">
            Digital<span className="text-violet-400">Store</span>
          </span>
        </Link>

        {/* Navegación principal */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-violet-500/12 text-violet-300"
                    : "text-zinc-400 hover:bg-panel hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="relative ml-auto hidden max-w-xs flex-1 md:block xl:max-w-sm">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            aria-hidden
          />
          <label htmlFor="site-search" className="sr-only">
            Buscar productos
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Buscar..."
            autoComplete="off"
            maxLength={100}
            className="w-full rounded-full border border-line/80 bg-panel/60 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-zinc-500 outline-none transition-colors focus:border-violet-500/60 focus:bg-panel"
          />
        </div>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <button
            type="button"
            onClick={open}
            aria-label="Carrito de compra"
            className="relative rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-panel hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden />
            {count > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Notificaciones"
            className="hidden rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-panel hover:text-foreground sm:inline-flex"
          >
            <Bell className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Mensajes"
            className="hidden rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-panel hover:text-foreground sm:inline-flex"
          >
            <Mail className="h-5 w-5" aria-hidden />
          </button>
          {user ? (
            <div className="ml-0.5 flex items-center gap-1.5 rounded-full bg-panel/60 p-1 pr-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span className="hidden max-w-[90px] truncate text-xs font-medium text-foreground sm:block">
                {user.name}
              </span>
              <button
                type="button"
                onClick={logout}
                aria-label="Cerrar sesión"
                className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-panel-hover hover:text-foreground"
              >
                <LogOut className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={openDialog}
              className="ml-0.5 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3.5 py-2 text-xs font-semibold text-white transition-all hover:brightness-110"
            >
              <LogIn className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="ml-0.5 rounded-xl p-2.5 text-zinc-400 transition-colors hover:bg-panel hover:text-foreground lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      {menuOpen && (
        <nav className="border-t border-line/60 px-4 py-2 sm:px-6 lg:hidden">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-violet-500/12 text-violet-300"
                    : "text-zinc-400 hover:bg-panel hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
