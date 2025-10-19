import { ReactNode } from "react";
import { Camera, Lightbulb, Video, Package, Airplay, Monitor, Box } from "lucide-react";

type PageHeroProps = {
  title: string;
  description: string;
  icon: 'camera' | 'light' | 'video' | 'package' | 'drone' | 'monitor' | 'equipment';
  backgroundImage?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

const iconMap = {
  camera: <Camera className="w-8 h-8 text-primary" />,
  light: <Lightbulb className="w-8 h-8 text-primary" />,
  video: <Video className="w-8 h-8 text-primary" />,
  package: <Package className="w-8 h-8 text-primary" />,
  drone: <Airplay className="w-8 h-8 text-primary" />,
  monitor: <Monitor className="w-8 h-8 text-primary" />,
  equipment: <Box className="w-8 h-8 text-primary" />,
};

export function PageHero({ 
  title, 
  description, 
  icon,
  backgroundImage,
  gradientFrom = 'from-primary',
  gradientTo = 'to-primary/80'  
}: PageHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            {iconMap[icon]}
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
