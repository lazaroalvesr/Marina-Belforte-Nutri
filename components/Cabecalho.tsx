"use client";

import { useEffect, useState } from "react";
import { clinica, linkWhatsapp, navegacao } from "@/lib/conteudo";
import { irParaAncora } from "@/lib/scroll";
import { Botao, Container } from "./ui";

const MENSAGEM_AGENDAR = "Olá! Gostaria de agendar minha primeira consulta.";

function Marca({ escuro = false }: { escuro?: boolean }) {
  return (
    <a href="#" onClick={(e) => irParaAncora(e, "#")} className="flex items-center gap-2.5">
      <span
        className={`grid size-9 place-items-center rounded-[50%_50%_50%_4px] font-display text-[0.85rem] font-extrabold tracking-tight ${
          escuro ? "bg-curcuma text-tinta" : "bg-beterraba text-papel"
        }`}
      >
        mb
      </span>
      <span className="flex flex-col leading-none">
        <strong className="font-display text-base font-extrabold tracking-tight">
          {clinica.nome}
        </strong>
        <span
          className={`text-[0.63rem] tracking-[0.11em] uppercase ${
            escuro ? "text-papel/50" : "text-tinta/60"
          }`}
        >
          {clinica.especialidade}
        </span>
      </span>
    </a>
  );
}

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  /* Menu aberto trava o scroll do corpo — no celular, sem isso a página
     rola atrás do painel e o usuário perde a posição. */
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-tinta/10 bg-papel/85 backdrop-blur-md">
        <Container className="flex h-16 items-center gap-6 md:h-[72px]">
          <div className="mr-auto">
            <Marca />
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {navegacao.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => irParaAncora(e, item.href)}
                className="text-[0.92rem] font-medium text-tinta/60 transition-colors hover:text-tinta"
              >
                {item.texto}
              </a>
            ))}
          </nav>

          {/* !hidden / lg:!inline-flex: Botao já vem com "inline-flex" fixo no
              estilo base, e no CSS gerado essa classe fica depois de "hidden" —
              sem !important, o botão nunca fica escondido no mobile.
              Breakpoint em lg (não md): entre 768-1024px a nav + botão não cabem
              numa linha só e ficam espremidos/quebrando — mantém o menu mobile
              até ter espaço de verdade. */}
          <Botao
            href={linkWhatsapp(MENSAGEM_AGENDAR)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden! lg:inline-flex!"
          >
            Agendar consulta
          </Botao>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="-mr-2 grid size-11 place-items-center rounded-full lg:hidden"
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-tinta transition-transform duration-300 ${
                  aberto ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-[7px] left-0 block h-0.5 w-6 rounded bg-tinta transition-opacity duration-200 ${
                  aberto ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 rounded bg-tinta transition-transform duration-300 ${
                  aberto ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </span>
          </button>
        </Container>
      </header>

      {/* Painel mobile fora do <header>: o backdrop-blur do header cria containing
          block pra position:fixed, e o painel ficava preso à altura da barra em vez
          de esticar até o fim da tela. Como sibling do header, fica relativo à viewport.
          transition-discrete + starting: anima o display:none<->flex (a saída só vira
          "hidden" depois da transição, a entrada parte do estado starting: direto). */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex-col bg-papel px-5 pt-2 pb-8 transition-discrete transition-all duration-300 ease-out starting:-translate-y-2 starting:opacity-0 lg:hidden ${
          aberto ? "flex translate-y-0 opacity-100" : "hidden -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                irParaAncora(e, item.href);
                setAberto(false);
              }}
              className="group -mx-2 flex min-h-14 items-center justify-between border-b border-tinta/10 px-2 font-display text-xl font-extrabold tracking-tight transition-colors duration-150 hover:text-beterraba active:bg-papel-2"
            >
              {item.texto}
              <span
                aria-hidden="true"
                className="text-beterraba transition-transform duration-150 group-hover:translate-x-1 group-active:translate-x-1"
              >
                →
              </span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Botao
            href={linkWhatsapp(MENSAGEM_AGENDAR)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={() => setAberto(false)}
          >
            Agendar consulta
          </Botao>
          <p className="mt-4 text-center text-sm text-tinta/60">
            {clinica.crn} · {clinica.telefone}
          </p>
        </div>
      </div>
    </>
  );
}
