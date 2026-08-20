import { ArrowRight, Gift, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { trending } from "@/lib/products";

const STATS = [
  {
    Icon: Users,
    value: "25.6K+",
    label: "Miembros activos",
    tint: "bg-violet-500/15 text-violet-300",
  },
  {
    Icon: TrendingUp,
    value: "3.2K+",
    label: "Productos publicados",
    tint: "bg-sky-500/15 text-sky-300",
  },
  {
    Icon: ShieldCheck,
    value: "100%",
    label: "Pagos protegidos",
    tint: "bg-emerald-500/15 text-emerald-300",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col gap-5">
      <div className="rounded-2xl border border-line/60 bg-panel/60 p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Users className="h-4 w-4 text-violet-400" aria-hidden />
          Comunidad
        </h2>
        <dl className="space-y-3.5">
          {STATS.map(({ Icon, value, label, tint }) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tint}`}
              >
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <dt className="sr-only">{label}</dt>
                <dd className="text-sm font-bold text-foreground">{value}</dd>
                <p className="text-xs text-zinc-500">{label}</p>
              </div>
            </div>
          ))}
        </dl>
        <a
          href="#comunidad"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:brightness-110"
        >
          Únete a la comunidad
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>

      <div className="rounded-2xl border border-line/60 bg-panel/60 p-5">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
          <TrendingUp className="h-4 w-4 text-emerald-400" aria-hidden />
          Tendencias
        </h2>
        <ol className="space-y-3">
          {trending.map((item) => (
            <li key={item.rank} className="flex items-center gap-3 text-sm">
              <span className="w-4 text-xs font-bold text-zinc-600">
                {item.rank}
              </span>
              <span className="flex-1 truncate text-xs text-zinc-300">
                {item.name}
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                ↑ {item.growth}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-gradient-to-br from-violet-600/25 to-fuchsia-600/10 p-5">
        <div
          className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl"
          aria-hidden
        />
        <div className="relative">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Gift className="h-5 w-5 text-violet-300" aria-hidden />
          </span>
          <h3 className="mt-3 text-sm font-bold text-foreground">
            ¡Comparte y gana!
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            Invita a otros creadores y obtén crédito para tus próximas
            compras.
          </p>
          <Link
            href="/gratis"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Saber más
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </aside>
  );
}
