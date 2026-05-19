import { useState, useEffect, useCallback, useRef } from 'react';
import { heroProducts } from '../data/products';

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const transitionTimer = useRef(null);

  const goTo = useCallback((next) => {
    if (isTransitioning || next === activeIndex) return;
    setIsTransitioning(true);
    setPrevIndex(activeIndex);
    setActiveIndex(next);
    setIsAutoPlay(false);
    clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 1500);
  }, [activeIndex, isTransitioning]);

  const nextSlide = useCallback(() => {
    goTo((activeIndex + 1) % heroProducts.length);
  }, [activeIndex, goTo]);

  const prevSlide = useCallback(() => {
    goTo((activeIndex - 1 + heroProducts.length) % heroProducts.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (!isAutoPlay || isTransitioning) return;
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % heroProducts.length;
        setIsTransitioning(true);
        setPrevIndex(prev);
        clearTimeout(transitionTimer.current);
        transitionTimer.current = setTimeout(() => {
          setIsTransitioning(false);
          setPrevIndex(null);
        }, 1500);
        return next;
      });
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, isTransitioning]);

  useEffect(() => {
    return () => clearTimeout(transitionTimer.current);
  }, []);

  const active = heroProducts[activeIndex];
  const previous = prevIndex !== null ? heroProducts[prevIndex] : null;

  return (
    <section className="carousel-viewport relative w-full h-dvh overflow-hidden" aria-label="Hero showcase">
      <div className="absolute inset-0 bg-ctk-950" />

      {previous && (
        <>
          <div
            className={`carousel-slide exiting ${previous.imageGradient} bg-gradient-to-br`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
              <div className="space-y-5 max-w-3xl">
                <p className="text-xs tracking-[0.3em] text-ctk-700 uppercase font-medium">{previous.category}</p>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-ctk-950 leading-[1.1] tracking-tight text-balance">{previous.name}</h2>
                <p className="text-xl sm:text-2xl font-light text-ctk-700 italic leading-snug max-w-xl mx-auto">{previous.tagline}</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={`carousel-slide entering ${active.imageGradient} bg-gradient-to-br`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="space-y-5 max-w-3xl">
            <p className="text-xs tracking-[0.3em] text-ctk-700 uppercase font-medium">{active.category}</p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-ctk-950 leading-[1.1] tracking-tight text-balance">{active.name}</h2>
            <p className="text-xl sm:text-2xl font-light text-ctk-700 italic leading-snug max-w-xl mx-auto">{active.tagline}</p>
            <p className="text-base sm:text-lg text-ctk-600 leading-relaxed font-light max-w-lg mx-auto">{active.description}</p>
            <div className="pt-4">
              <p className="text-4xl sm:text-5xl font-serif font-light text-ctk-950 mb-5">${active.price.toLocaleString()}</p>
              <button className="group relative px-10 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium overflow-hidden">
                <span className="relative z-10">EXPLORE THIS PIECE</span>
                <span className="absolute inset-0 bg-ctk-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-white/60 transition-all duration-1000 ease-out"
              style={{ width: `${((activeIndex + 1) / heroProducts.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-[2px] rounded-full transition-all duration-500 ${
                    index === activeIndex ? 'bg-white w-10' : 'bg-white/20 w-4 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-white/50 text-xs tracking-[0.2em] font-light tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(heroProducts.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
}
