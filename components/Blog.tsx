import { postDestaque, posts } from "@/lib/conteudo";
import { CapaGrande, miniaturas } from "./CapasBlog";
import { Botao, Container, Sobrancelha } from "./ui";

export default function Blog() {
  return (
    <section id="blog" className="pb-16 md:pb-24">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[46ch]">
            <Sobrancelha>Do consultório para a sua cozinha</Sobrancelha>
            <h2 className="mt-4 text-t2 text-balance">
              Textos que eu{" "}
              <em className="font-editorial font-light text-beterraba italic">
                mando para os pacientes.
              </em>
            </h2>
          </div>
          <Botao href="/blog" variante="contorno" className="w-full sm:w-auto sm:shrink-0">
            Ver todos os textos
          </Botao>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <a
            href={postDestaque.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-tinta/10 bg-papel-2 transition-transform duration-200 hover:-translate-y-1 hover:border-beterraba"
          >
            <div className="aspect-[16/10] w-full">
              <CapaGrande />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
              <span className="self-start rounded-full border border-tinta/10 bg-papel px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-beterraba uppercase">
                {postDestaque.tag}
              </span>
              <h3 className="text-[clamp(1.3rem,4.5vw,1.85rem)] leading-[1.1] tracking-[-0.03em] text-balance">
                {postDestaque.titulo}
              </h3>
              <p className="text-[0.94rem] text-pretty text-tinta/60">{postDestaque.resumo}</p>
              <span className="mt-auto pt-2 text-[0.78rem] text-tinta/60">
                {postDestaque.data} · {postDestaque.leitura}
              </span>
            </div>
          </a>

          <ul className="flex flex-col">
            {posts.map((post, i) => (
              <li key={post.titulo}>
                <a
                  href={post.href}
                  className={`group flex min-h-20 items-center gap-4 border-b border-tinta/10 py-4 transition-[padding] duration-200 hover:pl-2 sm:gap-5 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <span className="size-14 shrink-0 overflow-hidden rounded-xl sm:size-16">
                    {miniaturas[post.capa]}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[1rem] leading-tight font-semibold tracking-tight text-pretty group-hover:text-beterraba">
                      {post.titulo}
                    </span>
                    <small className="mt-1.5 block text-[0.75rem] tracking-wide text-tinta/60">
                      {post.tag} · {post.leitura}
                    </small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
