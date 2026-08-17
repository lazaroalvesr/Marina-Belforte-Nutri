"use client";

import type { MouseEvent, ReactNode } from "react";
import { irParaAncora } from "@/lib/scroll";

/* Alvos de toque: todo botão tem no mínimo 44px de altura no celular. */
const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-bold transition-transform duration-200 active:scale-[0.98] hover:-translate-y-0.5";

const variantes = {
  primario: "bg-curcuma text-tinta hover:bg-[#f2ac3c]",
  contorno: "border-[1.5px] border-tinta/15 text-tinta hover:border-tinta",
  claro: "bg-papel text-tinta",
} as const;

export function Botao({
  href,
  children,
  variante = "primario",
  className = "",
  onClick,
  target,
  rel,
  ...props
}: {
  href?: string;
  children: ReactNode;
  variante?: keyof typeof variantes;
  className?: string;
  onClick?: (evento: MouseEvent<HTMLElement>) => void;
  target?: string;
  rel?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">) {
  const classe = `${base} ${variantes[variante]} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        className={classe}
        onClick={(evento) => {
          irParaAncora(evento, href);
          onClick?.(evento);
        }}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={classe} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
