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
    </Presentation>
  );
};

export default Index;
