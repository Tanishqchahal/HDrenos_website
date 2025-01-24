import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
    <div className="relative h-[100svh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image with overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-4">
            <div className="w-full max-w-3xl mx-auto">
              <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 
                leading-tight text-white animate-fadeIn text-center">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl 
                leading-relaxed mb-8 animate-fadeIn mx-auto text-center">
                {slide.description}
              </p>
              <Link to="/contact">
                <button className="bg-[#ff0022] text-white px-8 py-3 rounded-md text-base font-medium
                  hover:bg-[#cc001b] transition-all duration-200 animate-fadeIn mx-auto block">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 
            rounded-full text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 
            rounded-full text-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;