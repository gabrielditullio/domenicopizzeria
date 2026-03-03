import Presentation from "@/components/Presentation";
import SlideCover from "@/components/slides/SlideCover";
import SlideContexto from "@/components/slides/SlideContexto";
import SlideOQueJaTem from "@/components/slides/SlideOQueJaTem";
import SlideSite from "@/components/slides/SlideSite";
import SlideGMN from "@/components/slides/SlideGMN";
import SlideRanking from "@/components/slides/SlideRanking";
import SlideGoogleAds from "@/components/slides/SlideGoogleAds";
import SlideVolumePesquisa from "@/components/slides/SlideVolumePesquisa";
import SlideMetaAds from "@/components/slides/SlideMetaAds";
import SlideContraste from "@/components/slides/SlideContraste";
import SlideDiagnostico from "@/components/slides/SlideDiagnostico";
import SlideGap from "@/components/slides/SlideGap";
import SlideResumo from "@/components/slides/SlideResumo";
import SlideTagline from "@/components/slides/SlideTagline";
import SlideQuemSouEu from "@/components/slides/SlideQuemSouEu";
import SlideCTA from "@/components/slides/SlideCTA";

const Index = () => {
  return (
    <Presentation>
      <SlideCover />
      <SlideContexto />
      <SlideOQueJaTem />
      <SlideSite />
      <SlideGMN />
      <SlideRanking />
      <SlideGoogleAds />
      <SlideVolumePesquisa />
      <SlideMetaAds />
      <SlideContraste />
      <SlideDiagnostico />
      <SlideGap />
      <SlideResumo />
      <SlideTagline />
      <SlideQuemSouEu />
      <SlideCTA />
    </Presentation>
  );
};

export default Index;
