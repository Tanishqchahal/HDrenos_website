import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  id: string;
}

const services: Service[] = [
  {
    title: "Custom Home Renovations",
    description: "Complete home transformation services tailored to your vision and lifestyle needs.",
    image: "/services/custom-home.jpg",
    link: "#custom-home",
    id: "custom-home"
  },
  {
    title: "Kitchen Renovations",
    description: "Modern kitchen designs with premium materials and expert craftsmanship.",
    image: "/services/kitchen.jpg",
    link: "#kitchen",
    id: "kitchen"
  },
  {
    title: "Bathroom Renovations",
    description: "Luxury bathroom upgrades that combine style with functionality.",
    image: "/services/bathroom.jpg",
    link: "#bathroom",
    id: "bathroom"
  },
  {
    title: "Custom Builds",
    description: "From concept to completion, we bring your dream home to life.",
    image: "/services/custom-builds.jpg",
    link: "#custom-builds",
    id: "custom-builds"
  },
  {
    title: "Home Additions",
    description: "Expand your living space with seamlessly integrated home additions.",
    image: "/services/additions.jpg",
    link: "#additions",
    id: "additions"
  },
  {
    title: "Commercial Renovations",
    description: "Professional renovations for businesses and commercial spaces.",
    image: "/services/commercial.jpg",
    link: "#commercial",
    id: "commercial"
  }
];

const MotionLink = motion(Link);

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000] // Cubic bezier for smooth animation
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Contracting Services
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            As the leading provider of Burlington's home renovation services, we have a team of highly-experienced 
            designers and contractors committed to providing only the highest quality craftsmanship and services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <MotionLink 
              key={index}
              to={`/services/${service.id}`}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] block"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with enhanced animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff0022] transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                  <motion.div
                    className="transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 text-[#ff0022]" />
                  </motion.div>
                </div>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 