# Equilíbrio Nutrição — landing page

Site fictício de nutricionista. Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

`npm run build` exige acesso ao `fonts.googleapis.com`, porque as fontes são baixadas em
tempo de build pelo `next/font/google` e servidas do seu próprio domínio depois.

## Estrutura

```
app/
  layout.tsx      fontes, metadados, viewport
  globals.css     tokens do design (@theme) e utilitários
  page.tsx        monta as seções
components/
  ui.tsx          Botao, Sobrancelha, Container
  Cabecalho.tsx   header + menu mobile        (client)
  Hero.tsx        foto, título, chamadas
  PratoInterativo.tsx  gráfico do prato       (client)
  Faixa.tsx       faixa de ingredientes
  Metodo.tsx      as três etapas
  Resultados.tsx  números de acompanhamento
  Blog.tsx        destaque + lista de textos
  Depoimentos.tsx
  Duvidas.tsx     accordion nativo
  Agendar.tsx     formulário                  (client)
  Rodape.tsx
  BarraMobile.tsx CTA fixo no celular         (client)
lib/
  conteudo.ts     todo o texto do site
public/
  foto-nutricionista.jpg      foto do hero
```

Só cinco componentes são client. O resto renderiza no servidor.

## Decisões para o celular

- **Escala tipográfica fluida** com `clamp()` nos tokens `--text-t1/t2/t3`: um valor cobre de
  360px a desktop, sem breakpoint intermediário.
- **Carrosséis com encaixe** (`snap-x`) em Método e Depoimentos. Empilhar três cards altos faz
  o usuário rolar às cegas; o carrossel mostra que existe mais conteúdo ao lado.
- **Alvos de toque de 44px** em todo link, botão e item de menu.
- **Campos de 16px** — abaixo disso o Safari do iOS dá zoom sozinho ao focar o input.
- **`type="tel"` + `inputMode`** para abrir o teclado certo.
- **Barra fixa de agendamento** que aparece depois da primeira dobra e some quando o
  formulário entra na tela, para não cobrir o que ela mesma promete.
- **Menu em painel** que trava o scroll do corpo enquanto aberto.
- **`overflow-x: hidden`** no body e `viewportFit: "cover"` + `env(safe-area-inset-bottom)`
  para o notch e a barra de gestos.
- `prefers-reduced-motion` desliga a faixa animada e as transições.

## Trocar conteúdo

Quase tudo vive em `lib/conteudo.ts`. Para ligar o formulário de verdade, troque o
`setEnviado(true)` em `components/Agendar.tsx` por um Server Action ou uma rota de API.

## Foto

`public/foto-nutricionista.jpg` é uma imagem do Pexels de uma pessoa real, já recortada e tratada.
Antes de publicar, substitua pela foto da própria profissional ou confirme a licença — uso
comercial é permitido, mas não para sugerir que a pessoa endossa o serviço.
