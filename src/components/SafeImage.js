import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.webp',
  skeletonClassName,
  ...props 
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      setImgSrc(src);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setImgSrc(fallbackSrc);
    };
  };

  return () => {
    img.onload = null;
    img.onerror = null;
  };
}, [src, fallbackSrc]);

  return (
    <div className="relative">
      {isLoading && (
        <div className={`absolute inset-0 animate-pulse bg-gray-200 ${skeletonClassName}`} />
      )}
      <img
        src={imgSrc}
        alt={alt}
        {...props}
        className={`${props.className || ''} ${!isLoading ? 'opacity-100' : 'opacity-0'}`}`
        style={{ transition: 'opacity 300ms ease-out' }}
      />
    </div>
  );
}

SafeImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  skeletonClassName: PropTypes.string,
};