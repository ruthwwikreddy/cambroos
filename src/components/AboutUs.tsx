import { Camera, Film, Video, ShieldCheck, Headset, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AboutUs = () => {

  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Cambroos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Singapore's premier destination for professional film equipment rental. We offer top-of-the-line cameras, lenses, lighting, and accessories 
            for filmmakers and content creators who demand the best tools for their craft.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <p className="mb-6 text-muted-foreground">
            At Cambroos, we're passionate about helping creators bring their vision to life. Whether you're shooting a blockbuster film, 
            a commercial project, or capturing once-in-a-lifetime moments, we provide the professional equipment you need to make it happen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Our Equipment Includes:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Professional Cinema Cameras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>High-Quality Prime & Zoom Lenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Lighting & Grip Equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Stabilization & Support Gear</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Latest Camera Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Competitive Rental Rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fast & Secure Booking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Expert Technical Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
