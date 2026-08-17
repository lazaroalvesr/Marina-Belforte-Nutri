import { duvidas } from "@/lib/conteudo";
import DuvidasAcordeao from "./DuvidasAcordeao";
import { Container, Sobrancelha } from "./ui";

export default function Duvidas() {
  return (
    <section id="duvidas" className="pb-16 md:pb-24">
      <Container>
        <Sobrancelha>Dúvidas</Sobrancelha>
        <h2 className="mt-4 text-t2">Antes de agendar.</h2>

        {/* details/summary: sem JS o navegador ainda abre/fecha e o Ctrl+F acha o texto */}
        <DuvidasAcordeao itens={duvidas} />
      </Container>
    </section>
  );
}
