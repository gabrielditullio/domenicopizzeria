import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const SlideCover = () => {
  return (
    <div className="relative min-h-screen bg-sovereign flex flex-col px-6 md:px-16 lg:px-24 py-8 md:py-12 overflow-hidden">
      {/* Diagonal decorative lines */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 256 256">
          <line x1="0" y1="0" x2="256" y2="256" stroke="white" strokeWidth="1" />
          <line x1="40" y1="0" x2="256" y2="216" stroke="white" strokeWidth="1" />
          <line x1="0" y1="40" x2="216" y2="256" stroke="white" strokeWidth="1" />
          <line x1="80" y1="0" x2="256" y2="176" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none">
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 256 256">
          <line x1="256" y1="256" x2="0" y2="0" stroke="white" strokeWidth="1" />
          <line x1="216" y1="256" x2="0" y2="40" stroke="white" strokeWidth="1" />
          <line x1="256" y1="216" x2="40" y2="0" stroke="white" strokeWidth="1" />
          <line x1="176" y1="256" x2="0" y2="80" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* GDT Logo */}
      <motion.div {...fadeUp(0)}>
        <span className="font-montserrat font-black text-xl text-structural tracking-wider">
          GDT
        </span>
      </motion.div>

      {/* Main content — centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.p
          {...fadeUp(0.2)}
          className="font-montserrat font-bold text-sm text-tactical uppercase tracking-[0.25em] mb-6"
        >
          DIAGNÓSTICO DE PRESENÇA DIGITAL
        </motion.p>

        <motion.h1
          {...fadeUp(0.4)}
          className="font-montserrat font-black text-[30px] md:text-[48px] lg:text-[56px] text-structural leading-[1.1] mb-4"
        >
          DOMENICO PIZZERIA<br />E TRATTORIA
        </motion.h1>

        <motion.p
          {...fadeUp(0.6)}
          className="font-montserrat font-bold text-lg md:text-2xl text-structural/80 mb-6"
        >
          Savassi — Belo Horizonte, MG
        </motion.p>

        <motion.div
          {...fadeUp(0.8)}
          className="w-20 h-[3px] bg-rupture my-6"
        />

        <motion.p
          {...fadeUp(1.0)}
          className="font-lora text-base md:text-lg text-tactical max-w-2xl leading-relaxed mb-8"
        >
          Análise de presença digital, visibilidade no Google e oportunidades
          <br className="hidden md:block" />
          de crescimento via tráfego pago
        </motion.p>

        <motion.div
          {...fadeUp(1.2)}
          className="flex flex-wrap justify-center gap-6 md:gap-10 font-montserrat font-bold text-sm text-tactical"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-rupture inline-block" />
            2.480 avaliações
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-rupture inline-block" />
            1º lugar no segmento
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-rupture inline-block" />
            0 anúncios ativos
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        {...fadeUp(1.4)}
        className="font-montserrat text-xs text-tactical/60 text-center pt-4"
      >
        Março 2026 · Confidencial · Preparado por Gabriel Di Tullio — DT Coproduções
      </motion.footer>
    </div>
  );
};

export default SlideCover;
