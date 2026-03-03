import { motion } from "framer-motion";
import { XCircle, Search } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const SlideGoogleAds = () => {
  return (
    <div className="min-h-screen bg-sovereign px-6 md:px-16 lg:px-24 py-12 md:py-16 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-montserrat font-bold text-sm text-rupture uppercase tracking-[0.25em] mb-6">
          06 — TRÁFEGO PAGO: GOOGLE
        </motion.p>

        <motion.div {...fadeUp(0.15)} className="flex justify-center mb-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <XCircle className="w-16 h-16 text-rupture" />
          </motion.div>
        </motion.div>

        <motion.h2 {...fadeUp(0.25)} className="font-montserrat font-bold text-2xl md:text-4xl text-structural leading-tight text-center mb-3">
          Nenhum anúncio no Google
        </motion.h2>

        <motion.p {...fadeUp(0.35)} className="font-lora text-base text-tactical text-center max-w-2xl mx-auto mb-10">
          Pesquisamos "domenicopizzeria.com.br" no Google Ads Transparency Center. Resultado: zero anúncios encontrados.
        </motion.p>

        {/* Mockup */}
        <motion.div
          {...fadeUp(0.45)}
          className="max-w-md mx-auto border border-structural/10 p-8 mb-8 text-center"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Search className="w-5 h-5 text-tactical" />
            <span className="font-montserrat text-base text-structural">domenicopizzeria.com.br</span>
          </div>
          <div className="w-full h-px bg-structural/10 mb-6" />
          <motion.p
            className="font-montserrat font-black text-4xl md:text-[40px] text-rupture mb-2"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: [0, -3, 3, -2, 2, 0] }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            0 resultados
          </motion.p>
          <p className="font-lora text-sm text-tactical">Não foi possível encontrar resultados</p>
        </motion.div>

        {/* Destaque vermelho */}
        <motion.div
          {...fadeUp(0.7)}
          className="border-2 border-rupture p-6 mb-8"
          style={{ background: "rgba(231,29,54,0.08)" }}
        >
          <p className="font-lora font-bold text-base md:text-lg text-structural leading-relaxed">
            Com o perfil MAIS COMPLETO do segmento, vocês são o negócio que MAIS se beneficiaria de anúncios — porque já têm tudo pronto para converter. O site funciona, o delivery existe, o perfil é impecável. Falta só o tráfego.
          </p>
        </motion.div>

        <motion.p {...fadeUp(0.85)} className="font-lora text-xs text-tactical">
          Fonte: Google Ads Transparency Center — 03/03/2026
        </motion.p>
      </div>
    </div>
  );
};

export default SlideGoogleAds;
