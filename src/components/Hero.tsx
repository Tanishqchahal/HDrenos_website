import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: '/hero-1.jpg',
    title: 'Transform Your Space',
    description: 'Expert renovation services that turn your dream home into reality',
  },
  {
    image: '/hero-2.jpg',
    title: 'Quality Craftsmanship',
    description: 'Premium materials and skilled artisans for exceptional results',
  },
  {
    image: '/hero-3.jpg',
    title: 'Modern Solutions',
    description: 'Innovative designs meeting contemporary living standards',
  },
  {
    image: '/hero-4.jpg',
    title: 'Complete Home Makeover',
    description: 'From concept to completion, we handle every detail',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fadeIn">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl animate-fadeIn">
              {slide.description}
            </p>
            <button className="mt-8 px-8 py-3 bg-[#ff0022] text-white rounded-md hover:bg-[#cc001b] transition-all duration-200 text-lg font-medium animate-fadeIn">
              Get Started
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;