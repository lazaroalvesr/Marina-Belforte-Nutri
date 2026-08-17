import { passos } from "@/lib/conteudo";
import { Container, Sobrancelha } from "./ui";

export default function Metodo() {
  return (
    <section id="metodo" className="py-16 md:py-24">
      <Container>
        <div className="max-w-[60ch]">
          <Sobrancelha>Como funciona</Sobrancelha>
          <h2 className="mt-4 text-t2 text-balance">
            Três meses, e{" "}
            <em className="font-editorial font-light text-beterraba italic">
              nenhuma mudança brusca
            </em>{" "}
            na primeira semana.
          </h2>
          <p className="mt-4 text-pretty text-tinta/60">
            O plano começa depois de entender o que você come hoje, com quem come e quanto tempo tem
            para cozinhar. Antes disso, qualquer cardápio seria chute.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {passos.map((passo) => (
            <article
              key={passo.semana}
              className="flex flex-col gap-3 rounded-2xl border border-tinta/10 bg-papel-2 p-6 sm:p-7"
            >
              <span className="self-start rounded-full bg-papel px-3 py-1.5 font-display text-[0.72rem] font-extrabold tracking-[0.08em] text-beterraba uppercase">
                {passo.semana}
              </span>
              <h3 className="text-t3">{passo.titulo}</h3>
              <p className="text-[0.93rem] text-tinta/60">{passo.texto}</p>
              <ul className="mt-1 flex flex-col gap-2">
                {passo.itens.map((item) => (
                  <li key={item} className="relative pl-5 text-[0.88rem]">
                    <span
                      aria-hidden="true"
                      className="absolute top-2 left-0 size-2.5 rounded-[50%_50%_50%_0] bg-oliva"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
