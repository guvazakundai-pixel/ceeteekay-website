import FadeInOnScroll from './FadeInOnScroll';

const projects = [
  { title: 'Chadcombe Residence', subtitle: 'Full-home furnishing — 12 pieces', gradient: 'from-ctk-200 to-ctk-100' },
  { title: 'Borrowdale Penthouse', subtitle: 'Bespoke lounge suite & accent chairs', gradient: 'from-blue-200 to-blue-100' },
  { title: 'Lomagundi Estate', subtitle: 'Master bedroom & study suite', gradient: 'from-amber-200 to-amber-100' },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-ctk-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Editorial</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            A curated selection of residential and commercial interiors we have had the privilege of furnishing.
          </p>
        </FadeInOnScroll>

        <div className="space-y-8 mt-16 sm:mt-20">
          {projects.map((project, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <div className="relative overflow-hidden group cursor-pointer rounded-sm">
                <div className={`relative h-72 sm:h-80 md:h-88 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ctk-950 mb-3">{project.title}</h3>
                    <p className="text-sm sm:text-base text-ctk-600 font-light tracking-wide">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
