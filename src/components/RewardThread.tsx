"use client";

import {
  Check,
  ExternalLink,
  Lock,
  LockOpen,
  MessageSquare,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  MIN_COMMENT_LENGTH,
  REWARDS,
  addComment,
  formatRelative,
  getComments,
  isUnlocked,
  unlock,
  type Comment,
} from "@/lib/rewards";
import type { Product } from "@/lib/products";

export default function RewardThread({ product }: { product: Product }) {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  const author = user?.name ?? "Invitado";
  const reward = REWARDS[product.id];

  useEffect(() => {
    setComments(getComments(product.id));
    setUnlocked(isUnlocked(product.id, user?.name ?? "invitado"));
    setReady(true);
  }, [product.id, user]);

  const remaining = MIN_COMMENT_LENGTH - text.trim().length;
  const canSubmit = remaining <= 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    addComment(product.id, author, text);
    unlock(product.id, user?.name ?? "invitado");
    setComments(getComments(product.id));
    setUnlocked(true);
    setText("");
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Estado de la recompensa */}
      {unlocked && reward ? (
        <section className="overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.07]">
          <header className="flex items-center gap-2.5 border-b border-emerald-500/20 bg-emerald-500/10 px-5 py-3">
            <LockOpen className="h-4 w-4 text-emerald-400" aria-hidden />
            <p className="text-sm font-bold text-emerald-300">
              Recompensa desbloqueada
            </p>
          </header>

          <div className="p-5">
            {/* Mensaje del administrador */}
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white">
                A
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-foreground">
                    admin
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                    <ShieldCheck className="h-3 w-3" aria-hidden />
                    Staff
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {reward.message}
                </p>
              </div>
            </div>

            {/* Enlaces que dejó el administrador */}
            <ul className="mt-4 flex flex-col gap-2">
              {reward.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-emerald-500/25 bg-background/60 px-4 py-3 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/10"
                  >
                    <ExternalLink
                      className="h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-emerald-300">
                        {link.label}
                      </span>
                      {link.note && (
                        <span className="block text-[11px] text-zinc-600">
                          {link.note}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5">
          <div className="flex items-start gap-4">
            <Lock className="h-6 w-6 shrink-0 text-amber-400" aria-hidden />
            <div>
              <p className="text-sm font-bold text-amber-300">
                Contenido bloqueado
              </p>
              <p className="mt-1 text-xs leading-relaxed text-amber-400/80">
                Para ver el mensaje y los enlaces de descarga deja una
                respuesta de al menos{" "}
                <strong className="text-amber-300">
                  {MIN_COMMENT_LENGTH} caracteres
                </strong>{" "}
                al final del hilo. Se desbloqueará al publicarla.
              </p>
            </div>
          </div>

          {/* Contenido oculto a modo de vista previa */}
          <div className="mt-4 space-y-2 rounded-xl border border-line/60 bg-background/60 p-4">
            <p
              className="select-none text-sm leading-relaxed text-zinc-400 blur-[5px]"
              aria-hidden
            >
              Aquí tienes el archivo completo. Incluye todas las versiones y
              la guía de uso. Si tienes cualquier problema, avísame por el
              hilo.
            </p>
            <p
              className="select-none text-sm font-medium text-zinc-400 blur-[5px]"
              aria-hidden
            >
              https://descargas.digitalstore.com/{product.id}/archivo.zip
            </p>
            <p className="pt-1 text-center text-[11px] text-zinc-600">
              Responde en el hilo para revelar el contenido
            </p>
          </div>
        </div>
      )}

      {/* Hilo de respuestas */}
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <MessageSquare className="h-4 w-4 text-violet-400" aria-hidden />
          Respuestas ({ready ? comments.length : "…"})
        </h2>

        {!ready ? (
          <p className="rounded-2xl border border-line/60 bg-panel/40 p-6 text-center text-xs text-zinc-600">
            Cargando respuestas…
          </p>
        ) : comments.length === 0 ? (
          <p className="rounded-2xl border border-line/60 bg-panel/40 p-6 text-center text-xs text-zinc-600">
            Todavía no hay respuestas. Sé el primero en comentar.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {comments.map((c) => (
              <li
                key={c.id}
                className="rounded-2xl border border-line/60 bg-panel/50 p-4"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">
                    {c.author.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      {c.author}
                    </p>
                    <p className="text-[11px] text-zinc-600">
                      {formatRelative(c.createdAt)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {c.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Formulario al final del hilo */}
      <section
        id="responder"
        className="rounded-2xl border border-line/60 bg-panel/50 p-5"
      >
        <h2 className="text-sm font-semibold text-foreground">
          Deja tu respuesta
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Publicas como{" "}
          <span className="font-medium text-violet-300">{author}</span>. Tu
          mensaje será visible para los demás.
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="thread-comment" className="sr-only">
            Tu respuesta
          </label>
          <textarea
            id="thread-comment"
            rows={5}
            value={text}
            maxLength={1000}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe aquí tu opinión sobre el recurso, para qué lo vas a usar o si te ha funcionado bien..."
            className="w-full resize-none rounded-xl border border-line bg-background px-3.5 py-3 text-sm leading-relaxed text-foreground placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/60"
          />

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p
              className={`text-xs ${
                canSubmit ? "text-emerald-400" : "text-zinc-500"
              }`}
            >
              {canSubmit ? (
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                  Longitud suficiente
                </span>
              ) : (
                `Faltan ${remaining} caracteres${
                  unlocked ? "" : " para desbloquear"
                }`
              )}
            </p>
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" aria-hidden />
              {unlocked ? "Publicar respuesta" : "Publicar y desbloquear"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
