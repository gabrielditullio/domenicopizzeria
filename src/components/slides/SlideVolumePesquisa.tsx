import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      node.textContent = Math.round(progress * value).toLocaleString("pt-BR") + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
};

const keywords = [
  { term: "pizzaria belo horizonte", vol: "5.000/mês", bar: 100, tag: "ALTO VOLUME", tagBg: "#E71D36", tagText: "white" },
  { term: "pizzaria perto de mim", vol: "5.000/mês", bar: 100, tag: "ALTO VOLUME", tagBg: "#E71D36", tagText: "white" },
  { term: "domenico pizzaria", vol: "500/mês", bar: 30, tag: "MARCA PRÓPRIA!", tagBg: "#0A1931", tagText: "white" },
  { term: "pizzaria italiana", vol: "500/mês", bar: 30, tag: "RELEVANTE", tagBg: "#F1C40F", tagText: "#121212" },
  { term: "pizzaria delivery", vol: "500/mês", bar: 30, tag: "CONVERSÃO", tagBg: "#F1C40F", tagText: "#121212" },
  { term: "pizzaria aberta agora", vol: "500/mês", bar: 30, tag: "INTENÇÃO IMEDIATA", tagBg: "#2ECC71", tagText: "white" },
  { term: "pizzaria próximo a mim", vol: "500/mês", bar: 30, tag: "LOCAL", tagBg: "#2ECC71", tagText: "white" },
];

const SlideVolumePesquisa = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-rupture uppercase tracking-[0.25em] mb-4">
          07 — VOLUME DE PESQUISA
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-3">
          12.500+ buscas mensais — e vocês não aparecem em nenhum anúncio
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora text-base text-tactical mb-8">
          Cada pesquisa é alguém decidindo AGORA onde pedir ou onde jantar em BH.
        </motion.p>

        {/* Keywords */}
        <div className="space-y-2 mb-8">
          {keywords.map((kw, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.25 + i * 0.08)}
              className="flex items-center gap-3 md:gap-4 bg-white border border-tactical/15 p-3 md:p-4"
            >
              <span className="font-lora text-sm md:text-base text-implacable flex-1 min-w-0 truncate">
                "{kw.term}"
              </span>
              <div className="hidden md:block w-32 bg-tactical/10 h-2">
                <motion.div
                  className="h-full bg-rupture"
                  initial={{ width: 0 }}
                  animate={{ width: `${kw.bar}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                />
              </div>
              <span className="font-montserrat font-bold text-xs md:text-sm text-implacable shrink-0 w-20 text-right">
                {kw.vol}
              </span>
              <span
                className="shrink-0 font-montserrat font-bold text-[10px] px-2 py-0.5 uppercase tracking-wider"
                style={{ background: kw.tagBg, color: kw.tagText }}
              >
                {kw.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Alerta */}
        <motion.div
          {...fadeUp(0.9)}
          className="border-2 border-rupture p-6 mb-8"
          style={{ background: "rgba(231,29,54,0.05)" }}
        >
          <p className="font-lora font-bold text-base md:text-lg text-implacable leading-relaxed">
            500 pessoas por mês pesquisam "DOMENICO PIZZARIA" no Google. Já conhecem vocês e estão buscando — mas sem anúncios, correm o risco de encontrar um concorrente primeiro.
          </p>
        </motion.div>

        {/* Total */}
        <motion.div {...fadeUp(1.0)} className="bg-rupture p-5 md:p-6 text-center mb-6">
          <p className="font-montserrat font-black text-4xl md:text-[48px] text-white leading-none mb-2">
            <AnimatedNumber value={12500} suffix="+" />
          </p>
          <p className="font-montserrat font-bold text-sm md:text-base text-white/90">
            buscas mensais só nestes termos — e vocês não aparecem em NENHUM anúncio
          </p>
        </motion.div>

        <motion.p {...fadeUp(1.1)} className="font-lora text-xs text-tactical">
          Fonte: Google Keyword Planner — Fev/2025 a Jan/2026
        </motion.p>
      </div>
    </div>
  );
};

export default SlideVolumePesquisa;
