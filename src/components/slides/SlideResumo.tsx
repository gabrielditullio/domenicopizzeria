import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const rows = [
  { area: "Instagram/Redes", ok: true, detail: "3 redes ativas e vinculadas" },
  { area: "Website", ok: true, detail: "Core Web Vitals APROVADO + tour 360°" },
  { area: "Google Meu Negócio", ok: true, detail: "95% — Excelente (19/20 métricas BOM)" },
  { area: "Avaliações", ok: true, detail: "2.480 (1º lugar!) — 100% respondidas" },
  { area: "Ranking Local", ok: true, detail: "1º lugar no segmento em BH" },
  { area: "Conteúdo Digital", ok: true, detail: "20 fotos 360° + 20 vídeos + postagens diárias" },
  { area: "Rastreamento", ok: true, detail: "GTM + Analytics instalados e ativos" },
  { area: "Google Ads", ok: false, detail: "NENHUM anúncio ativo" },
  { area: "Meta Ads", ok: false, detail: "NENHUM anúncio ativo" },
];

const SlideResumo = () => (
  <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
    <div className="max-w-4xl mx-auto">
      <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-sovereign uppercase tracking-[0.25em] mb-4">
        11 — VISÃO GERAL
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-8">
        Diagnóstico: Domenico Pizzeria e Trattoria
      </motion.h2>

      <div className="border border-tactical/30 bg-white mb-8">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            {...fadeUp(0.2 + i * 0.08)}
            className={`flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 ${
              i % 2 === 0 ? "bg-white" : "bg-structural/50"
            } ${i < rows.length - 1 ? "border-b border-tactical/10" : ""}`}
          >
            <span className="font-montserrat font-bold text-sm md:text-base text-implacable w-36 md:w-48 shrink-0">
              {row.area}
            </span>
            {row.ok ? (
              <CheckCircle className="w-5 h-5 text-success shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-rupture shrink-0" />
            )}
            <span className={`font-lora text-sm md:text-base ${row.ok ? "text-tactical" : "text-rupture font-bold"}`}>
              {row.detail}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(1.0)} className="border-2 border-sovereign p-6 text-center">
        <p className="font-montserrat font-bold text-base md:text-lg text-implacable leading-relaxed">
          O diagnóstico é claro: a fundação está PERFEITA. O único investimento que falta é em TRÁFEGO PAGO para transformar 12.500+ buscas mensais em clientes na mesa e no delivery.
        </p>
      </motion.div>
    </div>
  </div>
);

export default SlideResumo;
