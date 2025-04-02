import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "about/about-basement.jpg",
      alt: "Finished basement renovation",
    },
    {
      src: "about/about-kitchen.jpg",
      alt: "Modern kitchen design",
    },
    {
      src: "about/about-bathroom.jpg",
      alt: "Luxury bathroom renovation",
    },
  ];

  // Auto-advance slideshow
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

  const features = [
    {
      title: "Fully Licensed & Insured",
      description:
        "All personnel involved in your project are fully licensed and insured for your peace of mind.",
    },
    {
      title: "Transparent Process",
      description:
        "We handle everything from project management to design collaboration with complete transparency.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white 
                transition-all opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white 
                transition-all opacity-0 group-hover:opacity-100 duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${
                      index === currentImage
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Floating stats box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute 
                -bottom-8 right-2 
                w-[calc(80%-1rem)] 
                md:-bottom-10 md:-right-10 md:w-72
                bg-[#ff0022] p-3 md:p-6 rounded-lg shadow-2xl
                transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-white">
                <div className="text-3xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-[11px] md:text-sm opacity-90 font-medium">
                  Years of Excellence in Home Renovation
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What You Should Know About Us
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              At Home of Detailed Renovations, we pride ourselves on exceptional
              customer service and expertise in home renovations. Our dedicated
              team transforms your spaces into beautiful, functional areas that
              reflect your style. Trust us to bring your dream home to life with
              quality craftsmanship.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-start space-x-6"
                >
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ff0022]/10 flex items-center justify-center
                    transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <Check className="w-7 h-7 text-[#ff0022]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ff0022] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
