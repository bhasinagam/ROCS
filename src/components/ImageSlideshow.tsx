import React, { useState, useEffect } from 'react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    alt: "University Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80",
    alt: "Modern Library"
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80",
    alt: "Campus Architecture"
  }
];

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <img
          key={image.url}
          src={image.url}
          alt={image.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  );
}