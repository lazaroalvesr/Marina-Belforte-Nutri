import { depoimentos } from "@/lib/conteudo";
import { Container, Sobrancelha } from "./ui";

export default function Depoimentos() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="max-w-[46ch]">
          <Sobrancelha>Quem passou por aqui</Sobrancelha>
          <h2 className="mt-4 text-t2 text-balance">
            Histórias de quem{" "}
            <em className="font-editorial font-light text-beterraba italic">parou de recomeçar.</em>
          </h2>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {depoimentos.map((depo) => (
            <figure
              key={depo.nome}
              className="flex flex-col gap-4 rounded-2xl border border-tinta/10 bg-papel-2 p-6"
            >
              <blockquote className="font-editorial text-[1.12rem] leading-snug font-light text-pretty italic">
                “{depo.texto}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-[50%_50%_50%_5px] font-display text-[0.85rem] font-extrabold text-papel ${depo.cor}`}
                >
                  {depo.iniciais}
                </span>
                <span>
                  <strong className="block text-[0.9rem] font-bold">{depo.nome}</strong>
                  <span className="text-[0.76rem] text-tinta/60">{depo.detalhe}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
