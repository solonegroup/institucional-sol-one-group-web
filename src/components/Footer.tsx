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
  const navColumns = t.footer.columns;
  return (
  <footer className="relative border-t border-sol section-padding pt-14 md:pt-20 pb-8 mt-16 md:mt-20 overflow-hidden">
    <div className="relative max-w-[1400px] mx-auto">
      {/* TOP - 4 columns like reference */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* COL 1 - BRAND */}
        <motion.div
          className="md:col-span-3"
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <img src={logoHorizontal} alt="S.O.L ONE" className="h-14 md:h-24 object-contain mb-5 -ml-2" />
          <p className="text-sol-secondary text-sm leading-relaxed max-w-[260px]">
            {t.footer.description}
          </p>
        </motion.div>

        {/* COL 2 + 3 - NAV */}
        {/* {navColumns.map((col, idx) => (
          <motion.div
            key={col.title}
            className="md:col-span-2"
            custom={idx + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h4 className="text-sol-text text-base font-medium mb-5 font-display">
              {col.title}
            </h4>
            <ul className="space-y-3.5">
              {col.links.map((l) => {
                const external = /^https?:\/\//.test(l.href);
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sol-secondary text-sm hover:text-foreground transition-colors duration-300 inline-block relative group"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sol-accent transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))} */}

        {/* COL 4 - CONTACT */}
        <motion.div
          className="md:col-span-5"
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h4 className="text-sol-text text-base font-medium mb-5 font-display">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-3.5 mb-6">
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
            <li className="flex items-start gap-3 text-sol-secondary text-sm">
              <MapPin className="w-[18px] h-[18px] text-sol-accent shrink-0 mt-0.5" />
              <span className="whitespace-pre-line leading-relaxed">{t.footer.address}</span>
            </li>
          </ul>
          <p className="text-sol-muted text-xs tracking-wide mb-6">{t.footer.cnpj}</p>

          <a
            href={CONTACT_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-sol text-sol-text text-xs tracking-[0.18em] hover:border-sol-accent hover:bg-white/[0.03] transition-all duration-300 group"
          >
            {t.footer.cta}
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
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
