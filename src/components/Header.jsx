export default function Header() {

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <a href="#" className="flex items-center gap-1">
          <span className="text-white font-black text-2xl tracking-tight uppercase">
            <span className="bg-white text-brand-blue px-1 rounded-sm">C</span>eeTeeKay
          </span>
        </a>
        <span className="text-[10px] font-extrabold uppercase tracking-[5px] text-brand-orange -mt-0.5">Interiors</span>
      </div>

      <nav className="hidden md:flex items-center gap-10">
        {['Collection', 'Projects', 'Services', 'Process', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link text-xs tracking-[0.2em] font-semibold text-white/70 hover:text-white transition-colors duration-300 uppercase"
          >
            {item}
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
