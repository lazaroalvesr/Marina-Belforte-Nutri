"use client";

import { useEffect, useState } from "react";
import { irParaAncora } from "@/lib/scroll";

/* No celular o CTA do topo some junto com o hero. Esta barra devolve a ação
   principal depois que o usuário passa da primeira dobra, e sai de cena quando
   o formulário de agendamento entra na tela — para não cobrir o próprio form. */
export default function BarraMobile() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("agendar");
    let formVisivel = false;

    const observer = alvo
      ? new IntersectionObserver(
          ([entrada]) => {
            formVisivel = entrada.isIntersecting;
            if (formVisivel) setVisivel(false);
          },
          { threshold: 0.15 },
        )
      : null;
    observer?.observe(alvo!);

    const aoRolar = () => {
      setVisivel(window.scrollY > 620 && !formVisivel);
    };

    window.addEventListener("scroll", aoRolar, { passive: true });
    aoRolar();

    return () => {
      window.removeEventListener("scroll", aoRolar);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-tinta/10 bg-papel/95 px-5 pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      aria-hidden={!visivel}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-display text-[0.9rem] leading-tight font-extrabold tracking-tight">
            Primeira consulta
          </p>
          <p className="text-[0.75rem] text-tinta/60">1 hora, online ou em BH</p>
        </div>
        <a
          href="#agendar"
          onClick={(e) => irParaAncora(e, "#agendar")}
          tabIndex={visivel ? 0 : -1}
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-curcuma px-5 text-[0.9rem] font-bold text-tinta active:scale-[0.98]"
        >
          Agendar
        </a>
      </div>
    </div>
  );
}
