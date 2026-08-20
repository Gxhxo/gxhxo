"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "¿Cómo recibo el producto después de comprarlo?",
    answer:
      "Tras completar la compra recibirás un enlace de descarga por correo electrónico, además de acceso permanente desde tu cuenta.",
  },
  {
    question: "¿Puedo usar los productos en proyectos comerciales?",
    answer:
      "Sí, cada producto incluye una licencia de uso comercial. Los detalles específicos se muestran en la página de cada producto.",
  },
  {
    question: "¿Ofrecen reembolsos?",
    answer:
      "Puedes solicitar un reembolso dentro de los 14 días posteriores a la compra si el producto no cumple lo descrito.",
  },
  {
    question: "¿Hay actualizaciones incluidas?",
    answer:
      "Sí, las actualizaciones del mismo producto son gratuitas de por vida una vez que lo has comprado.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <h2 className="mb-4 text-sm font-semibold text-zinc-300">
        Preguntas frecuentes
      </h2>
      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.question}
              className="rounded-xl border border-line/60 bg-panel/60"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground"
              >
                {item.question}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
