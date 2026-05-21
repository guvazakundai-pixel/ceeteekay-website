export default function Footer() {
  return (
    <footer className="bg-ctk-950 text-ctk-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img src="/ctk-logo-transparent.png" alt="CeeTeeKay Interiors" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-xs sm:text-sm font-light leading-relaxed text-ctk-500">
              Handcrafted luxury furniture from Harare, Zimbabwe.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.25em] font-medium mb-5">Collection</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              {['Lounge Suites', 'Accent Chairs', 'TV Stands', 'Ottoman Benches', 'Bedroom Furniture'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ctk-500 hover:text-white transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.25em] font-medium mb-5">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              {[
                { label: 'Philosophy', href: '#philosophy' },
                { label: 'Bespoke Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-ctk-500 hover:text-white transition-colors duration-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.25em] font-medium mb-5">Follow</h4>
            <div className="flex flex-col gap-2.5">
              {['Instagram', 'Pinterest', 'YouTube'].map((item) => (
                <a key={item} href="#" className="text-xs sm:text-sm font-light text-ctk-500 hover:text-white transition-colors duration-300">{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-[10px] sm:text-xs font-light text-ctk-500 tracking-wide">
            &copy; 2024 Ceeteekay Interiors. Handcrafted in Zimbabwe.
          </p>
        </div>
      </div>
    </footer>
  );
}
