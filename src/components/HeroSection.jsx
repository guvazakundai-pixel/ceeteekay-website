import { useEffect, useState } from 'react';
import { heroProducts } from '../data/products';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroProducts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroProducts[activeSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ctk-950">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms]"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ctk-950/90 via-ctk-950/60 to-ctk-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ctk-950/80 via-transparent to-ctk-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 w-full">
        <div className="max-w-2xl">
          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-ctk-300/80 uppercase font-medium mb-6 transition-all duration-700">
            Handcrafted in Harare
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.05] mb-6">
            Furniture That<br />
            <span className="italic text-white/90">Defines</span> Space
          </h1>

          <p className="text-base sm:text-lg text-white/50 font-light leading-relaxed mb-10 max-w-lg">
            Premium handcrafted furniture — from bespoke sofas to dining suites — designed to anchor every room with character and lasting comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#living"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-ctk-950 text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-white/90 transition-all duration-300"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase font-bold hover:border-white/50 transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium whitespace-nowrap">
            {String(activeSlide + 1).padStart(2, '0')} / {String(heroProducts.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            {heroProducts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-[2px] rounded-full transition-all duration-500 ${
                  i === activeSlide ? 'w-10 bg-white' : 'w-4 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#living" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3V13M8 13L3 8M8 13L13 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}