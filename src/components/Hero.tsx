import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Play,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

const FLOATING = [
  { Icon: GraduationCap, cls: "-top-1 -right-3 bg-amber-500/90" },
  { Icon: Code2, cls: "top-1/2 -right-9 bg-sky-500/90" },
  { Icon: SlidersHorizontal, cls: "-bottom-2 right-2 bg-pink-500/90" },
  { Icon: BookOpen, cls: "bottom-1/4 -left-9 bg-emerald-500/90" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-line/60 bg-gradient-to-br from-violet-950/40 via-panel to-panel">
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl"
        aria-hidden
      />
      <div className="relative grid items-center gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2">
        <div className="animate-in">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Nuevos productos cada semana
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Productos digitales
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
              para crear más
            </span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
            Plantillas, cursos, presets y recursos hechos por creadores
            independientes. Descarga inmediata y licencia comercial incluida.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/tienda"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-violet-600/40 hover:brightness-110"
            >
              Explorar ahora
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="#faq"
              className="flex items-center gap-2 rounded-full border border-line bg-panel/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-panel-hover"
            >
              Cómo funciona
              <Play className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          <div
            className="absolute inset-0 rounded-full bg-fuchsia-600/20 blur-3xl"
            aria-hidden
          />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-purple-600 shadow-2xl shadow-violet-900/60 sm:h-48 sm:w-48">
            <span className="text-6xl drop-shadow-lg" aria-hidden>
              🛍️
            </span>
          </div>
          {FLOATING.map(({ Icon, cls }, i) => (
            <span
              key={i}
              className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg backdrop-blur ${cls}`}
              aria-hidden
            >
              <Icon className="h-5 w-5 text-white" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
