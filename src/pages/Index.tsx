import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EquipmentCategories from "@/components/EquipmentCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
