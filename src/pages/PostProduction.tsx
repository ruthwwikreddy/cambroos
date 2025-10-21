import { Film } from "lucide-react";
import { postProductionServices } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";

type ServiceType = typeof postProductionServices[0];

const PostProduction = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (service: ServiceType, quantity: number) => {
    addToCart(service, quantity);
  };

  return (
    <ProductPageTemplate
      title="Post Production & VFX Services"
      description="Comprehensive post-production services: editing, color grading, VFX pipeline (previs to final delivery), 3D animation, simulation, compositing, and professional audio services"
      icon="video"
      products={postProductionServices}
      onAddToCart={handleAddToCart}
    />
  );
};

export default PostProduction;
