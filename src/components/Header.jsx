export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <a href="#" className="flex items-center">
        <img src="/logo.jpg" alt="CeeTeeKay Interiors" className="h-10 w-auto object-contain" />
      </a>

      <nav className="hidden md:flex items-center gap-10">
        {[{label: 'Beds', href: '#beds'}, {label: 'Chairs & Tables', href: '#chairs'}, {label: 'TV Stands', href: '#tvstands'}, {label: 'Collection', href: '#collection'}, {label: 'Projects', href: '#projects'}, {label: 'Services', href: '#services'}, {label: 'Process', href: '#process'}, {label: 'Contact', href: '#contact'}].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link text-xs tracking-[0.2em] font-semibold text-white/70 hover:text-white transition-colors duration-300 uppercase"
          >
            {item.label}
          </a>
        ))}
        <button className="px-5 py-2.5 bg-brand-orange text-white text-xs tracking-[0.2em] font-bold rounded-sm hover:opacity-90 transition-all duration-300 uppercase">
          INQUIRE
        </button>
      </nav>

      <div className="flex items-center gap-4 md:hidden">
        <button className="px-4 py-2 bg-brand-orange text-white text-xs tracking-[0.15em] font-bold rounded-sm uppercase">
          INQUIRE
        </button>
        <button className="text-white text-xl">&#9776;</button>
      </div>
    </header>
  );
}
