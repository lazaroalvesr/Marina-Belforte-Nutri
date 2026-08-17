import type { ReactNode } from "react";

export { Botao } from "./Botao";

export function Sobrancelha({
  children,
  className = "text-oliva",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] uppercase ${className}`}
    >
      <span className="block h-px w-5 bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}
