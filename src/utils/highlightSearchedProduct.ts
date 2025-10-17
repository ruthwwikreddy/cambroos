import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useHighlightSearchedProduct = (productId: string) => {
  const location = useLocation();
  const productRef = useRef<HTMLDivElement>(null);
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search');
  const shouldHighlight = searchQuery && productId === searchParams.get('highlight');

  useEffect(() => {
    if (shouldHighlight && productRef.current) {
      // Scroll to the product
      productRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      // Add highlight effect
      productRef.current.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
      
      // Remove highlight after 3 seconds
      const timer = setTimeout(() => {
        if (productRef.current) {
          productRef.current.classList.remove('ring-2', 'ring-primary', 'ring-offset-2');
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [shouldHighlight]);

  return { ref: productRef, isHighlighted: shouldHighlight };
};

export const getSearchHighlightId = (searchQuery: string, productName: string) => {
  return searchQuery && productName.toLowerCase().includes(searchQuery.toLowerCase())
    ? `product-${productName.toLowerCase().replace(/\s+/g, '-')}`
    : undefined;
};
