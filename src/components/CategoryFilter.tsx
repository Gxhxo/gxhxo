"use client";

import {
  Book,
  Code2,
  GraduationCap,
  LayoutGrid,
  LayoutTemplate,
  MoreHorizontal,
  PenTool,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import { categories } from "@/lib/products";

const ICONS: Record<string, typeof LayoutGrid> = {
  grid: LayoutGrid,
  layout: LayoutTemplate,
  cap: GraduationCap,
  pen: PenTool,
  code: Code2,
  book: Book,
  sliders: SlidersHorizontal,
  dots: MoreHorizontal,
};

const ICON_COLORS: Record<string, string> = {
  todo: "text-violet-400",
  plantillas: "text-sky-400",
  cursos: "text-emerald-400",
  disenio: "text-pink-400",
  codigo: "text-blue-400",
  ebooks: "text-amber-400",
  presets: "text-rose-400",
  mas: "text-zinc-400",
};

export default function CategoryFilter({
  onSelect,
}: {
  onSelect?: (id: string) => void;
}) {
  const [selected, setSelected] = useState("todo");

  function handleSelect(id: string) {
    setSelected(id);
    onSelect?.(id);
  }

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-foreground">
        Explora por categorías
      </h2>
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => {
          const Icon = ICONS[cat.icon] ?? LayoutGrid;
          const isSelected = selected === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelect(cat.id)}
              aria-pressed={isSelected}
              className={`group flex min-w-[92px] flex-col items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-medium transition-all duration-200 ${
                isSelected
                  ? "border-violet-500/60 bg-violet-500/10 text-foreground shadow-lg shadow-violet-500/10"
                  : "border-line/60 bg-panel/50 text-zinc-400 hover:-translate-y-0.5 hover:border-line hover:bg-panel hover:text-foreground"
              }`}
            >
              <Icon
                className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                  isSelected ? "text-violet-400" : ICON_COLORS[cat.id]
                }`}
                aria-hidden
              />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
