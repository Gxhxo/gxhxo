import { RefreshCw, ShieldCheck, Sparkles, Users2 } from "lucide-react";

const ITEMS = [
  {
    Icon: Sparkles,
    title: "Calidad garantizada",
    subtitle: "Productos verificados",
    tint: "bg-violet-500/15 text-violet-300",
  },
  {
    Icon: ShieldCheck,
    title: "Pago seguro",
    subtitle: "Checkout cifrado",
    tint: "bg-emerald-500/15 text-emerald-300",
  },
  {
    Icon: Users2,
    title: "Comunidad",
    subtitle: "Creadores como tú",
    tint: "bg-sky-500/15 text-sky-300",
  },
  {
    Icon: RefreshCw,
    title: "Actualizado",
    subtitle: "Contenido nuevo cada día",
    tint: "bg-amber-500/15 text-amber-300",
  },
];

export default function TrustStrip() {
  return (
    <div className="grid grid-cols-2 gap-5 rounded-2xl border border-line/60 bg-panel/60 p-5 sm:grid-cols-4">
      {ITEMS.map(({ Icon, title, subtitle, tint }) => (
        <div key={title} className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${tint}`}
          >
            <Icon className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <p className="text-xs text-zinc-500">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
