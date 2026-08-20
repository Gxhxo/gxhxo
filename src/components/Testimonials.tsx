import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Marta G.",
    role: "Diseñadora freelance",
    quote:
      "El kit de iconos me ahorró horas de trabajo. Calidad muy por encima de lo que esperaba por el precio.",
  },
  {
    name: "Diego R.",
    role: "Founder de una startup",
    quote:
      "La plantilla de dashboard fue el punto de partida perfecto para nuestro MVP. Código limpio y fácil de adaptar.",
  },
  {
    name: "Sofía L.",
    role: "Estudiante de marketing",
    quote:
      "El curso está muy bien explicado, con ejemplos reales. Lo recomiendo si estás empezando desde cero.",
  },
];

export default function Testimonials() {
  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold text-zinc-300">
        Lo que dicen nuestros clientes
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col gap-3 rounded-xl border border-line/60 bg-panel/60 p-5"
          >
            <div className="flex gap-0.5 text-amber-400" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-zinc-300">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-semibold text-foreground">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
