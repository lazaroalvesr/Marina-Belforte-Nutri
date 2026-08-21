import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CapaGrande } from "@/components/CapasBlog";
import { Botao, Container } from "@/components/ui";
import { postDestaque, SITE_URL } from "@/lib/conteudo";

export function generateStaticParams() {
  return [{ slug: postDestaque.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== postDestaque.slug) return {};

  return {
    title: `${postDestaque.titulo} · Equilíbrio Nutrição`,
    description: postDestaque.resumo,
    alternates: { canonical: `/blog/${postDestaque.slug}` },
    openGraph: {
      title: postDestaque.titulo,
      description: postDestaque.resumo,
      url: `${SITE_URL}/blog/${postDestaque.slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug !== postDestaque.slug) notFound();

  return (
    <article className="pt-10 pb-16 md:pt-16 md:pb-24">
      <Container className="max-w-[70ch]">
        <Link href="/blog" className="text-[0.85rem] font-medium text-tinta/60 hover:text-tinta">
          ← Voltar para o blog
        </Link>

        <span className="mt-6 block w-fit rounded-full border border-tinta/10 bg-papel-2 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-beterraba uppercase">
          {postDestaque.tag}
        </span>
        <h1 className="mt-4 text-t2 text-balance">{postDestaque.titulo}</h1>
        <p className="mt-3 text-[0.85rem] text-tinta/60">
          {postDestaque.data} · {postDestaque.leitura}
        </p>
      </Container>

      <Container className="mt-8 max-w-[70ch]">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <CapaGrande />
        </div>
      </Container>

      <Container className="mt-10 max-w-[68ch]">
        <div className="flex flex-col gap-5 text-[1.02rem] leading-relaxed text-pretty text-tinta/80">
          {postDestaque.corpo.slice(0, postDestaque.destaquePos).map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}

          <blockquote className="border-l-[3px] border-curcuma py-1 pl-5 font-editorial text-[1.3rem] leading-snug font-light text-beterraba italic">
            {postDestaque.destaque}
          </blockquote>

          {postDestaque.corpo.slice(postDestaque.destaquePos).map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-tinta/10 bg-papel-2 p-6 sm:p-8">
          <h2 className="text-t3">Quer conversar sobre isso na consulta?</h2>
          <p className="mt-2 max-w-[46ch] text-[0.94rem] text-tinta/60">
            Uma hora pra entender a sua rotina de verdade, sem plano genérico.
          </p>
          <Botao href="#agendar" className="mt-5 w-full sm:w-auto">
            Agendar primeira consulta
          </Botao>
        </div>
      </Container>
    </article>
  );
}
