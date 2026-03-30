import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const steps = [
  { num: "1", border: "#E71D36", color: "#E71D36", text: "Agendar reunião de 30 minutos" },
  { num: "2", border: "#F1C40F", color: "#F1C40F", text: "Mapear os objetivos da Domenico" },
  { num: "3", border: "#2ECC71", color: "#2ECC71", text: "Detalhar cada ponto identificado" },
  { num: "4", border: "#0A1931", color: "#0A1931", text: "Plano de ação com prioridades" },
];

const SlideCTA = () => (
  <div className="min-h-screen flex flex-col overflow-y-auto">
    {/* Metade superior */}
    <div className="bg-structural flex-1 px-6 md:px-16 lg:px-24 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeUp(0)} className="font-montserrat font-black text-2xl md:text-4xl text-implacable leading-tight mb-4">
          VAMOS TIRAR ESSE PROJETO DO PAPEL?
        </motion.h2>

        <motion.p {...fadeUp(0.15)} className="font-montserrat font-bold text-base md:text-lg text-rupture mb-6">
          PRÓXIMOS PASSOS:
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.25 + i * 0.15)}
              className="bg-white border border-tactical/10 p-4"
              style={{ borderTopWidth: 3, borderTopColor: step.border }}
            >
              <span className="font-montserrat font-black text-2xl block mb-2" style={{ color: step.color }}>
                {step.num}
              </span>
              <p className="font-lora text-sm text-implacable">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.9)} className="font-lora italic text-base text-tactical">
          Clique abaixo e agende uma reunião estratégica gratuita comigo de 20 minutos.
        </motion.p>
      </div>
    </div>

    {/* Metade inferior */}
    <div className="bg-sovereign px-6 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col items-center text-center">
      <motion.a
        {...fadeUp(1.0)}
        href="#"
        className="inline-block font-montserrat font-bold text-base bg-rupture text-white px-12 py-4 mb-8 hover:bg-[#C41830] transition-colors"
        whileHover={{ scale: 1.02 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(231,29,54,0.4)", "0 0 0 12px rgba(231,29,54,0)", "0 0 0 0 rgba(231,29,54,0.4)"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        AGENDE AGORA
      </motion.a>

      <motion.p {...fadeUp(1.2)} className="font-montserrat font-black text-5xl text-structural/20 mb-4">
        GDT
      </motion.p>

      <motion.p {...fadeUp(1.3)} className="font-montserrat text-sm text-tactical mb-4">
        gabrielditullio.com.br
      </motion.p>

      <motion.p {...fadeUp(1.4)} className="font-lora text-xs text-tactical/60">
        Confidencial — Domenico Pizzeria e Trattoria
      </motion.p>
    </div>
  </div>
);

export default SlideCTA;
