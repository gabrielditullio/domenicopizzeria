import Presentation from "@/components/Presentation";
import SlideCover from "@/components/slides/SlideCover";
import SlideContexto from "@/components/slides/SlideContexto";
import SlideOQueJaTem from "@/components/slides/SlideOQueJaTem";
import SlideSite from "@/components/slides/SlideSite";
import SlideGMN from "@/components/slides/SlideGMN";
import SlideRanking from "@/components/slides/SlideRanking";

const Index = () => {
  return (
    <Presentation>
      <SlideCover />
      <SlideContexto />
      <SlideOQueJaTem />
      <SlideSite />
      <SlideGMN />
      <SlideRanking />
    </Presentation>
  );
};

export default Index;
