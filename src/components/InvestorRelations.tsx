import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, MessageCircle, Mail, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Single source of truth for investor contacts (easy swap)
export const INVESTOR_EMAIL = "comercial@solone.com.br";
// E.164 without "+" or spaces - used by wa.me
export const INVESTOR_WHATSAPP = "5585991124238";
const WHATSAPP_DISPLAY = "+55 (85) 99112-4238";

const buildEmailHref = (subject: string, body: string) =>
  `mailto:${INVESTOR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const buildWhatsAppHref = (message?: string) =>
  message
    ? `https://wa.me/${INVESTOR_WHATSAPP}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${INVESTOR_WHATSAPP}`;

// Generic href used by all "Contato" CTAs across the site
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${INVESTOR_WHATSAPP}`;

interface InvestorContactPopoverProps {
  open: boolean;
  onClose: () => void;
  anchor?: "footer" | "band" | "center";
  hideTitle?: boolean;
}

export const InvestorContactPopover = ({ open, onClose, anchor = "band", hideTitle = false }: InvestorContactPopoverProps) => {
  const { t } = useLanguage();
  const c = t.investor;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onClose]);

  if (!open) return null;

  const positionClass =
    anchor === "footer"
      ? "absolute bottom-full mb-3 right-0 md:right-0 left-0 md:left-auto"
      : anchor === "center"
      ? "relative"
      : "absolute top-full mt-3 right-0";

  const popover = (
    <div
      ref={ref}
      role="dialog"
      aria-label={c.popoverTitle}
      className={`${positionClass} z-50 w-[min(90vw,360px)] border border-sol shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200`}
      style={{ background: "rgba(10,10,10,0.92)" }}
    >
      <div className={`flex items-center ${hideTitle ? "justify-end" : "justify-between"} px-5 pt-4 pb-3 border-b border-sol`}>
        {!hideTitle && (
          <span className="text-sol-accent text-[10px] tracking-[0.3em] uppercase font-display">
            {c.popoverTitle}
          </span>
        )}
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-sol-muted hover:text-foreground transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <p className="px-5 pt-3 text-sol-muted text-[11px] leading-relaxed">
        {c.popoverHint}
      </p>
      <div className="p-3 flex flex-col gap-px bg-sol-highlight mt-2 mx-3 mb-3">
        <a
          href={buildWhatsAppHref(c.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 px-4 py-3.5 bg-background hover:bg-sol-surface transition-colors"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-sol-accent" />
            <div className="flex flex-col">
              <span className="text-sm text-foreground group-hover:text-sol-accent transition-colors">
                WhatsApp
              </span>
              <span className="text-[10px] text-sol-muted tracking-wide">
                {WHATSAPP_DISPLAY}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-sol-muted group-hover:text-sol-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </a>
        <a
          href={buildEmailHref(c.emailSubject, c.emailBody)}
          className="group flex items-center justify-between gap-3 px-4 py-3.5 bg-background hover:bg-sol-surface transition-colors"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-sol-accent" />
            <div className="flex flex-col">
              <span className="text-sm text-foreground group-hover:text-sol-accent transition-colors">
                Email
              </span>
              <span className="text-[10px] text-sol-muted tracking-wide">
                {INVESTOR_EMAIL}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-sol-muted group-hover:text-sol-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </a>
      </div>
    </div>
  );

  if (anchor === "center" && typeof document !== "undefined") {
    return createPortal(
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {popover}
      </div>,
      document.body
    );
  }

  return popover;
};

/**
 * OPCAO B - Faixa institucional discreta antes do Footer.
 * Renderizada em todas as paginas (Index + VerticalPage).
 */
export const InvestorRelationsBand = () => {
  const { t } = useLanguage();
  const c = t.investor;
  const [open, setOpen] = useState(false);

  return (
    <section
      aria-label={c.bandEyebrow}
      className="relative border-t border-sol bg-sol-surface/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sol-highlight to-transparent opacity-60" />
      <div className="section-padding py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="md:col-span-2 flex items-center gap-3">
            <span className="h-px w-8 bg-sol-accent" />
            <span className="text-sol-accent text-[10px] tracking-[0.3em] uppercase font-display whitespace-nowrap">
              {c.bandEyebrow}
            </span>
          </div>
          <div className="md:col-span-7">
            <p className="font-display text-lg md:text-xl text-foreground leading-snug">
              {c.bandHeadline}
            </p>
            <p className="text-sol-muted text-xs md:text-sm mt-2 leading-relaxed max-w-[640px]">
              {c.bandSubline}
            </p>
          </div>
          <div className="md:col-span-3 flex md:justify-end relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="dialog"
              className="group inline-flex items-center gap-3 px-6 py-3 border border-sol text-sol-text text-[11px] tracking-[0.25em] hover:border-sol-accent hover:text-sol-accent transition-all duration-300"
            >
              {c.bandCta}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <InvestorContactPopover open={open} onClose={() => setOpen(false)} anchor="band" />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * OPCAO A - Link discreto para o Footer.
 * Botao minimo que abre o popover de contatos.
 */
export const InvestorRelationsFooterLink = () => {
  const { t } = useLanguage();
  const c = t.investor;
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="text-sol-muted hover:text-sol-accent transition-colors duration-300 text-[11px] tracking-[0.18em] uppercase inline-flex items-center gap-1.5"
      >
        {c.footerLink}
        <ArrowUpRight className="w-3 h-3" />
      </button>
      <InvestorContactPopover open={open} onClose={() => setOpen(false)} anchor="footer" />
    </div>
  );
};
