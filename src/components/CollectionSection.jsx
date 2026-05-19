import FadeInOnScroll from './FadeInOnScroll';
import { heroProducts } from '../data/products';

export default function CollectionSection() {
  return (
    <section id="collection" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Our Collection</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-5 leading-tight">
            The Complete Collection
          </h2>
          <p className="text-base sm:text-lg text-ctk-500 font-light max-w-2xl leading-relaxed">
            Handcrafted furniture pieces engineered around comfort, silence, and architectural beauty.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-16 sm:mt-20">
          {heroProducts.map((product, index) => (
            <FadeInOnScroll key={product.id} delay={index * 80} threshold={0.05}>
              <div className="furniture-card group cursor-pointer">
                <div className={`relative bg-gradient-to-br ${product.imageGradient} rounded-sm overflow-hidden mb-5 shadow-sm card-media-landscape`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors duration-500 will-change-transform">
                    <div className="text-center px-6">
                      <div className="w-12 h-[1px] bg-ctk-600/30 mx-auto mb-4" />
                      <p className="text-sm text-ctk-700 italic font-light">{product.name}</p>
                      <div className="w-12 h-[1px] bg-ctk-600/30 mx-auto mt-4" />
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-ctk-400 uppercase tracking-[0.25em] mb-2 font-medium">{product.category}</p>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-ctk-950 mb-1.5 group-hover:text-ctk-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-ctk-500 font-light italic mb-3 leading-relaxed">{product.tagline}</p>
                <p className="text-2xl sm:text-3xl font-serif font-light text-ctk-950">${product.price.toLocaleString()}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
