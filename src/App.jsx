import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CeeteekayPremiumShowroom() {
  // ==================== STATE ====================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const autoPlayRef = useRef(null);

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
    },
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
      const scrolled = window.scrollY;
      setScrollProgress((scrolled / scrollHeight) * 100);
      setShowNav(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ==================== HANDLERS ====================
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
    setIsAutoPlay(false);
  };

  // ==================== COMPONENTS ====================

  // Premium Header
  const Header = () => (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
          <h1 className="text-2xl font-serif font-light text-slate-900">Ceeteekay</h1>
          <p className="text-xs text-slate-500 tracking-widest font-light">INTERIORS</p>
        </motion.div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
          <motion.a href="#collection" whileHover={{ color: '#000' }} className="transition-colors">
            COLLECTION
          </motion.a>
          <motion.a href="#inspiration" whileHover={{ color: '#000' }} className="transition-colors">
            INSPIRATION
          </motion.a>
          <motion.a href="#philosophy" whileHover={{ color: '#000' }} className="transition-colors">
            PHILOSOPHY
          </motion.a>
          <motion.a href="#contact" whileHover={{ color: '#000' }} className="transition-colors">
            CONTACT
          </motion.a>
        </nav>

        <div className="flex items-center gap-4">
          <motion.button className="relative w-8 h-8 flex items-center justify-center" whileHover={{ scale: 1.1 }}>
            <span className="text-2xl">🛍</span>
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-900 text-white text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </motion.button>
          <motion.button className="text-2xl md:hidden" whileHover={{ scale: 1.1 }}>
            ☰
          </motion.button>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.header>
  );

  // Hero Carousel Section
  const HeroCarousel = () => (
    <section className="relative w-full h-screen bg-black overflow-hidden pt-16">
      {/* Slides */}
      <AnimatePresence mode="wait">
        {heroProducts.map(
          (product, index) =>
            index === currentSlide && (
              <motion.div
                key={product.id}
                className={`absolute inset-0 bg-gradient-to-br ${product.imageGradient}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              >
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 max-w-2xl"
                  >
                    <p className="text-sm tracking-widest text-slate-700 uppercase font-light">
                      {product.category}
                    </p>

                    <h2 className="text-6xl md:text-7xl font-serif font-light text-slate-900 leading-tight">
                      {product.name}
                    </h2>

                    <p className="text-2xl font-light text-slate-800 italic">{product.tagline}</p>

                    <p className="text-lg text-slate-700 leading-relaxed font-light max-w-xl mx-auto">
                      {product.description}
                    </p>

                    <div className="pt-6">
                      <p className="text-5xl font-serif font-light text-slate-900 mb-6">
                        ${product.price.toLocaleString()}
                      </p>
                      <motion.button
                        className="px-12 py-4 bg-slate-900 text-white font-semibold text-sm tracking-widest hover:bg-slate-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        EXPLORE THIS PIECE
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-8">
        {/* Thin Progress Indicator */}
        <div className="w-full h-0.5 bg-white bg-opacity-20 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / heroProducts.length) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 justify-center mb-8">
          {heroProducts.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-40 w-4'}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Text Info */}
        <div className="text-white text-center text-sm font-light tracking-widest">
          <p>
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroProducts.length).padStart(2, '0')}
          </p>
        </div>
      </div>

      {/* Arrow Navigation */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ←
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        →
      </motion.button>
    </section>
  );

  // Collection Section
  const CollectionSection = () => (
    <section id="collection" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-6">
            The Complete Collection
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl">
            Handcrafted furniture pieces engineered around comfort, silence, and architectural beauty. Each item is a statement of quiet luxury.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {heroProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative h-80 bg-gradient-to-br ${product.imageGradient} rounded-lg overflow-hidden mb-6`}>
                <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.05 }}>
                  <div className="text-center px-4">
                    <p className="text-sm text-slate-700 italic">{product.name}</p>
                  </div>
                </motion.div>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2 font-light">
                {product.category}
              </p>
              <h3 className="text-2xl font-serif font-light text-slate-900 mb-2 line-clamp-2 group-hover:text-slate-700 transition-colors">
                {product.name}
              </h3>
              <p className="text-slate-600 font-light mb-4 italic line-clamp-2">{product.tagline}</p>
              <p className="text-3xl font-serif font-light text-slate-900">${product.price.toLocaleString()}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

  // Inspiration Gallery
  const InspirationSection = () => (
    <section id="inspiration" className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-6">
            Editorial Spaces
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl">
            Curated interiors that showcase the craftsmanship and artistry behind every Ceeteekay piece.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Modern Minimalism',
              subtitle: 'Architectural Simplicity',
              gradient: 'from-slate-400 to-slate-300',
            },
            {
              title: 'Warm Luxury',
              subtitle: 'Earthy Heritage',
              gradient: 'from-amber-400 to-amber-300',
            },
            {
              title: 'Royal Comfort',
              subtitle: 'Deep Blue Elegance',
              gradient: 'from-blue-400 to-blue-300',
            },
            {
              title: 'Pink Sanctuary',
              subtitle: 'Sophisticated Softness',
              gradient: 'from-rose-400 to-rose-300',
            },
          ].map((space, i) => (
            <motion.div
              key={i}
              className={`relative h-96 bg-gradient-to-br ${space.gradient} rounded-lg overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-4xl font-serif font-light text-white mb-2">{space.title}</h3>
                <p className="text-white font-light text-lg">{space.subtitle}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Philosophy Section
  const PhilosophySection = () => (
    <section id="philosophy" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-light text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Philosophy
          </motion.h2>

          <motion.div
            className="space-y-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-700 font-light">
              Ceeteekay Interiors represents a commitment to quiet luxury—furniture designed not to impress, but to comfort. Every piece is engineered around one principle: how does this make you feel?
            </p>

            <p className="text-slate-700 font-light">
              We source premium Italian velvets, sustainable hardwoods, and high-resilience foams. Our upholsterers hand-tuft, hand-stud, and hand-finish each piece to museum quality standards. This is not mass production. This is craft.
            </p>

            <p className="text-slate-700 font-light">
              Based in Chadcombe, Harare, we believe in slow fashion for furniture. In durability over trends. In materials that age beautifully. In pieces that become cherished family heirlooms.
            </p>

            <p className="text-slate-700 font-light italic">
              Silence. Comfort. Elegance. These are not features—they are promises.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Bespoke Section
  const BespokeSection = () => (
    <section className="bg-slate-900 text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-light mb-6">Bespoke Customization</h2>
            <p className="text-lg font-light text-slate-300 mb-6">
              Every space is unique. We offer fully bespoke customization services tailored to your vision, including custom dimensions, exclusive fabric selections, and architectural consultation.
            </p>
            <motion.button
              className="px-8 py-4 border border-white text-white font-semibold text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              REQUEST CONSULTATION
            </motion.button>
          </motion.div>

          <motion.div
            className="h-96 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-slate-900 mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-light mb-2">Location</p>
                <p className="text-xl text-slate-700 font-light">25 Clovelly Road, Chadcombe, Harare, Zimbabwe</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-light mb-2">Phone</p>
                <p className="text-xl text-slate-700 font-light">+263 777 723 484</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-light mb-2">Email</p>
                <p className="text-xl text-slate-700 font-light">ceeteekayinteriors21@gmail.com</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-light mb-2">Hours</p>
                <p className="text-slate-700 font-light">Mon-Fri: 9am - 6pm</p>
                <p className="text-slate-700 font-light">Sat: 10am - 4pm</p>
                <p className="text-slate-700 font-light">Sun: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white text-slate-900 placeholder-slate-500 font-light"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white text-slate-900 placeholder-slate-500 font-light"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white text-slate-900 placeholder-slate-500 font-light resize-none"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-slate-900 text-white font-semibold text-sm tracking-widest hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );

  // Newsletter Section
  const NewsletterSection = () => (
    <section className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-serif font-light mb-4">Stay Updated</h3>
          <p className="text-slate-300 font-light mb-8">
            Subscribe to our newsletter for exclusive collections, design inspirations, and special offers.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-500 font-light focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-white text-slate-900 font-semibold text-sm tracking-widest rounded-lg hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SUBSCRIBE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Ceeteekay</h4>
            <p className="text-sm font-light">Handcrafted luxury furniture from Harare, Zimbabwe.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Collection</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lounge Suites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accent Chairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ottoman Benches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bedroom Furniture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bespoke Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors text-sm">
                Pinterest
              </a>
              <a href="#" className="hover:text-white transition-colors text-sm">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>© 2024 Ceeteekay Interiors. Handcrafted in Zimbabwe.</p>
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
      <InspirationSection />
      <PhilosophySection />
      <BespokeSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
