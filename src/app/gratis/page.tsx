import { Gift, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import FreeList from "@/components/FreeList";
import { products } from "@/lib/products";

export const metadata = {
  title: "Gratis — DigitalStore",
  description: "Recursos digitales gratuitos para descargar ahora mismo.",
};

const HOW_IT_WORKS = [
  {
    Icon: MessageSquare,
    title: "Deja una respuesta",
    text: "Comenta en el hilo del recurso contando qué te parece.",
  },
  {
    Icon: Gift,
    title: "Se desbloquea",
    text: "Al publicar se revelan el mensaje y los enlaces de descarga.",
  },
  {
    Icon: ShieldCheck,
    title: "Licencia incluida",
    text: "Puedes usar los recursos en proyectos comerciales.",
  },
];

export default function GratisPage() {
  const free = products.filter((p) => p.price === "Gratis");
  const totalDownloads = free.reduce((sum, p) => {
    const n = Number.parseFloat(p.downloads);
    return sum + (p.downloads.includes("K") ? n * 1000 : n);
  }, 0);

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-emerald-950/50 via-panel to-panel px-6 py-10 sm:px-10 sm:py-12">
        <div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Sin coste
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Recursos{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                gratis
              </span>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
              Comenta en el hilo de cada recurso y desbloquea el enlace de
              descarga. Licencia de uso comercial incluida.
            </p>
          </div>

          <dl className="flex gap-8">
            <div>
              <dt className="text-xs text-zinc-500">Recursos</dt>
              <dd className="text-2xl font-bold text-foreground">
                {free.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Descargas</dt>
              <dd className="text-2xl font-bold text-foreground">
                {(totalDownloads / 1000).toFixed(1)}K
              </dd>
            </div>
            <div>
              <dt className="text-xs text-zinc-500">Precio</dt>
              <dd className="text-2xl font-bold text-emerald-400">0 €</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-8">
        <section className="min-w-0">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold text-foreground">
              Todos los recursos gratuitos
            </h2>
            <span className="text-xs text-zinc-500">
              {free.length} disponibles
            </span>
          </div>
          <FreeList products={free} />
        </section>

        <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line/60 bg-panel/50 p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Cómo funciona
            </h2>
            <ol className="mt-4 flex flex-col gap-4">
              {HOW_IT_WORKS.map(({ Icon, title, text }, i) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      {i + 1}. {title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-zinc-500">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-gradient-to-br from-emerald-600/20 to-teal-600/10 p-5">
            <div
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl"
              aria-hidden
            />
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Gift className="h-5 w-5 text-emerald-300" aria-hidden />
              </span>
              <h3 className="mt-3 text-sm font-bold text-foreground">
                ¿Publicas recursos?
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                Comparte los tuyos en la comunidad y consigue visibilidad
                entre miles de creadores.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
