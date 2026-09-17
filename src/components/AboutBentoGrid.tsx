import { motion, type Variants } from "framer-motion";
import { Cpu, Database, Blocks } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const IdeaSubmissionVisual = () => (
  <div className="relative h-48 w-full mt-6 rounded-lg border border-white/[0.08] bg-black/40 overflow-hidden flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
    <div className="relative z-10 w-full max-w-[200px] flex flex-col gap-3">
      <div className="h-3 w-1/3 bg-white/20 rounded-full" />
      <div className="h-2 w-full bg-white/10 rounded-full border border-white/[0.05] border-dashed" />
      <div className="h-2 w-4/5 bg-white/10 rounded-full border border-white/[0.05] border-dashed" />
      <div className="mt-2 h-16 w-full rounded-md border border-white/10 bg-white/[0.02] relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-2 left-2 flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] text-white/40 tracking-widest font-mono"
        >
          DRAFTING_
        </motion.div>
      </div>
    </div>
  </div>
);

const PipelineVisual = () => (
  <div className="relative h-48 w-full mt-6 rounded-lg border border-white/[0.08] bg-black/40 overflow-hidden flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-[40px]" />
    <div className="relative z-10 w-full px-8 flex items-center justify-between">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-10 h-10 rounded-lg border border-white/20 bg-white/[0.05] backdrop-blur flex items-center justify-center relative z-20"
      >
        <Database className="w-4 h-4 text-white/60" />
        <div className="absolute -bottom-5 text-[8px] text-white/40 tracking-wider">STATE</div>
      </motion.div>

      <div className="flex-1 h-px relative bg-white/10 mx-2">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full border border-white/30 bg-white/[0.08] backdrop-blur flex items-center justify-center relative z-20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
      >
        <Cpu className="w-5 h-5 text-white/80" />
        <div className="absolute -bottom-6 text-[8px] text-white/40 tracking-wider w-max -ml-2">EDGE_FN</div>
      </motion.div>

      <div className="flex-1 h-px relative bg-white/10 mx-2">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-10 h-10 rounded-lg border border-white/20 bg-white/[0.05] backdrop-blur flex items-center justify-center relative z-20"
      >
        <Blocks className="w-4 h-4 text-white/60" />
        <div className="absolute -bottom-5 text-[8px] text-white/40 tracking-wider">DEPLOY</div>
      </motion.div>
    </div>
  </div>
);

const DashboardVisual = () => (
  <div className="relative h-64 w-full mt-6 rounded-t-xl border-x border-t border-white/[0.08] bg-black/60 overflow-hidden pt-4 px-4 flex flex-col gap-4">
    <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
      <div className="flex gap-3 items-center">
        <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
          <div className="w-3 h-3 bg-white/40 rounded-sm" />
        </div>
        <div className="h-2 w-24 bg-white/10 rounded-full" />
      </div>
      <div className="flex gap-2">
        <div className="h-1.5 w-8 bg-white/5 rounded-full" />
        <div className="h-1.5 w-8 bg-white/5 rounded-full" />
      </div>
    </div>

    <div className="flex gap-4 h-full pb-4">
      <div className="w-12 h-full flex flex-col gap-3 pt-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-8 w-8 rounded-md flex items-center justify-center ${
              i === 1 ? "bg-white/10" : "bg-transparent border border-white/[0.05]"
            }`}
          >
            <div className={`h-1 w-4 rounded-full ${i === 1 ? "bg-white/40" : "bg-white/10"}`} />
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 h-16 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="h-1.5 w-1/3 bg-white/10 rounded-full" />
              <div className="h-3 w-1/2 bg-white/30 rounded-full" />
              {i === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-4 -top-4 w-12 h-12 bg-white/10 rounded-full blur-[10px]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex-1 rounded-lg border border-white/[0.05] bg-white/[0.01] p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100%_20px]" />
          <svg
            className="absolute bottom-0 left-0 w-full h-[80%] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              d="M0,90 Q15,80 30,60 T60,50 T100,20"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              d="M0,90 Q15,80 30,60 T60,50 T100,20 L100,100 L0,100 Z"
              fill="url(#bento-chart-gradient)"
              stroke="none"
            />
            <defs>
              <linearGradient id="bento-chart-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const AboutBentoGrid = () => {
  return (
    <section className="bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-white/40 uppercase tracking-[0.2em] text-xs font-semibold mb-4 ml-1">
              Sobre
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
              Nossa Tese <br />
              <span className="text-white/40">de Equity</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Transformamos assimetria de mercado em ativos digitais escaláveis. Não somos uma agência,
              operamos como venture builders técnicos.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]"
        >
          <motion.div
            variants={itemVariants}
            className="col-span-1 bg-white/[0.01] backdrop-blur-md border border-white/[0.05] hover:border-white/20 transition-colors duration-500 rounded-2xl p-8 flex flex-col justify-between group"
          >
            <div>
              <h4 className="text-white text-lg font-medium mb-3">A Formação</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Você entra com a tese, a dor real do mercado e o nicho específico. Identificamos a fricção que a tecnologia resolve.
              </p>
            </div>
            <div className="mt-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <IdeaSubmissionVisual />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 bg-white/[0.01] backdrop-blur-md border border-white/[0.05] hover:border-white/20 transition-colors duration-500 rounded-2xl p-8 flex flex-col justify-between group"
          >
            <div className="max-w-xl">
              <h4 className="text-white text-lg font-medium mb-3">Construção de Valor</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Nós entramos com a infraestrutura, tecnologia, edge functions, automações e direcionamento tático de produto. Construímos o motor.
              </p>
            </div>
            <div className="mt-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
              <PipelineVisual />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 bg-white/[0.01] backdrop-blur-md border border-white/[0.05] hover:border-white/20 transition-colors duration-500 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center group overflow-hidden"
          >
            <div className="w-full md:w-1/3 flex flex-col justify-center">
              <h4 className="text-white text-xl font-medium mb-4">Operação Real</h4>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Projetos que deixam de ser hipótese para se tornarem produtos consolidados, gerando impacto econômico mensurável e equity de longo prazo.
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-white/70 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                Live Data
              </div>
            </div>
            <div className="hidden md:flex w-full md:w-2/3 mt-auto items-end justify-end opacity-70 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500">
              <DashboardVisual />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBentoGrid;
