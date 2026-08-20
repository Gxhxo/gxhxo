export type Comment = {
  id: string;
  author: string;
  text: string;
  createdAt: number;
};

/** Contenido que deja el administrador y se revela al desbloquear. */
export type Reward = {
  message: string;
  links: { label: string; url: string; note?: string }[];
};

/** Longitud mínima que debe tener un comentario para desbloquear la recompensa. */
export const MIN_COMMENT_LENGTH = 15;

const COMMENTS_KEY = "digitalstore.comments";
const UNLOCKS_KEY = "digitalstore.unlocks";

/** Recompensa por producto: lo que ve el usuario tras comentar. */
export const REWARDS: Record<string, Reward> = {
  "9": {
    message:
      "¡Gracias por comentar! Aquí tienes el pack completo de 20 fondos en 4K. Incluye versiones para escritorio (3840x2160) y móvil (1170x2532). Si tienes cualquier problema con la descarga, avísame por el hilo.",
    links: [
      {
        label: "Descargar pack completo (.zip)",
        url: "https://ejemplo.com/descargas/wallpapers-4k.zip",
        note: "248 MB · 20 archivos",
      },
      {
        label: "Ver vista previa en línea",
        url: "https://ejemplo.com/preview/wallpapers-4k",
      },
    ],
  },
  "10": {
    message:
      "Aquí tienes la plantilla de currículum. El archivo de Figma es editable y viene con las dos variantes de color. También incluyo el PDF de ejemplo por si quieres ver el resultado final antes de editarlo.",
    links: [
      {
        label: "Abrir plantilla en Figma",
        url: "https://ejemplo.com/figma/plantilla-cv",
        note: "Duplica el archivo en tu cuenta",
      },
      {
        label: "Descargar PDF de ejemplo",
        url: "https://ejemplo.com/descargas/cv-ejemplo.pdf",
        note: "1.2 MB",
      },
    ],
  },
  "11": {
    message:
      "Bienvenido al mini curso de Git. Son 6 lecciones en vídeo con los ejercicios resueltos. Te recomiendo seguirlas en orden y practicar con el repositorio de ejemplo que viene en el segundo enlace.",
    links: [
      {
        label: "Acceder a las 6 lecciones",
        url: "https://ejemplo.com/cursos/git-desde-cero",
        note: "Acceso permanente",
      },
      {
        label: "Repositorio de prácticas",
        url: "https://ejemplo.com/git/repo-practicas",
      },
    ],
  },
  "12": {
    message:
      "Aquí tienes los 40 componentes CSS. Están organizados por carpetas (botones, tarjetas, formularios y animaciones) y cada uno tiene su archivo con el HTML de ejemplo. Puedes usarlos en proyectos comerciales sin atribución.",
    links: [
      {
        label: "Descargar snippets (.zip)",
        url: "https://ejemplo.com/descargas/snippets-css.zip",
        note: "340 KB · 40 componentes",
      },
      {
        label: "Demo en vivo de todos los componentes",
        url: "https://ejemplo.com/demo/snippets-css",
      },
    ],
  },
};

