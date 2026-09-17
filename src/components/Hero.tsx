import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.15 },
  }),
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center section-padding pt-20 md:pt-24 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[3fr_2fr] gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="font-display font-bold leading-[1] mb-3" style={{ fontSize: "clamp(36px, 9vw, 96px)", color: "#FFFFFF" }}>
              {t.hero.title}
            </h1>
            <h2 className="font-display font-bold leading-[1.1] mb-8" style={{ fontSize: "clamp(24px, 5.5vw, 60px)", color: "hsl(var(--sol-accent))" }}>
              {t.hero.subtitle}
            </h2>
          </motion.div>

        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sol-muted text-[10px] tracking-[0.3em]">{t.hero.scroll}</span>
        <ChevronDown className="w-4 h-4 text-sol-muted animate-bounce-subtle" />
      </motion.div>
    </section>
  );
};

export default Hero;
