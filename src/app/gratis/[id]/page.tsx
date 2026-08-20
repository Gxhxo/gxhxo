import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResourceAside from "@/components/ResourceAside";
import RewardThread from "@/components/RewardThread";
import { products } from "@/lib/products";

const freeProducts = products.filter((p) => p.price === "Gratis");

export function generateStaticParams() {
  return freeProducts.map((p) => ({ id: p.id }));
}

export default async function RewardPage({
  params,
}: PageProps<"/gratis/[id]">) {
  const { id } = await params;
  const product = freeProducts.find((p) => p.id === id);

  if (!product) notFound();

  const others = freeProducts.filter((p) => p.id !== product.id);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <nav className="mb-5 flex items-center gap-2 text-xs text-zinc-500">
        <Link
          href="/gratis"
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Recursos gratis
        </Link>
        <span className="text-zinc-700">/</span>
        <span className="truncate text-zinc-400">{product.name}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
        <div className="min-w-0">
          <header className="mb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {product.name}
              </h1>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {product.description}
            </p>
          </header>

          <RewardThread product={product} />
        </div>

        <ResourceAside others={others} />
      </div>
    </main>
  );
}
