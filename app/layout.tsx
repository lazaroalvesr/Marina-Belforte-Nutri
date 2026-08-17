import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Karla, Newsreader } from "next/font/google";
import BarraMobile from "@/components/BarraMobile";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import { SITE_URL, schemaNegocio } from "@/lib/conteudo";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--fonte-display",
  display: "swap",
});

const corpo = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--fonte-corpo",
  display: "swap",
});

const editorial = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--fonte-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Marina Belfort · Nutrição comportamental em Belo Horizonte",
  description:
    "Acompanhamento nutricional sem dieta de gaveta e sem lista de proibidos. Consulta online e presencial em Belo Horizonte.",
  openGraph: {
    title: "Marina Belfort · Nutrição comportamental",
    description: "Acompanhamento sem dieta de gaveta e sem lista de proibidos.",
    url: SITE_URL,
    siteName: "Marina Belfort",
    images: ["/marina.jpg"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Belfort · Nutrição comportamental",
    description: "Acompanhamento sem dieta de gaveta e sem lista de proibidos.",
    images: ["/marina.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F0E5",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable} ${editorial.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-beterraba focus:px-5 focus:py-3 focus:text-papel"
        >
          Ir para o conteúdo
        </a>

        <Cabecalho />

        <main id="conteudo">{children}</main>

        <Rodape />
        <BarraMobile />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaNegocio) }}
        />
      </body>
    </html>
  );
}
