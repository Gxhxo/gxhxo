export type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  badge: string;
  badgeColor: string;
  emoji: string;
  downloads: string;
  rating: number;
  icon: string;
  price: string;
};

export const categories = [
  { id: "todo", label: "Todo", icon: "grid" },
  { id: "plantillas", label: "Plantillas", icon: "layout" },
  { id: "cursos", label: "Cursos", icon: "cap" },
  { id: "disenio", label: "Diseño", icon: "pen" },
  { id: "codigo", label: "Código", icon: "code" },
  { id: "ebooks", label: "Ebooks", icon: "book" },
  { id: "presets", label: "Presets", icon: "sliders" },
  { id: "mas", label: "Ver más", icon: "dots" },
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Plantilla Dashboard UI",
    subtitle: "Figma + código",
    description:
      "Panel de administración completo con componentes reutilizables, listo para adaptar a tu producto. Incluye archivo Figma editable y código de referencia.",
    category: "plantillas",
    badge: "Plantilla",
    badgeColor: "bg-sky-500",
    emoji: "📊",
    downloads: "1.2K",
    rating: 4.8,
    icon: "layout",
    price: "$19",
  },
  {
    id: "2",
    name: "Curso de Marketing Digital",
    subtitle: "Desde cero",
    description:
      "Aprende a planificar campañas, analizar métricas y crecer una marca desde cero, con clases en video y ejercicios prácticos.",
    category: "cursos",
    badge: "Curso",
    badgeColor: "bg-amber-500",
    emoji: "🎓",
    downloads: "2.3K",
    rating: 4.9,
    icon: "cap",
    price: "$29",
  },
  {
    id: "3",
    name: "Pack de Presets Lightroom",
    subtitle: "50 presets profesionales",
    description:
      "50 presets para Lightroom pensados para retrato, paisaje y contenido de redes sociales. Compatibles con escritorio y móvil.",
    category: "presets",
    badge: "Presets",
    badgeColor: "bg-pink-500",
    emoji: "🎨",
    downloads: "893",
    rating: 4.7,
    icon: "sliders",
    price: "$12",
  },
  {
    id: "4",
    name: "Ebook: Guía de Finanzas",
    subtitle: "Edición 2026",
    description:
      "Guía práctica para organizar tus finanzas personales, ahorrar con método y empezar a invertir con confianza.",
    category: "ebooks",
    badge: "Ebook",
    badgeColor: "bg-emerald-500",
    emoji: "📗",
    downloads: "1.1K",
    rating: 4.8,
    icon: "book",
    price: "$9",
  },
  {
    id: "5",
    name: "Plantilla Landing Page",
    subtitle: "Next.js + Tailwind",
    description:
      "Landing page lista para producción con Next.js y Tailwind: secciones de precios, testimonios y formulario de contacto incluidos.",
    category: "codigo",
    badge: "Código",
    badgeColor: "bg-violet-500",
    emoji: "💻",
    downloads: "756",
    rating: 4.6,
    icon: "code",
    price: "$24",
  },
  {
    id: "6",
    name: "Kit de Iconos UI",
    subtitle: "500+ iconos SVG",
    description:
      "Más de 500 iconos SVG editables en varios estilos, organizados por categoría, listos para Figma, Sketch y código.",
    category: "disenio",
    badge: "Diseño",
    badgeColor: "bg-rose-500",
    emoji: "✨",
    downloads: "1.4K",
    rating: 4.9,
    icon: "pen",
    price: "$15",
  },
  {
    id: "7",
    name: "Curso de Diseño UX/UI",
    subtitle: "Nivel intermedio",
    description:
      "Profundiza en investigación de usuarios, wireframes y prototipado de alta fidelidad con proyectos guiados paso a paso.",
    category: "cursos",
    badge: "Curso",
    badgeColor: "bg-amber-500",
    emoji: "🖌️",
    downloads: "980",
    rating: 4.7,
    icon: "cap",
    price: "$34",
  },
  {
    id: "8",
    name: "Ebook: Guía de Productividad",
    subtitle: "Edición 2026",
    description:
      "Sistemas y hábitos prácticos para organizar tu tiempo, reducir distracciones y avanzar en tus proyectos cada semana.",
    category: "ebooks",
    badge: "Ebook",
    badgeColor: "bg-emerald-500",
    emoji: "📘",
    downloads: "612",
    rating: 4.5,
    icon: "book",
    price: "$7",
  },
  {
    id: "9",
    name: "Pack de Wallpapers",
    subtitle: "20 fondos en 4K",
    description:
      "Colección gratuita de 20 fondos de pantalla abstractos en resolución 4K, listos para escritorio y móvil.",
    category: "disenio",
    badge: "Diseño",
    badgeColor: "bg-rose-500",
    emoji: "🌌",
    downloads: "3.1K",
    rating: 4.6,
    icon: "pen",
    price: "Gratis",
  },
  {
    id: "10",
    name: "Plantilla de Currículum",
    subtitle: "Editable en Figma",
    description:
      "Plantilla de currículum profesional, limpia y editable, con dos variantes de color y guía de uso incluida.",
    category: "plantillas",
    badge: "Plantilla",
    badgeColor: "bg-sky-500",
    emoji: "📄",
    downloads: "2.7K",
    rating: 4.8,
    icon: "layout",
    price: "Gratis",
  },
  {
    id: "11",
    name: "Mini curso: Git desde cero",
    subtitle: "6 lecciones en video",
    description:
      "Introducción práctica a Git y control de versiones: commits, ramas, merges y flujo de trabajo colaborativo.",
    category: "cursos",
    badge: "Curso",
    badgeColor: "bg-amber-500",
    emoji: "🌱",
    downloads: "1.9K",
    rating: 4.7,
    icon: "cap",
    price: "Gratis",
  },
  {
    id: "12",
    name: "Snippets CSS Modernos",
    subtitle: "40 componentes",
    description:
      "Colección gratuita de 40 componentes CSS listos para copiar: botones, tarjetas, formularios y animaciones.",
    category: "codigo",
    badge: "Código",
    badgeColor: "bg-violet-500",
    emoji: "⚡",
    downloads: "2.2K",
    rating: 4.5,
    icon: "code",
    price: "Gratis",
  },
];

export const trending = [
  { rank: 1, name: "Plantilla Dashboard UI", growth: "1.2K" },
  { rank: 2, name: "Curso de Marketing", growth: "892" },
  { rank: 3, name: "Pack Presets Lightroom", growth: "756" },
  { rank: 4, name: "Ebook Finanzas", growth: "654" },
  { rank: 5, name: "Landing Page Next.js", growth: "523" },
];
