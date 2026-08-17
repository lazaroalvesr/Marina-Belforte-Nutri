import type { MouseEvent } from "react";

/* Intercepta cliques em âncoras internas (#secao) e rola até lá sem tocar na
   URL — mantém o comportamento de âncora, só sem o "#secao" aparecendo na
   barra de endereço. scroll-padding-top do globals.css já compensa o header
   fixo em qualquer chamada de scrollIntoView, não só na navegação nativa. */
export function irParaAncora(evento: MouseEvent, href: string) {
  if (!href.startsWith("#")) return;
  evento.preventDefault();

  // As seções (#metodo, #agendar...) só existem na home. Clicando a partir de
  // outra página (ex: /blog), não tem o que rolar aqui — navega pra home com
  // o hash, e o próprio navegador resolve o salto no carregamento.
  const naHome = window.location.pathname === "/";

  if (href === "#") {
    if (naHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
    return;
  }

  if (!naHome) {
    window.location.href = `/${href}`;
    return;
  }

  const alvo = document.querySelector<HTMLElement>(href);
  if (!alvo) return;

  // Se a seção ainda não "revelou" (Revelar.tsx — animação de entrada por
  // IntersectionObserver), ela está deslocada pela propriedade CSS "translate"
  // (o Tailwind v4 usa translate/scale/rotate separados, não "transform").
  // scrollIntoView mede essa posição deslocada; quando a animação dispara ao
  // entrar na tela, o conteúdo sobe e come o respiro calculado. Força o
  // estado final antes de medir, só nesta seção — as outras continuam
  // animando normalmente.
  const painel = alvo.closest<HTMLElement>("[data-revelar]");
  if (painel) {
    painel.style.transition = "none";
    painel.style.translate = "0";
    painel.style.opacity = "1";
  }

  alvo.scrollIntoView({ behavior: "smooth", block: "start" });
}
