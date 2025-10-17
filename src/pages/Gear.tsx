import { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { Camera, Plus, Minus, Search, Filter, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { gear } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchHighlight } from "@/hooks/useSearchHighlight";

type GearType = typeof gear[0];

const Gear = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(gear.map((item) => [item.id, 1]))
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQueryParam = searchParams.get('search') || '';

  useEffect(() => {
    if (searchQueryParam) {
      setSearchQuery(searchQueryParam);
    }
  }, [searchQueryParam]);

  // Get all unique brands
  const allBrands: string[] = useMemo(() => {
    return Array.from(new Set(gear.map((item) => item.brand))).sort() as string[];
  }, [gear]);

  // Filter items based on search and selected brands
  const filteredGear = useMemo(() => {
    return gear.filter((item) => {
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrands]);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Gear & Accessories | CineRentals</title>
        <meta name="description" content="Browse our collection of professional gear and accessories for film and video production" />
      </Helmet>
      
      <Navigation />
      
      <main className="flex-1 bg-gray-50">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters sidebar */}
            <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-lg shadow p-4 sticky top-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-sm text-primary"
                  >
                    Clear all
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search gear..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Brands */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium">Brands</label>
                      <span className="text-xs text-muted-foreground">
                        {selectedBrands.length > 0 ? `${selectedBrands.length} selected` : ''}
                      </span>
                    </div>
                    <ScrollArea className="h-48">
                      <div className="space-y-2 pr-2">
                        {allBrands.map((brand) => (
                          <div
                            key={brand}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                            onClick={() => toggleBrand(brand)}
                          >
                            <div className={`w-4 h-4 rounded-sm border ${
                              selectedBrands.includes(brand) 
                                ? 'bg-primary border-primary' 
                                : 'border-border'
                            } flex items-center justify-center`}>
                              {selectedBrands.includes(brand) && (
                                <span className="text-white text-xs">✓</span>
                              )}
                            </div>
                            <span>{brand}</span>
                            <span className="text-muted-foreground text-sm ml-auto">
                              {gear.filter(g => g.brand === brand).length}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredGear.length} {filteredGear.length === 1 ? 'Item' : 'Items'}{' '}
                  {selectedBrands.length > 0 && `in ${selectedBrands.join(', ')}`}
                </h2>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name-asc">Name: A to Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z to A</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="md:hidden"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    {isFilterOpen ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Product grid */}
              {filteredGear.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGear.map((item) => {
                    const { ref, isHighlighted } = useSearchHighlight(item.id);
                    return (
                      <div 
                        key={item.id}
                        ref={ref}
                        className={isHighlighted ? 'ring-2 ring-primary ring-offset-2 rounded-lg' : ''}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      {item.imageUrl && (
                        <div 
                          className="aspect-video bg-gray-100 overflow-hidden cursor-pointer"
                          onClick={() => navigate(`/gear/${item.id}`)}
                        >
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{item.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {item.brand}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Quantity</span>
                            <div className="flex items-center gap-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">
                                {quantities[item.id] || 1}
                              </span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            addToCart(
                              {
                                id: item.id,
                                name: item.name,
                                category: item.category,
                                brand: item.brand,
                              },
                              quantities[item.id] || 1
                            );
                          }}
                        >
                          Add to Cart
                        </Button>
                      </CardFooter>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No gear found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={clearFilters}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gear;
