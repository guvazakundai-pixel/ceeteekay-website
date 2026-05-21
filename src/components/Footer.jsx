export default function Footer() {
  return (
    <footer className="bg-ctk-950 text-ctk-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src="/ctk-logo-transparent.png" alt="CeeTeeKay Interiors" className="h-8 w-auto object-contain opacity-80" />
            </a>
            <p className="text-sm font-light leading-relaxed text-ctk-500 mb-6 max-w-xs">
              Handcrafted luxury furniture from Harare, Zimbabwe. Where craftsmanship meets contemporary design.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Pinterest', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="text-ctk-500 hover:text-white transition-colors duration-300 text-xs tracking-[0.1em] uppercase font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-white uppercase font-medium mb-6">Showroom</h4>
            <ul className="space-y-3">
              {[
                { label: 'Living Room', href: '#living' },
                { label: 'Dining', href: '#dining' },
                { label: 'Bedroom', href: '#bedroom' },
                { label: 'TV Stands', href: '#tvstands' },
                { label: 'Decor', href: '#decor' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm font-light text-ctk-500 hover:text-white transition-colors duration-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-white uppercase font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Process', href: '#process' },
                { label: 'Bespoke Service', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm font-light text-ctk-500 hover:text-white transition-colors duration-300">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] text-white uppercase font-medium mb-6">Visit Us</h4>
            <div className="space-y-3 text-sm font-light text-ctk-500">
              <p>25 Clovelly Road</p>
              <p>Chadcombe, Harare</p>
              <p>Zimbabwe</p>
              <p className="pt-2">Mon – Fri: 9am – 6pm</p>
              <p>Sat: 10am – 4pm</p>
              <p className="pt-2">
                <a href="tel:+263777723484" className="hover:text-white transition-colors">+263 777 723 484</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-ctk-600 tracking-[0.1em] uppercase">
            &copy; 2025 CeeTeeKay Interiors. All rights reserved.
          </p>
          <p className="text-[10px] text-ctk-700 tracking-[0.05em]">
            Handcrafted in Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}