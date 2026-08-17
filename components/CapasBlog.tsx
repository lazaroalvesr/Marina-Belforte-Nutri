/* Capas desenhadas em SVG: nada de foto genérica de salada. */
export function CapaGrande() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" aria-hidden="true">
      <rect width="480" height="300" fill="var(--color-beterraba)" />
      <circle cx="150" cy="230" r="130" fill="var(--color-beterraba-2)" />
      <circle cx="352" cy="96" r="62" fill="var(--color-curcuma)" />
      <circle cx="352" cy="96" r="30" fill="var(--color-beterraba)" opacity="0.35" />
      <path d="M0 300 Q120 190 250 240 T480 210 L480 300 Z" fill="var(--color-pistache)" opacity="0.9" />
      <circle cx="86" cy="120" r="9" fill="var(--color-pistache)" />
      <circle cx="128" cy="86" r="5" fill="var(--color-curcuma)" />
    </svg>
  );
}

export const miniaturas = {
  folha: (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="var(--color-pistache)" />
      <circle cx="32" cy="36" r="20" fill="var(--color-oliva)" />
      <path d="M32 16c6 4 6 10 0 14-6-4-6-10 0-14z" fill="var(--color-beterraba)" />
    </svg>
  ),
  marmita: (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="var(--color-curcuma)" />
      <rect x="12" y="20" width="40" height="26" rx="6" fill="var(--color-beterraba)" />
      <rect x="18" y="26" width="12" height="14" rx="3" fill="var(--color-pistache)" />
      <rect x="34" y="26" width="12" height="14" rx="3" fill="var(--color-pistache)" />
    </svg>
  ),
  tigela: (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="var(--color-beterraba)" />
      <path d="M14 44c8-16 28-16 36 0z" fill="var(--color-curcuma)" />
      <circle cx="32" cy="22" r="8" fill="var(--color-pistache)" />
    </svg>
  ),
  ovo: (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <rect width="64" height="64" fill="var(--color-oliva)" />
      <circle cx="24" cy="30" r="11" fill="var(--color-papel)" />
      <circle cx="42" cy="38" r="8" fill="var(--color-curcuma)" />
    </svg>
  ),
};
