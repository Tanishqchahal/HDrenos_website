import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    description:
      "Complete renovation of a dated kitchen into a modern, open-concept space with premium finishes and smart home integration.",
    image: "/services/kitchen/kitchen-4.jpeg",
    features: ["Custom cabinetry", "Quartz countertops", "Smart appliances", "LED lighting"],
    client: "Johnson Family",
    year: "2023",
  },
  {
    id: 2,
    title: "Luxury Bathroom Remodel",
    description:
      "Full bathroom renovation featuring spa-inspired design elements with high-end materials and water-saving fixtures.",
    image: "/services/bathroom/bathroom-4.jpeg",
    features: ["Heated floors", "Walk-in shower", "Freestanding tub", "Custom tile work"],
    client: "Williams Residence",
    year: "2022",
  },
  {
    id: 3,
    title: "Basement Entertainment Space",
    description:
      "Transformation of an unfinished basement into a multi-functional entertainment area with home theater and wet bar.",
    image: "/services/basement/basement-4.jpeg",
    features: ["Home theater", "Custom wet bar", "Game area", "Climate control"],
    client: "Parker Family",
    year: "2023",
  },
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextProject();
      }
    }, 7000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === currentProject) return;
    setIsAnimating(true);
    setCurrentProject(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Projects
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore our featured renovation projects showcasing our commitment to quality, 
            attention to detail, and innovative design solutions.
          </p>
        </motion.div>

        {/* Projects Slideshow */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white"
              >
                <motion.h3 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {projects[currentProject].title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {projects[currentProject].description}
                </motion.p>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {projects[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#ff0022] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p className="font-medium">{projects[currentProject].client}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Year</p>
                    <p className="font-medium">{projects[currentProject].year}</p>
                  </div>
                  
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#ff0022]/90 rounded-full text-white
              transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#ff0022]/90 rounded-full text-white
              transition-all duration-300 z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Project Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? "bg-[#ff0022] w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
