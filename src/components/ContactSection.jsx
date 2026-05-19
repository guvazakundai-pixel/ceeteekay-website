import FadeInOnScroll from './FadeInOnScroll';

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-ctk-50 flex items-center justify-center shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-xs text-ctk-400 uppercase tracking-[0.15em] font-medium mb-1">{label}</p>
        <p className="text-base sm:text-lg text-ctk-700 font-light">{children}</p>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <FadeInOnScroll>
            <span className="text-[10px] tracking-[0.3em] text-ctk-400 uppercase font-medium mb-4 block">Contact</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-ctk-950 mb-8 leading-tight">Get In Touch</h2>

            <div className="space-y-6">
              <ContactItem icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M3 12L5 10M5 10L12 5L19 10M5 10V19C5 19.5523 5.44772 20 6 20H9M19 10L21 12M19 10V19C19 19.5523 18.5523 20 18 20H15M9 20C9.55228 20 10 19.5523 10 19V15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20M9 20H15"/></svg>} label="Location">
                25 Clovelly Road, Chadcombe, Harare, Zimbabwe
              </ContactItem>
              <ContactItem icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M3 5C3 4.44772 3.44772 4 4 4H6.5C7.05228 4 7.5 4.44772 7.5 5V7.5C7.5 8.05228 7.05228 8.5 6.5 8.5H4.5V10C4.5 14.1421 7.85786 17.5 12 17.5H13.5V15.5C13.5 14.9477 13.9477 14.5 14.5 14.5H18C18.5523 14.5 19 14.9477 19 15.5V18.5C19 19.0523 18.5523 19.5 18 19.5H16C8.544 19.5 3 14.456 3 7V5Z"/></svg>} label="Phone">
                +263 777 723 484
              </ContactItem>
              <ContactItem icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M21.75 6.75V17.25C21.75 18.9069 20.4069 20.25 18.75 20.25H5.25C3.59315 20.25 2.25 18.9069 2.25 17.25V6.75M21.75 6.75C21.75 5.09315 20.4069 3.75 18.75 3.75H5.25C3.59315 3.75 2.25 5.09315 2.25 6.75M21.75 6.75V6.99271C21.75 7.95705 21.2425 8.8503 20.4171 9.33836L13.6671 13.4634C12.6338 14.0862 11.3662 14.0862 10.3329 13.4634L3.58287 9.33836C2.75749 8.8503 2.25 7.95705 2.25 6.99271V6.75"/></svg>} label="Email">
                ceeteekayinteriors21@gmail.com
              </ContactItem>
              <ContactItem icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ctk-500"><path d="M12 6V12H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/></svg>} label="Hours">
                Mon&ndash;Fri: 9am&ndash;6pm<br />Sat: 10am&ndash;4pm<br />Sun: Closed
              </ContactItem>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={100}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                <textarea placeholder="Tell us about your project&hellip;" rows="5" className="w-full px-4 py-3.5 border border-ctk-200 focus:border-ctk-950 outline-none transition-colors duration-300 bg-white text-ctk-950 placeholder-ctk-300 font-light text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3.5 bg-ctk-950 text-white text-xs tracking-[0.25em] font-medium hover:bg-ctk-800 transition-colors duration-300">
                SEND MESSAGE
              </button>
            </form>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
