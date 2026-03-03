import Presentation from "@/components/Presentation";
import SlideCover from "@/components/slides/SlideCover";
import SlideContexto from "@/components/slides/SlideContexto";
import SlideOQueJaTem from "@/components/slides/SlideOQueJaTem";

const Index = () => {
  return (
    <Presentation>
      <SlideCover />
      <SlideContexto />
      <SlideOQueJaTem />
    </Presentation>
  );
};

export default Index;
