import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const items = [
  { 
    keyword: "ESTRATÉGIA", 
    desc: "Diagnóstico e planejamento com foco em resultados mensuráveis." 
  },
  { 
    keyword: "EVOLUÇÃO", 
    desc: "Implementação ágil de sistemas que aceleram operações." 
  },
  { 
    keyword: "ESCALA", 
    desc: "Estruturas preparadas para crescimento sustentável." 
  },
];

interface HubItemProps {
  item: (typeof items)[0];
  index: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
}

const HubItem = ({ item, index, isVisible, prefersReducedMotion }: HubItemProps) => {
  const delay = index * 150;
  
  const animationStyle = prefersReducedMotion 
    ? {} 
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      };

  return (
    <div 
      className="flex-1 flex flex-col items-center justify-center py-12 md:py-16"
      style={animationStyle}
    >
      <h3 className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-white tracking-tight text-center leading-tight">
        {item.keyword}
      </h3>
      <p className="mt-4 text-sol-secondary text-xs md:text-sm leading-relaxed text-center max-w-[280px]">
        {item.desc}
      </p>
    </div>
  );
};

const Hub = () => {
  const rHeader = useScrollReveal(0);
  const rContent = useScrollReveal(100);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="hub" className="relative md:min-h-screen section-padding py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div
          ref={rHeader.ref}
          className={`scroll-reveal ${rHeader.isVisible ? "visible" : ""}`}
        >
          <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
            HUB
          </p>
          <div className="border-t border-sol mb-16" />
        </div>

        {/* Content - Full width typographic layout */}
        <div 
          ref={rContent.ref}
          className="w-full"
        >
          {/* Desktop: Horizontal layout with vertical separators */}
          <div className="hidden md:flex items-stretch">
            {items.map((item, i) => (
              <div key={item.keyword} className="flex items-stretch">
                <HubItem 
                  item={item} 
                  index={i} 
                  isVisible={rContent.isVisible}
                  prefersReducedMotion={prefersReducedMotion}
                />
                {/* Vertical separator - not after last item */}
                {i < items.length - 1 && (
                  <div 
                    className="w-px self-stretch my-8"
                    style={{ 
                      backgroundColor: 'rgba(192, 192, 192, 0.15)',
                      opacity: rContent.isVisible ? 1 : 0,
                      transition: `opacity 0.6s ease-out ${(i + 1) * 150}ms`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical layout with horizontal separators */}
          <div className="md:hidden flex flex-col">
            {items.map((item, i) => (
              <div key={item.keyword}>
                <HubItem 
                  item={item} 
                  index={i} 
                  isVisible={rContent.isVisible}
                  prefersReducedMotion={prefersReducedMotion}
                />
                {/* Horizontal separator - not after last item */}
                {i < items.length - 1 && (
                  <div 
                    className="h-px mx-8"
                    style={{ 
                      backgroundColor: 'rgba(192, 192, 192, 0.15)',
                      opacity: rContent.isVisible ? 1 : 0,
                      transition: `opacity 0.6s ease-out ${(i + 1) * 150}ms`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hub;