/** Respuestas de ejemplo para que los hilos no aparezcan vacíos. */
const SEED: Record<string, Comment[]> = {
  "9": [
    {
      id: "s1",
      author: "carla_dev",
      text: "Los fondos se ven muy bien en pantalla 4K, he puesto tres en el escritorio y en el móvil. Gracias por compartirlo.",
      createdAt: Date.now() - 1000 * 60 * 60 * 26,
    },
    {
      id: "s2",
      author: "martin.ux",
      text: "Descargado sin problemas, el archivo pesa poco y viene bien organizado por carpetas. Funciona perfecto.",
      createdAt: Date.now() - 1000 * 60 * 60 * 12,
    },
    {
      id: "s3",
      author: "nuria_ps",
      text: "Justo buscaba algo así para una presentación del trabajo. Los tonos oscuros quedan geniales con texto blanco encima.",
      createdAt: Date.now() - 1000 * 60 * 60 * 5,
    },
    {
      id: "s4",
      author: "alexpix",
      text: "Muy buena calidad para ser gratis. El enlace funciona correctamente, descargado hoy mismo sin errores.",
      createdAt: Date.now() - 1000 * 60 * 50,
    },
  ],
  "10": [
    {
      id: "s5",
      author: "lucia_rrhh",
      text: "La plantilla es muy limpia y fácil de editar en Figma. La he usado para actualizar mi currículum esta semana.",
      createdAt: Date.now() - 1000 * 60 * 60 * 51,
    },
    {
      id: "s6",
      author: "dani_front",
      text: "Me ha servido un montón para mi primera entrevista. La estructura está bien pensada y no hace falta tocar casi nada.",
      createdAt: Date.now() - 1000 * 60 * 60 * 20,
    },
    {
      id: "s7",
      author: "sarahmk",
      text: "Gracias por compartirla. Solo cambié la tipografía y los colores y quedó perfecta para mi sector.",
      createdAt: Date.now() - 1000 * 60 * 60 * 3,
    },
  ],
  "11": [
    {
      id: "s8",
      author: "jorge_backend",
      text: "Buen repaso de ramas y merges, se entiende bien aunque no hayas tocado Git nunca. Recomendado para empezar.",
      createdAt: Date.now() - 1000 * 60 * 60 * 40,
    },
    {
      id: "s9",
      author: "elena.qa",
      text: "Las explicaciones van al grano y los ejercicios ayudan mucho a fijar los conceptos. Terminado en dos tardes.",
      createdAt: Date.now() - 1000 * 60 * 60 * 9,
    },
    {
      id: "s10",
      author: "rubencode",
      text: "La lección de resolución de conflictos es la mejor que he visto explicada de forma sencilla. Muchas gracias.",
      createdAt: Date.now() - 1000 * 60 * 60 * 2,
    },
  ],
  "12": [
    {
      id: "s11",
      author: "pablo_css",
      text: "Los componentes están muy bien hechos y son fáciles de adaptar. Las animaciones sobre todo son un puntazo.",
      createdAt: Date.now() - 1000 * 60 * 60 * 33,
    },
    {
      id: "s12",
      author: "marta.dev",
      text: "Llevaba tiempo buscando una colección así, con código limpio y sin dependencias raras. Descargado correctamente.",
      createdAt: Date.now() - 1000 * 60 * 60 * 15,
    },
    {
      id: "s13",
      author: "kevin_ui",
      text: "Funciona todo perfecto, ya he usado tres de los botones en un proyecto. Gracias por dejarlo gratis.",
      createdAt: Date.now() - 1000 * 60 * 45,
    },
  ],
};

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function getComments(productId: string): Comment[] {
  const stored = read<Record<string, Comment[]>>(COMMENTS_KEY, {});
  return [...(SEED[productId] ?? []), ...(stored[productId] ?? [])].sort(
    (a, b) => b.createdAt - a.createdAt,
  );
}

export function addComment(
  productId: string,
  author: string,
  text: string,
): Comment {
  const stored = read<Record<string, Comment[]>>(COMMENTS_KEY, {});
  const comment: Comment = {
    id: `${Date.now()}`,
    author,
    text: text.trim().slice(0, 1000),
    createdAt: Date.now(),
  };
  stored[productId] = [...(stored[productId] ?? []), comment];
  window.localStorage.setItem(COMMENTS_KEY, JSON.stringify(stored));
  return comment;
}

export function isUnlocked(productId: string, user: string): boolean {
  const unlocks = read<Record<string, string[]>>(UNLOCKS_KEY, {});
  return (unlocks[productId] ?? []).includes(user);
}

export function unlock(productId: string, user: string): void {
  const unlocks = read<Record<string, string[]>>(UNLOCKS_KEY, {});
  const list = unlocks[productId] ?? [];
  if (!list.includes(user)) {
    unlocks[productId] = [...list, user];
    window.localStorage.setItem(UNLOCKS_KEY, JSON.stringify(unlocks));
  }
}

export function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / (1000 * 60));
  if (minutes < 60) return `hace ${Math.max(1, minutes)} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `hace ${hours} h`;
  const days = Math.floor(hours / 24);
  return days === 1 ? "hace 1 día" : `hace ${days} días`;
}
