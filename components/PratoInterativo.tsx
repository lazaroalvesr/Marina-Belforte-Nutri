"use client";

import { useState } from "react";
import { fatiasDoPrato } from "@/lib/conteudo";

const padrao = {
  nome: "O prato, sem calculadora",
  texto: "Toque em uma parte para ver a proporção.",
};

/* Enfeites de cada fatia. Ficam aqui, não no conteúdo, porque são desenho. */
const enfeites: Record<string, React.ReactNode> = {
  vegetais: (
    <>
      <circle cx="120" cy="160" r="12" fill="var(--color-pistache-2)" />
      <circle cx="105" cy="230" r="9" fill="var(--color-pistache-2)" />
      <circle cx="155" cy="270" r="7" fill="var(--color-pistache-2)" />
      <circle cx="152" cy="120" r="8" fill="var(--color-pistache-2)" />
    </>
  ),
  proteina: (
    <>
      <rect x="245" y="105" width="42" height="26" rx="9" fill="var(--color-beterraba-2)" transform="rotate(-18 266 118)" />
      <rect x="268" y="150" width="34" height="20" rx="7" fill="var(--color-beterraba-2)" transform="rotate(12 285 160)" />
    </>
  ),
  carboidrato: (
    <>
      <circle cx="272" cy="248" r="6" fill="var(--color-papel)" opacity="0.8" />
      <circle cx="292" cy="268" r="6" fill="var(--color-papel)" opacity="0.8" />
      <circle cx="256" cy="282" r="6" fill="var(--color-papel)" opacity="0.8" />
    </>
  ),
};

export default function PratoInterativo() {
  const [ativa, setAtiva] = useState<string | null>(null);

  const atual = fatiasDoPrato.find((f) => f.id === ativa) ?? padrao;

  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border border-tinta/10 bg-papel p-3.5 shadow-[0_18px_44px_-24px_rgba(36,29,26,0.5)] sm:gap-5 sm:p-4">
      <svg
        viewBox="0 0 400 400"
        role="group"
        aria-label="Prato dividido em três partes"
        className="size-20 shrink-0 sm:size-24"
      >
        <circle cx="200" cy="200" r="172" fill="var(--color-papel-2)" />
        <circle cx="200" cy="200" r="158" fill="none" stroke="var(--color-beterraba)" strokeWidth="3" opacity="0.25" />

        {fatiasDoPrato.map((fatia) => (
          <g
            key={fatia.id}
            role="button"
            tabIndex={0}
            aria-label={fatia.nome}
            aria-pressed={ativa === fatia.id}
            className="cursor-pointer transition-transform duration-300 ease-out"
            style={{ transform: ativa === fatia.id ? fatia.desloca : undefined }}
            onMouseEnter={() => setAtiva(fatia.id)}
            onMouseLeave={() => setAtiva(null)}
            onFocus={() => setAtiva(fatia.id)}
            onBlur={() => setAtiva(null)}
            onClick={() => setAtiva((v) => (v === fatia.id ? null : fatia.id))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setAtiva(fatia.id);
              }
            }}
          >
            <path d={fatia.caminho} fill={fatia.cor} />
            {enfeites[fatia.id]}
          </g>
        ))}

        <circle cx="200" cy="200" r="9" fill="var(--color-papel)" />
      </svg>

      <div className="min-h-16 min-w-0 flex-1" aria-live="polite">
        <strong className="block font-display text-[0.9rem] leading-tight font-extrabold tracking-tight">
          {atual.nome}
        </strong>
        <p className="mt-1 text-[0.78rem] leading-snug text-tinta/60">{atual.texto}</p>
      </div>
    </div>
  );
}
