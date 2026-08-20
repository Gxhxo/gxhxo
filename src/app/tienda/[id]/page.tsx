import { Download, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: PageProps<"/tienda/[id]">) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="text-xs text-zinc-500">
        <Link href="/tienda" className="hover:text-violet-300">
          Tienda
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-zinc-400">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative flex aspect-square items-center justify-center rounded-2xl border border-line/60 bg-gradient-to-br from-zinc-800 to-zinc-900">
          <span
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold uppercase tracking-wide text-foreground ${product.badgeColor}`}
          >
            {product.badge}
          </span>
          <span className="text-8xl" aria-hidden>
            {product.emoji}
          </span>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-500">{product.subtitle}</p>

          <div className="mt-3 flex items-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-current" aria-hidden />
              {product.rating}
            </span>
            <span className="flex items-center gap-1">
              <Download className="h-4 w-4" aria-hidden />
              {product.downloads} descargas
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400">
            {product.description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-foreground">
              {product.price}
            </span>
            <ProductActions product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="mb-3 text-sm font-semibold text-zinc-300">
            También te puede interesar
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
