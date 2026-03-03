import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const AnimatedScore = ({ value, color }: { value: number; color: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      node.textContent = String(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);
  return <span ref={ref} style={{ color }}>0</span>;
};

const MetricRow = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div className="mb-3">
    <p className="font-montserrat font-bold text-sm md:text-base text-success">{label}</p>
    <p className="font-lora text-xs text-tactical">{sub}</p>
  </div>
);

const SlideSite = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-success uppercase tracking-[0.25em] mb-4">
          03 — SITE
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-3">
          domenicopizzeria.com.br
        </motion.h2>

        <motion.div {...fadeUp(0.2)} className="flex items-center gap-2 mb-8">
          <CheckCircle className="w-5 h-5 text-success" />
          <span className="font-montserrat font-bold text-base md:text-xl text-success">
            Core Web Vitals: APROVADO — mobile e desktop
          </span>
        </motion.div>

        {/* Destaque verde */}
        <motion.div {...fadeUp(0.3)} className="border-2 border-success p-6 mb-8" style={{ background: "rgba(46,204,113,0.05)" }}>
          <p className="font-lora font-bold text-base md:text-lg text-implacable">
            Seu site PASSA nos Core Web Vitals do Google. A experiência dos seus usuários reais é boa — o site carrega rápido e é estável.
          </p>
        </motion.div>

        {/* 2 blocos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* CELULAR */}
          <motion.div {...fadeUp(0.4)} className="bg-white border border-tactical/10 border-t-4 border-t-success p-5">
            <p className="font-montserrat font-bold text-sm text-success uppercase tracking-wider mb-4">CELULAR</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-montserrat font-black text-5xl md:text-[56px] text-warning">
                <AnimatedScore value={50} color="#F1C40F" />
              </span>
              <span className="font-lora text-sm text-tactical">de 100 (laboratório)</span>
            </div>
            <MetricRow label="LCP real: 1.3 segundos" value="" sub="94% dos usuários — BOM" />
            <MetricRow label="CLS: 0 (perfeito)" value="" sub="99% dos usuários — Excelente" />
            <div className="mb-3">
              <p className="font-lora text-sm text-tactical">FCP: 1.2 segundos</p>
              <p className="font-lora text-xs text-tactical">88% dos usuários — BOM</p>
            </div>
            <span className="inline-block font-montserrat font-bold text-xs text-success border border-success/30 px-3 py-1 mt-2">
              APROVADO PELO GOOGLE ✅
            </span>
          </motion.div>

          {/* COMPUTADOR */}
          <motion.div {...fadeUp(0.5)} className="bg-white border border-tactical/10 border-t-4 border-t-success p-5">
            <p className="font-montserrat font-bold text-sm text-success uppercase tracking-wider mb-4">COMPUTADOR</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-montserrat font-black text-5xl md:text-[56px] text-warning">
                <AnimatedScore value={76} color="#F1C40F" />
              </span>
              <span className="font-lora text-sm text-tactical">de 100 (laboratório)</span>
            </div>
            <MetricRow label="LCP real: 1.8 segundos" value="" sub="88% dos usuários — BOM" />
            <MetricRow label="CLS: 0 (perfeito)" value="" sub="100% dos usuários — Perfeito" />
            <div className="mb-3">
              <p className="font-lora text-sm text-tactical">FCP: 1.2 segundos</p>
              <p className="font-lora text-xs text-tactical">92% dos usuários — BOM</p>
            </div>
            <span className="inline-block font-montserrat font-bold text-xs text-success border border-success/30 px-3 py-1 mt-2">
              APROVADO PELO GOOGLE ✅
            </span>
          </motion.div>
        </div>

        {/* Ressalva amarela */}
        <motion.div {...fadeUp(0.7)} className="border-l-4 border-warning pl-4 py-4 mb-6" style={{ background: "rgba(241,196,15,0.06)" }}>
          <p className="font-lora italic text-sm md:text-[15px] text-implacable leading-relaxed">
            Ponto de atenção: O tour 3D Matterport consome mais de 1.2 MB de JavaScript. Isso reduz o score de Performance em laboratório (50 mobile, 76 desktop), mas NÃO afeta a aprovação real do Google. Recomendação: carregar o tour sob demanda (lazy load) para ganhar mais pontos.
          </p>
        </motion.div>

        <motion.p {...fadeUp(0.8)} className="font-lora text-xs text-tactical">
          Dados: Google PageSpeed Insights — 03/03/2026
        </motion.p>
      </div>
    </div>
  );
};

export default SlideSite;
