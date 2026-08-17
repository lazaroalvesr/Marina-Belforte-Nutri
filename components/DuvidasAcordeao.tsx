"use client";

import { useRef, useState } from "react";

const DURACAO = 300;

export default function DuvidasAcordeao({
  itens,
}: {
  itens: { pergunta: string; resposta: string }[];
}) {
  const [abertoIndex, setAbertoIndex] = useState<number | null>(0);
  const detalhesRef = useRef<(HTMLDetailsElement | null)[]>([]);
  const painelRef = useRef<(HTMLDivElement | null)[]>([]);
  const animacaoRef = useRef<(Animation | null)[]>([]);

  function anima(indice: number, abrindo: boolean) {
    const detalhe = detalhesRef.current[indice];
    const painel = painelRef.current[indice];
    if (!detalhe || !painel) return;

    animacaoRef.current[indice]?.cancel();

    // anima só o painel da resposta, não o <details>: assim padding/borda do
    // <details> não entram na conta e não dá aquele "pulo" ao medir errado.
    if (abrindo) detalhe.open = true;
    const alturaAberta = painel.getBoundingClientRect().height;

    painel.style.overflow = "hidden";
    const animacao = painel.animate(
      { height: [abrindo ? "0px" : `${alturaAberta}px`, abrindo ? `${alturaAberta}px` : "0px"] },
      { duration: DURACAO, easing: "ease-out" },
    );
    animacaoRef.current[indice] = animacao;

    animacao.onfinish = () => {
      detalhe.open = abrindo;
      painel.style.overflow = "";
      painel.style.height = "";
      animacaoRef.current[indice] = null;
    };
  }

  function aoClicar(evento: React.MouseEvent, indice: number) {
    evento.preventDefault();
    const abrindoEsta = abertoIndex !== indice;

    if (abertoIndex !== null && abertoIndex !== indice) {
      anima(abertoIndex, false);
    }
    anima(indice, abrindoEsta);
    setAbertoIndex(abrindoEsta ? indice : null);
  }

  return (
    <div className="mt-8 max-w-3xl">
      {itens.map((item, indice) => (
        <details
          key={item.pergunta}
          ref={(el) => {
            detalhesRef.current[indice] = el;
          }}
          open={indice === 0}
          className="border-b border-tinta/10 py-1"
        >
          <summary
            onClick={(evento) => aoClicar(evento, indice)}
            className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[1.05rem] font-semibold tracking-tight [&::-webkit-details-marker]:hidden"
          >
            {item.pergunta}
            <span
              aria-hidden="true"
              className={`grid size-7 shrink-0 place-items-center text-2xl leading-none font-normal text-beterraba transition-transform duration-200 ${
                abertoIndex === indice ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </summary>
          <div
            ref={(el) => {
              painelRef.current[indice] = el;
            }}
          >
            <p className="pr-10 pb-5 text-[0.95rem] text-pretty text-tinta/60">{item.resposta}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
