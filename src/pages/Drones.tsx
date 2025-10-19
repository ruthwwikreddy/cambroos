import { Airplay } from "lucide-react";
import { drones } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type DroneType = typeof drones[0];

const Drones = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (drone: DroneType, quantity: number) => {
    addToCart(drone, quantity);
  };



  return (
    <ProductPageTemplate
      title="Drones & Accessories"
      description="High-quality drones and accessories for aerial cinematography"
      icon="drone"
      products={drones}
      onAddToCart={handleAddToCart}
    >
    </ProductPageTemplate>
  );
};

export default Drones;
