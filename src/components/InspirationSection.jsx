import FadeInOnScroll from './FadeInOnScroll';

const spaces = [
  { title: 'Modern Minimalism', subtitle: 'Architectural Simplicity', gradient: 'from-slate-300 to-slate-200' },
  { title: 'Warm Luxury', subtitle: 'Earthy Heritage', gradient: 'from-amber-300 to-amber-200' },
  { title: 'Royal Comfort', subtitle: 'Deep Blue Elegance', gradient: 'from-blue-300 to-blue-200' },
  { title: 'Pink Sanctuary', subtitle: 'Sophisticated Softness', gradient: 'from-rose-300 to-rose-200' },
];

export default function InspirationSection() {
  return (
    <section id="inspiration" className="bg-ctk-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Inspiration</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">Editorial Spaces</h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Curated interiors that showcase the craftsmanship and artistry behind every Ceeteekay piece.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-16 sm:mt-20">
          {spaces.map((space, i) => (
            <FadeInOnScroll key={i} delay={i * 80} threshold={0.05}>
              <div className={`relative overflow-hidden group cursor-pointer rounded-sm ${
                i === 0 ? 'md:row-span-2 md:h-full' : ''
              } h-72 sm:h-80 bg-gradient-to-br ${space.gradient}`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-12 h-[1px] bg-ctk-600/20 mx-auto mb-5" />
                  <h3 className="text-3xl sm:text-4xl font-serif font-light text-ctk-950 mb-2">{space.title}</h3>
                  <p className="text-sm sm:text-base text-ctk-600 font-light">{space.subtitle}</p>
                  <div className="w-12 h-[1px] bg-ctk-600/20 mx-auto mt-5" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
