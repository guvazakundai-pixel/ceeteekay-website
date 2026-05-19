import FadeInOnScroll from './FadeInOnScroll';

const services = [
  { title: 'Bespoke Furniture', description: 'Custom dimensions, exclusive fabrics, and architectural integration for spaces that demand the extraordinary.' },
  { title: 'Interior Consultation', description: 'Full-room composition guidance — from fabric pairing to spatial layout and lighting harmony.' },
  { title: 'Restoration & Reupholstery', description: 'Breathing new life into heirloom pieces with premium materials and expert craftsmanship.' },
  { title: 'Trade Program', description: 'Dedicated pricing and support for interior designers, architects, and hospitality buyers.' },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">Services</h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Beyond furniture — a full spectrum of design, craft, and advisory services for the discerning.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-20">
          {services.map((service, i) => (
            <FadeInOnScroll key={i} delay={i * 80}>
              <div className="group p-8 sm:p-10 border border-ctk-200 hover:border-ctk-950/20 transition-all duration-500 rounded-sm">
                <span className="text-[10px] tracking-[0.3em] text-ctk-400 font-medium uppercase mb-6 block">0{i + 1}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-ctk-950 mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-ctk-500 font-light leading-relaxed">{service.description}</p>
                <div className="mt-6 w-12 h-[1px] bg-ctk-300 group-hover:w-20 transition-all duration-500" />
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
