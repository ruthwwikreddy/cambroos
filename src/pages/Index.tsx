import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EquipmentCategories from "@/components/EquipmentCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Portfolio from "@/components/Portfolio";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutUs />
        <EquipmentCategories />
        <WhyChooseUs />
        <Portfolio />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
