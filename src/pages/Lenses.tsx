import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Camera, Plus, Minus, Search, Filter, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { lenses } from "@/data/products";
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

type LensType = typeof lenses[0];

const Lenses = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(lenses.map((lens) => [lens.id, 1]))
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique brands
  const allBrands = useMemo(() => {
    return Array.from(new Set(lenses.map((lens) => lens.brand))).sort();
  }, []);

  // Filter lenses based on search and selected brands
  const filteredLenses = useMemo(() => {
    return lenses.filter((lens) => {
      const matchesSearch = lens.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lens.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(lens.brand);
      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrands]);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleAddToCart = (lens: LensType) => {
    addToCart(lens, quantities[lens.id] || 1);
    // Show a toast notification here if you have one
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrands([]);
  };

  return (
    <>
      <Helmet>
        <title>Lens Rental Singapore | Cinema Lenses | Cambroos</title>
        <meta name="description" content="Rent professional cinema lenses in Singapore. ARRI, Canon, Angenieux, Atlas and more. Premium glass for your production." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-1 pt-20">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Cinema Lenses
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Premium cinema lenses from the world's leading manufacturers for your next production
                </p>
              </div>
            </div>
          </section>

          {/* Filters and Search */}
          <section className="sticky top-16 z-20 bg-background/95 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search lenses by name or brand..."
                    className="pl-10 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                    {selectedBrands.length > 0 && (
                      <Badge variant="secondary" className="ml-1">
                        {selectedBrands.length}
                      </Badge>
                    )}
                  </Button>
                  
                  {(searchQuery || selectedBrands.length > 0) && (
                    <Button 
                      variant="ghost" 
                      onClick={clearFilters}
                      className="text-muted-foreground"
                    >
                      Clear all
                      <X className="ml-1 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Mobile filter panel */}
              {isFilterOpen && (
                <div className="mt-4 p-4 border rounded-lg bg-card md:hidden">
                  <h3 className="font-medium mb-3">Filter by Brand</h3>
                  <div className="flex flex-wrap gap-2">
                    {allBrands.map((brand) => (
                      <Badge
                        key={brand}
                        variant={selectedBrands.includes(brand) ? "default" : "outline"}
                        className={`cursor-pointer ${selectedBrands.includes(brand) ? 'bg-primary' : ''}`}
                        onClick={() => toggleBrand(brand)}
                      >
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
            {/* Desktop filters */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-medium">Brands</h3>
                  <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                    <div className="space-y-2">
                      {allBrands.map((brand) => (
                        <div 
                          key={brand} 
                          className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer transition-colors ${
                            selectedBrands.includes(brand) 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'hover:bg-muted/50'
                          }`}
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
                            {lenses.filter(l => l.brand === brand).length}
                          </span>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredLenses.length} {filteredLenses.length === 1 ? 'Lens' : 'Lenses'}{' '}
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
                      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                      <SelectItem value="brand">Brand</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredLenses.length === 0 ? (
                <div className="text-center py-16">
                  <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No lenses found</h3>
                  <p className="mt-1 text-muted-foreground">
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
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredLenses.map((lens) => (
                    <Card key={lens.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                      <div className="p-6 pb-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {lens.brand}
                            </span>
                            <CardTitle className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                              {lens.name}
                            </CardTitle>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => {
                              // Add to favorites functionality can go here
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                          </Button>
                        </div>

                        {/* Image section - Uncomment when images are available
                        <div className="mt-4 aspect-w-16 aspect-h-9 bg-muted/30 rounded-md overflow-hidden">
                          <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                            <Camera className="h-16 w-16 text-primary/30" />
                          </div>
                        </div>
                        */}
                      </div>
                      
                      <CardContent className="p-6 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="text-sm text-muted-foreground ml-1">(24)</span>
                          </div>
                          <Badge variant="outline" className="text-xs">In Stock</Badge>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Quantity</span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(lens.id, -1);
                                }}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={quantities[lens.id] || 1}
                                onChange={(e) => {
                                  const value = parseInt(e.target.value) || 1;
                                  setQuantities(prev => ({
                                    ...prev,
                                    [lens.id]: Math.max(1, value)
                                  }));
                                }}
                                className="w-16 h-8 text-center"
                                onClick={(e) => e.stopPropagation()}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  updateQuantity(lens.id, 1);
                                }}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6 pt-0">
                        <Button 
                          className="w-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(lens);
                          }}
                        >
                          Add to Quote
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Lenses;
