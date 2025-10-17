import { useState, useRef, useEffect, useCallback } from "react";
import { useDebounce } from 'use-debounce';
import { Menu, X, ShoppingCart, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { gear, cameras, lenses, lighting } from "@/data/products";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{
    id: string;
    name: string;
    brand: string;
    category: string;
    link: string;
  }>>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const [debouncedSearchTerm] = useDebounce(searchQuery, 300);

  // Search function
  const searchProducts = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const searchTerm = query.toLowerCase();
      
      // Search across all product categories
      const allProducts = [
        ...cameras.map(p => ({ ...p, category: 'Cameras', link: `/cameras/${p.id}` })),
        ...lenses.map(p => ({ ...p, category: 'Lenses', link: `/lenses/${p.id}` })),
        ...lighting.map(p => ({ ...p, category: 'Lighting', link: `/lighting/${p.id}` })),
        ...gear.map(p => ({ ...p, category: 'Gear', link: `/gear/${p.id}` }))
      ];

      const matchedProducts = allProducts
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        )
        .slice(0, 5); // Limit to 5 results for the dropdown

      setSearchResults(matchedProducts);
      setIsSearching(false);
    }, 200);
  }, []);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Trigger search when debounced search term changes
  useEffect(() => {
    searchProducts(debouncedSearchTerm);
  }, [debouncedSearchTerm, searchProducts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchResults([]);
      setIsSearchFocused(false);
    }
  };

  const handleResultClick = (item: { link: string; id: string; route: string }) => {
    // Extract the base route (e.g., 'cameras' from '/cameras/1')
    const baseRoute = item.route || item.link.split('/')[1];
    // Navigate to the category page with the product ID as a hash and search query in state
    navigate(`/${baseRoute}#${item.id}`, { 
      state: { search: searchQuery } 
    });
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Cambroos
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/cameras" className="text-foreground hover:text-primary transition-colors">
                Cameras
              </Link>
              <Link to="/lenses" className="text-foreground hover:text-primary transition-colors">
                Lenses
              </Link>
              <Link to="/lighting" className="text-foreground hover:text-primary transition-colors">
                Lighting
              </Link>
              <Link to="/gear" className="text-foreground hover:text-primary transition-colors">
                Gear
              </Link>
              <a href="#studio" className="text-foreground hover:text-primary transition-colors">
                Studio
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 w-48 focus:w-96 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                />
                {isSearching && (
                  <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                )}
              </form>

              {/* Search results dropdown */}
              {isSearchFocused && searchQuery && (
                <div className="absolute z-50 mt-1 w-full bg-popover text-popover-foreground rounded-md shadow-lg border border-border">
                  {isSearching ? (
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      <Loader2 className="h-5 w-5 mx-auto mb-2 animate-spin" />
                      <p>Searching...</p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <>
                      <div className="max-h-96 overflow-y-auto">
                        {searchResults.map((item) => (
                          <div
                            key={`${item.category}-${item.id}`}
                            className="p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer border-b border-border last:border-b-0"
                            onClick={() => handleResultClick({
                              ...item,
                              route: item.category.toLowerCase(),
                              id: item.id.toString()
                            })}
                          >
                            <div className="flex items-center">
                              <div className="ml-3">
                                <p className="text-sm font-medium">{item.name}</p>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <span>{item.brand}</span>
                                  <span className="mx-1">•</span>
                                  <span className="capitalize">{item.category.toLowerCase()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 text-center border-t border-border">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full text-sm"
                          onClick={() => {
                            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                            setIsSearchFocused(false);
                          }}
                        >
                          View all results for "{searchQuery}"
                        </Button>
                      </div>
                    </>
                  ) : searchQuery ? (
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      No results found for "{searchQuery}"
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
            <Link
              to="/cameras"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cameras
            </Link>
            <Link
              to="/lenses"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Lenses
            </Link>
            <Link
              to="/lighting"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Lighting
            </Link>
            <Link
              to="/gear"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gear
            </Link>
            <a
              href="#studio"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Studio
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <Link
              to="/cart"
              className="block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full" onClick={() => setIsOpen(false)}>Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
