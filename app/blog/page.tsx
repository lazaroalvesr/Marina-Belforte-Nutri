import type { Metadata } from "next";
import { CapaGrande, miniaturas } from "@/components/CapasBlog";
import { Container, Sobrancelha } from "@/components/ui";
import { postDestaque, posts, SITE_URL } from "@/lib/conteudo";

export const metadata: Metadata = {
  title: "Blog · Marina Belfort",
  description:
    "Textos sobre comportamento alimentar, rotina e mitos da nutrição — escritos para quem já é paciente e para quem está pensando em agendar.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · Marina Belfort",
    description: "Textos sobre comportamento alimentar, rotina e mitos da nutrição.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-10 pb-8 md:pt-16">
        <Container className="max-w-[60ch]">
          <Sobrancelha>Do consultório para a sua cozinha</Sobrancelha>
          <h1 className="mt-4 text-t2 text-balance">
            Textos que eu{" "}
            <em className="font-editorial font-light text-beterraba italic">mando para os pacientes.</em>
          </h1>
          <p className="mt-4 text-pretty text-tinta/60">
            Comportamento, rotina e os mitos mais comuns — sem fórmula mágica, sem promessa de balança.
          </p>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <a
            href={postDestaque.href}
            className="group flex flex-col overflow-hidden rounded-2xl border border-tinta/10 bg-papel-2 transition-transform duration-200 hover:-translate-y-1 hover:border-beterraba lg:flex-row"
          >
            <div className="aspect-[16/10] w-full lg:aspect-auto lg:w-[46%]">
              <CapaGrande />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
              <span className="self-start rounded-full border border-tinta/10 bg-papel px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-beterraba uppercase">
                {postDestaque.tag}
              </span>
              <h2 className="text-[clamp(1.4rem,3.5vw,2rem)] leading-[1.1] tracking-[-0.03em] text-balance">
                {postDestaque.titulo}
              </h2>
              <p className="max-w-[52ch] text-[0.95rem] text-pretty text-tinta/60">{postDestaque.resumo}</p>
              <span className="mt-auto pt-2 text-[0.78rem] text-tinta/60">
                {postDestaque.data} · {postDestaque.leitura}
              </span>
            </div>
          </a>

          <div className="mt-10">
            <h3 className="text-[0.72rem] font-semibold tracking-[0.15em] text-tinta/50 uppercase">
              Mais textos
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post) => (
                <div
                  key={post.titulo}
                  className="flex flex-col gap-3 rounded-2xl border border-tinta/10 bg-papel-2 p-5"
                >
                  <span className="size-14 shrink-0 overflow-hidden rounded-xl">{miniaturas[post.capa]}</span>
                  <span className="block font-display text-[0.95rem] leading-tight font-semibold tracking-tight text-pretty">
                    {post.titulo}
                  </span>
                  <small className="mt-auto block text-[0.75rem] tracking-wide text-tinta/60">
                    {post.tag} · {post.leitura}
                  </small>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.8rem] text-tinta/40">
              Em breve — por enquanto só o texto acima está escrito de verdade.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
