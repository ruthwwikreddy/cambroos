import camerasImage from "@/assets/cameras-category.jpg";
import lensesImage from "@/assets/lenses-category.jpg";
import lightingImage from "@/assets/lighting-category.jpg";
import gripImage from "@/assets/grip-category.jpg";
import droneImage from "@/assets/drone-category.jpg";
import productionImage from "@/assets/hero-camera.jpg";
import postProductionImage from "@/assets/post-production-category.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Cameras",
    description: "Latest cinema cameras from ARRI, RED, Sony, and more",
    image: camerasImage,
    link: "/cameras"
  },
  {
    title: "Lenses",
    description: "Premium cinema lenses and lens sets for every shot",
    image: lensesImage,
    link: "/lenses"
  },
  {
    title: "Drones",
    description: "Professional aerial cinematography drones and accessories",
    image: droneImage,
    link: "/drones"
  },
  {
    title: "Lighting",
    description: "Professional LED, tungsten, and HMI lighting solutions",
    image: lightingImage,
    link: "/lighting"
  },
  {
    title: "Gear & Accessories",
    description: "Complete grip gear, stands, and rigging equipment",
    image: gripImage,
    link: "/gear"
  },
  {
    title: "Production",
    description: "Complete production packages and solutions",
    image: productionImage,
    link: "/production"
  },
  {
    title: "Post Production & VFX",
    description: "Complete VFX pipeline, editing, color grading, 3D animation, and audio services",
    image: postProductionImage,
    link: "/post-production"
  },
];

const EquipmentCategories = () => {
  return (
    <section id="equipment" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Equipment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Extensive selection of professional film and video production equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              to={category.link}
              key={category.title}
              className="block group"
            >
              <div className="h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Browse {category.title}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;
