import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gear, cameras, lenses, lighting } from "@/data/products";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Array<{
    id: string;
    name: string;
    brand: string;
    category: string;
    price: number;
    imageUrl?: string;
    link: string;
  }>>([]);

  // Get search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const searchTerm = query.toLowerCase();
      
      // Search across all product categories
      const allProducts = [
        ...cameras.map(p => ({
          ...p,
          category: 'Cameras',
          link: `/cameras/${p.id}`,
          price: p.dailyRate || 0,
          route: 'cameras'
        })),
        ...lenses.map(p => ({
          ...p,
          category: 'Lenses',
          link: `/lenses/${p.id}`,
          price: p.dailyRate || 0,
          route: 'lenses'
        })),
        ...lighting.map(p => ({
          ...p,
          category: 'Lighting',
          link: `/lighting/${p.id}`,
          price: p.dailyRate || 0,
          route: 'lighting'
        })),
        ...gear.map(p => ({
          ...p,
          category: 'Gear',
          link: `/gear/${p.id}`,
          price: p.dailyRate || 0,
          route: 'gear'
        }))
      ];

      const matchedProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );

      setResults(matchedProducts);
      setIsSearching(false);
    }, 200);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleResultClick = (item: any) => {
    // Navigate to the category page with the product ID as a hash
    navigate(`/${item.route}#${item.id}`, { state: { search: searchQuery } });
    setSearchQuery("");
    setResults([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-8">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search cameras, lenses, lighting, and more..."
            className="pl-10 text-lg py-6"
            value={searchQuery}
            onChange={(e) => {
              const query = e.target.value;
              setSearchQuery(query);
              navigate(`/search${query ? `?q=${encodeURIComponent(query)}` : ''}`, { replace: true });
            }}
            autoFocus
          />
          <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
            Search
          </Button>
        </form>
      </div>

      {searchQuery && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{searchQuery}"
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item) => (
              <Card key={`${item.category}-${item.id}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                {item.imageUrl && (
                  <div className="aspect-video bg-gray-100 overflow-hidden">
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
                    <span className="text-sm text-muted-foreground">{item.category}</span>
                  </div>
                  <p className="text-muted-foreground">{item.brand}</p>
                  <p className="font-bold">${item.price.toFixed(2)}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      handleResultClick(item);
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
