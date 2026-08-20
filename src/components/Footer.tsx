"use client";

import {
  AtSign,
  Camera,
  Play,
  Send,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";

const LINK_COLUMNS = [
  {
    title: "Tienda",
    links: [
      { label: "Todos los productos", href: "/tienda" },
      { label: "Ofertas", href: "/ofertas" },
      { label: "Novedades", href: "/tienda" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Preguntas frecuentes", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
      { label: "Estado del servicio", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos de servicio", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Licencias de uso", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  }

  return (
    <footer className="mt-16 border-t border-line/60 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <ShoppingBag className="h-5 w-5 text-foreground" aria-hidden />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Digital<span className="text-violet-400">Store</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">
              Plantillas, cursos, presets y recursos digitales creados por
              creadores independientes.
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { Icon: AtSign, label: "Perfil en X" },
                { Icon: Camera, label: "Perfil en Instagram" },
                { Icon: Play, label: "Canal de YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line/60 text-zinc-400 hover:border-violet-500/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-violet-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-line/60 bg-panel/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Recibe nuevos lanzamientos
            </p>
            <p className="text-xs text-zinc-500">
              Un correo al mes, sin spam.
            </p>
          </div>
          {subscribed ? (
            <p className="text-sm font-medium text-emerald-400">
              ¡Gracias! Revisa tu correo para confirmar.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-sm gap-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="w-full rounded-full border border-line/60 bg-black px-4 py-2 text-sm text-foreground placeholder:text-zinc-600 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              />
              <button
                type="submit"
                aria-label="Suscribirse"
                className="flex shrink-0 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-foreground hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden />
              </button>
            </form>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} DigitalStore. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
