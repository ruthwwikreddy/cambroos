import { Monitor } from "lucide-react";
import { equipment } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EquipmentType = typeof equipment[0];

const Production = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (equipment: EquipmentType, quantity: number) => {
    addToCart(equipment, quantity);
  };



  return (
    <ProductPageTemplate
      title="Production Equipment"
      description="High-quality monitors, recorders, and accessories for professional video production"
      icon="monitor"
      products={equipment}
      onAddToCart={handleAddToCart}
    >
    </ProductPageTemplate>
  );
};

export default Production;
