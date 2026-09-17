import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLanguage } from "@/i18n/LanguageContext";
import { INVESTOR_WHATSAPP } from "@/components/InvestorRelations";

const LETTERS = ["S", "O", "L"] as const;

const Manifesto = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  const { t } = useLanguage();
  const blocks = t.manifesto.blocks.map((b, i) => ({ ...b, letter: LETTERS[i] }));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = reduceMotion ? true : inView;

  const blockStagger = 150;
  const closingDelay = blockStagger * blocks.length + 200;
  const buttonDelay = closingDelay + 250;

  const redirectToWhatsApp = (message: string) => {
    window.location.href = message ? `https://wa.me/${INVESTOR_WHATSAPP}?text=${encodeURIComponent(message)}` : `https://wa.me/${INVESTOR_WHATSAPP}`;
  }

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative min-h-screen section-padding py-24 overflow-hidden"
    >
      {/* Subtle radial gradient from right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(192,192,192,0.06) 0%, rgba(192,192,192,0) 55%)",
        }}
      />

      {/* Grain overlay (local to section) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <div>
          <p
            className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{
              opacity: active ? 1 : 0,
              transition: reduceMotion ? "none" : "opacity 0.6s ease-out",
            }}
          >
            {t.manifesto.eyebrow}
          </p>
          {/* Animated divider */}
          <div className="mb-16 overflow-hidden">
            <div
              className="border-t border-sol origin-left"
              style={{
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transition: reduceMotion ? "none" : "transform 0.8s ease-out",
              }}
            />
          </div>
        </div>

        {/* S.O.L Blocks */}
        <div>
          {blocks.map((block, i) => {
            const delay = i * blockStagger;
            return (
              <div
                key={block.letter}
                className="relative"
                style={{
                  borderTop: i === 0 ? "0" : "1px solid rgba(255,255,255,0.12)",
                  borderBottom: i === blocks.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "0",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(24px)",
                  transition: reduceMotion
                    ? "none"
                    : `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
                }}
              >
                {/* Decorative letter */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 font-display font-bold leading-none select-none"
                  style={{
                    color: "rgba(255,255,255,0.05)",
                    fontSize: "clamp(120px, 32vw, 340px)",
                  }}
                >
                  {block.letter}
                </span>

                {/* Content */}
                <div className="relative grid md:grid-cols-2 gap-6 md:gap-16 py-12 md:py-24 pl-4 md:pl-[24%]">
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight">
                      {block.title}
                    </h3>
                  </div>
                  <div>
                    <p className="italic text-sol-secondary text-base md:text-xl leading-snug mb-4">
                      {block.impact}
                    </p>
                    <p className="text-sol-muted text-sm md:text-base leading-relaxed max-w-[460px]">
                      {block.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <div
          className="text-center mt-12 md:mt-20 mb-12"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(16px)",
            transition: reduceMotion
              ? "none"
              : `opacity 0.7s ease-out ${closingDelay}ms, transform 0.7s ease-out ${closingDelay}ms`,
          }}
        >
          <p className="font-display font-bold text-white text-2xl md:text-3xl">
            Above the rest. ONE.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              type="button"
              onClick={() => redirectToWhatsApp(t.investor.whatsappMessage)}
              // onClick={() => setContactOpen((v) => !v)}
              aria-expanded={contactOpen}
              aria-haspopup="dialog"
              className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-[0.15em] font-medium border transition-all duration-300 hover:border-[var(--sol-accent)] hover:bg-[rgba(192,192,192,0.04)] group"
              style={{
                borderColor: "var(--sol-star)",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(12px)",
                transitionProperty:
                  "opacity, transform, border-color, background-color",
                transitionDuration: reduceMotion
                  ? "0s, 0s, 300ms, 300ms"
                  : "0.5s, 0.5s, 300ms, 300ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: reduceMotion
                  ? "0s, 0s, 0s, 0s"
                  : `${buttonDelay}ms, ${buttonDelay}ms, 0s, 0s`,
              }}
            >
              {t.manifesto.cta}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            {/* <InvestorContactPopover
              open={contactOpen}
              onClose={() => setContactOpen(false)}
              anchor="center"
              hideTitle
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
