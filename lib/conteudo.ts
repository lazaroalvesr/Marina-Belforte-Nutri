export const clinica = {
  nome: "Equilíbrio Nutrição",
  especialidade: "Nutrição comportamental",
  crn: "CRN-9 12.345",
  telefone: "(31) 3000-0000",
  email: "ola@equilibrionutricao.com.br",
  endereco: "Rua da Bahia, 1000 · Lourdes",
  cidade: "Belo Horizonte, MG",
  horario: "Terça a sexta, 8h às 18h",
};

export function linkWhatsapp(mensagem: string) {
  const numero = clinica.telefone.replace(/\D/g, "");
  return `https://wa.me/55${numero}?text=${encodeURIComponent(mensagem)}`;
}

/* Domínio presumido a partir do e-mail de contato — confirmar o domínio real
   antes de publicar. */
export const SITE_URL = "https://equilibrionutricao.com.br";

/* Schema.org da clínica, reaproveitando os mesmos dados exibidos no rodapé
   (mesmo NAP em todo lugar). Sem geo/priceRange: são dados que não existem em
   nenhum lugar do site hoje, então ficam de fora em vez de inventados —
   entram como pendência no checklist de entrega. */
export const schemaNegocio = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: clinica.nome,
  description: `${clinica.especialidade}. Atendimento online e em ${clinica.cidade}.`,
  image: `${SITE_URL}/foto-nutricionista.jpg`,
  url: SITE_URL,
  telephone: "+553130000000",
  email: clinica.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinica.endereco,
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export const navegacao = [
  { href: "#metodo", texto: "Como funciona" },
  { href: "#resultados", texto: "Resultados" },
  { href: "#blog", texto: "Blog" },
  { href: "#duvidas", texto: "Dúvidas" },
  { href: "#agendar", texto: "Contato" },
];

export const fatiasDoPrato = [
  {
    id: "vegetais",
    nome: "Metade: vegetais",
    texto: "Folhas e legumes, do jeito que você já faz. É o que dá volume e saciedade.",
    cor: "var(--color-oliva)",
    detalhe: "var(--color-pistache-2)",
    caminho: "M200,200 L200,350 A150,150 0 0 1 200,50 Z",
    desloca: "translate(-12px,0)",
  },
  {
    id: "proteina",
    nome: "Um quarto: proteína",
    texto: "Ovo, feijão, frango, peixe ou tofu. Vale o que você compra toda semana.",
    cor: "var(--color-beterraba)",
    detalhe: "var(--color-beterraba-2)",
    caminho: "M200,200 L200,50 A150,150 0 0 1 350,200 Z",
    desloca: "translate(9px,-9px)",
  },
  {
    id: "carboidrato",
    nome: "Um quarto: carboidrato",
    texto: "Arroz, mandioca, pão, macarrão. A conversa é sobre quanto, não sobre cortar.",
    cor: "var(--color-curcuma)",
    detalhe: "var(--color-papel)",
    caminho: "M200,200 L350,200 A150,150 0 0 1 200,350 Z",
    desloca: "translate(9px,9px)",
  },
];

export const ingredientes = [
  "feira de terça",
  "arroz com feijão",
  "beterraba",
  "marmita de segunda",
  "café da manhã de verdade",
  "couve",
  "nada de proibido",
  "cúrcuma",
];

export const passos = [
  {
    semana: "Semana 1",
    titulo: "Avaliação",
    texto: "Uma hora de conversa, exames recentes se você tiver e um retrato honesto da rotina.",
    itens: [
      "Histórico de peso e de dietas anteriores",
      "Rotina de trabalho, sono e treino",
      "Medidas e bioimpedância (opcional)",
    ],
  },
  {
    semana: "Semana 2",
    titulo: "Plano",
    texto: "Um roteiro escrito com as suas refeições reais, não um cardápio genérico de PDF.",
    itens: [
      "Lista de compras por semana",
      "Substituições para quando o dia sai do trilho",
      "Duas receitas que cabem em 20 minutos",
    ],
  },
  {
    semana: "Semanas 3 a 12",
    titulo: "Ajuste",
    texto: "Retornos quinzenais para corrigir o que não funcionou — sempre tem algo que não funciona.",
    itens: [
      "Retorno a cada 15 dias, 30 minutos",
      "Dúvidas por mensagem em dias úteis",
      "Revisão de exames ao fim do trimestre",
    ],
  },
];

export const resultados = [
  { numero: "83%", texto: "relatam menos episódios de comer por ansiedade à noite." },
  { numero: "9 em 10", texto: "seguem com o plano depois do terceiro mês, sem acompanhamento diário." },
  { numero: "zero", texto: "alimentos proibidos na lista. Nenhum, em nenhuma fase." },
];

