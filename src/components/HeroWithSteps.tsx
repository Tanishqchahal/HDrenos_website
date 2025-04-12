import { FormInput, Paintbrush, Trophy, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroWithSteps = () => {
  // Steps section data
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const steps = [
    {
      icon: <FormInput className="w-16 h-16 text-white" />,
      number: 1,
      title: "Fill In The Form",
      description: "Fill in the form online and our team will contact you back shortly."
    },
    {
      icon: <Paintbrush className="w-16 h-16 text-white" />,
      number: 2,
      title: "We Renovate Your Home",
      description: "Our experienced team comes into your home and begins working on your brand new space."
    },
    {
      icon: <Trophy className="w-16 h-16 text-white" />,
      number: 3,
      title: "Experience Luxury",
      description: "We leave your space impeccable and welcome you to the luxurious space you've always dreamed of."
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[100svh] w-full overflow-hidden">
        {/* Single hero image with overlay - extending gradient down to blend with steps */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <img
          src="hero/hero-1.jpg"
          alt="Transform Your Space"
          className="h-full w-full object-cover"
        />
        
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-4">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 
              leading-tight text-white animate-fadeIn text-center">
              Transform Your Space
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl 
              leading-relaxed mb-8 animate-fadeIn mx-auto text-center">
              Expert renovation services that turn your dream home into reality
            </p>
            <Link to="/contact">
              <button className="bg-[#ff0022] text-white px-10 py-4 rounded-md text-lg font-semibold
                hover:bg-[#cc001b] transition-all duration-200 animate-fadeIn mx-auto block
                hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]">
                BOOK AN APPOINTMENT
              </button>
            </Link>
          </div>
        </div>
        
        {/* Arrow indicating to scroll down to steps */}
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ y: -10, opacity: 0.6 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            y: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.2 
            },
            opacity: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1.2 
            }
          }}
        >
          <ChevronRight className="w-10 h-10 text-white transform rotate-90" />
        </motion.div>
      </div>

      {/* Steps Section - Seamlessly connected with a gradient */}
      <div className="bg-black">
        <div className="py-20 px-4 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              3 Simple Steps To Elevate Your House Living Experience
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Ready to bring a breath of fresh air into your space? All it takes is these 3 easy steps!
            </p>
          </motion.div>

          {/* Steps Container */}
          <motion.div 
            className="grid md:grid-cols-3 gap-12 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center group"
                variants={itemVariants}
              >
                {/* Icon Container */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-24 h-24 rounded-full bg-[#ff0022]/10 flex items-center justify-center mb-4 
                      group-hover:bg-[#ff0022]/20 transition-all duration-300"
                    whileHover={{ 
                      boxShadow: "0 0 30px rgba(255,0,34,0.2)",
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#ff0022] flex items-center justify-center text-white font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3, type: "spring" }}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff0022] transition-colors duration-300"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  {step.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button 
              className="bg-[#ff0022] hover:bg-[#cc001b] text-white px-8 py-4 rounded-md text-lg font-semibold 
                transition-colors duration-300 hover:shadow-[0_0_30px_rgba(255,0,34,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
              BOOK AN APPOINTMENT
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithSteps; 