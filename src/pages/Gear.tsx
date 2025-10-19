import { Package } from "lucide-react";
import { gear } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type GearType = typeof gear[0];

const Gear = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (gear: GearType, quantity: number) => {
    addToCart(gear, quantity);
  };


  return (
    <ProductPageTemplate
      title="Gear & Accessories"
      description="Essential camera gear and accessories to enhance your filmmaking experience"
      icon="package"
      products={gear}
      onAddToCart={handleAddToCart}
    >
    </ProductPageTemplate>
  );
};

export default Gear;