export const postDestaque = {
  slug: "fome-das-dez-da-noite",
  tag: "Comportamento",
  titulo: "Por que a fome das dez da noite não é falta de força de vontade",
  resumo:
    "Quase todo mundo que chega aqui acha que o problema é disciplina. Na maior parte dos casos, é o que aconteceu entre o almoço e as sete da noite.",
  data: "12 de agosto",
  leitura: "6 min de leitura",
  href: "/blog/fome-das-dez-da-noite",
  corpo: [
    "Quase todo mundo que chega aqui acha que o problema é disciplina. A cozinha fecha depois do jantar, a promessa é não beliscar mais — e antes das dez da noite lá está a pessoa com a porta da geladeira aberta, sem lembrar direito como chegou ali. A conclusão mais repetida é também a mais injusta: “eu não tenho força de vontade”.",
    "Na maior parte dos casos, o problema não começou às dez da noite. Começou às duas da tarde, quando o almoço foi resolvido em quinze minutos entre uma reunião e outra. Ou de manhã, quando o café saiu correndo — só um gole de alguma coisa, sem nada que realmente sustente. O corpo não esquece essas contas. Ele só demora para cobrar.",
    "Fome fisiológica e vontade de comer por cansaço são coisas diferentes, mas o corpo nem sempre sabe separar as duas depois de um dia inteiro sem parar. Quando a noite chega e finalmente há um momento de silêncio, a cabeça relaxa — e é exatamente nesse relaxamento que a fome acumulada do dia, somada ao cansaço de segurar tudo até ali, aparece de uma vez.",
    "Na prática, o ajuste raramente é “comer menos à noite”. Costuma ser o contrário: entender onde o dia furou. Às vezes é um almoço com mais proteína. Às vezes é um lanche da tarde que nunca foi programado porque parecia desnecessário. Às vezes é dormir quarenta minutos mais cedo, porque boa parte da fome noturna é, na verdade, sono adiado.",
    "Isso não significa vigiar o relógio ou anotar cada garfada. Significa olhar pra rotina real — a que existe de segunda a sexta, não a ideal — e ajustar um ponto de cada vez, até a fome das dez da noite parar de aparecer como surpresa.",
    "Se esse é um padrão que se repete quase toda semana, vale conversar sobre isso na consulta — não para cortar a fome da noite, mas para entender o que ela está avisando sobre o resto do dia.",
  ],
  destaquePos: 3,
  destaque:
    "Não é falta de força de vontade. É o intervalo entre as refeições que não sustentou o dia, cobrando na hora em que a guarda está baixa.",
};

export const posts = [
  {
    titulo: "Beterraba, cúrcuma e o mito do alimento detox",
    tag: "Mitos",
    leitura: "4 min",
    href: "/blog",
    capa: "folha" as const,
  },
  {
    titulo: "Como montar o prato quando o almoço é sempre na rua",
    tag: "Rotina",
    leitura: "5 min",
    href: "/blog",
    capa: "marmita" as const,
  },
  {
    titulo: "O que muda nos exames nos primeiros três meses (e o que não muda)",
    tag: "Clínica",
    leitura: "7 min",
    href: "/blog",
    capa: "tigela" as const,
  },
  {
    titulo: "Marmita de segunda: três combinações que aguentam a semana",
    tag: "Receitas",
    leitura: "5 min",
    href: "/blog",
    capa: "ovo" as const,
  },
];

export const depoimentos = [
  {
    texto: "Foi a primeira vez que alguém olhou pro meu horário de trabalho antes de falar do meu prato. Mudou tudo.",
    nome: "Camila R.",
    detalhe: "Belo Horizonte · 8 meses",
    iniciais: "CR",
    cor: "bg-beterraba",
  },
  {
    texto: "Eu esperava uma folha com alimentos proibidos. Saí com uma lista de compras e duas receitas.",
    nome: "Thiago F.",
    detalhe: "Contagem · 1 ano",
    iniciais: "TF",
    cor: "bg-oliva",
  },
  {
    texto: "Parei de brigar com a balança de manhã. Meus exames melhoraram e eu nem tinha percebido.",
    nome: "Letícia M.",
    detalhe: "Online, Vitória · 5 meses",
    iniciais: "LM",
    cor: "bg-beterraba-2",
  },
];

export const duvidas = [
  {
    pergunta: "Você atende online?",
    resposta:
      "Sim. A consulta online tem a mesma duração e o mesmo material da presencial. A diferença é a bioimpedância, que fica opcional e pode ser feita em qualquer clínica com o laudo enviado depois.",
  },
  {
    pergunta: "Precisa levar exames?",
    resposta:
      "Se tiver exames dos últimos seis meses, leve. Se não tiver, a gente começa mesmo assim e eu indico o que pedir ao seu médico.",
  },
  {
    pergunta: "Vou receber um cardápio pronto?",
    resposta:
      "Não. Você recebe um roteiro construído com as refeições que já fazem parte da sua semana, com substituições para os dias em que o plano não funciona.",
  },
  {
    pergunta: "Atende plano de saúde?",
    resposta:
      "O atendimento é particular. Emito recibo com CRN para reembolso — a maioria dos planos cobre parte do valor.",
  },
];

export const objetivos = [
  "Melhorar a relação com a comida",
  "Ajustar exames alterados",
  "Rotina de treino e desempenho",
  "Gestação ou pós-parto",
  "Ainda não sei explicar",
];
