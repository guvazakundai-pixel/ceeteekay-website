import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BedsSection from './components/BedsSection';
import ChairsTablesSection from './components/ChairsTablesSection';
import TVStandsSection from './components/TVStandsSection';
import AboutStudio from './components/AboutStudio';
import DesignProcess from './components/DesignProcess';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BespokeSection from './components/BespokeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function CeeteekayPremiumShowroom() {
  return (
    <div className="bg-ctk-950">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <div id="living">
        <BedsSection />
      </div>
      <div id="dining">
        <ChairsTablesSection />
      </div>
      <div id="tvstands">
        <TVStandsSection />
      </div>
      <AboutStudio />
      <ServicesSection />
      <DesignProcess />
      <TestimonialsSection />
      <BespokeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}