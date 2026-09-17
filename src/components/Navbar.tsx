import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GrupoMenu from "@/components/GrupoMenu";
import { CONTACT_WHATSAPP_HREF } from "@/components/InvestorRelations";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const homeHref = (anchor: string) => (onHome ? anchor : `/${anchor}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 section-padding"
        style={{
          backdropFilter: scrolled || mobileOpen ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled || mobileOpen ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid transparent",
          backgroundColor: scrolled || mobileOpen ? "rgba(10,10,10,0.85)" : "transparent",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img src={logoHorizontal} alt="S.O.L ONE" className="h-14 md:h-[150px] object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {/* <a
              href={homeHref("#manifesto")}
              className="text-sol-secondary text-xs tracking-[0.15em] hover:text-foreground transition-colors duration-200"
            >
              {t.nav.manifesto}
            </a>
            <GrupoMenu /> */}
            <a
              href={CONTACT_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] border px-5 py-2 transition-all duration-200 hover:bg-[var(--sol-accent)] hover:text-background"
              style={{ borderColor: "var(--sol-accent)", color: "var(--sol-accent)" }}
            >
              {t.nav.contato}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile right cluster */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="w-11 h-11 flex items-center justify-center border border-sol text-sol-accent"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — sibling of <nav> so `fixed` resolves against the viewport
          (the nav's backdrop-filter would otherwise create a containing block). */}
      <div
        className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 section-padding overflow-y-auto"
        style={{
          backgroundColor: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 220ms ease, transform 220ms ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto py-10 space-y-8">
          <a
            href={homeHref("#manifesto")}
            onClick={() => setMobileOpen(false)}
            className="block font-display text-3xl text-foreground"
          >
            {t.nav.manifesto}
          </a>
          <GrupoMenu variant="mobile" onNavigate={() => setMobileOpen(false)} />
          <a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block font-display text-3xl text-sol-accent border-t border-sol pt-6"
          >
            {t.nav.contato}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
