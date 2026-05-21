import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInOnScroll from './FadeInOnScroll';
import { beds } from '../data/beds';

const easing = [0.25, 0.46, 0.45, 0.94];

export default function BedsSection() {
  const [selectedBed, setSelectedBed] = useState(null);
  const [activeBedImage, setActiveBedImage] = useState(0);

  return (
    <section id="beds" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-500 uppercase font-bold mb-4 block">Living Room</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            Beds
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            From statement wingbacks to minimalist platforms — handcrafted beds designed for restful nights and beautiful mornings. Each piece anchors your bedroom with character and comfort.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16 sm:mt-20">
          {beds.map((bed, index) => (
            <FadeInOnScroll key={bed.id} delay={index * 50} threshold={0.05}>
              <div
                className="furniture-card group cursor-pointer"
                onClick={() => { setSelectedBed(bed); setActiveBedImage(0); }}
              >
                <div className="relative h-72 sm:h-80 bg-ctk-100 rounded-sm overflow-hidden mb-5 shadow-sm card-media-landscape">
                  <img
                    src={bed.images[0]}
                    alt={bed.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {bed.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex gap-1">
                      {bed.images.slice(0, 3).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      ))}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <p className="text-[10px] text-ctk-500 uppercase tracking-[0.25em] mb-2 font-bold">Bedroom Furniture</p>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-ctk-950 mb-1.5 group-hover:text-ctk-600 transition-colors duration-300">
                  {bed.name}
                </h3>
                <p className="text-sm text-ctk-700 font-normal leading-relaxed mb-3">{bed.size} &middot; {bed.material}</p>
                <p className="text-2xl sm:text-3xl font-serif font-light text-ctk-950">${bed.price.toLocaleString()}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedBed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedBed(null)}
            />
            <motion.div
              className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl z-10"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: easing }}
            >
              <button
                onClick={() => setSelectedBed(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4L12 12M12 4L4 12" strokeLinecap="round"/></svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-ctk-50">
                  <div className="relative h-80 sm:h-96 md:h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeBedImage}
                        src={selectedBed.images[activeBedImage]}
                        alt={selectedBed.name}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    {selectedBed.images.length > 1 && (
                      <>
                        {activeBedImage > 0 && (
                          <button
                            onClick={() => setActiveBedImage(prev => prev - 1)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
                          >
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        )}
                        {activeBedImage < selectedBed.images.length - 1 && (
                          <button
                            onClick={() => setActiveBedImage(prev => prev + 1)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
                          >
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  {selectedBed.images.length > 1 && (
                    <div className="flex gap-2 p-4 justify-center">
                      {selectedBed.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveBedImage(i)}
                          className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${i === activeBedImage ? 'border-ctk-950' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                  <span className="text-[10px] tracking-[0.3em] text-ctk-500 uppercase font-semibold mb-3">Bedroom Furniture</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-ctk-950 mb-2">{selectedBed.name}</h3>
                  <p className="text-3xl sm:text-4xl font-serif font-light text-ctk-950 mb-6">${selectedBed.price.toLocaleString()}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold">Size</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedBed.size}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold">Material</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedBed.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold">Frame</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedBed.frame}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold">Headboard</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedBed.headboard}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold">Colour</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedBed.color}</span>
                    </div>
                    <div className="py-2">
                      <span className="text-xs tracking-[0.15em] text-ctk-500 uppercase font-semibold block mb-2">Features</span>
                      <p className="text-sm text-ctk-700 font-light">{selectedBed.features}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <motion.button
                      className="w-full px-6 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium hover:bg-ctk-800 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      INQUIRE ABOUT THIS PIECE
                    </motion.button>
                    <p className="text-[10px] text-ctk-400 text-center mt-3 tracking-wide">Free delivery within Harare &middot; 5-year frame warranty</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}