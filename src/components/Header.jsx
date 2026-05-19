import { useEffect, useState, useRef } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const rafId = useRef(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 60);
      rafId.current = null;
    };
    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-sm' : 'bg-white/80'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-serif font-light text-ctk-950 tracking-tight">Ceeteekay</span>
          <span className="text-[10px] text-ctk-400 tracking-[0.25em] font-light hidden sm:block">INTERIORS</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['Collection', 'Projects', 'Services', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-xs tracking-[0.2em] font-medium text-ctk-700 hover:text-ctk-950 transition-colors duration-300 uppercase"
            >
              {item}
            </a>
          ))}
          <button className="px-5 py-2.5 bg-ctk-950 text-white text-xs tracking-[0.2em] font-medium rounded-sm hover:bg-ctk-800 transition-all duration-300">
            INQUIRE
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button className="px-4 py-2 bg-ctk-950 text-white text-xs tracking-[0.15em] font-medium rounded-sm">
            INQUIRE
          </button>
          <button className="text-ctk-950 text-xl">&#9776;</button>
        </div>
      </div>
    </header>
  );
}
