import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useSearchHighlight(id: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const location = useLocation();
  const elementId = window.location.hash.substring(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if this is the element we want to highlight
    const shouldHighlight = elementId === id || 
      (location.state?.search && 
       element.textContent?.toLowerCase().includes(location.state.search.toLowerCase()));

    if (shouldHighlight) {
      setIsHighlighted(true);
      
      // Scroll to the element with an offset for the header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Remove highlight after 3 seconds
      const timer = setTimeout(() => {
        setIsHighlighted(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      setIsHighlighted(false);
    }
  }, [id, elementId, location.state]);

  return { ref, isHighlighted };
}
