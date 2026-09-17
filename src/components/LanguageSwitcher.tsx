import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { LANGUAGES } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="flex items-center gap-1.5 text-xs tracking-[0.15em] border px-3 py-2 transition-all duration-200 hover:border-[var(--sol-accent)] hover:text-[var(--sol-accent)]"
        style={{ borderColor: "rgba(192,192,192,0.3)", color: "var(--sol-secondary)" }}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{current.short}</span>
        <ChevronDown
          className="w-3 h-3 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        role="listbox"
        className="absolute right-0 top-full mt-2 min-w-[140px] border backdrop-blur-md overflow-hidden transition-all duration-200 origin-top"
        style={{
          backgroundColor: "rgba(10,10,10,0.92)",
          borderColor: "rgba(192,192,192,0.2)",
          opacity: open ? 1 : 0,
          transform: open ? "scaleY(1) translateY(0)" : "scaleY(0.95) translateY(-4px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {LANGUAGES.map((l) => {
          const active = l.code === lang;
          return (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={active}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-xs tracking-[0.15em] transition-colors duration-150 hover:bg-white/[0.04]"
              style={{
                color: active ? "var(--sol-accent)" : "var(--sol-secondary)",
              }}
            >
              <span>{l.short}</span>
              <span className="text-[10px] opacity-70">{l.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
