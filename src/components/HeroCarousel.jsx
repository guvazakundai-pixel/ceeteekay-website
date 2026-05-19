import { useState, useEffect, useCallback, useRef } from 'react';
import { heroProducts } from '../data/products';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    setIsAutoPlay(false);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
    setIsAutoPlay(false);
  }, []);

  const product = heroProducts[currentSlide];

  return (
    <section className="relative w-full h-dvh bg-ctk-950 overflow-hidden" aria-label="Hero showcase">
      <div
        key={product.id}
        className={`absolute inset-0 bg-gradient-to-br ${product.imageGradient} will-change-transform`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <div className="space-y-5 max-w-3xl">
            <p className="text-xs tracking-[0.3em] text-ctk-700 uppercase font-medium">
              {product.category}
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-ctk-950 leading-[1.1] tracking-tight text-balance">
              {product.name}
            </h2>
            <p className="text-xl sm:text-2xl font-light text-ctk-700 italic leading-snug max-w-xl mx-auto">
              {product.tagline}
            </p>
            <p className="text-base sm:text-lg text-ctk-600 leading-relaxed font-light max-w-lg mx-auto">
              {product.description}
            </p>
            <div className="pt-4">
              <p className="text-4xl sm:text-5xl font-serif font-light text-ctk-950 mb-5">
                ${product.price.toLocaleString()}
              </p>
              <button className="group relative px-10 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium overflow-hidden">
                <span className="relative z-10">EXPLORE THIS PIECE</span>
                <span className="absolute inset-0 bg-ctk-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-white/60 transition-all duration-700 ease-out"
              style={{ width: `${((currentSlide + 1) / heroProducts.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {heroProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-[2px] rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'bg-white w-10' : 'bg-white/20 w-4 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-white/50 text-xs tracking-[0.2em] font-light tabular-nums">
              {String(currentSlide + 1).padStart(2, '0')} / {String(heroProducts.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>

      <button
        ref={prevBtnRef}
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        ref={nextBtnRef}
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
}


