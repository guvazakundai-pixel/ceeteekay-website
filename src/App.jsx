import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import CollectionSection from './components/CollectionSection';
import FeaturedProjects from './components/FeaturedProjects';
import ServicesSection from './components/ServicesSection';
import AboutStudio from './components/AboutStudio';
import DesignProcess from './components/DesignProcess';
import InspirationSection from './components/InspirationSection';
import TestimonialsSection from './components/TestimonialsSection';
import PhilosophySection from './components/PhilosophySection';
import BespokeSection from './components/BespokeSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

export default function CeeteekayPremiumShowroom() {
  return (
    <div className="bg-white">
      <ScrollProgress />
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
