import { useRef, useEffect, useState, useCallback } from 'react';
import { heroProducts } from '../data/products';

export default function HeroCarousel() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fillWidth, setFillWidth] = useState(12.5);
  const rafId = useRef(null);

  const updateProgress = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const idx = Math.min(
      Math.floor((scrollLeft + el.clientWidth / 2) / el.clientWidth),
      heroProducts.length - 1
    );
    setActiveIndex(idx);
    setFillWidth(((idx + 1) / heroProducts.length) * 100);
    rafId.current = null;
  }, []);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(updateProgress);
  }, [updateProgress]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return (
    <section className="w-full px-6 mb-16">
      <div className="slider-viewport mx-auto max-w-7xl">
        <div className="slider-container" ref={sliderRef}>
          {heroProducts.map((product) => (
            <div key={product.id} className="slide-item">
              <img
                src={product.image}
                alt={product.name}
                loading={product.id === 'ctk-001' ? 'eager' : 'lazy'}
                fetchpriority={product.id === 'ctk-001' ? 'high' : 'low'}
              />
              <div className="slide-overlay">
                <div className="slide-category">{product.collectionId}</div>
                <div className="slide-title">{product.collection}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tracker-wrapper max-w-7xl mx-auto">
        <div className="tracker-bg-line">
          <div className="tracker-fill-line" style={{ width: `${fillWidth}%` }} />
        </div>
        <div className="tracker-info">
          <div>Swipe to Navigate</div>
          <div className="tracker-counter">
            Item <span>{activeIndex + 1}</span> of {heroProducts.length}
          </div>
        </div>
      </div>
    </section>
  );
}
