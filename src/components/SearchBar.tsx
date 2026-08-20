"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

export default function SearchBar({ variant }: { variant: "desktop" | "mobile" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results =
    query.trim().length >= 2
      ? products
          .filter((p) =>
            (p.name + " " + p.subtitle + " " + p.category)
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (results.length > 0) {
      router.push(`/tienda/${results[0].id}`);
      setQuery("");
      setOpen(false);
    }
  }

  const inputBase =
    "w-full rounded-full border border-line/80 bg-panel/60 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-zinc-500 outline-none transition-colors focus:border-violet-500/60 focus:bg-panel";

  return (
    <div ref={containerRef} className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          aria-hidden
        />
        <label htmlFor={`site-search-${variant}`} className="sr-only">
          Buscar productos
        </label>
        <input
          id={`site-search-${variant}`}
          type="search"
          placeholder="Buscar..."
          autoComplete="off"
          maxLength={100}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className={inputBase}
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Limpiar búsqueda"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-foreground"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        )}
      </form>

      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-line/80 bg-panel shadow-2xl shadow-black/40">
          <ul className="flex flex-col">
            {results.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/tienda/${p.id}`}
                  onClick={() => {
                    setQuery("");
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-panel-hover"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-lg">
                    {p.emoji}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {p.name}
                    </span>
                    <span className="block truncate text-xs text-zinc-500">
                      {p.subtitle}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-violet-300">
                    {p.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-line/80 bg-panel px-4 py-6 text-center text-sm text-zinc-500 shadow-2xl shadow-black/40">
          No encontramos productos para &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
