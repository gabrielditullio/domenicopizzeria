import Presentation from "@/components/Presentation";
import SlideCover from "@/components/slides/SlideCover";

const Index = () => {
  return (
    <Presentation>
      <SlideCover />
      <div className="min-h-screen bg-structural flex items-center justify-center">
        <p className="font-montserrat font-bold text-2xl text-sovereign">Próximos slides em breve...</p>
      </div>
    </Presentation>
  );
};

export default Index;
