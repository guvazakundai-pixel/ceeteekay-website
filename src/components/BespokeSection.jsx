import FadeInOnScroll from './FadeInOnScroll';

export default function BespokeSection() {
  return (
    <section className="bg-ctk-950 text-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeInOnScroll>
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium mb-4 block">Bespoke</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">Bespoke Customization</h2>
            <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed mb-8">
              Every space is unique. We offer fully bespoke customization services tailored to your vision, including custom
              dimensions, exclusive fabric selections, and architectural consultation.
            </p>
            <button className="group relative px-8 py-3.5 border border-white/30 text-white text-xs tracking-[0.25em] font-medium overflow-hidden">
              <span className="relative z-10">REQUEST CONSULTATION</span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              <span className="absolute inset-0 mix-blend-difference text-ctk-950 flex items-center justify-center text-xs tracking-[0.25em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                REQUEST CONSULTATION
              </span>
            </button>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <div className="h-80 sm:h-96 bg-gradient-to-br from-ctk-800 to-ctk-700 rounded-sm relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-[1px] bg-white/10 mx-auto mb-4" />
                  <p className="text-xs text-white/20 tracking-[0.2em] font-light uppercase">Your Vision, Crafted</p>
                  <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
