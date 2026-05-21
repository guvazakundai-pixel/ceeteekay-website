import FadeInOnScroll from './FadeInOnScroll';

const designProcess = [
  { step: '01', title: 'Consultation', description: 'We begin with a deep understanding of your space, lifestyle, and aesthetic preferences.' },
  { step: '02', title: 'Concept', description: 'Our designers create mood boards, material selections, and initial sketches tailored to you.' },
  { step: '03', title: 'Craft', description: 'Master upholsterers hand-build each piece using time-honoured techniques and premium materials.' },
  { step: '04', title: 'Delivery', description: 'White-glove delivery and placement. Your piece arrives exactly as envisioned.' },
];

export default function DesignProcess() {
  return (
    <section id="process" className="bg-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">How We Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-ctk-950 mb-5 leading-tight">
            The Design Process
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            From first conversation to final placement — a seamless journey from vision to heirloom.
          </p>
        </FadeInOnScroll>

        <div className="space-y-6 mt-16 sm:mt-20">
          {designProcess.map((step, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-12 p-6 sm:p-8 border-l-[1px] border-ctk-200 hover:border-ctk-950 transition-colors duration-500">
                <span className="text-3xl sm:text-4xl font-serif font-light text-ctk-200 shrink-0 leading-none">{step.step}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-ctk-950 mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-ctk-500 font-light leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
