import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const checks = [
  "Google Meu Negócio com 95% de saúde (19 de 20 métricas no verde)",
  "1º lugar em avaliações no segmento (2.480!)",
  "100% das avaliações respondidas",
  "Perfil atualizado diariamente (postagens e fotos)",
  "Site próprio com tour 360°, delivery e cardápio digital",
  "3 redes sociais ativas (Twitter, Instagram, Facebook)",
  "Core Web Vitals APROVADO pelo Google",
  "GTM e Analytics instalados e funcionando",
  "Site traduzido em 8 idiomas",
];

const SlideDiagnostico = () => (
  <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
    <div className="max-w-4xl mx-auto">
      <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-success uppercase tracking-[0.25em] mb-4">
        09 — DIAGNÓSTICO
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-8">
        Vamos ser diretos: vocês são EXCEPCIONAIS
      </motion.h2>

      <div className="space-y-3 mb-8">
        {checks.map((item, i) => (
          <motion.div key={i} {...fadeUp(0.2 + i * 0.1)} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-success mt-1 shrink-0" />
            <span className="font-lora text-base md:text-lg text-implacable leading-relaxed">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(1.2)} className="border-l-4 border-l-sovereign pl-6 py-4">
        <p className="font-lora font-bold text-base md:text-lg text-implacable leading-relaxed">
          A Domenico é uma das pizzarias com melhor gestão digital que já analisamos. Mas existe UM gap estratégico que está limitando todo o potencial de crescimento.
        </p>
      </motion.div>
    </div>
  </div>
);

export default SlideDiagnostico;
