export type Language = "pt" | "en" | "zh";

export const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "ZH" },
];

type Dict = {
  nav: { manifesto: string; grupo: string; contato: string };
  hero: { title: string; subtitle: string; scroll: string };
  manifesto: {
    eyebrow: string;
    blocks: { title: string; impact: string; paragraph: string }[];
    closingTitle: string;
    closingSubtitle: string;
    cta: string;
  };
  hub: {
    eyebrow: string;
    items: { keyword: string; desc: string }[];
  };
  capacidade: {
    eyebrow: string;
    items: { title: string; body: string }[];
  };
  presenca: {
    eyebrow: string;
    items: { title: string; description: string }[];
  };
  grupo: {
    eyebrow: string;
    layerLabels: { top: string; middle: string; base: string };
    steps: { eyebrow: string; title: string; body: string }[];
  };
  footer: {
    description: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    contactTitle: string;
    cta: string;
    location: string;
    address: string;
    cnpj: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  verticalPage: {
    home: string;
    about: string;
    differential: string;
    exploreVerticals: string;
    current: string;
    next: string;
    scroll: string;
    ctaEyebrow: string;
    ctaHeadline: string;
    ctaButton: string;
    verticals: string;
    modelLabel: string;
    portfolio: { eyebrow: string; title: string; subtitle: string };
  };
  investor: {
    bandEyebrow: string;
    bandHeadline: string;
    bandSubline: string;
    bandCta: string;
    footerLink: string;
    popoverTitle: string;
    popoverHint: string;
    whatsappMessage: string;
    emailSubject: string;
    emailBody: string;
  };
};

export const translations: Record<Language, Dict> = {
  pt: {
    nav: { manifesto: "MANIFESTO", grupo: "GRUPO", contato: "CONTATO" },
    hero: {
      title: "SYSTEMS OPERATIONS LEADERSHIP",
      subtitle: "Above the Rest. ONE.",
      scroll: "SCROLL",
    },
    manifesto: {
      eyebrow: "MANIFESTO",
      blocks: [
        {
          title: "Systems",
          impact: "Cada operação tem uma lógica. Nós a encontramos, estruturamos e fazemos funcionar.",
          paragraph: "Mercados desorganizados geram ineficiência. Construímos sistemas que transformam complexidade em estrutura, e dessa estrutura extraímos resultado.",
        },
        {
          title: "Operations",
          impact: "Estratégia sem execução é só intenção. Nós entregamos o que prometemos.",
          paragraph: "Nossa presença não é remota. Acompanhamos cada etapa, cada ajuste, cada decisão, como sócios, não como fornecedores.",
        },
        {
          title: "Leadership",
          impact: "Quem lidera não segue tendências. Define padrões.",
          paragraph: "Direcionamos estratégia, crescimento e tomada de decisão com precisão. Não esperamos o mercado nos dizer o caminho. Nós o construímos.",
        },
      ],
      closingTitle: "ONE. O primeiro. O melhor.",
      closingSubtitle: "Above the Rest.",
      cta: "DESCOBRIR MAIS",
    },
    hub: {
      eyebrow: "HUB",
      items: [
        { keyword: "ESTRATÉGIA", desc: "Diagnóstico e planejamento com foco em resultados mensuráveis." },
        { keyword: "EVOLUÇÃO", desc: "Implementação ágil de sistemas que aceleram operações." },
        { keyword: "ESCALA", desc: "Estruturas preparadas para crescimento sustentável." },
      ],
    },
    capacidade: {
      eyebrow: "CAPACIDADE",
      items: [
        { title: "POSTURA", body: "Presença que define autoridade e confiança em cada interação." },
        { title: "PRECISÃO", body: "Execução cirúrgica onde cada detalhe serve a um propósito claro." },
        { title: "AUTORIDADE", body: "Domínio sutil que inspira respeito e orienta decisões." },
        { title: "IMPACTO", body: "Resultados mensuráveis que transcendem expectativas." },
      ],
    },
    presenca: {
      eyebrow: "PRESENÇA",
      items: [
        { title: "POSTURA INTEGRAL", description: "Presença que comunica antes da palavra. Corpo, olhar e silêncio alinhados em uma única intenção." },
        { title: "PRECISÃO TÁTICA", description: "Cada gesto é cálculo. Cada pausa é estratégia. Movimentos enxutos, decisões cirúrgicas." },
        { title: "AUTORIDADE SUTIL", description: "Comando sem esforço aparente. A liderança que se impõe pela densidade, não pelo volume." },
        { title: "EXECUÇÃO PRECISA", description: "Do plano à entrega sem ruído. Disciplina vertical para resultados que não admitem variação." },
      ],
    },
    grupo: {
      eyebrow: "GRUPO",
      layerLabels: {
        top: "NÚCLEO ESTRATÉGICO",
        middle: "BASE OPERACIONAL",
        base: "PROJETOS & APLICAÇÕES",
      },
      steps: [
        {
          eyebrow: "MODELO DE NEGÓCIO",
          title: "Conheça nosso modelo de negócio",
          body: "A S.O.L ONE não opera como uma empresa linear. Atuamos como uma estrutura em camadas, onde estratégia, operação e mercado funcionam de forma integrada.",
        },
        {
          eyebrow: "01 · NÚCLEO",
          title: "Núcleo Estratégico",
          body: "No topo estão os chiefs e sócios, a camada que define direção, arquitetura de crescimento, alocação de capital e tomada de decisão. É aqui que a visão vira direção.",
        },
        {
          eyebrow: "02 · OPERAÇÃO",
          title: "Base Operacional",
          body: "No centro está quem faz acontecer. Systems e Operations transformam estratégia em execução: constroem processos, implementam tecnologia, organizam a operação e sustentam a entrega no dia a dia.",
        },
        {
          eyebrow: "03 · MERCADO",
          title: "Projetos e Aplicações de Mercado",
          body: "Na base estão os projetos, empresas e operações estruturadas a partir desse modelo. É onde a tese ganha forma prática, seja por sociedade, estruturação ou execução direta.",
        },
      ],
    },
    footer: {
      description: "Hub multinacional de negócios inovadores. Transformamos operações usando a tecnologia como meio.",
      columns: [
        {
          title: "Estrutura",
          links: [
            { label: "Manifesto", href: "/#manifesto" },
            { label: "Grupo", href: "/#grupo" },
            { label: "Contato", href: "https://wa.me/5585991124238" },
          ],
        },
        {
          title: "Grupo",
          links: [
            { label: "S.O.L & Projects", href: "/grupo/projects" },
            { label: "S.O.L & Services", href: "/grupo/services" },
            { label: "S.O.L & Assistance", href: "/grupo/assistance" },
            { label: "S.O.L & Security", href: "/grupo/security" },
          ],
        },
      ],
      contactTitle: "Contato",
      cta: "FALAR COM A EQUIPE",
      location: "Fortaleza, Ceará, Brasil",
      address: "International Trade Center - R. Ary Barroso, 70 - Papicu\nFortaleza - CE, 60175-705 - Andar 15, Sala 1515",
      cnpj: "CNPJ: 64.009.728/0001-67",
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
    },
    verticalPage: {
      home: "INÍCIO",
      about: "SOBRE",
      differential: "DIFERENCIAL",
      exploreVerticals: "EXPLORE AS VERTICAIS",
      current: "ATUAL",
      next: "PRÓXIMA VERTICAL",
      scroll: "ROLE PARA EXPLORAR",
      ctaEyebrow: "PRÓXIMO PASSO",
      ctaHeadline: "Vamos conversar sobre {vertical}.",
      ctaButton: "FALAR COM A EQUIPE",
      verticals: "VERTICAIS",
      modelLabel: "Modelo de negócio",
      portfolio: {
        eyebrow: "PORTFÓLIO",
        title: "Marcas que nasceram desta tese",
        subtitle: "Operações reais construídas a partir do nosso modelo. Clique para visitar cada projeto.",
      },
    },
    investor: {
      bandEyebrow: "CAPITAL PARTNERS",
      bandHeadline: "Pronto para levar o seu negócio para outro nível?",
      bandSubline: "Para empresas que estão preparadas para o futuro",
      bandCta: "CONVERSAR",
      footerLink: "CAPITAL PARTNERS",
      popoverTitle: "CAPITAL PARTNERS",
      popoverHint: "Escolha como prefere iniciar a conversa.",
      whatsappMessage: "Olá. Tenho interesse em conhecer melhor a S.O.L. ONE e gostaria de iniciar uma conversa.",
      emailSubject: "Capital Partners · S.O.L. ONE",
      emailBody: "Olá,\n\nGostaria de iniciar uma conversa reservada sobre a S.O.L. ONE.\n\n",
    },
  },
  en: {
    nav: { manifesto: "MANIFESTO", grupo: "GROUP", contato: "CONTACT" },
    hero: {
      title: "SYSTEMS OPERATIONS LEADERSHIP",
      subtitle: "Above the Rest. ONE.",
      scroll: "SCROLL",
    },
    manifesto: {
      eyebrow: "MANIFESTO",
      blocks: [
        {
          title: "Systems",
          impact: "Every operation has a logic. We find it, structure it, and make it work.",
          paragraph: "Disorganized markets create inefficiency. We build systems that turn complexity into structure, and from that structure we extract results.",
        },
        {
          title: "Operations",
          impact: "Strategy without execution is just intention. We deliver what we promise.",
          paragraph: "Our presence isn't remote. We follow every step, every adjustment, every decision, as partners, not vendors.",
        },
        {
          title: "Leadership",
          impact: "Those who lead don't follow trends. They set standards.",
          paragraph: "We drive strategy, growth, and decision-making with precision. We don't wait for the market to show us the way. We build it.",
        },
      ],
      closingTitle: "ONE. The first. The best.",
      closingSubtitle: "Above the Rest.",
      cta: "DISCOVER MORE",
    },
    hub: {
      eyebrow: "HUB",
      items: [
        { keyword: "STRATEGY", desc: "Diagnosis and planning focused on measurable results." },
        { keyword: "EVOLUTION", desc: "Agile implementation of systems that accelerate operations." },
        { keyword: "SCALE", desc: "Structures ready for sustainable growth." },
      ],
    },
    capacidade: {
      eyebrow: "CAPACITY",
      items: [
        { title: "POSTURE", body: "Presence that defines authority and trust in every interaction." },
        { title: "PRECISION", body: "Surgical execution where every detail serves a clear purpose." },
        { title: "AUTHORITY", body: "Subtle command that inspires respect and guides decisions." },
        { title: "IMPACT", body: "Measurable results that transcend expectations." },
      ],
    },
    presenca: {
      eyebrow: "PRESENCE",
      items: [
        { title: "FULL POSTURE", description: "Presence that communicates before words. Body, gaze and silence aligned to a single intent." },
        { title: "TACTICAL PRECISION", description: "Every gesture is calculation. Every pause is strategy. Lean movements, surgical decisions." },
        { title: "SUBTLE AUTHORITY", description: "Effortless command. Leadership imposed by density, not by volume." },
        { title: "PRECISE EXECUTION", description: "From plan to delivery without noise. Vertical discipline for results that admit no variation." },
      ],
    },
    grupo: {
      eyebrow: "GROUP",
      layerLabels: {
        top: "STRATEGIC CORE",
        middle: "OPERATIONAL BASE",
        base: "PROJECTS & APPLICATIONS",
      },
      steps: [
        {
          eyebrow: "BUSINESS MODEL",
          title: "Discover our business model",
          body: "S.O.L ONE doesn't operate as a linear company. We work as a layered structure where strategy, operations and market function as one.",
        },
        {
          eyebrow: "01 · CORE",
          title: "Strategic Core",
          body: "At the top are the chiefs and partners, the layer that sets direction, growth architecture, capital allocation and decision-making. This is where vision becomes direction.",
        },
        {
          eyebrow: "02 · OPERATION",
          title: "Operational Base",
          body: "At the center is the team that makes it happen. Systems and Operations turn strategy into execution: building processes, implementing technology, organizing operations and sustaining delivery day after day.",
        },
        {
          eyebrow: "03 · MARKET",
          title: "Projects and Market Applications",
          body: "At the base are projects, companies and operations built from this model. It's where the thesis takes practical shape, whether by partnership, structuring or direct execution.",
        },
      ],
    },
    footer: {
      description: "A multinational hub for innovative businesses. We transform operations using technology as a means.",
      columns: [
        {
          title: "Structure",
          links: [
            { label: "Manifesto", href: "/#manifesto" },
            { label: "Group", href: "/#grupo" },
            { label: "Contact", href: "https://wa.me/5585991124238" },
          ],
        },
        {
          title: "Group",
          links: [
            { label: "S.O.L & Projects", href: "/grupo/projects" },
            { label: "S.O.L & Services", href: "/grupo/services" },
            { label: "S.O.L & Assistance", href: "/grupo/assistance" },
            { label: "S.O.L & Security", href: "/grupo/security" },
          ],
        },
      ],
      contactTitle: "Contact",
      cta: "TALK TO THE TEAM",
      location: "Fortaleza, Ceará, Brazil",
      address: "International Trade Center - R. Ary Barroso, 70 - Papicu\nFortaleza - CE, 60175-705 - Floor 15, Suite 1515",
      cnpj: "CNPJ: 64.009.728/0001-67",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    verticalPage: {
      home: "HOME",
      about: "ABOUT",
      differential: "EDGE",
      exploreVerticals: "EXPLORE THE VERTICALS",
      current: "CURRENT",
      next: "NEXT VERTICAL",
      scroll: "SCROLL TO EXPLORE",
      ctaEyebrow: "NEXT STEP",
      ctaHeadline: "Let's talk about {vertical}.",
      ctaButton: "TALK TO THE TEAM",
      verticals: "VERTICALS",
      modelLabel: "Business model",
      portfolio: {
        eyebrow: "PORTFOLIO",
        title: "Brands born from this thesis",
        subtitle: "Real operations built on our model. Click to visit each project.",
      },
    },
    investor: {
      bandEyebrow: "CAPITAL PARTNERS",
      bandHeadline: "Reserved conversations with those who see the thesis before the product.",
      bandSubline: "For funds, family offices and strategic partners. Discretion, focus and direction.",
      bandCta: "TALK TO US",
      footerLink: "CAPITAL PARTNERS",
      popoverTitle: "CAPITAL PARTNERS",
      popoverHint: "Choose how you'd like to start the conversation.",
      whatsappMessage: "Hello. I'm interested in learning more about S.O.L. ONE and would like to start a conversation.",
      emailSubject: "Capital Partners · S.O.L. ONE",
      emailBody: "Hello,\n\nI'd like to open a reserved conversation about S.O.L. ONE.\n\n",
    },
  },
  zh: {
    nav: { manifesto: "宣言", grupo: "集团", contato: "联系" },
    hero: {
      title: "系统 · 运营 · 领导力",
      subtitle: "超越其余。唯一。",
      scroll: "向下滚动",
    },
    manifesto: {
      eyebrow: "宣言",
      blocks: [
        {
          title: "系统 Systems",
          impact: "每一项业务都有其逻辑。我们发现它,构建它,使其运转。",
          paragraph: "混乱的市场带来低效。我们构建系统,将复杂转化为结构,并从结构中提取成果。",
        },
        {
          title: "运营 Operations",
          impact: "没有执行的战略只是空想。我们兑现承诺。",
          paragraph: "我们的存在不是远程的。我们关注每一步、每一次调整、每一个决策,像合伙人,而非供应商。",
        },
        {
          title: "领导力 Leadership",
          impact: "领导者不追随潮流,而定义标准。",
          paragraph: "我们以精准引领战略、增长与决策。我们不等待市场指引方向。我们开辟它。",
        },
      ],
      closingTitle: "ONE。第一。最佳。",
      closingSubtitle: "超越其余。",
      cta: "了解更多",
    },
    hub: {
      eyebrow: "枢纽",
      items: [
        { keyword: "战略", desc: "以可衡量结果为导向的诊断与规划。" },
        { keyword: "演进", desc: "敏捷实施系统,加速运营。" },
        { keyword: "规模", desc: "为可持续增长准备的结构。" },
      ],
    },
    capacidade: {
      eyebrow: "能力",
      items: [
        { title: "姿态", body: "在每次互动中定义权威与信任的存在。" },
        { title: "精准", body: "每个细节都服务于明确目标的精准执行。" },
        { title: "权威", body: "激发尊重并引导决策的微妙掌控。" },
        { title: "影响力", body: "超越预期的可衡量成果。" },
      ],
    },
    presenca: {
      eyebrow: "存在",
      items: [
        { title: "完整姿态", description: "言语之前的存在。身、目、静合于一念。" },
        { title: "战术精准", description: "每个动作皆为计算,每次停顿皆为战略。精简动作,精准决策。" },
        { title: "微妙权威", description: "毫不费力的指挥。以密度而非音量树立的领导力。" },
        { title: "精确执行", description: "从计划到交付,毫无杂音。垂直纪律带来不容偏差的结果。" },
      ],
    },
    grupo: {
      eyebrow: "集团",
      layerLabels: {
        top: "战略核心",
        middle: "运营基座",
        base: "项目与应用",
      },
      steps: [
        {
          eyebrow: "商业模式",
          title: "了解我们的商业模式",
          body: "S.O.L ONE 不以线性公司方式运作。我们是一个分层结构,战略、运营与市场协同一体。",
        },
        {
          eyebrow: "01 · 核心",
          title: "战略核心",
          body: "顶层是首席与合伙人,决定方向、增长架构、资本配置与决策的一层。愿景在此化为方向。",
        },
        {
          eyebrow: "02 · 运营",
          title: "运营基座",
          body: "中心是真正落地的团队。系统与运营将战略转化为执行:构建流程、实施技术、组织运营、持续交付。",
        },
        {
          eyebrow: "03 · 市场",
          title: "项目与市场应用",
          body: "基座是基于该模式构建的项目、公司和业务。理念在此化为实践,通过合伙、构建或直接执行。",
        },
      ],
    },
    footer: {
      description: "跨国创新业务枢纽。以技术为手段，转化运营。",
      columns: [
        {
          title: "结构",
          links: [
            { label: "宣言", href: "/#manifesto" },
            { label: "集团", href: "/#grupo" },
            { label: "联系", href: "https://wa.me/5585991124238" },
          ],
        },
        {
          title: "集团",
          links: [
            { label: "S.O.L & Projects", href: "/grupo/projects" },
            { label: "S.O.L & Services", href: "/grupo/services" },
            { label: "S.O.L & Assistance", href: "/grupo/assistance" },
            { label: "S.O.L & Security", href: "/grupo/security" },
          ],
        },
      ],
      contactTitle: "联系",
      cta: "联系团队",
      location: "巴西 塞阿拉州 福塔莱萨",
      address: "International Trade Center - R. Ary Barroso, 70 - Papicu\nFortaleza - CE, 60175-705 - 15楼1515室",
      cnpj: "CNPJ: 64.009.728/0001-67",
      rights: "保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
    verticalPage: {
      home: "首页",
      about: "关于",
      differential: "差异",
      exploreVerticals: "探索各业务线",
      current: "当前",
      next: "下一业务线",
      scroll: "向下滚动了解更多",
      ctaEyebrow: "下一步",
      ctaHeadline: "让我们聊聊 {vertical}。",
      ctaButton: "联系团队",
      verticals: "业务线",
      modelLabel: "商业模式",
      portfolio: {
        eyebrow: "项目集",
        title: "源自此理念的品牌",
        subtitle: "基于我们模式构建的真实业务。点击访问每个项目。",
      },
    },
    investor: {
      bandEyebrow: "CAPITAL PARTNERS",
      bandHeadline: "与那些在产品之前看见理念的人进行私密对话。",
      bandSubline: "面向基金、家族办公室与战略合作伙伴。低调、专注、方向感。",
      bandCta: "联系我们",
      footerLink: "CAPITAL PARTNERS",
      popoverTitle: "CAPITAL PARTNERS",
      popoverHint: "请选择您偏好的联系方式。",
      whatsappMessage: "您好。我有兴趣进一步了解 S.O.L. ONE，希望能开启一次交流。",
      emailSubject: "Capital Partners · S.O.L. ONE",
      emailBody: "您好,\n\n我希望就 S.O.L. ONE 展开一次私密对话。\n\n",
    },
  },
};
