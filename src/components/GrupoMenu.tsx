import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { verticalsList } from "@/content/verticals";
import { useLanguage } from "@/i18n/LanguageContext";

interface GrupoMenuProps {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

const GrupoMenu = ({ variant = "desktop", onNavigate }: GrupoMenuProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  if (variant === "mobile") {
    return (
      <div className="border-t border-sol pt-6">
        <p className="text-sol-muted text-[11px] tracking-[0.3em] uppercase mb-4">
          {t.nav.grupo}
        </p>
        <ul className="space-y-3 pl-2">
          <li>
            <Link
              to="/#grupo"
              onClick={onNavigate}
              className="text-sm text-sol-secondary hover:text-foreground transition-colors"
            >
              {t.verticalPage.modelLabel}
            </Link>
          </li>
          {verticalsList.map((v) => (
            <li key={v.slug}>
              <Link
                to={`/grupo/${v.slug}`}
                onClick={onNavigate}
                className="block py-2 font-display text-base text-foreground hover:text-sol-accent transition-colors"
              >
                {v.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sol-secondary text-xs tracking-[0.15em] hover:text-foreground transition-colors duration-200 py-2"
      >
        <Link
          to="/#grupo"
          onClick={(e) => e.stopPropagation()}
          className="hover:text-foreground"
        >
          {t.nav.grupo}
        </Link>
        <ChevronDown
          className="w-3 h-3 transition-transform duration-300"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0)",
            opacity: 0.5,
          }}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="menu"
        className="absolute left-0 top-full pt-3 z-50"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          pointerEvents: open ? "auto" : "none",
          transition: open
            ? "opacity 220ms ease-out, transform 220ms ease-out"
            : "opacity 150ms ease-in, transform 150ms ease-in",
        }}
      >
        <div
          className="w-[280px] border border-sol"
          style={{
            backgroundColor: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <ul className="py-1">
            {verticalsList.map((v, i) => (
              <li
                key={v.slug}
                className={i < verticalsList.length - 1 ? "border-b border-sol" : ""}
              >
                <Link
                  to={`/grupo/${v.slug}`}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="relative block px-5 py-3 group transition-all duration-300 hover:pl-6"
                >
                  <span className="absolute left-0 top-0 bottom-0 w-px bg-sol-accent scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display text-sm text-foreground group-hover:text-sol-accent transition-colors duration-300">
                      {v.shortName}
                    </p>
                    <span className="text-sol-muted text-[10px] tracking-[0.3em]">
                      {v.index}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrupoMenu;
