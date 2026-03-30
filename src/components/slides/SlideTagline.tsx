import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const SlideTagline = () => (
  <div className="relative min-h-screen bg-sovereign flex items-center justify-center px-6 md:px-16 lg:px-24 py-12 overflow-hidden">
    {/* Rocket decorativo */}
    <Rocket className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-16 h-16 text-white/[0.08] -rotate-[15deg]" strokeWidth={1} />

    <div className="text-center max-w-4xl">
      <motion.p
        {...fadeUp(0)}
        className="font-montserrat font-bold text-sm md:text-xl text-tactical uppercase tracking-[0.25em] mb-8 md:mb-12"
      >
        VOCÊS CONSTRUÍRAM O CARRO MAIS RÁPIDO DA PISTA...
      </motion.p>

      <motion.div
        {...fadeUp(0.6)}
      >
        <p className="font-montserrat font-black text-3xl md:text-5xl lg:text-[56px] text-structural leading-[1.2] mb-2">
          AGORA SÓ FALTA
        </p>
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="inline-block font-montserrat font-black text-3xl md:text-5xl lg:text-[56px] text-structural bg-success px-3 py-1"
        >
          LIGAR O MOTOR.
        </motion.span>
      </motion.div>
    </div>
  </div>
);

export default SlideTagline;
