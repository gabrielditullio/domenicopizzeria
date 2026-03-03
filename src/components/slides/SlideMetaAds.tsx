import { motion } from "framer-motion";
import { XCircle, Search, FileX, MapPin, Utensils, RefreshCw, MessageSquare, Eye, Plane } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const opportunities = [
  { icon: MapPin, text: "Campanhas geolocalizadas na Savassi e bairros próximos" },
  { icon: Utensils, text: "Promoção de pizzas e pratos especiais da semana" },
  { icon: RefreshCw, text: "Remarketing para visitantes do site que não fizeram pedido" },
  { icon: MessageSquare, text: "Delivery via WhatsApp — canal proprietário, sem taxa iFood" },
  { icon: Eye, text: "Divulgação do tour virtual 360° como diferencial" },
  { icon: Plane, text: "Campanhas para turistas (site traduzido em 8 idiomas!)" },
];

const SlideMetaAds = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-rupture uppercase tracking-[0.25em] mb-4">
          08 — TRÁFEGO PAGO: META
        </motion.p>

        <motion.div {...fadeUp(0.1)} className="mb-3">
          <XCircle className="w-12 h-12 text-rupture" />
        </motion.div>

        <motion.h2 {...fadeUp(0.2)} className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-3">
          Nenhum anúncio no Instagram/Facebook
        </motion.h2>

        <motion.p {...fadeUp(0.3)} className="font-lora text-base text-tactical mb-8">
          Pesquisamos "Domenico Pizzeria" na Biblioteca de Anúncios do Meta. Resultado: zero anúncios ativos.
        </motion.p>

        {/* Mockup */}
        <motion.div {...fadeUp(0.4)} className="max-w-md bg-white border border-tactical/30 p-8 text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-5 h-5 text-tactical" />
            <span className="font-montserrat text-base text-implacable">Domenico Pizzeria</span>
          </div>
          <div className="w-full h-px bg-tactical/20 mb-6" />
          <FileX className="w-12 h-12 text-tactical mx-auto mb-3" />
          <p className="font-lora text-sm text-tactical">Nenhum anúncio corresponde aos seus critérios</p>
        </motion.div>

        {/* Oportunidades */}
        <motion.h3 {...fadeUp(0.5)} className="font-montserrat font-bold text-xl md:text-2xl text-implacable mb-6">
          Oportunidades com Meta Ads:
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {opportunities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(0.55 + i * 0.1)}
                className="bg-white border border-tactical/10 border-t-[3px] border-t-warning p-4"
              >
                <Icon className="w-5 h-5 text-warning mb-3" />
                <p className="font-lora text-sm text-implacable">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Frase */}
        <motion.div {...fadeUp(1.2)} className="border-l-4 border-l-sovereign pl-5 py-4">
          <p className="font-lora font-bold text-sm md:text-base text-implacable leading-relaxed">
            Vocês já têm site com delivery, cardápio digital e tour 360°. O que falta é TRÁFEGO para esse ecossistema que já está pronto.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideMetaAds;
