import { Shield, Clock, Sparkles, Users, DollarSign, MapPin } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Latest Gear",
    description: "Access to the newest cameras, lenses, and production equipment",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Meticulously maintained equipment and professional support",
  },
  {
    icon: Clock,
    title: "Fast & Convenient",
    description: "Seamless online booking and flexible rental periods",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Transparent rates with no hidden fees",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals ready to guide your project",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Tailored service for Singapore's production community",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Cambroos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional film equipment in Singapore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
