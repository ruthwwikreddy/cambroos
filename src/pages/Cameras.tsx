import { Camera, Video } from "lucide-react";
import { cameras } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CameraType = typeof cameras[0];

const Cameras = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (camera: CameraType, quantity: number) => {
    addToCart(camera, quantity);
  };

 

  return (
    <ProductPageTemplate
      title="Cameras"
      description="High-quality cameras for professional filmmaking and photography"
      icon="camera"
      products={cameras}
      onAddToCart={handleAddToCart}
    >
      
    </ProductPageTemplate>
  );
};

export default Cameras;
