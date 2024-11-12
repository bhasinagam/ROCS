import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://res.cloudinary.com/quote-muj/image/upload/q_20:444/v1638549918/maxresdefault_ci3lv2.jpg",
  "https://pahaldesign.com/wp-content/uploads/2023/05/muj-1.png"
  /* Add more images if needed */
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Logo Placement */}
      <div className="absolute top-4 left-4 md:left-8 lg:left-12">
        <img
          src="/mujlogo.png"
          alt="Manipal University Jaipur Logo"
          className="h-10 md:h-14 lg:h-16"
        />
      </div>
      <div className="absolute top-4 right-4 md:right-8 lg:right-12">
        <img
          src="/acmindia.png"
          alt="ACM Logo"
          className="h-10 md:h-14 lg:h-16"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-xl md:max-w-3xl">
          <img
            src="/mujacm.png"
            alt="MUJ ACM Logo"
            className="h-40 md:h-56 lg:h-64 mx-auto mb-8 md:mb-12"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            ACM ROCS 2024
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8">
            Research Opportunities in Computer Science
          </p>
          <div className="flex justify-center gap-4">
            <a target='_blank' href='https://in.explara.com/e/research-opportunities-in-computer-science-at-manipal-university-jaipur'>
              <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm md:text-base">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
