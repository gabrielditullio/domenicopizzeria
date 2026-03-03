import React, { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PresentationProps {
  children: React.ReactNode[];
}

const Presentation: React.FC<PresentationProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalSlides = children.length;

  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchLocked = useRef<"horizontal" | "vertical" | null>(null);

  const goTo = useCallback(
    (index: number, dir: number) => {
      if (index < 0 || index >= totalSlides) return;
      setDirection(dir);
      setCurrentSlide(index);
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(currentSlide + 1, 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1, -1), [currentSlide, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  // Touch handlers — horizontal-only swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
    touchLocked.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;

    if (!touchLocked.current) {
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      touchLocked.current = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }

    // If horizontal swipe, prevent default scroll
    if (touchLocked.current === "horizontal") {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || touchLocked.current !== "horizontal") {
      touchStart.current = null;
      touchLocked.current = null;
      return;
    }
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStart.current = null;
    touchLocked.current = null;
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-sovereign"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full overflow-y-auto"
        >
          {children[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Arrow navigation — desktop only */}
      {currentSlide > 0 && (
        <button
          onClick={prev}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 items-center justify-center border border-structural/20 bg-sovereign/80 backdrop-blur-sm text-structural/70 hover:text-structural hover:border-structural/40 transition-all"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {currentSlide < totalSlides - 1 && (
        <button
          onClick={next}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 items-center justify-center border border-structural/20 bg-sovereign/80 backdrop-blur-sm text-structural/70 hover:text-structural hover:border-structural/40 transition-all"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Progress indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
            className={`h-1 transition-all duration-300 ${
              i === currentSlide
                ? "w-8 bg-rupture"
                : "w-4 bg-structural/30 hover:bg-structural/50"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-6 z-50 font-montserrat text-xs text-tactical/60 tracking-widest">
        {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </div>
  );
};

export default Presentation;
