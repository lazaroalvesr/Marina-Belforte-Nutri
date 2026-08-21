import Image from "next/image";
import { clinica } from "@/lib/conteudo";
import PratoInterativo from "./PratoInterativo";
import { Botao, Container, Sobrancelha } from "./ui";

export default function Hero() {
  return (
    <section className="pt-10 pb-12 md:pt-16 lg:pb-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* No celular o texto vem primeiro: a promessa antes do retrato. */}
        <div>
          <Sobrancelha>Online e em Belo Horizonte</Sobrancelha>

          <h1 className="mt-5 text-t1 text-balance">
            Comer bem não precisa ocupar{" "}
            <em className="font-editorial font-light text-beterraba italic">
              a sua cabeça inteira.
            </em>
          </h1>

          <p className="mt-5 max-w-[52ch] text-pretty text-tinta/60 md:text-lg">
            Acompanhamento sem dieta de gaveta, sem lista de proibidos e sem pesar cada grama. A
            gente ajusta o que já existe na sua rotina até virar hábito — e aí você para de pensar
            nisso.
          </p>

          {/* Botões ocupam a largura toda no celular, lado a lado a partir de 640px */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Botao href="#agendar" className="w-full sm:w-auto">
              Agendar primeira consulta
            </Botao>
            <Botao href="#metodo" variante="contorno" className="w-full sm:w-auto">
              Ver como funciona
            </Botao>
          </div>

          <ul className="mt-7 flex flex-col gap-2 text-sm text-tinta/60 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {["+600 atendimentos desde 2018", "Resposta em até 24h", "Recibo para reembolso"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 shrink-0 rounded-full bg-oliva" aria-hidden="true" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Foto em arco, com bloco pistache deslocado atrás */}
        <div className="relative mx-auto w-full max-w-[420px] pb-2 lg:max-w-none">
          {/* span decorativo isolado num wrapper só da foto: se ficasse no mesmo
              relative do card abaixo, a altura dele (que no celular entra no fluxo
              normal) inflava o "bottom-10" do span e o verde vazava atrás do card. */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 right-[-10px] bottom-10 left-8 rounded-t-[200px] rounded-b-3xl bg-pistache lg:right-[-14px] lg:rounded-t-[250px]"
            />

            <Image
              src="/foto-nutricionista.jpg"
              alt={`${clinica.nome}, nutricionista, de jaleco branco e gola alta verde`}
              width={900}
              height={1097}
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="relative aspect-[0.82] w-full rounded-t-[190px] rounded-b-2xl object-cover object-[50%_12%] shadow-[0_24px_60px_-30px_rgba(36,29,26,0.55)] lg:rounded-t-[260px]"
            />
          </div>

          {/* No celular o card desce para baixo da foto; no desktop, sobrepõe */}
          <div className="mt-4 sm:absolute sm:bottom-6 sm:-left-3 sm:mt-0 sm:w-[320px] lg:bottom-2 lg:-left-6">
            <PratoInterativo />
          </div>

          <p className="mt-4 flex items-center gap-2 text-[0.8rem] text-tinta/60 sm:mt-3">
            <span className="block h-px w-4 bg-oliva" aria-hidden="true" />
            {clinica.nome} · nutricionista · {clinica.crn}
          </p>
        </div>
      </Container>
    </section>
  );
}
