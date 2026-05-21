import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Living', href: '#living' },
  { label: 'Dining', href: '#dining' },
  { label: 'Bedroom', href: '#bedroom' },
  { label: 'TV Stands', href: '#tvstands' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-ctk-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/ctk-logo-transparent.png"
              alt="CeeTeeKay Interiors"
              className={`h-8 md:h-9 w-auto object-contain transition-all duration-500 ${
                scrolled ? 'opacity-90' : 'opacity-80 hover:opacity-100'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-ctk-600 hover:text-ctk-950'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-4 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 ${
                scrolled
                  ? 'bg-ctk-950 text-white hover:bg-ctk-800'
                  : 'bg-white text-ctk-950 hover:bg-white/90'
              }`}
            >
              Inquire
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-ctk-950' : 'text-white'}`}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" strokeLinecap="round" />
              ) : (
                <path d="M3 5H17M3 10H17M3 15H17" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`px-6 pb-6 pt-2 space-y-1 ${scrolled ? 'bg-white/95 backdrop-blur-xl' : 'bg-black/80 backdrop-blur-lg'}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm tracking-[0.15em] uppercase font-medium transition-colors duration-300 border-b ${
                scrolled ? 'text-ctk-700 hover:text-ctk-950 border-ctk-100' : 'text-white/85 hover:text-white border-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`block mt-4 py-3 text-center text-[10px] tracking-[0.2em] uppercase font-bold ${
              scrolled ? 'bg-ctk-950 text-white' : 'bg-white text-ctk-950'
            }`}
          >
            Inquire
          </a>
        </div>
      </div>
    </header>
  );
}