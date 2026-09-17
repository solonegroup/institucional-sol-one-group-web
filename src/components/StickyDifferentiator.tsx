import { Layers, Target, TrendingUp, type LucideIcon } from "lucide-react";

interface CardItem {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    icon: Layers,
    number: "01",
    title: "Construção de Valor",
    description:
      "Entramos na formação, no crescimento e na consolidação, não apenas no resultado final.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Equity de Longo Prazo",
    description:
      "Participação real nos negócios. Sócios da tese, não fornecedores do projeto.",
  },
  {
    icon: Target,
    number: "03",
    title: "Operação Real",
    description:
      "Hipóteses viram empresa, produto e posicionamento de mercado.",
  },
];

const StickyDifferentiator = () => {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24">
          {/* Left: sticky */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="uppercase text-xs tracking-[0.2em] text-white/40 mb-6">
              DIFERENCIAL
            </p>
            <h2 className="font-display font-medium text-2xl md:text-4xl lg:text-5xl text-white/90 leading-snug">
              Não prestamos um serviço pontual. Participamos da construção de
              soluções que ganham corpo próprio, escala e valor de mercado ao
              longo do tempo.
            </h2>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {cards.map(({ icon: Icon, number, title, description }) => (
              <div
                key={number}
                className="bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-10 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.03]"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                  <Icon size={24} strokeWidth={1.5} className="text-white/70" />
                </div>
                <p className="text-xs text-white/70 mb-4">{number}</p>
                <h3 className="text-white/90 font-medium text-xl mb-2">
                  {title}
                </h3>
                <p className="text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyDifferentiator;
