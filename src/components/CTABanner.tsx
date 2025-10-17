import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-teal to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Roll?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get your custom equipment quote today. Our team will respond within 24 hours.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Get a Quote Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
