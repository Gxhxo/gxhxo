import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ResourceAside({ others }: { others: Product[] }) {
  if (others.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="rounded-2xl border border-line/60 bg-panel/50 p-4">
        <h2 className="text-xs font-semibold text-foreground">
          Otros recursos gratis
        </h2>
        <ul className="mt-3 flex flex-col gap-1">
          {others.map((p) => (
            <li key={p.id}>
              <Link
                href={`/gratis/${p.id}`}
                className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-panel-hover"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line/60 bg-background text-base">
                  <span aria-hidden>{p.emoji}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-xs font-medium text-zinc-300">
                    {p.name}
                  </span>
                  <span className="block text-[11px] text-zinc-600">
                    {p.downloads} descargas
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
