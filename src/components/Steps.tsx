import { FormInput, Paintbrush, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Steps = () => {
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
            BOOK AN APPOINTMENT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;