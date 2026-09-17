import { Link } from "react-router-dom";
import SolOneButton from "@/components/SolOneButton";
import AboutBentoGrid from "@/components/AboutBentoGrid";
import StickyDifferentiator from "@/components/StickyDifferentiator";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Layers,
  TrendingUp,
  Target,
  Filter,
  GitBranch,
  Gauge,
  Network,
  TrendingDown,
  Repeat,
  Server,
  Shield,
  Activity,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useScrollToTopOnRouteChange } from "@/hooks/useScrollToTopOnRouteChange";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_WHATSAPP_HREF } from "@/components/InvestorRelations";
import {
  VerticalData,
  verticals,
  verticalsList,
  VerticalSlug,
} from "@/content/verticals";
import avaluzLogo from "@/assets/portfolio/avaluz.png";
import voltzLogo from "@/assets/portfolio/voltz-talent.png";
import guioLogo from "@/assets/portfolio/guio.svg";
import pharosLogo from "@/assets/portfolio/pharos.png";
import fitfyLogo from "@/assets/portfolio/fitfy.png";
import projectsHero from "@/assets/verticals/projects-hero.jpg";
import servicesHero from "@/assets/verticals/services-hero.jpg";
import assistanceHero from "@/assets/verticals/assistance-hero.jpg";
import securityHero from "@/assets/verticals/security-hero.jpg";

const projectsPortfolio = [
  { name: "Avaluz", sector: "Avaliação", url: "https://avaluz.com.br/", logo: avaluzLogo, scale: 1.45 },
  { name: "Voltz Talent", sector: "Talento", url: "https://voltztalent.com/", logo: voltzLogo, scale: 1 },
  { name: "Guio", sector: "Mobilidade", url: "https://www.useguio.com.br/", logo: guioLogo, scale: 1 },
  { name: "Pharos", sector: "Legal", url: "https://www.pharoslaw.com.br/", logo: pharosLogo, scale: 1.4 },
  { name: "Fitfy", sector: "Wellness", url: "https://fitfy-shine-studio.lovable.app", logo: fitfyLogo, scale: 1 },
];

interface Metric {
  value: string;
  label: string;
}

interface VerticalVisuals {
  hero: string;
  metrics: Metric[];
}

const verticalVisuals: Record<VerticalSlug, VerticalVisuals> = {
  projects: {
    hero: projectsHero,
    metrics: [
      { value: "05", label: "Ativos no portfólio" },
      { value: "∞", label: "Horizonte de longo prazo" },
      { value: "04", label: "Setores ativos" },
      { value: "EQUITY", label: "Modelo de participação" },
    ],
  },
  services: {
    hero: servicesHero,
    metrics: [
      { value: "PREMIUM", label: "Padrão de execução" },
      { value: "MULTI", label: "Disciplinas integradas" },
      { value: "SOB SELEÇÃO", label: "Critério de aceite" },
      { value: "ALTA", label: "Exigência técnica" },
    ],
  },
  assistance: {
    hero: assistanceHero,
    metrics: [
      { value: "24/7", label: "Disponibilidade contínua" },
      { value: "EXTERNO", label: "Modelo operacional" },
      { value: "RECORRENTE", label: "Cadência de entrega" },
      { value: "−CUSTO", label: "Eficiência estrutural" },
    ],
  },
  security: {
    hero: securityHero,
    metrics: [
      { value: "INFRA", label: "Fundação técnica" },
      { value: "CYBER", label: "Defesa aplicada" },
      { value: "100%", label: "Foco em continuidade" },
      { value: "HARDENED", label: "Ambiente endurecido" },
    ],
  },
};

const pillarIconMap: Record<string, LucideIcon> = {
  "CONSTRUÇÃO DE VALOR": Layers,
  "EQUITY DE LONGO PRAZO": TrendingUp,
  "OPERAÇÃO REAL": Target,
  "SELEÇÃO CRITERIOSA": Filter,
  MULTIDISCIPLINAR: GitBranch,
  "ALTA EXIGÊNCIA": Gauge,
  "ESTRUTURA EXTERNA": Network,
  "CUSTO REDUZIDO": TrendingDown,
  "CAPACIDADE CONTÍNUA": Repeat,
  "FUNDAÇÃO SÓLIDA": Server,
  "DEFESA EFETIVA": Shield,
  "CONTINUIDADE OPERACIONAL": Activity,
};

interface VerticalPageProps {
  data: VerticalData;
}

