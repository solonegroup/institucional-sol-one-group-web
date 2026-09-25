import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowUpRight, Linkedin } from "lucide-react";
import logoHorizontal from "@/assets/logo-footer.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT_WHATSAPP_HREF } from "@/components/InvestorRelations";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
} as const;

const Footer = () => {
  const { t } = useLanguage();
  return (
  <footer className="relative border-t border-sol section-padding pt-14 md:pt-20 pb-8 mt-16 md:mt-20 overflow-hidden">
    <div className="relative max-w-[1400px] mx-auto">
      {/* TOP - centered layout (nav columns removed) */}
      <div className="flex flex-col items-center text-center gap-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-20">
          {/* BRAND */}
          <motion.div
            className="flex flex-col items-center"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <img src={logoHorizontal} alt="S.O.L ONE" className="h-14 md:h-24 object-contain mb-5" />
            <p className="text-sol-secondary text-sm leading-relaxed max-w-[280px]">
              {t.footer.description}
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="flex flex-col items-start text-left"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h4 className="text-sol-text text-base font-medium mb-5 font-display">
              {t.footer.contactTitle}
            </h4>
            <ul className="flex flex-col items-start gap-3.5 mb-4">
              <li>
                <a
                  href="mailto:comercial@solone.com.br"
                  className="flex items-center gap-3 text-sol-secondary text-sm hover:text-foreground transition-colors duration-300"
                >
                  <Mail className="w-[18px] h-[18px] text-sol-accent shrink-0" />
                  <span>comercial@solone.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5585991124238"
                  className="flex items-center gap-3 text-sol-secondary text-sm hover:text-foreground transition-colors duration-300"
                >
                  <Phone className="w-[18px] h-[18px] text-sol-accent shrink-0" />
                  <span>+55 (85) 99112-4238</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sol-secondary text-sm max-w-[320px]">
                <MapPin className="w-[18px] h-[18px] text-sol-accent shrink-0 mt-0.5" />
                <span className="whitespace-pre-line leading-relaxed">{t.footer.address}</span>
              </li>
            </ul>
            <p className="text-sol-muted text-xs tracking-wide">{t.footer.cnpj}</p>
          </motion.div>
        </div>

        <motion.a
          href={CONTACT_WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-sol text-sol-text text-xs tracking-[0.18em] hover:border-sol-accent hover:bg-white/[0.03] transition-all duration-300 group"
        >
          {t.footer.cta}
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>
      </div>

      {/* DIVIDER */}
      <div className="mt-16 border-t border-sol" />

      {/* BOTTOM AREA */}
      <div className="relative mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 py-6">
          {/* Social icons - left */}
          <div className="flex items-center gap-4 order-2 md:order-1">
            <a
              href="https://www.linkedin.com/company/s-o-l-one/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-sol-secondary hover:text-foreground transition-colors duration-300"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
          </div>

          {/* Copyright + legal - right */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-[11px] text-sol-muted tracking-wide order-1 md:order-2">
            <a href="#privacy" className="hover:text-foreground transition-colors duration-300">
              {t.footer.privacy}
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors duration-300">
              {t.footer.terms}
            </a>
            <span>© {new Date().getFullYear()} S.O.L ONE. {t.footer.rights}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
