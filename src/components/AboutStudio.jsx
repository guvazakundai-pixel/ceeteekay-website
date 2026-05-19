import FadeInOnScroll from './FadeInOnScroll';

export default function AboutStudio() {
  return (
    <section className="bg-ctk-950 text-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeInOnScroll>
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium mb-4 block">About</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">The Studio</h2>
            <div className="space-y-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
              <p>
                Ceeteekay Interiors is a Zimbabwean design studio dedicated to the craft of quiet luxury.
              </p>
              <p>
                Our workshops in Chadcombe, Harare, are home to master upholsterers who have spent decades perfecting their art.
              </p>
              <p>
                We do not follow trends. We create pieces that transcend them — furniture built to become heirlooms.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-serif font-light text-white">12+</p>
                <p className="text-xs text-white/40 font-light mt-1">Years Crafting</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-white">500+</p>
                <p className="text-xs text-white/40 font-light mt-1">Pieces Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-light text-white">100%</p>
                <p className="text-xs text-white/40 font-light mt-1">Hand Finished</p>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={150}>
            <div className="h-80 sm:h-96 md:h-120 bg-gradient-to-br from-ctk-800 to-ctk-700 rounded-sm relative overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-[1px] bg-white/20 mx-auto mb-4" />
                  <p className="text-xs text-white/30 tracking-[0.2em] font-light uppercase">Chadcombe Workshop</p>
                  <div className="w-16 h-[1px] bg-white/20 mx-auto mt-4" />
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
