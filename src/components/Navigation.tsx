import { useState, useRef, useEffect, useCallback } from "react";
import { useDebounce } from 'use-debounce';
import { Menu, X, ShoppingCart, Search, Loader2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { gear, cameras, lenses, lighting, drones } from "@/data/products";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
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
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { totalItems } = useCart();

  // Close products dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add scroll event listener for floating effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        ...gear.map(p => ({ ...p, category: 'Gear', link: `/gear/${p.id}` })),
        ...drones.map(p => ({ ...p, category: 'Drones', link: `/drones/${p.id}` }))
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
    const baseRoute = item.route || item.link.split('/')[1];
    navigate(`/${baseRoute}#${item.id}`, { 
      state: { search: searchQuery } 
    });
    setSearchQuery("");
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav 
        className={`relative rounded-2xl p-1.5 transition-all duration-500 transform ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl shadow-2xl border border-border/20' 
            : 'bg-background/70 backdrop-blur-lg shadow-lg border border-border/10'
        }`}
      >
        {/* Curved shape */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between h-14 px-3">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Cambroos 🇸🇬</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {/* Products Dropdown */}
              <div className="relative" ref={productsMenuRef}>
                <button 
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="absolute z-50 mt-2 w-48 bg-popover text-popover-foreground rounded-xl shadow-lg border border-border overflow-hidden">
                    <Link
                      to="/cameras"
                      className="block px-4 py-2 text-sm hover:bg-accent/50 hover:text-primary transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Cameras
                    </Link>
                    <Link
                      to="/lenses"
                      className="block px-4 py-2 text-sm hover:bg-accent/50 hover:text-primary transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Lenses
                    </Link>
                    <Link
                      to="/lighting"
                      className="block px-4 py-2 text-sm hover:bg-accent/50 hover:text-primary transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Lighting
                    </Link>
                    <Link
                      to="/drones"
                      className="block px-4 py-2 text-sm hover:bg-accent/50 hover:text-primary transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Drones
                    </Link>
                    <Link
                      to="/production"
                      className="block px-4 py-2 text-sm hover:bg-accent/50 hover:text-primary transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Production
                    </Link>
                  </div>
                )}
              </div>

              {[
                { href: "#studio", label: "Studio" },
                { href: "#about", label: "About" },
                { href: "#portfolio", label: "Portfolio" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 w-40 focus:w-64 transition-all duration-300 bg-background/50 border-border/50"
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
                  <div className="absolute z-50 mt-2 w-full bg-popover text-popover-foreground rounded-xl shadow-lg border border-border overflow-hidden">
                    {isSearching ? (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        <Loader2 className="h-5 w-5 mx-auto mb-2 animate-spin" />
                        <p>Searching...</p>
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="max-h-96 overflow-y-auto">
                        {searchResults.map((item) => (
                          <div
                            key={`${item.category}-${item.id}`}
                            className="p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer border-b border-border/50 last:border-b-0 transition-colors"
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
                      </div>
                    ) : searchQuery ? (
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        No results found for "{searchQuery}"
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Cart */}
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Link to="/cart" className="relative p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20 mt-2 pt-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-sm font-medium text-foreground/80">Products</div>
              <Link
                to="/cameras"
                className="block pl-6 py-2 text-sm text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Cameras
              </Link>
              <Link
                to="/lenses"
                className="block pl-6 py-2 text-sm text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Lenses
              </Link>
              <Link
                to="/gear"
                className="block pl-6 py-2 text-sm text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Gear
              </Link>
              <Link
                to="/lighting"
                className="block pl-6 py-2 text-sm text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Lighting
              </Link>
              <a
                href="#studio"
                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Studio
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-accent/50 hover:text-primary transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;