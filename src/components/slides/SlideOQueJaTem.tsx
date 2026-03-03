import { motion } from "framer-motion";
import { Star, MessageCircle, Globe, Camera, BarChart3, ShieldCheck } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const cards = [
  {
    icon: Star,
    title: "2.480 Avaliações — 1º Lugar",
    desc: "Mais que o dobro do 2º colocado (Dona Derna, 999). Base de clientes mais engajada do segmento em BH.",
  },
  {
    icon: MessageCircle,
    title: "100% das Avaliações Respondidas",
    desc: "90 de 90 avaliações recentes com resposta oficial. Gestão exemplar — isso é raríssimo.",
  },
  {
    icon: Globe,
    title: "Site com Tour 360° + 8 Idiomas",
    desc: "Tour virtual Matterport, cardápio digital, delivery direto via WhatsApp, iFood e Uber Eats. Tradução em en, pt, de, es, fr, it, ru, zh.",
  },
  {
    icon: Camera,
    title: "20 Fotos 360° + 20 Vídeos",
    desc: "Conteúdo visual profissional no perfil. Foto do proprietário atualizada. Postagens diárias.",
  },
  {
    icon: BarChart3,
    title: "GTM + Analytics Instalados",
    desc: "Google Tag Manager (GTM-M96CKSK) e Google Analytics (G-195LRDCR0V) ativos. Infraestrutura de rastreamento pronta.",
  },
  {
    icon: ShieldCheck,
    title: "Nota 95 — EXCELENTE",
    desc: "19 de 20 métricas classificadas como BOM no teste de saúde do Google. Um dos perfis mais completos que já analisamos.",
  },
];

const SlideOQueJaTem = () => {
  return (
    <div className="min-h-screen bg-structural px-6 md:px-16 lg:px-24 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <motion.p
          {...fadeUp(0)}
          className="font-montserrat font-bold text-sm text-success uppercase tracking-[0.25em] mb-4"
        >
          02 — O QUE VOCÊS JÁ TÊM
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-montserrat font-bold text-2xl md:text-4xl text-implacable leading-tight mb-10"
        >
          Um ecossistema digital que poucos constroem
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(0.3 + i * 0.15)}
                className="bg-white border-t-[3px] border-t-success p-6 border border-tactical/10"
              >
                <Icon className="w-6 h-6 text-success mb-4" strokeWidth={2} />
                <h3 className="font-montserrat font-bold text-base text-implacable mb-2">
                  {card.title}
                </h3>
                <p className="font-lora text-sm text-tactical leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          {...fadeUp(1.2)}
          className="font-lora italic text-base md:text-lg text-tactical text-center mt-12 max-w-3xl mx-auto"
        >
          Perfil exemplar, site completo, avaliações respondidas, conteúdo diário. A Domenico construiu tudo certo. Então o que está faltando?
        </motion.p>
      </div>
    </div>
  );
};

export default SlideOQueJaTem;
