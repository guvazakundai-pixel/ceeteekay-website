import FadeInOnScroll from './FadeInOnScroll';

export default function NewsletterSection() {
  return (
    <section className="bg-ctk-950 text-white py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-white/65 uppercase font-medium mb-4 block">Stay Connected</span>
          <h3 className="text-3xl sm:text-4xl font-serif font-light mb-4 leading-tight">Stay Updated</h3>
          <p className="text-sm sm:text-base text-white/80 font-light mb-8 leading-relaxed max-w-md mx-auto">
            Subscribe to our newsletter for exclusive collections, design inspirations, and special offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm font-light focus:outline-none focus:border-white/30 transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-ctk-950 text-xs tracking-[0.25em] font-medium hover:bg-white/90 transition-colors duration-300 whitespace-nowrap"
            >
              SUBSCRIBE
            </button>
          </form>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
