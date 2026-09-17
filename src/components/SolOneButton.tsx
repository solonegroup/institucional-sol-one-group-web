import { ArrowRight } from "lucide-react";

export const SolOneButton = () => {
  return (
    <button
      type="button"
      className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md
        bg-white/[0.02] backdrop-blur-sm border border-white/10
        text-white/80 font-medium text-xs uppercase tracking-[0.15em]
        transition-all duration-300 ease-out
        hover:bg-white/[0.05] hover:border-white/30 hover:text-white
        hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
        cursor-pointer"
    >
      <span>CONSTRUIR MEU SaaS</span>
      <ArrowRight
        size={14}
        className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        strokeWidth={2}
      />
    </button>
  );
};

export default SolOneButton;
