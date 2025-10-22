import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
}

export const ImageWithFallback = ({ src, alt, className }: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return <Skeleton className={`${className} h-48 w-48`} />;
  }

  return <img src={src} alt={alt} className={className} onError={handleError} />;
};