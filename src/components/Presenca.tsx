import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ArrowRight } from "lucide-react";

const items = [
  {
    num: "01",
    title: "POSTURA INTEGRAL",
    description:
      "Presença que comunica antes da palavra. Corpo, olhar e silêncio alinhados em uma única intenção.",
  },
  {
    num: "02",
    title: "PRECISÃO TÁTICA",
    description:
      "Cada gesto é cálculo. Cada pausa é estratégia. Movimentos enxutos, decisões cirúrgicas.",
  },
  {
    num: "03",
    title: "AUTORIDADE SUTIL",
    description:
      "Comando sem esforço aparente. A liderança que se impõe pela densidade, não pelo volume.",
  },
  {
    num: "04",
    title: "EXECUÇÃO PRECISA",
    description:
      "Do plano à entrega sem ruído. Disciplina vertical para resultados que não admitem variação.",
  },
];

interface PresencaItemProps {
  item: (typeof items)[0];
  index: number;
  isOpen: boolean;
  hasOpen: boolean;
  onToggle: () => void;
}

const PresencaItem = ({
  item,
  index,
  isOpen,
  hasOpen,
  onToggle,
}: PresencaItemProps) => {
  const r = useScrollReveal(index * 100);
  const reduced = usePrefersReducedMotion();

  const dimmed = hasOpen && !isOpen;

  return (
    <div
      ref={r.ref}
      className={`scroll-reveal ${r.isVisible ? "visible" : ""} border-t border-sol ${
        index === items.length - 1 ? "border-b" : ""
      } transition-opacity duration-300 ${dimmed ? "opacity-50" : "opacity-100"}`}
      style={{
        borderLeft: isOpen ? "1px solid hsl(var(--sol-star) / 1)" : "1px solid transparent",
        transition: reduced
          ? undefined
          : "opacity 300ms ease, border-color 300ms ease",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full flex items-center gap-3 md:gap-0 md:justify-between px-4 md:px-8 py-5 md:py-6 cursor-pointer text-left"
      >
        <span
          className="font-display text-2xl md:text-5xl font-bold text-sol-watermark select-none transition-transform duration-300 shrink-0"
          style={{ transform: isOpen ? "scale(1.05)" : "scale(1)" }}
        >
          {item.num}
        </span>
        <span className="text-sol-accent text-[11px] md:text-[13px] tracking-[0.18em] md:tracking-[0.2em] font-display uppercase flex-1 md:text-center md:px-4">
          {item.title}
        </span>
        <ArrowRight
          className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-sol-star group-hover:text-sol-accent transition-all duration-300"
          style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-out"
        style={{ maxHeight: isOpen ? "240px" : "0px" }}
      >
        <div
          className="px-5 md:px-8 pb-8 pr-16 md:pr-24"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(8px)",
            transition: reduced
              ? undefined
              : "opacity 0.4s ease-out, transform 0.4s ease-out",
            transitionDelay: isOpen ? "100ms" : "0ms",
          }}
        >
          <p className="text-sol-muted text-sm md:text-base leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Presenca = () => {
  const rHeader = useScrollReveal(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="presenca"
      className="relative md:min-h-screen section-padding py-16 md:py-24"
    >
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={rHeader.ref}
          className={`scroll-reveal ${rHeader.isVisible ? "visible" : ""}`}
        >
          <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
            PRESENÇA
          </p>
          <div className="border-t border-sol mb-16" />
        </div>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <PresencaItem
              key={item.num}
              item={item}
              index={i}
              isOpen={openIndex === i}
              hasOpen={openIndex !== null}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presenca;
