import { useState } from "react";
import { Camera } from "lucide-react";
import { lenses } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ProductPageTemplate } from "@/components/ProductPageTemplate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LensType = typeof lenses[0];

const Lenses = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (lens: LensType, quantity: number) => {
    addToCart(lens, quantity);
    // Show a toast notification here if you have one
  };

  const lensTypeFilter = (
    <div className="space-y-2">
      <h3 className="font-medium">Lens Type</h3>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="prime">Prime</TabsTrigger>
          <TabsTrigger value="zoom">Zoom</TabsTrigger>
          <TabsTrigger value="anamorphic">Anamorphic</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-4">
          <p className="text-sm text-muted-foreground">Showing all lens types</p>
        </TabsContent>
        <TabsContent value="prime" className="pt-4">
          <p className="text-sm text-muted-foreground">Prime lenses with fixed focal lengths</p>
        </TabsContent>
        <TabsContent value="zoom" className="pt-4">
          <p className="text-sm text-muted-foreground">Zoom lenses with variable focal lengths</p>
        </TabsContent>
        <TabsContent value="anamorphic" className="pt-4">
          <p className="text-sm text-muted-foreground">Anamorphic lenses for cinematic widescreen</p>
        </TabsContent>
      </Tabs>
    </div>
  );

  const mountTypeFilter = (
    <div className="space-y-2">
      <h3 className="font-medium">Mount Type</h3>
      <div className="space-y-2">
        {['PL', 'EF', 'E', 'RF', 'L'].map((mount) => (
          <div key={mount} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`mount-${mount}`}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor={`mount-${mount}`} className="text-sm font-medium">
              {mount} Mount
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <ProductPageTemplate
      title="Cinema Lenses"
      description="Premium cinema lenses from the world's leading manufacturers for your next production"
      icon="camera"
      products={lenses}
      onAddToCart={handleAddToCart}
    >
      {lensTypeFilter}
      {mountTypeFilter}
    </ProductPageTemplate>
  );
};

export default Lenses;