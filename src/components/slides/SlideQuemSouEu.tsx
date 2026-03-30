import { motion } from "framer-motion";
import gabrielPhoto from "@/assets/gabriel-photo.jpg";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const slideIn = (delay: number) => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const SlideQuemSouEu = () => (
  <div className="relative min-h-screen px-6 md:px-16 lg:px-24 py-12 md:py-20 overflow-hidden" style={{ backgroundColor: "rgba(18, 18, 18, 1)" }}>
    {/* Faixa diagonal decorativa */}
    <div className="absolute bottom-0 left-0 w-full h-64 -skew-y-3 origin-bottom-left" />

    <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
      {/* Foto placeholder */}
      <motion.div
        {...fadeUp(0)}
        className="w-48 md:w-60 h-60 md:h-[300px] border-2 border-tactical/40 shrink-0 overflow-hidden"
      >
        <img src={gabrielPhoto} alt="Gabriel Di Tullio" className="w-full h-full object-cover" />
      </motion.div>

      {/* Texto */}
      <div className="flex-1">
        <motion.span
          {...slideIn(0.2)}
          className="inline-block font-montserrat font-bold text-sm uppercase tracking-[0.15em] bg-sovereign text-structural px-3 py-1 mb-4"
        >
          QUEM SOU EU
        </motion.span>

        <motion.h2 {...slideIn(0.3)} className="font-montserrat font-black text-2xl md:text-[28px] text-white mb-1">
          GABRIEL DI TULLIO
        </motion.h2>

        <motion.p {...slideIn(0.4)} className="font-montserrat font-bold text-base text-rupture mb-3">
          Fundador — DT Coproduções
        </motion.p>

        <motion.div {...slideIn(0.5)} className="w-10 h-[2px] bg-rupture mb-5" />

        <motion.p {...slideIn(0.6)} className="font-lora text-base text-white leading-relaxed mb-4">
          Especialista em presença digital e performance para restaurantes e pizzarias, com certificação no Facebook e Google.
        </motion.p>

        <motion.p {...slideIn(0.7)} className="font-lora italic text-lg text-rupture leading-relaxed mb-4">
          A maior certificação que temos são nossos resultados.
        </motion.p>

        <motion.p {...slideIn(0.8)} className="font-lora text-base text-white leading-relaxed mb-3">
          Este diagnóstico foi elaborado com base exclusivamente em dados públicos, utilizando as seguintes ferramentas:
        </motion.p>

        <motion.ul {...slideIn(0.9)} className="font-lora text-sm text-white leading-relaxed space-y-1.5 list-none">
          <li><span className="font-montserrat font-bold text-xs text-rupture">●</span> Google Meu Negócio — Perfil de negócio no Google por unidade</li>
          <li><span className="font-montserrat font-bold text-xs text-rupture">●</span> Google PageSpeed Insights — performance real e laboratório</li>
          <li><span className="font-montserrat font-bold text-xs text-rupture">●</span> Google Ads Transparency Center — biblioteca de anúncios do Google</li>
          <li><span className="font-montserrat font-bold text-xs text-rupture">●</span> Meta Ads Library — campanhas ativas no Instagram e Facebook</li>
          <li><span className="font-montserrat font-bold text-xs text-rupture">●</span> Google Keyword Planner — volume de pesquisa no Google por palavras</li>
        </motion.ul>
      </div>
    </div>
  </div>
);

export default SlideQuemSouEu;