const VerticalPage = ({ data }: VerticalPageProps) => {
  useScrollToTopOnRouteChange();
  const { t } = useLanguage();
  const labels = t.verticalPage;
  const visuals = verticalVisuals[data.slug];

  return (
    <div className="min-h-screen bg-background relative">
      <div className="grain-overlay" />
      <Navbar />

      {/* HERO with background image */}
      <section className="relative min-h-[82vh] md:min-h-[92vh] flex items-end overflow-hidden border-b border-sol">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={visuals.hero}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlays for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 45%, rgba(10,10,10,0.95) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 55%, rgba(10,10,10,0) 100%)",
            }}
          />
        </div>

        {/* Number watermark */}
        <span
          aria-hidden
          className="font-display absolute -top-[6vw] right-[-2vw] leading-none pointer-events-none select-none z-10"
          style={{
            fontSize: "clamp(140px, 40vw, 460px)",
            color: "var(--sol-watermark)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            mixBlendMode: "overlay",
          }}
        >
          {data.index}
        </span>

        {/* Faint vertical lines */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-sol" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-sol" />
          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-sol" />
        </div>

        <div className="relative z-20 section-padding pb-16 md:pb-32 pt-28 md:pt-40 w-full">
          <div className="max-w-[1400px] mx-auto">
            {/* Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] text-sol-muted mb-10 md:mb-12 flex-wrap"
            >
              <Link to="/" className="hover:text-foreground transition-colors">
                {labels.home}
              </Link>
              <span aria-hidden>/</span>
              <Link to="/#grupo" className="hidden sm:inline hover:text-foreground transition-colors">
                {t.nav.grupo}
              </Link>
              <span aria-hidden className="hidden sm:inline">/</span>
              <span className="text-sol-accent">{data.brand.toUpperCase()}</span>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <span className="text-sol-accent text-[11px] tracking-[0.3em] uppercase font-display">
                {data.brand}
              </span>
              <span className="h-px w-12 bg-sol-highlight" />
              <span className="text-sol-muted text-[10px] tracking-[0.3em]">
                {data.microTag}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-bold text-3xl md:text-6xl lg:text-7xl leading-[1.05] max-w-[1100px] mb-8 md:mb-10 animate-fade-in"
              style={{ animationDelay: "120ms", animationFillMode: "backwards" }}
            >
              {data.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-sol-secondary text-sm md:text-xl leading-relaxed max-w-[760px] animate-fade-in"
              style={{ animationDelay: "240ms", animationFillMode: "backwards" }}
            >
              {data.subtitle}
            </p>

            {/* CTA — apenas em Projects */}
            {data.slug === "projects" && (
              <div className="mt-10 animate-fade-in" style={{ animationDelay: "360ms", animationFillMode: "backwards" }}>
                <SolOneButton />
              </div>
            )}

            {/* Scroll cue */}
            <div className="mt-20 flex items-center gap-3 text-sol-muted text-[10px] tracking-[0.3em]">
              <ChevronDown className="w-3 h-3 animate-bounce-subtle" />
              <span>{labels.scroll}</span>
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT BENTO GRID — apenas em Projects */}
      {data.slug === "projects" && <AboutBentoGrid />}

      {/* SOBRE — coluna visual + texto (oculto em Projects, substituído pelo Bento) */}
      {data.slug !== "projects" && (
        <section className="section-padding py-20 md:py-40 border-b border-sol">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-32 space-y-8">
                <div>
                  <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-5">
                    {labels.about}
                  </p>
                  <div className="border-t border-sol-highlight w-12" />
                </div>

                <div className="relative aspect-[4/5] overflow-hidden border border-sol group">
                  <img
                    src={visuals.hero}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="w-full h-full object-cover opacity-70 transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0) 50%, rgba(10,10,10,0.9) 100%)",
                    }}
                  />
                  <span className="absolute top-3 left-3 w-4 h-px bg-sol-accent" />
                  <span className="absolute top-3 left-3 w-px h-4 bg-sol-accent" />
                  <span className="absolute bottom-3 right-3 w-4 h-px bg-sol-accent" />
                  <span className="absolute bottom-3 right-3 w-px h-4 bg-sol-accent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="text-sol-accent text-[10px] tracking-[0.3em] font-display">
                      {data.brand}
                    </span>
                    <span className="text-sol-muted text-[10px] tracking-[0.3em]">
                      {data.index} / 04
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-8">
              <p className="font-display text-2xl md:text-3xl lg:text-[34px] leading-[1.25] text-foreground">
                {data.aboutLead}
              </p>
              <p className="text-sol-secondary text-base md:text-lg leading-relaxed max-w-[760px]">
                {data.aboutBody}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PORTFÓLIO - apenas em /grupo/projects */}
      {data.slug === "projects" && (
        <section className="section-padding py-20 md:py-36 border-b border-sol">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-sol-accent text-[11px] tracking-[0.3em] uppercase font-display">
                {labels.portfolio.eyebrow}
              </span>
              <span className="h-px w-12 bg-sol-highlight" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
              <div className="md:col-span-7">
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
                  {labels.portfolio.title}
                </h2>
              </div>
              <div className="md:col-span-5 flex md:items-end">
                <p className="text-sol-secondary text-sm md:text-base leading-relaxed max-w-[420px]">
                  {labels.portfolio.subtitle}
                </p>
              </div>
            </div>

            {/* Vertical brand cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-sol-highlight">
              {projectsPortfolio.map((brand, i) => (
                <a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${brand.name}`}
                  className="group relative bg-background flex flex-col transition-all duration-500 hover:bg-sol-surface"
                >
                  {/* Logo area */}
                  <div className="h-[140px] md:h-[160px] flex items-center justify-center px-6 border-b border-sol">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      style={{ transform: `scale(${brand.scale})` }}
                      className="max-h-[56px] md:max-h-[68px] max-w-[80%] object-contain transition-all duration-500 ease-out grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Decorative chrome bar */}
                  <div
                    className="h-[3px] w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, var(--sol-accent) 50%, transparent 100%)",
                    }}
                  />

                  {/* Meta */}
                  <div className="px-5 py-5 flex items-end justify-between">
                    <div>
                      <p className="text-sol-muted text-[10px] tracking-[0.3em] mb-1.5">
                        0{i + 1}
                      </p>
                      <p className="font-display text-foreground text-base group-hover:text-sol-accent transition-colors duration-300">
                        {brand.name}
                      </p>
                      <p className="text-sol-muted text-[10px] tracking-[0.2em] uppercase mt-1">
                        {brand.sector}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sol-muted group-hover:text-sol-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DIFERENCIAL */}
      {data.slug === "projects" ? (
        <StickyDifferentiator />
      ) : (
        <section className="relative section-padding py-20 md:py-40 border-b border-sol overflow-hidden bg-sol-surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-sol-accent text-[11px] tracking-[0.3em] uppercase font-display">
                {labels.differential}
              </span>
              <span className="h-px w-12 bg-sol-highlight" />
            </div>

            <h2 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.2] max-w-[1100px] mb-20">
              {data.differentialHeadline}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sol-highlight">
              {data.differentialPillars.map((p, i) => {
                const Icon = pillarIconMap[p.keyword] ?? Layers;
                return (
                  <div
                    key={p.keyword}
                    className="bg-background p-8 md:p-10 group transition-colors duration-500 hover:bg-sol-surface"
                  >
                    {/* Icon */}
                    <div className="mb-8 inline-flex items-center justify-center w-12 h-12 border border-sol-highlight group-hover:border-sol-accent transition-all duration-500">
                      <Icon
                        size={22}
                        className="text-sol-accent transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-sol-muted text-[10px] tracking-[0.3em] mb-6">
                      0{i + 1}
                    </p>
                    <p className="font-display text-sol-accent text-xs tracking-[0.25em] uppercase mb-5">
                      {p.keyword}
                    </p>
                    <p className="text-sol-secondary text-sm md:text-base leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* NAVEGAÇÃO ENTRE VERTICAIS */}
      <section className="section-padding py-20 md:py-32 border-b border-sol">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase">
              {labels.exploreVerticals}
            </p>
            <div className="h-px flex-1 bg-sol ml-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-sol-highlight">
            {verticalsList.map((v) => {
              const isCurrent = v.slug === data.slug;
              return (
                <Link
                  key={v.slug}
                  to={`/grupo/${v.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`relative bg-background p-6 md:p-8 group transition-all duration-500 ${
                    isCurrent ? "bg-sol-surface" : "hover:bg-sol-surface"
                  }`}
                >
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-[10px] tracking-[0.3em] ${
                        isCurrent ? "text-sol-accent" : "text-sol-muted"
                      }`}
                    >
                      {v.index}
                    </span>
                    {isCurrent ? (
                      <span className="text-sol-accent text-[10px] tracking-[0.3em]">
                        {labels.current}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5 text-sol-muted group-hover:text-sol-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                    )}
                  </div>
                  <p className="text-sol-muted text-[10px] tracking-[0.25em] mb-2">
                    S.O.L &amp;
                  </p>
                  <p
                    className={`font-display text-xl ${
                      isCurrent ? "text-sol-accent" : "text-foreground"
                    }`}
                  >
                    {v.shortName}
                  </p>
                  {isCurrent && (
                    <span className="absolute left-0 top-0 bottom-0 w-px bg-sol-accent" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding py-20 md:py-40">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-8">
            {labels.ctaEyebrow}
          </p>
          <h3 className="font-display font-bold text-2xl md:text-5xl lg:text-6xl leading-[1.1] max-w-[900px] mx-auto mb-10 md:mb-12">
            {labels.ctaHeadline.replace("{vertical}", data.brand)}
          </h3>
          <a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border text-xs tracking-[0.25em] transition-all duration-300 hover:bg-sol-accent hover:text-background"
            style={{ borderColor: "var(--sol-accent)", color: "var(--sol-accent)" }}
          >
            {labels.ctaButton}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Next vertical hint */}
          <div className="mt-24 pt-12 border-t border-sol max-w-[600px] mx-auto">
            <p className="text-sol-muted text-[10px] tracking-[0.3em] uppercase mb-4">
              {labels.next}
            </p>
            <Link
              to={`/grupo/${data.nextSlug}`}
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-display text-2xl md:text-3xl text-foreground group-hover:text-sol-accent transition-colors duration-300">
                {verticals[data.nextSlug].brand}
              </span>
              <ArrowRight className="w-4 h-4 text-sol-accent group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VerticalPage;
