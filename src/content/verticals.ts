export type VerticalSlug = "projects" | "services" | "assistance" | "security";

export interface VerticalPillar {
  keyword: string;
  body: string;
}

export interface VerticalData {
  slug: VerticalSlug;
  index: string; // "01"..."04"
  brand: string; // "S.O.L & Projects"
  shortName: string; // "Projects"
  microTag: string;
  title: string;
  subtitle: string;
  aboutLead: string;
  aboutBody: string;
  differentialHeadline: string;
  differentialPillars: VerticalPillar[];
  nextSlug: VerticalSlug;
}

export const verticals: Record<VerticalSlug, VerticalData> = {
  projects: {
    slug: "projects",
    index: "01",
    brand: "S.O.L & Projects",
    shortName: "Projects",
    microTag: "EQUITY · LONG-TERM",
    title: "Projetos que saem do capital e ganham mercado.",
    subtitle:
      "A S.O.L & Projects reúne os negócios em que a S.O.L. ONE entra com participação, estrutura e direcionamento para transformá-los em soluções reais de mercado.",
    aboutLead:
      "Este braço concentra os projetos em que a S.O.L. ONE atua com equity e construção de valor de longo prazo, participando da formação, crescimento e consolidação de operações que nascem para existir no mundo real.",
    aboutBody:
      "São iniciativas com aplicação prática, presença de mercado e capacidade de gerar impacto econômico, social ou setorial, seja para públicos amplos, seja para nichos específicos com dores reais e demanda concreta. É aqui que entram ativos como Guio, Fitfy, Voltz Talent, Avaluz e Pharos: projetos que deixam de ser hipótese para se tornar operação, produto, empresa e posicionamento.",
    differentialHeadline:
      "Não prestamos um serviço pontual. Participamos da construção de soluções que ganham corpo próprio, escala e valor de mercado ao longo do tempo.",
    differentialPillars: [
      {
        keyword: "CONSTRUÇÃO DE VALOR",
        body: "Entramos na formação, no crescimento e na consolidação, não apenas no resultado final.",
      },
      {
        keyword: "EQUITY DE LONGO PRAZO",
        body: "Participação real nos negócios. Sócios da tese, não fornecedores do projeto.",
      },
      {
        keyword: "OPERAÇÃO REAL",
        body: "Hipóteses viram empresa, produto e posicionamento de mercado.",
      },
    ],
    nextSlug: "services",
  },
  services: {
    slug: "services",
    index: "02",
    brand: "S.O.L & Services",
    shortName: "Services",
    microTag: "PREMIUM · SELECTED",
    title: "Execuções raras para desafios de alta complexidade.",
    subtitle:
      "A S.O.L & Services é a frente de prestação de serviço premium da S.O.L. ONE, criada para projetos multidisciplinares, robustos e de alto impacto.",
    aboutLead:
      "Essa unidade atende demandas que não se resolvem com uma entrega simples, uma ferramenta isolada ou uma equipe reduzida.",
    aboutBody:
      "Falamos de estruturações completas, que podem envolver elétrica, hardware, software, operação e desenho técnico para transformar cenários inteiros, como na atuação voltada à inovação para a agricultura angolana. São projetos grandes, exigentes e intensivos em capacidade de execução, pensados para clientes que precisam de mudança real, não de soluções cosméticas.",
    differentialHeadline:
      "A S.O.L & Services opera sob seleção. Não buscamos volume irrestrito, mas escolhas criteriosas: clientes certos, escopos corretos, fila quando necessário.",
    differentialPillars: [
      {
        keyword: "SELEÇÃO CRITERIOSA",
        body: "Poucos projetos, alto nível. Fila quando necessário, sem concessão à qualidade.",
      },
      {
        keyword: "MULTIDISCIPLINAR",
        body: "Elétrica, hardware, software, operação e desenho técnico em uma única entrega.",
      },
      {
        keyword: "ALTA EXIGÊNCIA",
        body: "Ticket elevado, dedicação profunda e transformação que justifica o esforço.",
      },
    ],
    nextSlug: "assistance",
  },
  assistance: {
    slug: "assistance",
    index: "03",
    brand: "S.O.L & Assistance",
    shortName: "Assistance",
    microTag: "RECURRENT · EXTERNAL",
    title: "A inteligência técnica contínua que substitui estruturas inchadas.",
    subtitle:
      "Assessoria e consultoria recorrente em hardware, software e desenvolvimento de soluções para empresas que precisam de capacidade técnica constante sem carregar um time interno pesado.",
    aboutLead:
      "Essa frente nasce para atender empresas que hoje mantêm equipes próprias de tecnologia com custo elevado, estrutura fixa e baixa eficiência estratégica, muitas vezes limitadas a suporte, manutenção e respostas reativas.",
    aboutBody:
      "A proposta é assumir esse papel com uma operação externa, contínua e especializada, reduzindo custo estrutural e ampliando capacidade técnica sem exigir novas contratações internas, espaço físico dedicado ou expansão da folha. Em vez de sustentar um núcleo caro para fazer o básico, a empresa passa a contar com a S.O.L. ONE como parceiro recorrente de evolução tecnológica, suporte qualificado e desenvolvimento aplicado ao seu próprio contexto.",
    differentialHeadline:
      "Não é terceirização. É substituir uma estrutura cara e limitada por uma frente mais experiente, mais flexível e mais inteligente economicamente.",
    differentialPillars: [
      {
        keyword: "ESTRUTURA EXTERNA",
        body: "Operação remota, contínua e especializada, sem inchar a folha.",
      },
      {
        keyword: "CUSTO REDUZIDO",
        body: "Substitui núcleos caros e subutilizados por inteligência aplicada.",
      },
      {
        keyword: "CAPACIDADE CONTÍNUA",
        body: "Evolução tecnológica recorrente, não apenas suporte reativo.",
      },
    ],
    nextSlug: "security",
  },
  security: {
    slug: "security",
    index: "04",
    brand: "S.O.L & Security",
    shortName: "Security",
    microTag: "INFRA · CYBER",
    title: "Infraestrutura sólida. Segurança efetiva.",
    subtitle:
      "A frente de infraestrutura e proteção cibernética da S.O.L. ONE, preparando empresas para operar com mais estabilidade, autonomia e resiliência digital.",
    aboutLead:
      "Esse braço atua na estruturação da base técnica que sustenta a operação: servidores, bancos de dados, ambiente próprio, organização de arquitetura e camadas de proteção voltadas à continuidade e ao controle.",
    aboutBody:
      "Ao mesmo tempo, cobre o campo da segurança cyber com medidas efetivas de prevenção, endurecimento de ambiente, redução de vulnerabilidades e proteção contra ataques e exposições críticas. A proposta não é apenas instalar recursos, mas preparar a empresa para operar com uma fundação mais segura, confiável e menos dependente de improviso.",
    differentialHeadline:
      "Infraestrutura e segurança não são detalhe técnico de bastidor, são parte central da estabilidade e da longevidade da operação.",
    differentialPillars: [
      {
        keyword: "FUNDAÇÃO SÓLIDA",
        body: "Servidores, bancos, arquitetura e ambiente próprios, base que sustenta tudo.",
      },
      {
        keyword: "DEFESA EFETIVA",
        body: "Endurecimento, redução de vulnerabilidades e proteção real contra ataques.",
      },
      {
        keyword: "CONTINUIDADE OPERACIONAL",
        body: "Operar com confiança, autonomia e independência de improviso.",
      },
    ],
    nextSlug: "projects",
  },
};

export const verticalsList = [
  verticals.projects,
  verticals.services,
  verticals.assistance,
  verticals.security,
];
