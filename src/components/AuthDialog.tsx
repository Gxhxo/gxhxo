"use client";

import { LogIn, X } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AuthDialog() {
  const { isDialogOpen, closeDialog, login } = useAuth();
  const [name, setName] = useState("");

  if (!isDialogOpen) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 3) return;
    login(trimmed);
    setName("");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={closeDialog}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        className="relative w-full max-w-sm rounded-2xl border border-line/60 bg-panel p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Cerrar"
          className="absolute right-3 top-3 rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-panel-hover hover:text-foreground"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>

        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/25">
          <LogIn className="h-5 w-5 text-white" aria-hidden />
        </span>
        <h2
          id="auth-title"
          className="mt-4 text-lg font-bold tracking-tight text-foreground"
        >
          Inicia sesión
        </h2>
        <p className="mt-1 text-sm text-zinc-400">
          Con tu cuenta se guardan tus comentarios y recompensas.
        </p>

        <form onSubmit={handleSubmit} className="mt-5">
          <label
            htmlFor="auth-name"
            className="text-xs font-medium text-zinc-400"
          >
            Nombre de usuario
          </label>
          <input
            id="auth-name"
            type="text"
            required
            minLength={3}
            maxLength={24}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="tu_usuario"
            autoComplete="username"
            className="mt-1.5 w-full rounded-xl border border-line bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-zinc-600 outline-none transition-colors focus:border-violet-500/60"
          />
          <button
            type="submit"
            disabled={name.trim().length < 3}
            className="mt-4 w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-[11px] leading-relaxed text-zinc-600">
          Demo local: la sesión se guarda solo en este navegador y no hay
          servidor detrás todavía.
        </p>
      </div>
    </div>
  );
}
