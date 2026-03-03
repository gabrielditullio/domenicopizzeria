import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const lines = [
  "Nota 95 no Google.",
  "1º lugar em avaliações.",
  "100% das avaliações respondidas.",
  "Tour 360°. 8 idiomas. Delivery ativo.",
  "Core Web Vitals aprovado.",
];

const subLines = [
  "12.500+ buscas mensais sem captura.",
  "500 buscas pela própria marca sem proteção.",
  "O carro mais rápido da pista — com o motor desligado.",
];

const SlideContraste = () => {
  return (
    <div className="min-h-screen bg-sovereign flex items-center justify-center px-6 md:px-16 lg:px-24 py-12 overflow-y-auto">
      <div className="max-w-4xl w-full text-center">
        {/* Linhas brancas */}
        {lines.map((line, i) => (
          <motion.p
            key={i}
            {...fadeUp(i * 0.3)}
            className="font-montserrat font-black text-[22px] md:text-4xl lg:text-[48px] text-structural leading-[1.3] mb-1 md:mb-2"
          >
            {line}
          </motion.p>
        ))}

        {/* Separador */}
        <motion.div
          {...fadeUp(1.8)}
          className="w-[120px] h-[3px] bg-rupture mx-auto my-8 md:my-10"
        />

        {/* Linha vermelha com shake */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, x: [0, -3, 3, -2, 2, 0] }}
          transition={{ duration: 0.6, delay: 2.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="font-montserrat font-black text-[20px] md:text-3xl lg:text-[44px] text-rupture leading-[1.3] mb-6 md:mb-8"
        >
          Mas zero anúncios. Zero.
        </motion.p>

        {/* Sub-linhas cinzas */}
        {subLines.map((line, i) => (
          <motion.p
            key={i}
            {...fadeUp(3.0 + i * 0.3)}
            className="font-montserrat font-bold text-base md:text-xl lg:text-2xl text-tactical leading-[1.4] mb-2"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default SlideContraste;
