import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const easing = [0.25, 0.46, 0.45, 0.94];
const springEasing = { type: 'spring', stiffness: 300, damping: 30 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: easing },
});

export default function CeeteekayPremiumShowroom() {
  // ==================== STATE ====================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const heroRef = useRef(null);

  // ==================== PRODUCT DATA ====================
  const heroProducts = [
    {
      id: 'ctk-001',
      name: 'Royal Chesterfield 3-Seater Sofa',
      category: 'Lounge Suites',
      price: 950,
      tagline: 'Vintage Heritage Meets Modern Restraint',
      description: 'Deep button tufting. Hand-hammered studding. Non-sagging support. Crafted for formal living spaces.',
      imageGradient: 'from-purple-400 via-pink-300 to-purple-200',
      accent: '#8B7A7A',
      glowColor: 'rgba(139, 122, 122, 0.15)',
    },
    {
      id: 'ctk-002',
      name: 'Sovereign Royal Blue U-Shape Sectional',
      category: 'Lounge Suites',
      price: 2450,
      tagline: 'The Ultimate Statement Piece',
      description: 'Master-hand-tufted velvet. Double-layer foam. Configurable layouts. Deep luxury seating.',
      imageGradient: 'from-blue-400 via-blue-300 to-blue-200',
      accent: '#2C3E7F',
      glowColor: 'rgba(44, 62, 127, 0.2)',
    },
    {
      id: 'ctk-003',
      name: 'Elite Charcoal Velvet Studded Sofa',
      category: 'Lounge Suites',
      price: 1100,
      tagline: 'Moody. Modern. Architectural.',
      description: 'Clean lines. Hand-placed silver studs. Pocket-spring seating. Perfect for contemporary spaces.',
      imageGradient: 'from-slate-400 via-slate-300 to-slate-200',
      accent: '#2A2A2A',
      glowColor: 'rgba(42, 42, 42, 0.15)',
    },
    {
      id: 'ctk-004',
      name: 'Exquisite Mustard Shell Accent Chair',
      category: 'Accent Chairs',
      price: 420,
      tagline: 'Editorial Elegance. Sculptural Form.',
      description: 'Scalloped fan-back. Nordic ash legs. Cradle posture support. Statement piece for any room.',
      imageGradient: 'from-yellow-400 via-yellow-300 to-orange-200',
      accent: '#C9A961',
      glowColor: 'rgba(201, 169, 97, 0.2)',
    },
    {
      id: 'ctk-005',
      name: 'Classic Button-Tufted Ottoman (Beige)',
      category: 'Ottoman Benches',
      price: 160,
      tagline: 'Multi-Functional Elegance',
      description: 'Geometric tufting. Hidden storage. Smooth castors. Perfect for beds, sofas, or standalone.',
      imageGradient: 'from-amber-300 via-amber-200 to-stone-200',
      accent: '#D4C4B8',
      glowColor: 'rgba(212, 196, 184, 0.15)',
    },
    {
      id: 'ctk-006',
      name: 'Classic Button-Tufted Ottoman (Dusty Rose)',
      category: 'Ottoman Benches',
      price: 160,
      tagline: 'Sophisticated Color Pop',
      description: 'Premium suede velvet. High-resilience foam. Custom dimensions. Adds warmth to any palette.',
      imageGradient: 'from-rose-400 via-rose-300 to-pink-200',
      accent: '#A89BA0',
      glowColor: 'rgba(168, 155, 160, 0.15)',
    },
    {
      id: 'ctk-007',
      name: 'Sovereign Wingback Master Bedroom Suite',
      category: 'Bedroom Furniture',
      price: 1450,
      tagline: 'Five-Star Hotel Sanctuary',
      description: 'Floor-to-ceiling wingback. Acoustic dampening. Hydraulic storage. Ultimate luxury bedroom.',
      imageGradient: 'from-slate-500 via-slate-400 to-slate-300',
      accent: '#B8C4D0',
      glowColor: 'rgba(184, 196, 208, 0.15)',
    },
  ];

  const testimonials = [
    {
      quote: 'The craftsmanship is extraordinary. Every detail — from the hand-tufting to the stud placement — speaks of a dedication rarely seen.',
      author: 'Tendai M.',
      role: 'Harare, Zimbabwe',
    },
    {
      quote: 'Our U-shape sectional transformed our living room. It is not just furniture; it is the centrepiece of our home.',
      author: 'Sarah K.',
      role: 'Johannesburg, SA',
    },
    {
      quote: 'The bespoke consultation was seamless. They understood our vision and delivered beyond expectation.',
      author: 'Michael O.',
      role: 'Lagos, Nigeria',
    },
  ];

  const designProcess = [
    { step: '01', title: 'Consultation', description: 'We begin with a deep understanding of your space, lifestyle, and aesthetic preferences.' },
    { step: '02', title: 'Concept', description: 'Our designers create mood boards, material selections, and initial sketches tailored to you.' },
    { step: '03', title: 'Craft', description: 'Master upholsterers hand-build each piece using time-honoured techniques and premium materials.' },
    { step: '04', title: 'Delivery', description: 'White-glove delivery and placement. Your piece arrives exactly as envisioned.' },
  ];

  const services = [
    { title: 'Bespoke Furniture', description: 'Custom dimensions, exclusive fabrics, and architectural integration for spaces that demand the extraordinary.' },
    { title: 'Interior Consultation', description: 'Full-room composition guidance — from fabric pairing to spatial layout and lighting harmony.' },
    { title: 'Restoration & Reupholstery', description: 'Breathing new life into heirloom pieces with premium materials and expert craftsmanship.' },
    { title: 'Trade Program', description: 'Dedicated pricing and support for interior designers, architects, and hospitality buyers.' },
  ];

  // ==================== EFFECTS ====================
  useEffect(() => {
    if (!isAutoPlay) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, heroProducts.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledAmt = window.scrollY;
      setScrollProgress((scrolledAmt / scrollHeight) * 100);
      setScrolled(scrolledAmt > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // ==================== HANDLERS ====================
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    setIsAutoPlay(false);
  }, [heroProducts.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
    setIsAutoPlay(false);
  }, [heroProducts.length]);

  // ==================== COMPONENTS ====================

  // ----- Premium Header (refined) -----
  const Header = () => (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-sm' : 'bg-white/80'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <motion.a href="#" className="flex items-center gap-2 group" whileHover={{ scale: 1.02 }}>
          <span className="text-xl font-serif font-light text-ctk-950 tracking-tight">Ceeteekay</span>
          <span className="text-[10px] text-ctk-400 tracking-[0.25em] font-light hidden sm:block">INTERIORS</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-10">
          {['Collection', 'Projects', 'Services', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-xs tracking-[0.2em] font-medium text-ctk-700 hover:text-ctk-950 transition-colors duration-300 uppercase">
              {item}
            </a>
          ))}
          <motion.button
            className="px-5 py-2.5 bg-ctk-950 text-white text-xs tracking-[0.2em] font-medium rounded-sm hover:bg-ctk-800 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            INQUIRE
          </motion.button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <motion.button
            className="px-4 py-2 bg-ctk-950 text-white text-xs tracking-[0.15em] font-medium rounded-sm"
            whileTap={{ scale: 0.95 }}
          >
            INQUIRE
          </motion.button>
          <motion.button className="text-ctk-950 text-xl" whileTap={{ scale: 0.9 }}>
            ☰
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-ctk-950/10"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );

  // ----- Hero Carousel (refined) -----
  const HeroCarousel = () => (
    <section ref={heroRef} className="relative w-full h-dvh bg-ctk-950 overflow-hidden">
      <AnimatePresence mode="wait">
        {heroProducts.map(
          (product, index) =>
            index === currentSlide && (
              <motion.div
                key={product.id}
                className={`absolute inset-0 bg-gradient-to-br ${product.imageGradient}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/30" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, ease: easing }}
                    className="space-y-5 max-w-3xl"
                  >
                    <motion.p
                      className="text-xs tracking-[0.3em] text-ctk-700 uppercase font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {product.category}
                    </motion.p>

                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-ctk-950 leading-[1.1] tracking-tight text-balance">
                      {product.name}
                    </h2>

                    <p className="text-xl sm:text-2xl font-light text-ctk-700 italic leading-snug max-w-xl mx-auto">
                      {product.tagline}
                    </p>

                    <p className="text-base sm:text-lg text-ctk-600 leading-relaxed font-light max-w-lg mx-auto">
                      {product.description}
                    </p>

                    <div className="pt-4">
                      <p className="text-4xl sm:text-5xl font-serif font-light text-ctk-950 mb-5">
                        ${product.price.toLocaleString()}
                      </p>
                      <motion.button
                        className="group relative px-10 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium overflow-hidden"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span className="relative z-10">EXPLORE THIS PIECE</span>
                        <motion.span
                          className="absolute inset-0 bg-ctk-700 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: easing }}
                        />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-white/60"
              initial={{ width: 0 }}
              animate={{ width: `${((currentSlide + 1) / heroProducts.length) * 100}%` }}
              transition={{ duration: 0.6, ease: easing }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {heroProducts.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-[2px] rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white w-10' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                  whileHover={{ scaleY: 1.5 }}
                />
              ))}
            </div>
            <p className="text-white/50 text-xs tracking-[0.2em] font-light tabular-nums">
              {String(currentSlide + 1).padStart(2, '0')} / {String(heroProducts.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>

      <motion.button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.button>
    </section>
  );

  // ----- Collection Section (refined) -----
  const CollectionSection = () => (
    <section id="collection" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-16 sm:mb-20" {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Our Collection</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            The Complete Collection
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Handcrafted furniture pieces engineered around comfort, silence, and architectural beauty. Each item is a statement of quiet luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {heroProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: easing }}
            >
              <div className={`relative h-80 sm:h-88 bg-gradient-to-br ${product.imageGradient} rounded-sm overflow-hidden mb-5 shadow-sm`}>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-500"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: easing }}
                >
                  <div className="text-center px-6">
                    <div className="w-12 h-[1px] bg-ctk-600/30 mx-auto mb-4" />
                    <p className="text-sm text-ctk-700 italic font-light">{product.name}</p>
                    <div className="w-12 h-[1px] bg-ctk-600/30 mx-auto mt-4" />
                  </div>
                </motion.div>
              </div>
              <p className="text-[10px] text-ctk-400 uppercase tracking-[0.25em] mb-2 font-medium">{product.category}</p>
              <h3 className="text-xl sm:text-2xl font-serif font-light text-ctk-950 mb-1.5 group-hover:text-ctk-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-sm text-ctk-500 font-light italic mb-3 leading-relaxed">{product.tagline}</p>
              <p className="text-2xl sm:text-3xl font-serif font-light text-ctk-950">${product.price.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ----- Featured Projects (new) -----
  const FeaturedProjects = () => (
    <section id="projects" className="bg-ctk-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-16 sm:mb-20" {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Editorial</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            A curated selection of residential and commercial interiors we have had the privilege of furnishing.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            { title: 'Chadcombe Residence', subtitle: 'Full-home furnishing — 12 pieces', gradient: 'from-ctk-200 to-ctk-100', size: 'lg' },
            { title: 'Borrowdale Penthouse', subtitle: 'Bespoke lounge suite & accent chairs', gradient: 'from-blue-200 to-blue-100', size: 'sm' },
            { title: 'Lomagundi Estate', subtitle: 'Master bedroom & study suite', gradient: 'from-amber-200 to-amber-100', size: 'lg' },
          ].map((project, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${i === 1 ? 'md:col-span-1' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easing }}
            >
              <div className={`relative h-72 sm:h-80 md:h-88 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: easing }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ctk-950 mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-ctk-600 font-light tracking-wide">{project.subtitle}</p>
                  <motion.div
                    className="mt-6 w-16 h-[1px] bg-ctk-600/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ----- Services (new) -----
  const ServicesSection = () => (
    <section id="services" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-16 sm:mb-20" {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">Services</h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Beyond furniture — a full spectrum of design, craft, and advisory services for the discerning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group p-8 sm:p-10 border border-ctk-200 hover:border-ctk-950/20 transition-all duration-500 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easing }}
            >
              <span className="text-[10px] tracking-[0.3em] text-ctk-400 font-medium uppercase mb-6 block">0{i + 1}</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-ctk-950 mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-ctk-500 font-light leading-relaxed">{service.description}</p>
              <div className="mt-6 w-12 h-[1px] bg-ctk-300 group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ----- About Studio (new) -----
  const AboutStudio = () => (
    <section className="bg-ctk-950 text-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium mb-4 block">About</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">The Studio</h2>
            <div className="space-y-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
              <p>
                Ceeteekay Interiors is a Zimbabwean design studio dedicated to the craft of quiet luxury. Every piece we create begins with a conversation — about space, about light, about how you want to feel.
              </p>
              <p>
                Our workshops in Chadcombe, Harare, are home to master upholsterers who have spent decades perfecting their art. We pair their expertise with premium Italian velvets, sustainably sourced hardwoods, and high-resilience foams.
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
          </motion.div>

          <motion.div
            className="h-80 sm:h-96 md:h-120 bg-gradient-to-br from-ctk-800 to-ctk-700 rounded-sm relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-[1px] bg-white/20 mx-auto mb-4" />
                <p className="text-xs text-white/30 tracking-[0.2em] font-light uppercase">Chadcombe Workshop</p>
                <div className="w-16 h-[1px] bg-white/20 mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // ----- Design Process (new) -----
  const DesignProcess = () => (
    <section id="process" className="bg-white py-28 sm:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="mb-16 sm:mb-20" {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">How We Work</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            The Design Process
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            From first conversation to final placement — a seamless journey from vision to heirloom.
          </p>
        </motion.div>

        <div className="space-y-6">
          {designProcess.map((step, i) => (
            <motion.div
              key={i}
              className="group flex flex-col sm:flex-row gap-6 sm:gap-12 p-6 sm:p-8 border-l-[1px] border-ctk-200 hover:border-ctk-950 transition-colors duration-500"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
            >
              <span className="text-3xl sm:text-4xl font-serif font-light text-ctk-200 shrink-0 leading-none">{step.step}</span>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-ctk-950 mb-2">{step.title}</h3>
                <p className="text-sm sm:text-base text-ctk-500 font-light leading-relaxed max-w-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ----- Inspiration Gallery (refined) -----
  const InspirationSection = () => (
    <section id="inspiration" className="bg-ctk-50 py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-16 sm:mb-20" {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Inspiration</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">Editorial Spaces</h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Curated interiors that showcase the craftsmanship and artistry behind every Ceeteekay piece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {[
            { title: 'Modern Minimalism', subtitle: 'Architectural Simplicity', gradient: 'from-slate-300 to-slate-200' },
            { title: 'Warm Luxury', subtitle: 'Earthy Heritage', gradient: 'from-amber-300 to-amber-200' },
            { title: 'Royal Comfort', subtitle: 'Deep Blue Elegance', gradient: 'from-blue-300 to-blue-200' },
            { title: 'Pink Sanctuary', subtitle: 'Sophisticated Softness', gradient: 'from-rose-300 to-rose-200' },
          ].map((space, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${i === 0 ? 'md:row-span-2 md:h-full' : ''} h-72 sm:h-80 bg-gradient-to-br ${space.gradient}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easing }}
            >
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: easing }}
              >
                <div className="w-12 h-[1px] bg-ctk-600/20 mx-auto mb-5" />
                <h3 className="text-3xl sm:text-4xl font-serif font-light text-ctk-950 mb-2">{space.title}</h3>
                <p className="text-sm sm:text-base text-ctk-600 font-light">{space.subtitle}</p>
                <div className="w-12 h-[1px] bg-ctk-600/20 mx-auto mt-5" />
              </motion.div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // ----- Testimonials (new) -----
  const TestimonialsSection = () => (
    <section className="bg-white py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Testimonials</span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: easing }}
            className="space-y-8"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ctk-950 leading-snug text-balance">
              &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
            </p>
            <div>
              <p className="text-base sm:text-lg font-medium text-ctk-950">{testimonials[testimonialIndex].author}</p>
              <p className="text-sm text-ctk-500 font-light">{testimonials[testimonialIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setTestimonialIndex(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${i === testimonialIndex ? 'bg-ctk-950 w-10' : 'bg-ctk-300 w-4'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );

  // ----- Philosophy Section (refined) -----
  const PhilosophySection = () => (
    <section id="philosophy" className="bg-white py-28 sm:py-36 border-t border-ctk-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="space-y-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <motion.div {...fadeUp()}>
            <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Our Beliefs</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 leading-tight">
              Our Philosophy
            </h2>
          </motion.div>

          <motion.div className="space-y-8 text-base sm:text-lg leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.8 }}>
            <p className="text-ctk-700 font-light leading-relaxed">
              Ceeteekay Interiors represents a commitment to quiet luxury — furniture designed not to impress, but to comfort. Every piece is engineered around one principle: how does this make you feel?
            </p>

            <p className="text-ctk-700 font-light leading-relaxed">
              We source premium Italian velvets, sustainable hardwoods, and high-resilience foams. Our upholsterers hand-tuft, hand-stud, and hand-finish each piece to museum quality standards. This is not mass production. This is craft.
            </p>

            <p className="text-ctk-700 font-light leading-relaxed">
              Based in Chadcombe, Harare, we believe in slow fashion for furniture. In durability over trends. In materials that age beautifully. In pieces that become cherished family heirlooms.
            </p>

            <div className="pt-6">
              <div className="w-16 h-[1px] bg-ctk-300 mb-6" />
              <p className="text-ctk-700 font-light italic text-xl sm:text-2xl">
                Silence. Comfort. Elegance. These are not features — they are promises.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // ----- Bespoke Section (refined) -----
  const BespokeSection = () => (
    <section className="bg-ctk-950 text-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium mb-4 block">Bespoke</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-6 leading-tight">Bespoke Customization</h2>
            <p className="text-base sm:text-lg text-white/60 font-light leading-relaxed mb-8">
              Every space is unique. We offer fully bespoke customization services tailored to your vision, including custom dimensions, exclusive fabric selections, and architectural consultation.
            </p>
            <motion.button
              className="group relative px-8 py-3.5 border border-white/30 text-white text-xs tracking-[0.25em] font-medium overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">REQUEST CONSULTATION</span>
              <motion.span
                className="absolute inset-0 bg-white origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: easing }}
              />
              <motion.span
                className="absolute inset-0 mix-blend-difference text-ctk-950 flex items-center justify-center text-xs tracking-[0.25em] font-medium"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                REQUEST CONSULTATION
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            className="h-80 sm:h-96 bg-gradient-to-br from-ctk-800 to-ctk-700 rounded-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: easing }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-[1px] bg-white/10 mx-auto mb-4" />
                <p className="text-xs text-white/20 tracking-[0.2em] font-light uppercase">Your Vision, Crafted</p>
                <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // ----- Contact Section (refined) -----
  const ContactSection = () => (
    <section id="contact" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easing }}
          >
            <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Contact</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-8 leading-tight">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-ctk-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M3 12L5 10M5 10L12 5L19 10M5 10V19C5 19.5523 5.44772 20 6 20H9M19 10L21 12M19 10V19C19 19.5523 18.5523 20 18 20H15M9 20C9.55228 20 10 19.5523 10 19V15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20M9 20H15"/></svg>
                </div>
                <div>
                  <p className="text-xs text-ctk-400 uppercase tracking-[0.15em] font-medium mb-1">Location</p>
                  <p className="text-base sm:text-lg text-ctk-700 font-light">25 Clovelly Road, Chadcombe, Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-ctk-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M3 5C3 4.44772 3.44772 4 4 4H6.5C7.05228 4 7.5 4.44772 7.5 5V7.5C7.5 8.05228 7.05228 8.5 6.5 8.5H4.5V10C4.5 14.1421 7.85786 17.5 12 17.5H13.5V15.5C13.5 14.9477 13.9477 14.5 14.5 14.5H18C18.5523 14.5 19 14.9477 19 15.5V18.5C19 19.0523 18.5523 19.5 18 19.5H16C8.544 19.5 3 14.456 3 7V5Z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-ctk-400 uppercase tracking-[0.15em] font-medium mb-1">Phone</p>
                  <p className="text-base sm:text-lg text-ctk-700 font-light">+263 777 723 484</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-ctk-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M21.75 6.75V17.25C21.75 18.9069 20.4069 20.25 18.75 20.25H5.25C3.59315 20.25 2.25 18.9069 2.25 17.25V6.75M21.75 6.75C21.75 5.09315 20.4069 3.75 18.75 3.75H5.25C3.59315 3.75 2.25 5.09315 2.25 6.75M21.75 6.75V6.99271C21.75 7.95705 21.2425 8.8503 20.4171 9.33836L13.6671 13.4634C12.6338 14.0862 11.3662 14.0862 10.3329 13.4634L3.58287 9.33836C2.75749 8.8503 2.25 7.95705 2.25 6.99271V6.75"/></svg>
                </div>
                <div>
                  <p className="text-xs text-ctk-400 uppercase tracking-[0.15em] font-medium mb-1">Email</p>
                  <p className="text-base sm:text-lg text-ctk-700 font-light">ceeteekayinteriors21@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-ctk-50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M12 6V12H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-ctk-400 uppercase tracking-[0.15em] font-medium mb-1">Hours</p>
                  <p className="text-base sm:text-lg text-ctk-700 font-light leading-relaxed">Mon—Fri: 9am–6pm<br />Sat: 10am–4pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easing }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-1">
              <label className="text-[10px] tracking-[0.2em] text-ctk-400 uppercase font-medium">Your Name</label>
              <input type="text" placeholder="e.g. Tendai Mukanya" className="w-full px-4 py-3.5 border border-ctk-200 focus:border-ctk-950 outline-none transition-colors duration-300 bg-white text-ctk-950 placeholder-ctk-300 font-light text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] tracking-[0.2em] text-ctk-400 uppercase font-medium">Your Email</label>
              <input type="email" placeholder="e.g. tendai@example.com" className="w-full px-4 py-3.5 border border-ctk-200 focus:border-ctk-950 outline-none transition-colors duration-300 bg-white text-ctk-950 placeholder-ctk-300 font-light text-sm" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] tracking-[0.2em] text-ctk-400 uppercase font-medium">Your Message</label>
              <textarea placeholder="Tell us about your project…" rows="5" className="w-full px-4 py-3.5 border border-ctk-200 focus:border-ctk-950 outline-none transition-colors duration-300 bg-white text-ctk-950 placeholder-ctk-300 font-light text-sm resize-none"></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium hover:bg-ctk-800 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );

  // ----- Newsletter Section (refined) -----
  const NewsletterSection = () => (
    <section className="bg-ctk-950 text-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div {...fadeUp()}>
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-medium mb-4 block">Stay Connected</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-light mb-4 leading-tight">Stay Updated</h3>
          <p className="text-sm sm:text-base text-white/50 font-light mb-8 leading-relaxed max-w-md mx-auto">
            Subscribe to our newsletter for exclusive collections, design inspirations, and special offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/30 transition-colors duration-300"
            />
            <motion.button
              type="submit"
              className="px-6 py-3.5 bg-white text-ctk-950 text-xs tracking-[0.25em] font-medium hover:bg-white/90 transition-colors duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SUBSCRIBE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );

  // ----- Footer (refined) -----
  const Footer = () => (
    <footer className="bg-ctk-950 text-ctk-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-serif text-lg mb-4 tracking-tight">Ceeteekay</h4>
            <p className="text-xs sm:text-sm font-light leading-relaxed text-ctk-500">
              Handcrafted luxury furniture from Harare, Zimbabwe.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.25em] font-medium mb-5">Collection</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light">
              {['Lounge Suites', 'Accent Chairs', 'Ottoman Benches', 'Bedroom Furniture'].map((item) => (
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

  // ==================== MAIN RENDER ====================
  return (
    <div className="bg-white">
      <Header />
      <HeroCarousel />
      <CollectionSection />
      <FeaturedProjects />
      <ServicesSection />
      <AboutStudio />
      <DesignProcess />
      <InspirationSection />
      <TestimonialsSection />
      <PhilosophySection />
      <BespokeSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
