import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EquipmentCategories from "@/components/EquipmentCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  const location = useLocation();

  // Handle hash navigation when page loads or hash changes
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutUs />
        <EquipmentCategories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
