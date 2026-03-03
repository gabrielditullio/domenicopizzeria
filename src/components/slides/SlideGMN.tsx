import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { useEffect, useRef } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const slideInLeft = (delay: number) => ({
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const slideInRight = (delay: number) => ({
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const AnimatedNumber = ({ value, color }: { value: number; color: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
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

const checkItems = [
  "2.480 avaliações (1º lugar no segmento!)",
  "100% das avaliações respondidas (90 de 90)",
  "Postagens e fotos atualizadas diariamente",
  "Foto do proprietário atualizada (0 dias)",
  "20 fotos 360° + 20 vídeos",
  "Descrição completa (428 caracteres)",
  "Telefone, horário e website definidos",
  "Perfil verificado + logotipo",
  "3 redes sociais vinculadas",
];

const warnItems = [
  "Domenico: 2.480 avaliações",
  "Média do segmento: 2.873 avaliações",
  "Diferença: -393 avaliações",
];

const SlideGMN = () => {
  return (
    <div className="min-h-screen bg-sovereign px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-tactical uppercase tracking-[0.25em] mb-4">
          04 — PERFIL NO GOOGLE
        </motion.p>

        <motion.h2 {...fadeUp(0.15)} className="font-montserrat font-bold text-2xl md:text-4xl text-structural leading-tight mb-3">
          Nota 95. Um dos melhores perfis que já analisamos.
        </motion.h2>

        <motion.p {...fadeUp(0.25)} className="font-lora text-base text-tactical mb-10">
          R. Cláudio Manoel, 583 — Savassi, Belo Horizonte, MG
        </motion.p>

        {/* 2 blocos */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10">
          {/* Esquerdo — 95 */}
          <motion.div {...slideInLeft(0.3)} className="flex-1 p-6 md:p-8 border-t-4 border-t-success" style={{ background: "rgba(46,204,113,0.08)" }}>
            <p className="font-montserrat font-black text-5xl md:text-[64px] leading-none mb-2">
              <AnimatedNumber value={95} color="#2ECC71" />
            </p>
            <p className="font-montserrat font-bold text-base text-structural mb-1">Nota geral — EXCELENTE</p>
            <p className="font-montserrat font-bold text-sm text-success mb-6">19 de 20 métricas</p>
            <div className="space-y-2">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span className="font-lora text-sm text-tactical">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Direito — 1 */}
          <motion.div {...slideInRight(0.4)} className="flex-1 p-6 md:p-8 border-t-4 border-t-warning" style={{ background: "rgba(241,196,15,0.08)" }}>
            <p className="font-montserrat font-black text-5xl md:text-[64px] leading-none mb-2">
              <AnimatedNumber value={1} color="#F1C40F" />
            </p>
            <p className="font-montserrat font-bold text-base text-structural mb-1">Métrica abaixo da média</p>
            <p className="font-montserrat font-bold text-sm text-warning mb-6">Volume de avaliações vs segmento</p>
            <div className="space-y-2 mb-4">
              {warnItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 shrink-0" />
                  <span className="font-lora text-sm text-tactical">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-lora italic text-xs text-tactical">
              A média inclui grandes redes com múltiplas unidades. Localmente, a Domenico é a número 1.
            </p>
          </motion.div>
        </div>

        {/* Frase inferior */}
        <motion.div {...fadeUp(0.6)} className="border-2 border-structural/20 p-4 md:p-6">
          <p className="font-lora italic text-sm md:text-[15px] text-structural leading-relaxed">
            Vocês são EXEMPLARES na gestão do Google Meu Negócio. Isso é raro e merece reconhecimento. Agora imagina esse perfil impecável combinado com anúncios pagos.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideGMN;
