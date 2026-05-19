import { useState, useEffect, useCallback } from 'react';
import FadeInOnScroll from './FadeInOnScroll';

const testimonials = [
  { quote: 'The craftsmanship is extraordinary. Every detail — from the hand-tufting to the stud placement — speaks of a dedication rarely seen.', author: 'Tendai M.', role: 'Harare, Zimbabwe' },
  { quote: 'Our U-shape sectional transformed our living room. It is not just furniture; it is the centrepiece of our home.', author: 'Sarah K.', role: 'Johannesburg, SA' },
  { quote: 'The bespoke consultation was seamless. They understood our vision and delivered beyond expectation.', author: 'Michael O.', role: 'Lagos, Nigeria' },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((i) => setIndex(i), []);

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeInOnScroll>
          <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Testimonials</span>
        </FadeInOnScroll>

        <FadeInOnScroll key={index} threshold={0.01}>
          <div className="space-y-8 mt-12">
            <p className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ctk-950 leading-snug text-balance">
              &ldquo;{testimonials[index].quote}&rdquo;
            </p>
            <div>
              <p className="text-base sm:text-lg font-medium text-ctk-950">{testimonials[index].author}</p>
              <p className="text-sm text-ctk-500 font-light">{testimonials[index].role}</p>
            </div>
          </div>
        </FadeInOnScroll>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === index ? 'bg-ctk-950 w-10' : 'bg-ctk-300 w-4'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
