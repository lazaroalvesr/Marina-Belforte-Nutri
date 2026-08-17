import { resultados } from "@/lib/conteudo";
import { Container, Sobrancelha } from "./ui";

export default function Resultados() {
  return (
    <section id="resultados" className="pb-16 md:pb-24">
      <Container>
        <div className="rounded-3xl bg-pistache p-6 sm:p-10 lg:p-14">
          <div className="max-w-[60ch]">
            <Sobrancelha className="text-beterraba">Resultados</Sobrancelha>
            <h2 className="mt-4 text-t2 text-balance">
              O que costuma mudar{" "}
              <em className="font-editorial font-light text-beterraba italic">em doze semanas.</em>
            </h2>
            <p className="mt-4 text-pretty text-tinta/70">
              Peso é uma parte pequena da conversa. O que os pacientes relatam com mais frequência é
              outra coisa.
            </p>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {resultados.map((item) => (
              <div key={item.numero} className="border-t-2 border-tinta/20 pt-4">
                <dt className="font-display text-[clamp(2.4rem,9vw,3.4rem)] leading-none font-extrabold tracking-[-0.05em] text-beterraba">
                  {item.numero}
                </dt>
                <dd className="mt-2.5 text-[0.92rem] text-tinta/75">{item.texto}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-[62ch] text-[0.78rem] text-tinta/60">
            Números de acompanhamento interno com 214 pacientes atendidos entre 2023 e 2025.
            Resultado individual varia conforme histórico clínico, uso de medicamentos e rotina.
            Página fictícia, criada para fins de demonstração.
          </p>
        </div>
      </Container>
    </section>
  );
}
