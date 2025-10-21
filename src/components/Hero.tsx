import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", // <-- adds the blur
          transform: "scale(1.05)", // prevents edge blur cutoff
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Film Equipment Rental in Singapore
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed">
            Professional cameras, lenses, lighting, and studio gear for your next production. 
            Trusted by Singapore's creative industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg"
              onClick={() => {
                const equipmentSection = document.getElementById('equipment');
                equipmentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Browse Equipment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg bg-white/10 hover:bg-white/20 border-white/30 text-white"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
