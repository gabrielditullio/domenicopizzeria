import { motion } from "framer-motion";
import { XCircle, TrendingDown, ShieldAlert, DollarSign, Eye } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const cards = [
  { icon: XCircle, title: "ZERO anúncios no Google Ads", desc: "Nenhuma campanha encontrada na rede de pesquisa." },
  { icon: XCircle, title: "ZERO anúncios no Meta Ads", desc: "Nem Instagram, nem Facebook. Sem campanhas ativas." },
  { icon: TrendingDown, title: "12.500+ buscas sem captura", desc: "Pesquisas relevantes todo mês que vão para concorrentes." },
  { icon: ShieldAlert, title: "Marca própria desprotegida", desc: "500 buscas/mês por 'Domenico' — concorrentes podem comprar esse termo." },
  { icon: DollarSign, title: "Delivery direto não explorado", desc: "WhatsApp delivery existe, mas sem ads direcionando tráfego (sem taxa iFood)." },
  { icon: Eye, title: "Tour 360° sem divulgação", desc: "Diferencial único no segmento, mas sem tráfego pago para mostrar." },
];

const SlideGap = () => (
  <div className="min-h-screen bg-sovereign px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
    <div className="max-w-5xl mx-auto">
      <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-rupture uppercase tracking-[0.25em] mb-4">
        10 — O GAP
      </motion.p>
      <motion.h2 {...fadeUp(0.1)} className="font-montserrat font-bold text-2xl md:text-4xl text-structural leading-tight mb-10">
        O único gap: Tráfego Pago
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              {...fadeUp(0.2 + i * 0.12)}
              className="border-t-[3px] border-t-rupture p-5"
              style={{ background: "rgba(231,29,54,0.08)" }}
            >
              <Icon className="w-6 h-6 text-rupture mb-3" />
              <h3 className="font-montserrat font-bold text-base text-structural mb-2">{card.title}</h3>
              <p className="font-lora text-sm text-tactical">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        {...fadeUp(1.0)}
        className="border-2 border-rupture p-6"
        style={{ background: "rgba(231,29,54,0.12)" }}
      >
        <p className="font-lora font-bold text-base md:text-lg text-structural leading-relaxed">
          Vocês construíram o carro mais rápido da pista — motor potente, pneus novos, aerodinâmica perfeita. Mas ainda não ligaram o motor. O tráfego pago é a chave de ignição.
        </p>
      </motion.div>
    </div>
  </div>
);

export default SlideGap;
