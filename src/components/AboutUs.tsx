import { Briefcase, ShieldCheck, Headset, Leaf, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AboutUs = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Our Mission",
      description: "Delivering innovative technology solutions that enhance performance, efficiency, and user experience across industries."
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description: "We ensure all our products meet the highest industry standards through rigorous testing and quality control."
    },
    {
      icon: <Headset className="h-8 w-8 text-primary" />,
      title: "Customer Support",
      description: "Our dedicated team provides exceptional support and service to ensure your complete satisfaction."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices in our design, production, and business operations."
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Cambroo SG Pte. Ltd.</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Your trusted partner in the field of electronic goods products. We offer RAM, Motherboard, PCB, Speaker, and Hard-disk solutions. 
            We are a one-stop destination where quality, innovation, and customer requirements are given priority above all else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <p className="mb-6 text-muted-foreground">
            At Cambroo SG, we are committed to delivering exceptional value through our comprehensive range of products and services. 
            Our team of experts works tirelessly to provide innovative solutions tailored to your specific needs.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Our Services Include:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Product Maintenance & Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>System Integration Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Technical Consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Custom Solutions Development</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Why Choose Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Industry-leading Quality Standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Competitive Pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fast & Reliable Delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-card rounded-lg shadow-sm border p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <p className="text-muted-foreground">200 Jalan Sultan, #03-45, Textile Center, Singapore 199018</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+6580875865" className="text-muted-foreground hover:text-primary transition-colors">
                    (+65) 8087 5865
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
