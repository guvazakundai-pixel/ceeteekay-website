import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInOnScroll from './FadeInOnScroll';
import { chairs } from '../data/chairs';

const easing = [0.25, 0.46, 0.45, 0.94];

export default function ChairsTablesSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="chairs" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Chairs & Tables</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            Chairs & Tables
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            From sculptural accent chairs to handcrafted dining tables — every piece designed to anchor a room with character and comfort.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16 sm:mt-20">
          {chairs.map((item, index) => (
            <FadeInOnScroll key={item.id} delay={index * 50} threshold={0.05}>
              <div
                className="furniture-card group cursor-pointer"
                onClick={() => { setSelectedItem(item); setActiveImage(0); }}
              >
                <div className="relative h-72 sm:h-80 bg-ctk-100 rounded-sm overflow-hidden mb-5 shadow-sm card-media-landscape">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex gap-1">
                      {item.images.slice(0, 3).map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      ))}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <p className="text-[10px] text-ctk-400 uppercase tracking-[0.25em] mb-2 font-medium">{item.category}</p>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-ctk-950 mb-1.5 group-hover:text-ctk-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm text-ctk-500 font-light leading-relaxed mb-3">{item.colour}</p>
                <p className="text-2xl sm:text-3xl font-serif font-light text-ctk-950">${item.price.toLocaleString()}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl z-10"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: easing }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4L12 12M12 4L4 12" strokeLinecap="round"/></svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-ctk-50">
                  <div className="relative h-80 sm:h-96 md:h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImage}
                        src={selectedItem.images[activeImage]}
                        alt={selectedItem.name}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    {selectedItem.images.length > 1 && (
                      <>
                        {activeImage > 0 && (
                          <button
                            onClick={() => setActiveImage(prev => prev - 1)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
                          >
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        )}
                        {activeImage < selectedItem.images.length - 1 && (
                          <button
                            onClick={() => setActiveImage(prev => prev + 1)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full transition-colors duration-300"
                          >
                            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                  {selectedItem.images.length > 1 && (
                    <div className="flex gap-2 p-4 justify-center">
                      {selectedItem.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`w-16 h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${i === activeImage ? 'border-ctk-950' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                  <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-3">{selectedItem.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-ctk-950 mb-2">{selectedItem.name}</h3>
                  <p className="text-3xl sm:text-4xl font-serif font-light text-ctk-950 mb-6">${selectedItem.price.toLocaleString()}</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium">Dimensions</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedItem.dimensions}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium">Material</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedItem.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium">Frame</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedItem.frame}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium">{selectedItem.category === 'Dining Table' || selectedItem.category === 'Coffee Table' || selectedItem.category === 'Console Table' || selectedItem.category === 'Side Table' ? 'Capacity' : 'Seat'}</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedItem.seat}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ctk-100">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium">Colour</span>
                      <span className="text-sm text-ctk-700 font-light">{selectedItem.colour}</span>
                    </div>
                    <div className="py-2">
                      <span className="text-xs tracking-[0.15em] text-ctk-400 uppercase font-medium block mb-2">Features</span>
                      <p className="text-sm text-ctk-700 font-light">{selectedItem.features}</p>
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