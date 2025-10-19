import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";
import Cameras from "./pages/Cameras";
import Lenses from "./pages/Lenses";
import Lighting from "./pages/Lighting";
import Gear from "./pages/Gear";
import Production from "./pages/Production";
import Drones from "./pages/Drones";
import CartPage from "./pages/CartPage";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cameras" element={<Cameras />} />
              <Route path="/lenses" element={<Lenses />} />
              <Route path="/lighting" element={<Lighting />} />
              <Route path="/gear" element={<Gear />} />
              <Route path="/production" element={<Production />} />
              <Route path="/drones" element={<Drones />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/search" element={<SearchResults />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
