import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const rankings = [
  { pos: 1, name: "DOMENICO PIZZERIA E TRATTORIA", value: 2480, highlight: true },
  { pos: 2, name: "Dona Derna", value: 999, highlight: false },
  { pos: 3, name: "Primeli Bistrô", value: 742, highlight: false },
  { pos: 4, name: "Cantina Italiana Osteria Degli Angeli", value: 479, highlight: false },
  { pos: 5, name: "Gero Belo Horizonte", value: 187, highlight: false },
  { pos: 6, name: "Gennaro", value: 10, highlight: false },
  { pos: 7, name: "Gennaro Lourdes", value: 6, highlight: false },
  { pos: 8, name: "Zucro Cucina BH", value: 5, highlight: false },
  { pos: 9, name: "Anella Ristorante", value: 5, highlight: false },
  { pos: 10, name: "Cantina do Lucas", value: 4, highlight: false },
];

const maxValue = 2480;

const SlideRanking = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-success uppercase tracking-[0.25em] mb-4">
          05 — RANKING LOCAL
        </motion.p>

        <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-3">
          1º lugar em avaliações no segmento
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-lora text-base md:text-lg text-tactical mb-8">
          Posição da Domenico entre restaurantes italianos em BH:
        </motion.p>

        <div className="space-y-2 mb-10">
          {rankings.map((item, i) => {
            const barWidth = Math.max((item.value / maxValue) * 100, 3);
            return (
              <motion.div
                key={item.pos}
                {...fadeUp(0.25 + i * 0.08)}
                className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 border-l-4 ${
                  item.highlight
                    ? "border-l-success bg-success/10"
                    : "border-l-tactical/30 bg-white"
                }`}
              >
                <span className={`font-montserrat font-bold text-sm w-8 shrink-0 ${item.highlight ? "text-success" : "text-tactical"}`}>
                  {item.pos}º
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-montserrat font-bold text-sm md:text-base truncate ${item.highlight ? "text-implacable" : "text-implacable/80"}`}>
                      {item.name}
                    </span>
                    {item.highlight && (
                      <span className="shrink-0 font-montserrat font-bold text-[10px] bg-success text-white px-2 py-0.5 uppercase tracking-wider">
                        VOCÊS!
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-tactical/10 h-2">
                    <motion.div
                      className={`h-full ${item.highlight ? "bg-success" : "bg-tactical/40"}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${barWidth}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                    />
                  </div>
                </div>
                <span className={`font-montserrat font-black text-sm md:text-base shrink-0 ${item.highlight ? "text-success" : "text-tactical"}`}>
                  {item.value.toLocaleString("pt-BR")}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco inferior */}
        <motion.div {...fadeUp(1.2)} className="border-l-4 border-l-sovereign pl-5 py-4 mb-6">
          <p className="font-lora font-bold text-sm md:text-base text-implacable leading-relaxed">
            Com 2.480 avaliações — mais que o dobro do 2º colocado — a Domenico tem a base de clientes mais engajada do segmento em BH. Agora imagina se esse volume de avaliações fosse acompanhado de anúncios pagos.
          </p>
        </motion.div>

        <motion.p {...fadeUp(1.3)} className="font-lora text-xs text-tactical">
          Fonte: Health Check — pesquisa "Restaurante italiano" na região
        </motion.p>
      </div>
    </div>
  );
};

export default SlideRanking;
