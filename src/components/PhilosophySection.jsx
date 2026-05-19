import FadeInOnScroll from './FadeInOnScroll';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-white py-28 sm:py-36 border-t border-ctk-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-14">
          <FadeInOnScroll>
            <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Our Beliefs</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 leading-tight">
              Our Philosophy
            </h2>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <div className="space-y-8 text-base sm:text-lg leading-relaxed">
              <p className="text-ctk-700 font-light leading-relaxed">
                Ceeteekay Interiors represents a commitment to quiet luxury — furniture designed not to impress, but to comfort.
              </p>
              <p className="text-ctk-700 font-light leading-relaxed">
                We source premium Italian velvets, sustainable hardwoods, and high-resilience foams. Our upholsterers hand-tuft,
                hand-stud, and hand-finish each piece to museum quality standards.
              </p>
              <p className="text-ctk-700 font-light leading-relaxed">
                Based in Chadcombe, Harare, we believe in slow fashion for furniture. In durability over trends. In materials that
                age beautifully. In pieces that become cherished family heirlooms.
              </p>
              <div className="pt-6">
                <div className="w-16 h-[1px] bg-ctk-300 mb-6" />
                <p className="text-ctk-700 font-light italic text-xl sm:text-2xl">
                  Silence. Comfort. Elegance. These are not features — they are promises.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
