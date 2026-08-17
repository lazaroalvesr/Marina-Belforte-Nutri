"use client";

import { clinica, navegacao } from "@/lib/conteudo";
import { irParaAncora } from "@/lib/scroll";
import { Container } from "./ui";

export default function Rodape() {
  return (
    <footer className="bg-tinta pt-14 pb-28 text-papel md:pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-[50%_50%_50%_4px] bg-curcuma font-display text-[0.85rem] font-extrabold tracking-tight text-tinta">
                mb
              </span>
              <span className="flex flex-col leading-none">
                <strong className="font-display text-base font-extrabold tracking-tight">
                  {clinica.nome}
                </strong>
                <span className="text-[0.63rem] tracking-[0.11em] text-papel/50 uppercase">
                  {clinica.especialidade}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[0.9rem] text-papel/60">
              Nutricionista clínica com foco em comportamento alimentar. Atendimento online para todo
              o Brasil e presencial em Belo Horizonte.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[0.72rem] font-semibold tracking-[0.15em] text-papel/50 uppercase">
              Navegação
            </h3>
            <ul className="flex flex-col gap-1">
              {navegacao.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => irParaAncora(e, item.href)}
                    className="flex min-h-10 items-center text-[0.9rem] text-papel/80 hover:text-curcuma"
                  >
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.72rem] font-semibold tracking-[0.15em] text-papel/50 uppercase">
              Contato
            </h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a
                  href={`tel:+553130000000`}
                  className="flex min-h-10 items-center text-[0.9rem] text-papel/80 hover:text-curcuma"
                >
                  {clinica.telefone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinica.email}`}
                  className="flex min-h-10 items-center text-[0.9rem] break-all text-papel/80 hover:text-curcuma"
                >
                  {clinica.email}
                </a>
              </li>
              <li>
                <a
                  href="#agendar"
                  onClick={(e) => irParaAncora(e, "#agendar")}
                  className="flex min-h-10 items-center text-[0.9rem] text-papel/80 hover:text-curcuma"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[0.72rem] font-semibold tracking-[0.15em] text-papel/50 uppercase">
              Consultório
            </h3>
            <address className="text-[0.9rem] leading-relaxed text-papel/80 not-italic">
              {clinica.endereco}
              <br />
              {clinica.cidade}
              <br />
              <span className="text-papel/60">{clinica.horario}</span>
            </address>
          </div>
        </div>

        <div className="mt-11 flex flex-col gap-2 border-t border-papel/15 pt-6 text-[0.78rem] text-papel/50 sm:flex-row sm:justify-between">
          <span>{clinica.crn} · CNPJ 00.000.000/0001-00</span>
          <span>Página fictícia criada para demonstração de layout.</span>
        </div>
      </Container>
    </footer>
  );
}
