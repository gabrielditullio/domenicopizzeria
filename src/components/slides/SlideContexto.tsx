import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const SlideContexto = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm text-rupture uppercase tracking-[0.25em] mb-4"
        >
          01 — CONTEXTO
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-8"
        >
          Por que este diagnóstico existe
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="font-lora text-base md:text-lg text-implacable leading-[1.6] mb-10"
        >
          Criamos essa análise com o objetivo de realizar um diagnóstico do panorama atual do seu ecossistema digital e encontrar gatilhos de melhoria, tanto na estratégia de tráfego pago como também no posicionamento digital. A Domenico chamou atenção por um contraste muito específico: um dos perfis mais completos que já analisamos — mas sem nenhum investimento em tráfego pago.
        </motion.p>

        <motion.div
          {...fadeUp(0.6)}
          className="border-l-4 border-rupture pl-6 py-6 bg-sovereign/[0.04]"
        >
          <p className="font-lora italic text-sm md:text-base text-implacable leading-[1.6]">
            Este não é um material comercial. É uma análise técnica baseada em dados públicos — perfil do Google, teste de velocidade do Google e biblioteca de anúncios. O objetivo é que vocês tenham clareza sobre como a Domenico aparece para quem pesquisa online. Lembramos que as sugestões foram feitas com um olhar externo, sem acesso às ferramentas internas de marketing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideContexto;
