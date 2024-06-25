import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadImageProps {
  className?: string;
  src: string;
  alt: string;
}

interface LazyLoadImageProps {
  className?: string;
  src: string;
  alt: string;
}

const LazyLoadImage: React.FC<LazyLoadImageProps> = ({
  className,
  src,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad();
    }
  }, []);

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImageHeight(
        (imgRef.current.naturalHeight / imgRef.current.naturalWidth) *
          imgRef.current.width
      );
      setIsLoaded(true);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl ${className}`}
      ref={ref}
      style={{ height: imageHeight }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-200 ${
          isLoaded ? "hidden" : "block"
        }`}
      ></div>
      {inView && (
        <img
          ref={imgRef}
          className={`absolute top-0 left-0 w-full h-auto object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={(e) => console.error(`Image failed to load: ${src}`, e)}
        />
      )}
    </div>
  );
};

export default LazyLoadImage;
