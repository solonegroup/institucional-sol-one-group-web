import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const items = [
  { num: "01", title: "POSTURA", body: "Presença que define autoridade e confiança em cada interação." },
  { num: "02", title: "PRECISÃO", body: "Execução cirúrgica onde cada detalhe serve a um propósito claro." },
  { num: "03", title: "AUTORIDADE", body: "Domínio sutil que inspira respeito e orienta decisões." },
  { num: "04", title: "IMPACTO", body: "Resultados mensuráveis que transcendem expectativas." },
];

const DIVIDER = "rgba(192, 192, 192, 0.12)";

interface CapacidadeItemProps {
  item: (typeof items)[0];
  index: number;
  isVisible: boolean;
  prefersReducedMotion: boolean;
}

const CapacidadeItem = ({ item, index, isVisible, prefersReducedMotion }: CapacidadeItemProps) => {
  const delay = index * 120;

  const animationStyle = prefersReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      };

  return (
    <div className="py-8 md:py-10 px-2 md:px-8" style={animationStyle}>
      <div className="flex items-baseline gap-5">
        <span
          className="font-display text-xs tracking-[0.15em] text-sol-muted shrink-0"
          style={{ opacity: 0.3 }}
        >
          {item.num}
        </span>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
          {item.title}
        </h3>
      </div>
      <p className="mt-3 text-sol-secondary text-sm leading-relaxed max-w-[520px] pl-9">
        {item.body}
      </p>
    </div>
  );
};

const Capacidade = () => {
  const rHeader = useScrollReveal(0);
  const rContent = useScrollReveal(100);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Split into two columns for desktop (2x2 grid)
  const leftColumn = [items[0], items[2]];
  const rightColumn = [items[1], items[3]];

  return (
    <section
      id="capacidade"
      className="relative md:min-h-screen section-padding py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div
          ref={rHeader.ref}
          className={`scroll-reveal ${rHeader.isVisible ? "visible" : ""}`}
        >
          <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
            CAPACIDADE
          </p>
          <div className="border-t border-sol mb-16" />
        </div>

        <div ref={rContent.ref}>
          {/* Desktop: 2 columns x 2 rows with vertical separator */}
          <div className="hidden md:grid md:grid-cols-2 relative">
            {/* Vertical separator between columns */}
            <div
              className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
              style={{
                backgroundColor: DIVIDER,
                opacity: rContent.isVisible ? 1 : 0,
                transition: "opacity 0.6s ease-out 200ms",
              }}
            />

            {/* Left column */}
            <div>
              {leftColumn.map((item, i) => {
                const originalIdx = items.indexOf(item);
                return (
                  <div key={item.num}>
                    <CapacidadeItem
                      item={item}
                      index={originalIdx}
                      isVisible={rContent.isVisible}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                    {i < leftColumn.length - 1 && (
                      <div
                        className="h-px"
                        style={{ backgroundColor: DIVIDER }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right column */}
            <div>
              {rightColumn.map((item, i) => {
                const originalIdx = items.indexOf(item);
                return (
                  <div key={item.num}>
                    <CapacidadeItem
                      item={item}
                      index={originalIdx}
                      isVisible={rContent.isVisible}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                    {i < rightColumn.length - 1 && (
                      <div
                        className="h-px"
                        style={{ backgroundColor: DIVIDER }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: single column list */}
          <div className="md:hidden flex flex-col">
            {items.map((item, i) => (
              <div key={item.num}>
                <CapacidadeItem
                  item={item}
                  index={i}
                  isVisible={rContent.isVisible}
                  prefersReducedMotion={prefersReducedMotion}
                />
                {i < items.length - 1 && (
                  <div
                    className="h-px"
                    style={{ backgroundColor: DIVIDER }}
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

export default Capacidade;
