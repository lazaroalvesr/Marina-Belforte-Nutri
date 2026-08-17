import type { Metadata } from "next";
import Agendar from "@/components/Agendar";
import Blog from "@/components/Blog";
import Depoimentos from "@/components/Depoimentos";
import Duvidas from "@/components/Duvidas";
import Faixa from "@/components/Faixa";
import Hero from "@/components/Hero";
import Metodo from "@/components/Metodo";
import Resultados from "@/components/Resultados";
import Revelar from "@/components/Revelar";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Faixa />
      <Revelar>
        <Metodo />
      </Revelar>
      <Revelar>
        <Resultados />
      </Revelar>
      <Revelar>
        <Blog />
      </Revelar>
      <Revelar>
        <Depoimentos />
      </Revelar>
      <Revelar>
        <Duvidas />
      </Revelar>
      <Revelar>
        <Agendar />
      </Revelar>
    </>
  );
}
