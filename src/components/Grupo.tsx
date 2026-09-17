import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";

type StepId = 0 | 1 | 2 | 3;

const stepMeta: { textSide: "left" | "right"; highlight: "all" | "top" | "middle" | "base" }[] = [
  { textSide: "left", highlight: "all" },
  { textSide: "left", highlight: "top" },
  { textSide: "right", highlight: "middle" },
  { textSide: "left", highlight: "base" },
];

interface PyramidProps {
  highlight: "all" | "top" | "middle" | "base";
  reducedMotion: boolean;
}

const Pyramid = ({ highlight, reducedMotion }: PyramidProps) => {
  const layerStyle = (key: "top" | "middle" | "base") => {
    const isActive = highlight === "all" || highlight === key;
    if (reducedMotion) {
      return {
        opacity: isActive ? 1 : 0.2,
        transition: "opacity 0.6s ease",
      } as React.CSSProperties;
    }
    return {
      opacity: isActive ? 1 : 0.12,
      filter: isActive ? "blur(0px)" : "blur(3px)",
      transform:
        highlight !== "all" && isActive ? "scale(1.04)" : "scale(1)",
      transition: "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: isActive && highlight !== "all"
        ? "0 0 60px rgba(192,192,192,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
        : "inset 0 1px 0 rgba(255,255,255,0.04)",
    } as React.CSSProperties;
  };


  const metallic =
    "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 45%, #3a3a3a 55%, #1a1a1a 100%)";

  return (
    <div className="relative w-full max-w-[520px] mx-auto flex flex-col items-center gap-3 select-none">
      {/* TOP */}
      <div className="relative w-[40%]" style={layerStyle("top")}>
        <div
          className="border border-sol-highlight h-[100px] flex items-center justify-center"
          style={{
            background: metallic,
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* MIDDLE */}
      <div className="relative w-[68%]" style={layerStyle("middle")}>
        <div
          className="border border-sol-highlight h-[88px] flex items-center justify-center"
          style={{
            background: metallic,
            clipPath: "polygon(12% 0, 88% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* BASE */}
      <div className="relative w-full" style={layerStyle("base")}>
        <div
          className="border border-sol-highlight h-[104px] flex items-center justify-center"
          style={{
            background: metallic,
            clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>
    </div>
  );
};

interface NarrativeProps {
  step: { eyebrow: string; title: string; body: string };
  reducedMotion: boolean;
  isExiting: boolean;
}

const Narrative = ({ step, reducedMotion, isExiting }: NarrativeProps) => {
  const style: React.CSSProperties = reducedMotion
    ? {
        opacity: isExiting ? 0 : 1,
        transition: "opacity 250ms ease-in-out",
      }
    : isExiting
    ? {
        opacity: 0,
        transform: "translateY(10px)",
        filter: "blur(2px)",
        transition:
          "opacity 250ms ease-in, transform 250ms ease-in, filter 250ms ease-in",
      }
    : {
        opacity: 1,
        transform: "translateY(0)",
        filter: "blur(0px)",
        transition:
          "opacity 500ms ease-out, transform 500ms ease-out, filter 500ms ease-out",
      };

  return (
    <div aria-live="polite" className="max-w-[460px]" style={style}>
      <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-5">
        {step.eyebrow}
      </p>
      <div className="border-t border-sol mb-8 w-12" />
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6">
        {step.title}
      </h2>
      <p className="text-sol-secondary text-base md:text-lg leading-relaxed">
        {step.body}
      </p>
    </div>
  );
};

const Grupo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<StepId>(0);
  const [displayStep, setDisplayStep] = useState<StepId>(0);
  const [isExiting, setIsExiting] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useLanguage();
  const steps = t.grupo.steps.map((s, i) => ({
    ...s,
    id: i as StepId,
    textSide: stepMeta[i].textSide,
    highlight: stepMeta[i].highlight,
  }));
  

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setActiveStep(0);
        return;
      }
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / total);
      const step = Math.min(3, Math.floor(progress * 4)) as StepId;
      setActiveStep(step);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Crossfade: exit current text, then swap content, then enter
  useEffect(() => {
    if (activeStep === displayStep) return;
    setIsExiting(true);
    const t = setTimeout(() => {
      setDisplayStep(activeStep);
      setIsExiting(false);
    }, 250);
    return () => clearTimeout(t);
  }, [activeStep, displayStep]);

  const current = steps[displayStep];
  const isTextLeft = current.textSide === "left";

  return (
    <section
      id="grupo"
      ref={sectionRef}
      className="relative md:[height:400vh]"
    >
      {/* Desktop: sticky storytelling */}
      <div className="hidden md:block sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-10 left-0 right-0 section-padding">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
              {t.grupo.eyebrow}
            </p>
            <div className="border-t border-sol" />
          </div>
        </div>

        <div className="h-full section-padding flex items-center">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 gap-16 items-center">
            {/* Text column - always col 1, alignment shifts based on side */}
            <div
              className="flex"
              style={{
                justifyContent: isTextLeft ? "flex-start" : "flex-end",
                transform: isExiting
                  ? `translateX(${isTextLeft ? -12 : 12}px)`
                  : "translateX(0)",
                transition: reducedMotion
                  ? "none"
                  : "transform 500ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Narrative
                step={current}
                reducedMotion={reducedMotion}
                isExiting={isExiting}
              />
            </div>

            {/* Pyramid column - always col 2, alignment shifts based on side */}
            <div
              className="flex items-center"
              style={{
                justifyContent: isTextLeft ? "flex-end" : "flex-start",
                transition: "justify-content 600ms ease",
              }}
            >
              <Pyramid
                highlight={current.highlight}
                reducedMotion={reducedMotion}
              />
            </div>
          </div>
        </div>


        {/* Step indicator */}
        <div className="absolute bottom-10 left-0 right-0 section-padding">
          <div className="max-w-[1400px] mx-auto flex items-center gap-3">
            {steps.map((s) => (
              <div
                key={s.id}
                className="h-px transition-all duration-500"
                style={{
                  width: activeStep === s.id ? 48 : 16,
                  backgroundColor:
                    activeStep === s.id
                      ? "var(--sol-accent)"
                      : "var(--sol-border-highlight)",
                }}
              />
            ))}
            <span className="text-sol-muted text-[10px] tracking-[0.25em] ml-3">
              0{activeStep + 1} / 04
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: stacked panels */}
      <div className="md:hidden">
        <div className="section-padding pt-16">
          <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
            {t.grupo.eyebrow}
          </p>
          <div className="border-t border-sol mb-12" />
        </div>

        {steps.map((s) => (
          <div
            key={s.id}
            className="section-padding flex flex-col items-center justify-center gap-10 py-14"
          >
            <div className="w-full max-w-[320px]">
              <Pyramid highlight={s.highlight} reducedMotion={reducedMotion} />
            </div>
            <Narrative step={s} reducedMotion={reducedMotion} isExiting={false} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Grupo;
