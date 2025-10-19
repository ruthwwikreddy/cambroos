import { Lightbulb } from "lucide-react";
import { lighting } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LightingType = typeof lighting[0];

const Lighting = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (lighting: LightingType, quantity: number) => {
    addToCart(lighting, quantity);
  };


  return (
    <ProductPageTemplate
      title="Lighting Equipment"
      description="Professional lighting solutions for film and photography"
      icon="light"
      products={lighting}
      onAddToCart={handleAddToCart}
    >
    </ProductPageTemplate>
  );
};

export default Lighting;
